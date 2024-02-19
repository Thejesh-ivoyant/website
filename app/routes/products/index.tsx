import Tabs from "~/components/products/Tabs";
import { useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { productsQuery } from "~/graphql/queries";
import Pairs from "~/components/products/pairs";
import Hero from "~/components/products/Hero";
import ContactUs from "~/common-components/contactUs";
import { Technologies } from "~/components/products/technologies";
import { Attributes } from "~/interfaces/ProductsPage";
import ProductStyle from '~/styles/Products.css'
import { LinksFunction } from "@remix-run/node";
import Consultation from "~/components/Homepage/consultation";

export const links: LinksFunction = () => [
  {rel:"stylesheet", href:ProductStyle}
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let { searchParams } = new URL(request.url);
  let name = searchParams.get("name");
  const productsData =  await fetchGraphQL(productsQuery);
  const attributes = productsData.data?.product?.data?.attributes as Attributes
  const carousel = attributes?.carousel || [];
  const tabContents =  attributes?.TabContents || []
  const sortedCarousels = [...carousel];

  const sortedTabContents = [...tabContents];

  const index = sortedCarousels.findIndex((item) => item.name.toLowerCase().trim() === name?.toLowerCase().trim());
  const tabIndex =  sortedTabContents.findIndex((item) => item.caption?.toLowerCase().trim() === name?.toLowerCase().trim())
  if (name && index !== -1 ) {
    const matchingItem = sortedCarousels.splice(index, 1)[0]; 
    sortedCarousels.unshift(matchingItem); 
  }
  if (name && tabIndex !== -1 ) {
    const matchingItem = sortedTabContents.splice(index, 1)[0]; 
    sortedTabContents.unshift(matchingItem); 
  }
  return { productsResponse : productsData, 
  sortedCarousels,
  sortedTabContents
};
};


export default function Index() {
  const data = useLoaderData() as any
  const attributes = data?.productsResponse?.data?.product?.data?.attributes as Attributes;
  
  return (
    <>
      <Hero carousel={data?.sortedCarousels}/>
      <Consultation/>
      <Tabs tabContents={data?.sortedTabContents}/>
      <Pairs/>
      <Technologies title={attributes.techTitle} pairs={attributes.technologies} />
      <ContactUs/>
    </>
  );
}
