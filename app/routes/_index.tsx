import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import { strapiUrl } from "~/utils/urls";
import Hero from "~/components/Homepage/section-1/hero";
import AboutCardContainer from "../components/Homepage/section-2/about-card-container";
import Services from "~/components/Homepage/section-3/services";
import Section4 from "~/components/Homepage/section-4/clients";
import Section6 from "~/components/Homepage/section-6/partners";
import Section5 from "~/components/Homepage/section-5/industry";
import Consultation from "~/components/Homepage/section-7/consultation";
import Technology from "~/components/Homepage/section-8/technology";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import BlogsContainer from "~/components/Homepage/section-10/blog-container";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import ContactUs from "~/components/Homepage/contact-us/contactUs";
import Footer from "~/common-components/footer";

export async function loader() {
  try {
    const response = await fetch(`${strapiUrl}/api/contact-uses?populate=%2A`);
    const data = await response.json();
    const imageUrl =
      data.data[0]?.attributes.bgImage.data[0]?.attributes.url || "";

    return {
      contactUsImage: imageUrl,
    };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return {
      contactUsImage: "", // Handle the error gracefully, possibly with a default value.
    };
  }
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contactUsData, setContactUsData] = useState({ contactUsImage: "" });

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await loader();
        setContactUsData(data);
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
      )}
    </div>
  );
};

export default App;
