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
import { topBlogQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";

import Footer from "~/common-components/footer";
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import BlogPostsContainer from "~/components/Resources/blogPosts-container";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | API Integration" },
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
    return jsonData.data?.attributes;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  const blogGql = await fetchGraphQL(topBlogQuery)
  const res = await fetch(strapiUrl + "/api/s-mad?populate=%2A");
  const componentRes = await fetchData(
    "/api/s-mad/?populate=s2_keyPoints.keyPointsImage,s5_phasesOfDevelopment.s5_phasesImage,s7_techIcons.s7_techIcon,s6_serviceCard.s6_serviceCardImage,s4_industryFocus.s4_IndustryFocusImage"
  );
  let jsonParsed = await res.json();
  const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    date: item.attributes.date,
    maxReadTime: item.attributes.maxReadTime,
    bannerImage: {
      name: item.attributes.bannerImage.data?.attributes.name ?? "",
      url:  item.attributes.bannerImage.data?.attributes.url ?? "",
    },
    author: {
      name: item.attributes.author.data?.attributes.name,
      profileSummary: item.attributes.author.data?.attributes.profileSummary,
    },
  }));
  const IndustryFocus = componentRes.s4_industryFocus.map((item: any) => ({
    id: item.id,
    s4_industryFocusSubTitle: item.s4_industryFocusSubTitle,
    s4_industryFocusDescription: item.s4_industryFocusDescription,
    s4_industryFocusImage: item.s4_IndustryFocusImage.data?.attributes.formats.large.url,
  }));
  const PhasesList = componentRes.s5_phasesOfDevelopment.map((item: any) => ({
    id: item.id,
    s5_phasesTitle: item.s5_phasesTitle,
    s5_phasesDescription: item.s5_phasesDescription,
    s5_phasesImage: item.s5_phasesImage.data?.attributes.url,
  }));
  const KeyPoints = componentRes.s2_keyPoints.map((item: any) => ({
    id: item.id,
    keyPoints: item.keyPoints,
    keyPointsImage: item.keyPointsImage.data?.attributes.url,
  }));
  const ServicesCard = componentRes.s6_serviceCard.map((item: any) => ({
    id: item.id,
    s6_serviceCardTitle: item.s6_serviceCardTitle,
    s6_serviceCardDescription: item.s6_serviceCardDescription,
    s6_serviceCardImage: item.s6_serviceCardImage.data?.attributes.formats.medium.url,
  }));
  const {
    heroTitle,
    heroDescription,
    s2_Title,
    s2_Description,
    s3_countryCount,
    s3_projectDelieverdCount,
    s3_TotalProjectCount,
    s4_industryFocusTitle,
    s5_title,
    s6_serviceTitle,
    s6_serviceSummary,
    s7_techTitle,
  } = jsonParsed.data?.attributes;
  return {
    heroImage:jsonParsed.data?.attributes.heroImage.data?.attributes.formats.large.url,
    heroTitle,
    heroDescription,
    s2_Title,
    s2_Description,
    s3_countryCount,
    s3_projectDelieverdCount,
    s3_TotalProjectCount,
    s4_industryFocusTitle,
    s5_title,
    s6_serviceTitle,
    s6_serviceSummary,
    s7_techTitle,
    PhasesList: PhasesList,
    KeyPoints:KeyPoints,
    IndustryFocus:IndustryFocus,
    ServicesCard:ServicesCard,
    blogData:blogData,
  };
}

const ApiIntegration = () => {

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
          <ServiceContainer />
          <ProjectPortfolio />
          <IndustryFocus />
          <Phases />
          <ServiceCardContainer />
          <Technology />
          <Consultation />
          <BlogPostsContainer />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default ApiIntegration;
