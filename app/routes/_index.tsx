import React, { useEffect, useState } from "react";

import AboutCardContainer from "../components/section-2/about-card-container";
import Sidebar from "~/common-components/sidebar";
import Nav from "~/common-components/nav";
import Section4 from "~/components/section-4/clients";
import Section6 from "~/components/section-6/partners";

import Section5 from "~/components/section-5/industry";

import Services from "~/components/section-3/services";
import Consultation from "~/components/section-7/consultation";
import Technology from "~/components/section-8/technology";
import { LoaderFunction } from "@remix-run/node";
import BlogsContainer from "~/components/section-10/blog-container";
import Testimonials from "~/components/section-9/testimonials";
import ContactUs from "~/components/contact-us/contactUs";
import Why_Choose_Us from "~/components/section-11/why-choose-us";
import Faq from "~/components/section-12/faq";
import Footer from "~/components/footer";
import Hero from "~/components/section-1/hero";

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
