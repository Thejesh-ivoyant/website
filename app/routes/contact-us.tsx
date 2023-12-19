import { defer, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
import Section4 from "~/components/Homepage/section-4/clients";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import MissionCard from "~/components/about-us/mission";
import Faq from "~/components/products/faq";
import { strapiUrl } from "~/utils/urls";
import DescriptionCard from "~/components/about-us/description-card";
import AboutCard from "~/components/about-us/about-desc";

import GoogleMapComponent from "~/components/contact-us/GoogleMaps";
import ContactCard from "~/components/contact-us/contact-card";
import ContactUs from "~/common-components/contactUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | contact us" },
    {
      property: "og:title",
      content: "About Ivoyant",
    },
    {
      name: "description",
      content: "Your achievement reflects our performance",
    },
  ];
};



export default function Index() {
  

  return (
    <>
    <div className="mt-16">
    <ContactUs/>

    </div>
<div className="flex flex-row justify-center">
  <div className="flex w-full">
      <ContactCard/>
  </div>
  {/* <div className="flex w-1/2">
    <GoogleMapComponent/>
  </div> */}
</div>
   
      <Footer />
    </>
  );
}