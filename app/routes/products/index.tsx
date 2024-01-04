import Tabs from "~/components/products/Tabs";
import { useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { productsQuery } from "~/graphql/queries";
import Pairs from "~/components/products/pairs";
import Section2 from "~/components/products/section2";
import Hero from "~/components/products/Hero";
import ContactUs from "~/common-components/contactUs";
import { Technologies } from "~/components/products/technologies";
import { Attributes } from "~/interfaces/ProductsPage";
import ProductStyle from '~/styles/Products.css'
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {rel:"stylesheet", href:ProductStyle}
];

export const loader = async () => {
  const productsData =  await fetchGraphQL(productsQuery);
  return { productsResponse : productsData};
};


export default function Index() {
  const data = useLoaderData() as any
  const attributes = data?.productsResponse?.data?.product?.data?.attributes as Attributes;
  const carousel = attributes?.carousel || [];
  
  return (
    <>
      <Hero carousel={carousel}/>
      <Section2 />
      <Tabs/>
      <Pairs/>
      <Technologies title={attributes.techTitle} pairs={attributes.technologies} />
      <ContactUs/>
 
    </>
  );
}
