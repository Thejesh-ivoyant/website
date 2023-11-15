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

export async function loader() {
  try {
    const response = await fetch(`${strapiUrl}/api/s-mad-s1s?populate=%2A`);
    const data = await response.json();
    const HeroDescription=data.data[0]?.attributes || '';
    const HeroTitle= data.data[0]?.attributes.HeroTitle || '';
    const imageUrl = data.data[0]?.attributes.HeroImage.data[0].attributes.url || '';

    return {
      HeroImage: imageUrl,
      HeroTitle: HeroTitle,
      HeroDescription : HeroDescription,
    };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return {
      contactUsImage: '', // Handle the error gracefully, possibly with a default value.
    };
  }
}
const MobDev = () => {
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}
      <div className="video">
        <Suspense fallback={<LoadingComponent />}>
          <Hero/>
        </Suspense>
      </div>
      <Suspense fallback={<LoadingComponent />}>
        <ServiceContainer />
        <ProjectPortfolio/>
   <IndustryFocus />
        <Phases />
        <ServiceCardContainer />
        <Technology />
        <Consultation />
      
      
        <BlogsContainer />

        <Footer />
      </Suspense>
    </div>
  );
};

export default MobDev;
