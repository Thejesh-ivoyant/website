import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Section2 from "~/components/industries/section2";
import Section3 from "~/components/industries/section3";
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
export async function loader() {
  const res = await fetch( strapiUrl+"/api/healthcare/?populate=%2A")
  let jsonParsed = await res.json();
  return {
    heroBgImageURl : jsonParsed.data.attributes.heroBgImage.data.attributes.formats.medium.url,
    heroTitle: jsonParsed.data.attributes.heroTitle,
    section2Title: jsonParsed.data.attributes.section_2_title,
    section2Image: jsonParsed.data.attributes.section_2_image.data.attributes.url,
    section2Desc : jsonParsed.data.attributes.section_2_description,
    section3Title :jsonParsed.data.attributes.section_3_title,
    section3Desc : jsonParsed.data.attributes.section_3_description,
    section3Tags : jsonParsed.data.attributes.section_3_tags,
    section3Image : jsonParsed.data.attributes.section_3_image.data.attributes.formats.medium.url
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Outlet />
    </>
  );
}