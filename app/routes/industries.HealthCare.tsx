import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
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
  let res2 = await res.json();
  return {
    heroBgImageURl : res2.data.attributes.heroBgImage.data.attributes.formats.medium.url,
    heroTitle: res2.data.attributes.heroTitle
  };
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