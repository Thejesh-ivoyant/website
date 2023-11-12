import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Section2 from "~/components/industries/section2";
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
    section2Desc : jsonParsed.data.attributes.section_2_description
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <Section2 />
      <Outlet />
    </>
  );
}