import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Hero from "~/components/S-MobileAppDev/section-1/hero";
import ServiceContainer from "../components/S-MobileAppDev/section-2/service-description-container";
import ProjectPortfolio from "~/components/S-MobileAppDev/section-3/project-portfolio";
import IndustryFocus from "~/components/S-MobileAppDev/section-4/industry-focus";
import Phases from "~/components/S-MobileAppDev/section-5/phases";
import ServiceCardContainer from "~/components/S-MobileAppDev/section-6/service-card-container";
import Technology from "~/components/Homepage/section-8/technology";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Section6 from "~/components/industries/section6";
import Technologies from "~/components/S-MobileAppDev/section-7/technologies";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import Why_Join_Us from "~/components/careers/section-2/why-join-us";
import JobCards from "~/components/careers/section-3/job-cards";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import {  blogQuery, careersQuery, topBlogQuery } from "~/graphql/queries";
import JobDescription from "~/components/careers/job-description";
import PrivacyPolicy from "~/components/policy-terms-cookies/privacy-policy";
import PrivacyHero from "~/components/policy-terms-cookies/ptc-hero";
import Cookies from "~/components/policy-terms-cookies/cookies";
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Mobile App Development" },
    {
      property: "og:title",
      content: "Services Page",
    },
    {
      name: "description",
      content: "Ivoyant Services section describing all services offered",
    },
  ];
};


export async function loader() {
 const url = strapiUrl +`/api/cookies?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
    const componentRes = jsonParsed.data[0]?.attributes;
  
       
  const {
   
   heroTitle,
   heroDescription,
   last_reviewed,
   cookies,
   use,
   disabling,
   forms_cookies,
   third_party_cookies,
   more_info,
  
   } = jsonParsed.data[0]?.attributes;
 
   return {
    heroTitle,
    heroDescription,
    last_reviewed,
    cookies,
    use,
    disabling,
    forms_cookies,
    third_party_cookies,
    more_info,
   };
       
  
}
catch (error:any) {

  console.error(`Error fetching data hggfrom ${url}: ${error.message}`);
}

}

const Index = () => {
  const data= useLoaderData() as any;
 
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {!data ? (
        <LoadingComponent />
      ) : (
        <div>
          <PTCHero/>
        <Cookies/>
        <Consultation/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
