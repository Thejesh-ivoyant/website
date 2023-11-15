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
  const res = await fetch( strapiUrl+"/api/healthcare/?populate=%2A")
  let jsonParsed = await res.json();
  return {
    heroTitle: jsonParsed.data.attributes.heroTitle,
    section2Title: jsonParsed.data.attributes.section_2_title,
    section2Image: jsonParsed.data.attributes.section_2_image.data.attributes.url,
    section2Desc : jsonParsed.data.attributes.section_2_description,
    section3Title :jsonParsed.data.attributes.section_3_title,
    section3Desc : jsonParsed.data.attributes.section_3_description,
    section3Tags : jsonParsed.data.attributes.section_3_tags,
    section3Image : jsonParsed.data.attributes.section_3_image.data.attributes.formats.medium.url
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
