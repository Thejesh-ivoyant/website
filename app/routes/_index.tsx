import React, { useEffect, useState } from "react";

import AboutCardContainer from "../components/Homepage/section-2/about-card-container";
import Sidebar from "~/common-components/sidebar";
import Nav from "~/common-components/nav";
import Section4 from "~/components/Homepage/section-4/clients";
import Section6 from "~/components/Homepage/section-6/partners";

import Section5 from "~/components/Homepage/section-5/industry";

import Services from "~/components/Homepage/section-3/services";
import Consultation from "~/components/Homepage/section-7/consultation";
import Technology from "~/components/Homepage/section-8/technology";
import { LoaderFunction } from "@remix-run/node";
import BlogsContainer from "~/components/Homepage/section-10/blog-container";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import ContactUs from "~/components/Homepage/contact-us/contactUs";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import Footer from "~/common-components/footer";
import Hero from "~/components/Homepage/section-1/hero";

// The URL of the API endpoint

export const meta = () => {
  return [
    { title: "Ivoyant Systems" },
    { name: "Software", content: "Welcome to Ivoyant" },
  ];
};

const HomePage = () => {
  const strapiUrl = "http://localhost:1337";

  const [imageUrl, setImageUrl] = useState("");

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}
      <div className="video">
        <Hero />
      </div>
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
    </div>
  );
};

export default HomePage;
