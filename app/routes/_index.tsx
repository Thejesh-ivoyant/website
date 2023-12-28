import { useEffect, useState } from "react";
import Hero from "~/components/Homepage/hero";
import AboutCardContainer from "../components/Homepage/about-card-container";
import Services from "~/components/Homepage/services"
import Section4 from "~/components/Homepage/clients";
import Section6 from "~/components/Homepage/partners";
import Section5 from "~/components/Homepage/industry";
import Consultation from "~/components/Homepage/consultation";
import Technology from "~/components/Homepage/technology";
import Testimonials from "~/components/Homepage/testimonials";

import Footer from "~/common-components/footer";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { homeQuery, topBlogQuery } from "~/graphql/queries";
import { ActionFunction } from "@remix-run/node";
import ErrorBoundary from "~/components/ErrorBoundary";
import ContactUs from "~/common-components/contactUs";
import LoadingTest from "~/common-components/loading-test";
import Section2 from "~/components/products/section2";
import { Attributes } from "~/interfaces/Homepage";
import WhyChooseUs from "~/components/Homepage/why-choose-us";
export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Homepage" },
    {
      property: "og:title",
      content: "Home Page",
    },
    {
      name: "description",
      content: "Ivoyants Homepage",
    },
  ];
};

export async function loader() {
  try {
    const homeGql = await fetchGraphQL(homeQuery);
    const blogGql = await fetchGraphQL(topBlogQuery);

    const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url: item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
      },
    }));

    return {
      blogData: blogData,
      homePage: homeGql.data,
    };
  } catch (error) {
    console.warn("Error fetching data from contact API:", error);
    return {
      hireUsImage: "",
      contactUsImage: "",
    };
  }
}

const App = () => {
  const data = useLoaderData<typeof loader>() as any
  const attributes = data?.homePage?.homepage?.data?.attributes as Attributes
  return (
    <>
      <Hero heroBgImage={attributes.heroBg} heroText={attributes.heroText}  heroTitle={attributes.heroTitle} heroDescription={attributes.heroDescription}/>
      <AboutCardContainer attributes={attributes} />
      <Services attributes={attributes} />
      <Section4 clients={attributes?.clients} />
      <Section5 />
      <Section6 partners={attributes?.partners}/>
      <Consultation />
      <Technology/>
      <Testimonials/>
      <BlogPostsContainer />
      <WhyChooseUs pairs={attributes.pairs} title={attributes.whychooseus} description={attributes.whychooseusDesc} />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
};

export default App;
