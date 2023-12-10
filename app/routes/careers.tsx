import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Hero from "~/components/S-MobileAppDev/section-1/hero";
import ServiceContainer from "../components/S-MobileAppDev/section-2/service-description-container";
import ProjectPortfolio from "~/components/S-MobileAppDev/section-3/project-portfolio";
import IndustryFocus from "~/components/S-MobileAppDev/section-4/industry-focus";
import Phases from "~/components/S-MobileAppDev/section-5/phases";
import ServiceCardContainer from "~/components/S-MobileAppDev/section-6/service-card-container";
import Technology from "~/components/Homepage/section-8/technology";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Section6 from "~/components/industries/section6";
import Technologies from "~/components/S-MobileAppDev/section-7/technologies";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import Why_Join_Us from "~/components/careers/section-2/why-join-us";
import JobCards from "~/components/careers/section-3/job-cards";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { CareerQuery, blogQuery, careersQuery, topBlogQuery } from "~/graphql/queries";
import JoinUsCardContainer from "~/components/careers/section-4/join-us-card-container";

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
console.log("fetttttttttc response",response);
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
  const jsonParsed = await fetchGraphQL(careersQuery)
  const componentRes = await fetchData(
    "/api/career?populate=s4_cards.bgImage,s2_whyJoinUs.bgImage"
  );

console.warn("jsonpareded i career//////////sss///",jsonParsed.data?.career.data?.attributes)


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
  console.warn("comp res i career descripy s///",DescriptionCard)

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
    heroImage:jsonParsed.data?.career.data?.attributes.heroImage.data?.attributes.url,
    heroTitle,
    heroDescription,
    s2_title,
    s2_description,
    s3_title,
    s3_description,
    s3_email,
    JoinUsCard:JoinUsCard,
    DescriptionCard:DescriptionCard,
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
        <LoadingComponent />
      ) : (
        <div>
          <div className="video">
          <Hero />
          </div>
         <Why_Join_Us />
          {/* <JobCards /> */}
          <JoinUsCardContainer/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Careers;
