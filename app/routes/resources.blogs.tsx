// Index.tsx
import { useEffect, useState } from "react";
import { Suspense } from "react";
import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { LinksFunction, LoaderFunctionArgs, defer } from "@remix-run/node";
import IBlogMedia from "../interfaces/IBlogMedia";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery } from "~/graphql/queries";
import BlogCardContainer from "~/components/Resources/blogs/blogCard-container";
import Hero from "~/common-components/Hero";
import LoadingTest from "~/common-components/loading-test";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Blogs" },
    {
      property: "og:title",
      content: "Blogs Page",
    },
    {
      name: "description",
      content: "Ivoyant Blogs ",
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
    const blogGql = await fetchGraphQL(blogQuery);

    const res = await fetch(strapiUrl + "/api/resource?populate=%2A");
    let jsonParsed = await res.json();

    const componentRes = await fetchData("/api/blogs?populate=%2A");
    if (!componentRes || !Array.isArray(componentRes)) {
      throw new Error("Invalid API response structure");
    }
    const { heroTitle, heroDescription, s2_title } =
      jsonParsed.data?.attributes ?? "";

    const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      description1: item.attributes.description1,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url: item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar:
          item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
    }));
    console.log("compsres loader data ", blogData);

    console.log("loader data ", blogGql.data?.blogs.data);
    return defer({
      heroImage: jsonParsed.data?.attributes.heroImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      blogData: blogData,
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
      <Await resolve={data.heroImage}>
 
      
          <Hero />
         
          <BlogCardContainer />

          <Consultation />
          <Outlet />
     </Await>
      </Suspense>
    </>
     
  );
};

export default Index;
