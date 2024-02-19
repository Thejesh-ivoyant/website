import { defer } from "@remix-run/node";
import { Await, MetaFunction, useLoaderData } from "@remix-run/react";
import Hero from "~/components/about-us/Hero";
import Testimonials from "~/components/Homepage/testimonials";
import MissionCard from "~/components/about-us/mission";
import Faq from "~/components/about-us/faq";
import AboutCard from "~/components/about-us/about-desc";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { aboutUsQuery } from "~/graphql/queries";
import Clients from "~/components/about-us/clients";
import ContactUs from "../common-components/contactUs";
import AboutUsStyle from '~/styles/AboutUs.css'
import { LinksFunction } from "@remix-run/node";
export const links: LinksFunction = () => [
  {rel:"stylesheet", href:AboutUsStyle}
];
export const meta: MetaFunction = ({data}: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.aboutUsData.data?.aboutus.data.attributes.heroTitle}` },
    {
      property: "og:title",
      content: "About Ivoyant",
    },
    {
      name: "description",
      content: "Your achievement reflects our performance",
    },
  ];
}
export async function loader() {
  try {
    return defer({
        aboutUsData : await fetchGraphQL(aboutUsQuery),
      })
  } catch (error:any) {
    console.error(`Error in loader: ${error.message}`);
    throw error;
  }
}
export default function Index() {
  const data = useLoaderData<typeof loader>();
  const aboutData = data?.aboutUsData.data?.aboutus.data.attributes 
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
      <Await resolve={data.aboutUsData}>
        <Hero />
        <AboutCard  />
        <MissionCard />
        <Clients clients={aboutData.clients} title={aboutData.clientsTitle} />
        <Testimonials />
        <Faq faqContents={aboutData.faq} />
        <ContactUs/>
      </Await>
    </Suspense>
    </>
  );
}