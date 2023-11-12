import React, { useEffect, useState, Suspense } from "react";
import LoadingComponent from "~/common-components/loading";
import { strapiUrl } from "~/utils/urls";

const AboutCardContainer = React.lazy(() => import("../components/Homepage/section-2/about-card-container"));
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
const Hero = React.lazy(() => import("~/components/Homepage/section-1/hero"));
export async function loader() {
  try {
    const response = await fetch(`${strapiUrl}/api/contact-uses?populate=%2A`);
    const data = await response.json();
    const imageUrl = data.data[0]?.attributes.bgImage.data[0]?.attributes.url || '';
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\COMTACT US"+ imageUrl+"is the hero datattttttttt");
    return {
      contactUsImage: imageUrl,
    };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return {
      contactUsImage: '', // Handle the error gracefully, possibly with a default value.
    };
  }
}
const App = () => {
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}
      <div className="video">
        <Suspense fallback={<LoadingComponent />}>
          <Hero />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingComponent />}>
        <AboutCardContainer />
        <Services />
        <Section4 />
        <Section5 />
        <Section6 />
        <Consultation />
        <Technology />
        <Testimonials />
        <BlogsContainer />
        <Why_Choose_Us />
        <Faq />
        <ContactUs />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
