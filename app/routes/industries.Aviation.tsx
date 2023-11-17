import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Section2 from "~/components/industries/section2";
import Section3 from "~/components/industries/section3";
import Section4 from "~/components/industries/section4";
import Section5 from "~/components/industries/section5";
import Section6 from "~/components/industries/section6";
import Section7 from "~/components/industries/section7";
import { strapiUrl } from "~/utils/urls";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Healthcare" },
    {
      property: "og:title",
      content: "Healthcare Page",
    },
    {
      name: "description",
      content: "Ivoyant industries section describing healthcare services",
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
    const jsonParsed = await fetchData("/api/aviation/?populate=%2A");


    return {
      heroBgImageURl: jsonParsed.heroBgImage.data.attributes.formats.large.url,
      heroTitle: jsonParsed.heroTitle,
    };
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
      <Outlet />
    </>
  );
}