import { defer, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
import AboutCardContainer from "~/components/Homepage/section-2/about-card-container";
import Section4 from "~/components/Homepage/section-4/clients";
import Services from "~/components/Homepage/section-5/industry";
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
      <Services />
      <Footer />
    </>
  );
}