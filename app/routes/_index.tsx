import { Suspense, useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
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

import Footer from "~/common-components/footer";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";
import { Await, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { homeQuery, topBlogQuery } from "~/graphql/queries";
import { ActionFunction } from "@remix-run/node";
import ErrorBoundary from "~/components/ErrorBoundary";
import ContactUs from "~/common-components/contactUs";
import LoadingTest from "~/common-components/loading-test";
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
    const homeGql = await fetchGraphQL(homeQuery)
    const blogGql = await fetchGraphQL(topBlogQuery)

   
      
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
       
        },
      }));
 
  
    return {
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

export let action: ActionFunction = async ({ request }) => {
  try {
    let formData: FormData = await request.formData();
    let {_action, ...values}= Object.fromEntries(formData);
    if(_action === "contact"){

      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/52d6bea6-d664-4d5c-a3e9-81a21ba79d3b', {
        method: 'POST',
        body: formData,
      });
      console.log('Form Data:', values);
      console.warn("/////////////////////////////// contact" ,JSON.stringify(response.json))

      if (response.ok) {
        console.warn('Form submitted successfully');
        return null;
      } else {
        console.warn('Form submission failed');
        throw new Error('Form submission failed');
      }
    }
    if(_action === "hire"){
      
    const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/28d8b167-abb4-44db-b4a3-19758d09a360',{
      method: 'POST',
      body: formData,
    });
    console.log('Form Data:', values);
console.warn("//.................// hire" ,response.json)
    if (response.ok) {
      console.warn('Form submitted successfully');
      return null;
    } else {
      console.warn('Form submission failed');
      throw new Error('Form submission failed');
    }
    }

  } catch (error) {
    console.warn('Error during form submission error :', error);
    throw error; 
  }
};

const App = () => {
  const data = useLoaderData<typeof loader>();

  return (
  
    <ErrorBoundary>
     <>
     <Suspense fallback={<LoadingTest />}>
    <Await resolve={data}>
 
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
          <ContactUs />
          <Footer />
          <Outlet />
          </Await>
          </Suspense>

    
    </> 

    </ErrorBoundary>
  
  );
};


export default App;
