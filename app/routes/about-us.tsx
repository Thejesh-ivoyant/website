import { defer, json } from "@remix-run/node";
import { Await, Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/components/about-us/Hero";
import Footer from "~/common-components/footer";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import MissionCard from "~/components/about-us/mission";
import { strapiUrl } from "~/utils/urls";
import Faq from "~/components/about-us/faq";
import AboutCard from "~/components/about-us/about-desc";
import { fetchData } from "~/utils/fetchdata";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { aboutUsQuery } from "~/graphql/queries";
import Clients from "~/components/about-us/clients";
import React from "react";
import ContactUs from "../common-components/contactUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | About us" },
    {
      property: "og:title",
      content: "About Ivoyant",
    },
    {
      name: "description",
      content: "Your achievement reflects our performance",
    },
  ];
}
export async function loader() {
  try {
    return defer({
        aboutUsData : await fetchGraphQL(aboutUsQuery),
      })
  } catch (error:any) {
    console.error(`Error in loader: ${error.message}`);
    throw error;
  }
  
}


export default function Index() {
  const data = useLoaderData<typeof loader>();
  const aboutData = data?.aboutUsData.data?.aboutus.data.attributes 
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
      <Await resolve={data.aboutUsData}>
        <Hero />
        <AboutCard />
        <MissionCard />
        <Clients clients={aboutData.clients} title={aboutData.clientsTitle} />
        <Testimonials />
        
        <Faq faqContents={aboutData.faq} />
        <ContactUs/>
        <Footer />
      </Await>
    </Suspense>
      
    </>
  );
}