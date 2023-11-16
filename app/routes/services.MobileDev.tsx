import React, { useEffect, useState, Suspense } from "react";
import IndustryFocus from "~/components/S-MobileAppDev/section-4/industry-focus";
import Phases from "~/components/S-MobileAppDev/section-5/phases";
// Create a loading component for suspense fallback
const ProjectPortfolio = React.lazy(() => import("~/components/S-MobileAppDev/section-3/project-portfolio"));
const LoadingComponent = React.lazy(() => import("~/common-components/loading"));

const Sidebar = React.lazy(() => import("~/common-components/sidebar"));
const Nav = React.lazy(() => import("~/common-components/nav"));
const Section4 = React.lazy(() => import("~/components/Homepage/section-4/clients"));
const Section6 = React.lazy(() => import("~/components/Homepage/section-6/partners"));
const Section5 = React.lazy(() => import("~/components/Homepage/section-5/industry"));
const Services = React.lazy(() => import("~/components/Homepage/section-3/services"));
const Consultation = React.lazy(() => import("~/components/Homepage/section-7/consultation"));
const Technology = React.lazy(() => import("~/components/Homepage/section-8/technology"));
const BlogsContainer = React.lazy(() => import("~/components/Homepage/section-10/blog-container"));
const Testimonials = React.lazy(() => import("~/components/Homepage/section-9/testimonials"));
const ContactUs = React.lazy(() => import("~/components/Homepage/contact-us/contactUs"));
const Why_Choose_Us = React.lazy(() => import("~/components/Homepage/section-11/why-choose-us"));
const Faq = React.lazy(() => import("~/components/Homepage/section-12/faq"));
const Footer = React.lazy(() => import("~/common-components/footer"));
const Hero = React.lazy(() => import("~/components/S-MobileAppDev/section-1/hero"));
import { strapiUrl } from "~/utils/urls";
import ServiceContainer from "../components/S-MobileAppDev/section-2/service-description-container";
import ServiceCardContainer from "~/components/S-MobileAppDev/section-6/service-card-container";
import { Outlet } from "@remix-run/react";

export async function loader() {
  const res = await fetch( strapiUrl+"/api/s-mad?populate=%2A")
  const componentRes = await fetch( strapiUrl+"/api/s-mad/?populate=s2_keyPoints.keyPointsImage,s5_phasesOfDevelopment.s5_phasesImage,s7_techIcons.s7_techIcon,s6_serviceCard.s6_serviceCardImage,s4_industryFocus.s4_IndustryFocusImage")
  let jsonParsed = await res.json();
  let jsonParsed2 = await componentRes.json();
  return {
    heroImage: jsonParsed.data.attributes.heroImage.data.attributes.formats.large.url,
    heroTitle: jsonParsed.data.attributes.heroTitle,
    heroDescription: jsonParsed.data.attributes.heroDescription,
    s2_Title : jsonParsed.data.attributes.s2_Title,
    s2_Description :jsonParsed.data.attributes.s2_Description,
    s3_countryCount : jsonParsed.data.attributes.s3_countryCount,
    s3_projectDelieverdCount : jsonParsed.data.attributes.s3_projectDelieverdCount,
    s3_TotalProjectCount : jsonParsed.data.attributes.s3_TotalProjectCount,
    s4_industryFocusTitle: jsonParsed.data.attributes.s4_industryFocusTitle,
    s5_title: jsonParsed.data.attributes.s5_title,
    s6_serviceTitle : jsonParsed.data.attributes.s6_serviceTitle,
    s6_serviceSummary :jsonParsed.data.attributes.s6_serviceSummary,
    s7_techTitle : jsonParsed.data.attributes.s7_techTitle,
    
  };
}
const MobDev = () => {
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}
      <div className="video">
          <Hero/>
      </div>

        <ServiceContainer />
        <ProjectPortfolio/>
        <IndustryFocus />
        <Phases />
        <ServiceCardContainer />
        <Technology />
        <Consultation />
        <BlogsContainer />
        <Footer />
<Outlet/>
    </div>
  );
};

export default MobDev;
