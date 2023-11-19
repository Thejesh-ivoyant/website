import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
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
    const section7PairsJson = await fetchData("/api/aviation/?populate=pairs.pic");
    const section5Parsed = await fetchData("/api/aviation/?populate=process.ornament");
    const techParsed = await fetchData("/api/aviation/?populate=technologies.pic")

    const section7Pairs = section7PairsJson.pairs.map((pair:typeof section7PairsJson) => ({
        id: pair.id,
        text: pair.text,
        picUrl: strapiUrl + pair.pic.data.attributes.url,
        name: pair.pic.data.attributes.name,
      }));
      const technologies = techParsed.technologies.map((pair:typeof techParsed) => ({
        id: pair.id,
        text: pair.text,
        picUrl: strapiUrl + pair.pic.data.attributes.url,
        name: pair.pic.data.attributes.name,
      }));
      const PhasesList = section5Parsed.process.map((item:any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        ornament: strapiUrl + item.ornament.data.attributes.url, // Access the nested structure
      }));

    return {
      heroBgImageURl: jsonParsed.heroBgImage.data.attributes.formats.large.url,
      heroTitle: jsonParsed.heroTitle,
      section2Title: jsonParsed.section_2_title,
      section2Desc: jsonParsed.section_2_description,
      section3Title: jsonParsed.section_3_title,
      section3Desc: jsonParsed.section_3_description,
      section3Tags: jsonParsed.section_3_tags,
      section3Image: jsonParsed.section_3_image.data.attributes.formats.large.url,
      section4Image: jsonParsed.section_4_image.data.attributes.formats.large.url,
      section4Title: jsonParsed.section_4_title,
      servicesList: jsonParsed.servicesList,
      section7Title: jsonParsed.section_7_title,
      section7Desc: jsonParsed.section_7_description,
      section7Pairs: section7Pairs,
      PhasesList: PhasesList,
      techTitle : techParsed.techTitle,
      techList : technologies
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
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
}