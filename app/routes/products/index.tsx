import Tabs from "~/components/products/Tabs";
import { Carousel } from "antd";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { productsQuery } from "~/graphql/queries";
import Footer from "~/common-components/footer";
import Pairs from "~/components/products/pairs";
import Section2 from "~/components/products/section2";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Homepage" },
    {
      property: "og:title",
      content: "Home Page",
    },
    {
      name: "description",
      content: "Ivoyants Homepage",
    },
  ];
};
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
      <Carousel>
      {carousel.map((item:any) => (
        <div key={item.id} className="relative h-screen text-white slit-gradient flex flex-row">
          <div className="flex flex-1 flex-col items-center w-[40rem] h-full justify-center px-6 mx-20 gap-10">
            <p className="text-haiti font-extrabold text-5xl font-montserrat italic">
              {item.title}
            </p>
            <p className="font-poppins text-[#1B0740] text-3xl font-light">
              {item.description}
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-fit h-[80%] -mr-96 mt-auto blur-bg-img">
            <img src={item.ornament?.data?.attributes?.url} alt="product-image" className="w-full h-full rounded-lg" />
          </div>
        </div>
      ))}
      </Carousel>
      <Section2 />
      <Tabs/>
      <Pairs/>
      <Footer/>
    </>
  );
}
