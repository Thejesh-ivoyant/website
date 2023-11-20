import { defer, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
import ContactUs from "~/components/Homepage/contact-us/contactUs";
import AboutCardContainer from "~/components/Homepage/section-2/about-card-container";
import Section4 from "~/components/Homepage/section-4/clients";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import MissionCard from "~/components/about-us/mission";
import { strapiUrl } from "~/utils/urls";

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
      throw new Error(`Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    return jsonData.data.attributes;
  } catch (error: any ) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  try {
    const jsonParsed = await fetchData("/api/healthcare/?populate=%2A");
    const response = await fetch(`${strapiUrl}/api/contact-uses?populate=%2A`);
    const data = await response.json();

      const firstImageUrl = data.data[0]?.attributes.bgImage.data[0]?.attributes.formats.large.url || '';
      const secondImageUrl = data.data[0]?.attributes.bgImage.data[1]?.attributes.formats.large.url || '';

    
    return defer({
        heroBgImageURl: jsonParsed.heroBgImage.data.attributes.formats.large.url,
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
      <AboutCardContainer />
      <MissionCard />
      <Section4 />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}