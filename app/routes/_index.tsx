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
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import ContactUs from "~/components/Homepage/contact-us/contactUs";
import Footer from "~/common-components/footer";
import BlogPostsContainer from "~/components/Resources/blogPosts-container";
import { Outlet } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery, homeQuery, topBlogQuery } from "~/graphql/queries";

export async function loader() {
  try {
    const homeGql = await fetchGraphQL(homeQuery)
    const blogGql = await fetchGraphQL(topBlogQuery)

    const response = await fetch(`${strapiUrl}/api/contact-uses?populate=%2A`);
    const data = await response.json();

      const firstImageUrl = data.data[0]?.attributes.bgImage.data[0]?.attributes.url|| '';
      const secondImageUrl = data.data[0]?.attributes.bgImage.data[1]?.attributes.url || '';
      
      
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
 
    console.warn("loader data IN DEX PAGE ", blogGql.data?.blogs.data);

    return {
      hireUsImage: firstImageUrl,
      contactUsImage: secondImageUrl,
      blogData: blogData, 
      homePage: homeGql.data
    };
  } catch (error) {
    console.warn("Error fetching data from contact API:", error);
    return {
      hireUsImage: '',
      contactUsImage: '', 
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
          <BlogPostsContainer />
          <Why_Choose_Us />
          <Faq />
          <ContactUs />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default App;
