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
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";

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
    return jsonData.data.attributes;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  const res = await fetch(strapiUrl + "/api/career?populate=%2A");
  const componentRes = await fetchData(
    "/api/career/?populate=s2_whyJoinUs.image,s4_cards.image"
  );
  let jsonParsed = await res.json();
  const IndustryFocus = componentRes.s4_industryFocus.map((item: any) => ({
    id: item.id,
    s4_industryFocusSubTitle: item.s4_industryFocusSubTitle,
    s4_industryFocusDescription: item.s4_industryFocusDescription,
    s4_industryFocusImage: strapiUrl + item.s4_IndustryFocusImage.data.attributes.formats.large.url,
  }));

  const ServicesCard = componentRes.s6_serviceCard.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: strapiUrl + item.image.data.attributes.formats.medium.url,
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
  } = jsonParsed.data.attributes;
  return {
    heroImage:jsonParsed.data.attributes.heroImage.data.attributes.formats.large.url,
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
    IndustryFocus:IndustryFocus,
    ServicesCard:ServicesCard,
    Technologies,
  };
}

const Index = () => {

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
          <Why_Choose_Us />
          <Faq />
          <ServiceCardContainer/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
