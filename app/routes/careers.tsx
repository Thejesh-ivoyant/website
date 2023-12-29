import { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";

import Footer from "~/common-components/footer";
import { MetaFunction, Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Why_Join_Us from "~/components/careers/section-2/why-join-us";
import JobCards from "~/components/careers/section-3/job-cards";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { careersQuery } from "~/graphql/queries";
import JoinUsCardContainer from "~/components/careers/section-4/join-us-card-container";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/common-components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Mobile App Development" },
    {
      property: "og:title",
      content: "Services Page",
    },
    {
      name: "description",
      content: "Ivoyant Services section describing all services offered",
    },
  ];
};

async function fetchData(endpoint: string) {
  try {
    const response = await fetch(strapiUrl + endpoint);
    console.log("fetttttttttc response", response);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const jsonData = await response.json();
    return jsonData.data?.attributes;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  const jsonParsed = await fetchGraphQL(careersQuery);
  const componentRes = await fetchData(
    "/api/career?populate=s4_cards.bgImage,s2_whyJoinUs.bgImage"
  );

  const JobDesc =
    jsonParsed?.data?.career?.data?.attributes?.job_descriptions?.data?.map(
      (item: any) => ({
        id: item.id, // Add this line to capture the job ID
        job_id: item.attributes.job_id,
        Title: item.attributes.Title,
        location: item.attributes.location,
      })
    );

  const JoinUsCard = componentRes.s2_whyJoinUs.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    bgImage: item.bgImage.data?.attributes.url,
  }));
  const DescriptionCard = componentRes.s4_cards.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    bgImage: item.bgImage.data?.attributes.url,
  }));
  // console.warn("jooobs",JobDesc);
  // console.warn("jooobs2222",JobDesc[0].Title);

  const {
    heroTitle,
    heroDescription,
    s2_title,
    s2_description,
    s3_title,
    s3_description,
    s3_email,
  } = jsonParsed.data?.career.data?.attributes;

  return {
    heroImage:
      jsonParsed.data?.career.data?.attributes.heroImage.data?.attributes.url,
    heroTitle,
    heroDescription,
    s2_title,
    s2_description,
    s3_title,
    s3_description,
    s3_email,
    JoinUsCard: JoinUsCard,
    DescriptionCard: DescriptionCard,
    JobDesc: JobDesc,
  };
}

const Careers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await loader();

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {loading ? (
        <LoadingTest />
      ) : (
        <div>
        
            <Hero />
       
          <Why_Join_Us />
          <JobCards />
          <JoinUsCardContainer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Careers;
