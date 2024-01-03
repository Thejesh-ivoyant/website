// Index.tsx
import { Suspense, useEffect, useState } from "react";
import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import IBlogMedia from "../interfaces/IBlogMedia";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { whitepaperQuery } from "~/graphql/queries";
import WhitePaperCardContainer from "~/components/Resources/whitepapers/whitepaper-container";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/common-components/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Whitepaper" },
    {
      property: "og:title",
      content: "Whitepaper Page",
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

    

    return defer({ 
      heroBgImageURl:jsonParsed.data?.attributes.heroImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      whitePaperData: whitePaperData,
    });

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Index = () => {
 
  const data = useLoaderData<typeof loader>();


  return (
    <>
    <Suspense fallback={<LoadingTest />}>
  <Await resolve={data.heroBgImageURl}>
 
          <Hero/>
          
        
          <WhitePaperCardContainer />
      
          <Consultation />
          <Outlet />
          </Await>
      </Suspense>
    </>

      
  );
};

export default Index;
