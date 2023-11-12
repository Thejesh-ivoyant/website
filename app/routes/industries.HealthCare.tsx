import { useLoaderData } from "@remix-run/react";
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
export async function indexLoader() {
  const response = await fetch( strapiUrl + "/api/healthcare/?populate=%2A" );
  const jsonres = await response.json();
  return {
    jsonres,
  };
}
export default function Index() {
  const data = useLoaderData<typeof indexLoader>();

  return (
    <>
      <Hero />
    </>
  );
}
