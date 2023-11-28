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
import BlogsContainer from "~/components/Homepage/section-10/blog-container";
import Footer from "~/common-components/footer";
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Section6 from "~/components/industries/section6";
import Technologies from "~/components/S-MobileAppDev/section-7/technologies";
import BlogPostsContainer from "~/components/Resources/blogPosts-container";

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
    const response = await fetch("http://localhost:1337" + endpoint);

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
  const res = await fetch(strapiUrl + "/api/resource?populate=%2A");
  const componentRes = await fetchData(
    "/api/posts?populate=%2A"
  );

  let jsonParsed = await res.json();

  const blogData = componentRes.data?.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    date: item.attributes.date,
    maxReadTime: item.attributes.maxReadTime,
    description1: item.attributes.description1,
    description2: item.attributes.description2,
    description3: item.attributes.description3,
    slug: item.attributes.slug,
    bannerImage: {
      name: item.attributes.bannerImage.data.attributes.name,
      url: strapiUrl + item.attributes.bannerImage.data.attributes.url,
    },
    DescriptionImage1: {
      name: item.attributes.DescriptionImage1.data.attributes.name,
      url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
    },
    descriptionImage2: {
      name: item.attributes.DescriptionImage1.data.attributes.name,
      url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
    },
    descriptionImage3: {
      name: item.attributes.DescriptionImage1.data.attributes.name,
      url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
    },
    author: {
      name: item.attributes.author.data.attributes.name,
      profileSummary: item.attributes.author.data.attributes.profileSummary,
    },
  }));

  // const {
  //   title,
  //   heroDescription,
  // } = componentRes.data?.attributes;

  return {
    title: blogData[0].title,
    blogData: blogData,
    // s2_Cards:s2_Cards,
    // s4_Cards:s4_Cards,
  };
}

const Index = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await loader();
        console.log("data fetched in resource is ", fetchedData);
        setData(fetchedData.blogData);
        console.log("blog totle is ", fetchedData.title);
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
          {/* <Hero /> */}
          </div>
          <BlogPostsContainer />
          <Consultation />
          {/* <BlogsContainer />
          <Consultation />
          <BlogsContainer /> */}
          <Footer/>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
