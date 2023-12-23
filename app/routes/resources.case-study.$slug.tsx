import { Outlet, useLoaderData } from "@remix-run/react";
import { Carousel } from "antd";
import React from "react";
import product from 'public/assets/product.png'
import Section2 from "~/components/case-study/slug/Section2";
import Section3 from "~/components/case-study/slug/Section3";
import Hero from "~/components/case-study/slug/hero";
import { productsQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import Section4 from "~/components/case-study/slug/Section4";
import { LinksFunction } from "@remix-run/node";
import Section5 from "~/components/case-study/slug/section5";
import Section6 from "~/components/case-study/slug/Section6";

export async function loader({   params }: LoaderFunctionArgs) {
    const productsData =  await fetchGraphQL(productsQuery);
    return { productsResponse : productsData};
  };
  
  
const sample = () => {
  const data = useLoaderData() as any;
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const carousel = attributes?.carousel || [];
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${''}) lightgray 50% / cover no-repeat`,
  };
  return (
    <>
        <Hero/>
        <div className="h-60 w-full"></div>
        <Section2/>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </>
  );
};

export default sample;