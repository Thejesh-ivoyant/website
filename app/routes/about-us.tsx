import { defer, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
import ContactUs from "~/components/Homepage/contactUs";
import AboutCardContainer from "~/components/Homepage/about-card-container";
import Section4 from "~/components/Homepage/section-4/clients";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import MissionCard from "~/components/about-us/mission";
import Faq from "~/components/products/faq";
import { strapiUrl } from "~/utils/urls";
import DescriptionCard from "~/components/about-us/description-card";
import AboutCard from "~/components/about-us/about-desc";

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
};
async function fetchData(endpoint:string) {
  try {
    const response = await fetch(strapiUrl + endpoint);

    if (!response.ok) {
      console.error(`Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`);
      return;
    }
    const jsonData = await response.json();
    return jsonData.data?.attributes;
  } catch (error: any ) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
  }
}

export async function loader() {
  try {
    const jsonParsed = await fetchData("/api/healthcare/?populate=%2A");
    const response = await fetch(`${strapiUrl}/api/contact-uses?populate=%2A`);
    const data = await response.json();

      const firstImageUrl = data?.data[0]?.attributes.bgImage.url || '';
      const secondImageUrl = data?.data[0]?.attributes.bgImage.url || '';

    
    return defer({
        heroBgImageURl: jsonParsed.heroBgImage.data?.attributes.formats.large.url,
        heroTitle: jsonParsed.heroTitle,
        heroDesc: jsonParsed.heroDescription,

        
      })
  } catch (error:any) {
    console.error(`Error in loader: ${error.message}`);
    throw error;
  }
  
}


export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <AboutCard />
      <MissionCard />
      <Section4 />
      <Testimonials />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}