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

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Web App Development" },
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
    return jsonData.data.attributes;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  const res = await fetch(strapiUrl + "/api/s-website-development?populate=%2A");
  const componentRes = await fetchData(
    "/api/s-website-development/?populate=s2_keyPoints.keyPointsImage,s5_phasesOfDevelopment.s5_phasesImage,s7_techIcons.s7_techIcon,s6_serviceCard.s6_serviceCardImage,s4_industryFocus.s4_IndustryFocusImage"
  );
  let jsonParsed = await res.json();

  const PhasesList = componentRes.s5_phasesOfDevelopment.map((item: any) => ({
    id: item.id,
    s5_phasesTitle: item.s5_phasesTitle,
    s5_phasesDescription: item.s5_phasesDescription,
    s5_phasesImage: strapiUrl + item.s5_phasesImage.data.attributes.url,
  }));

  return {
    heroImage:
      jsonParsed.data.attributes.heroImage.data.attributes.formats.large.url,
    heroTitle: jsonParsed.data.attributes.heroTitle,
    heroDescription: jsonParsed.data.attributes.heroDescription,
    s2_Title: jsonParsed.data.attributes.s2_Title,
    s2_Description: jsonParsed.data.attributes.s2_Description,
    s3_countryCount: jsonParsed.data.attributes.s3_countryCount,
    s3_projectDelieverdCount:
      jsonParsed.data.attributes.s3_projectDelieverdCount,
    s3_TotalProjectCount: jsonParsed.data.attributes.s3_TotalProjectCount,
    s4_industryFocusTitle: jsonParsed.data.attributes.s4_industryFocusTitle,
    s5_title: jsonParsed.data.attributes.s5_title,
    s6_serviceTitle: jsonParsed.data.attributes.s6_serviceTitle,
    s6_serviceSummary: jsonParsed.data.attributes.s6_serviceSummary,
    s7_techTitle: jsonParsed.data.attributes.s7_techTitle,
    PhasesList: PhasesList,
  };
}

const WebDev = () => {
  const webDevRoute = "services.WebDev";
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
            <Hero route={webDevRoute} />
          </div>
          <ServiceContainer />
          <ProjectPortfolio />
          <IndustryFocus />
          <Phases />
          <ServiceCardContainer />
          <Technology />
          <Consultation />
          <BlogsContainer />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default WebDev;
