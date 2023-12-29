import Tabs from "~/components/products/Tabs";
import { Carousel } from "antd";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { productsQuery } from "~/graphql/queries";
import Footer from "~/common-components/footer";
import Pairs from "~/components/products/pairs";
import Section2 from "~/components/products/section2";
import Hero from "~/components/products/Hero";

export const loader = async () => {
  const productsData =  await fetchGraphQL(productsQuery);
  return { productsResponse : productsData};
};


export default function Index() {
  const data = useLoaderData() as any
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const carousel = attributes?.carousel || [];
  
  return (
    <>
      <Hero carousel={carousel}/>
      <Section2 />
      <Tabs/>
      <Pairs/>
    </>
  );
}
