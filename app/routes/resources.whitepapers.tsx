// Index.tsx
import { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import IBlogMedia from "../interfaces/IBlogMedia";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery, whitepaperQuery } from "~/graphql/queries";
import BlogCardContainer from "~/components/Resources/blogs/blogCard-container";
import WhitePaperCardContainer from "~/components/Resources/whitepapers/whitepaper-container";
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

    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const jsonData = await response.json();
    return jsonData.data;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error;
  }
}

export async function loader() {
  try {
    const whitepaperGql = await fetchGraphQL(whitepaperQuery)

    const res = await fetch(strapiUrl + "/api/white-paper-home?populate=%2A");
    let jsonParsed = await res.json();

   
    const {
      heroTitle,
      heroDescription,
      s2_title,
     
    } = jsonParsed.data?.attributes ?? "";


    // const blogData: IBlogMedia[] = componentRes.map((item: any) => ({
  const whitePaperData = whitepaperGql.data?.whitePapers.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      description1: item.attributes.description1,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url:  item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
    }));
    console.log("whitepaper loader data ", whitePaperData);

    

    return {
      heroBgImageURl:jsonParsed.data?.attributes.heroImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      whitePaperData: whitePaperData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Index = () => {
  const data1 =  useLoaderData<typeof loader>() as any;
  console.warn("....................data1 is.",JSON.stringify(data1));

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ blogData: IBlogMedia[] } | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await loader();
        setData(fetchedData);
        console.log("//", fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {loading ? (
        <LoadingTest />
      ) : (
        <div>
       
          <Hero/>
            {/* Render the entire data */}
        
          <WhitePaperCardContainer />
      
          <Consultation />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
