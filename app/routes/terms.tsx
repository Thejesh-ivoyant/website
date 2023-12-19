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
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";
import Terms from "~/components/policy-terms-cookies/terms_and_conditions";

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
 const url = strapiUrl +`/api/privacy-policies?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
    const componentRes = jsonParsed.data[0]?.attributes;
  
 
     const CTP_Points = componentRes.CTP_Points?.map((item: any) => ({
       id: item.id,
       description: item.description,
     }));
 
     const CTP_List = componentRes.CTP_List?.map((item: any) => ({
       id: item.id,
       name: item.name,
       description: item.description,
     }));
 
     const collection_of_info = componentRes.collection_of_info?.map((item: any) => ({
       id: item.id,
       name: item.name,
       description: item.description,
     }));
     const user_info_handling = componentRes.user_info_handling?.map((item: any) => ({
       id: item.id,
       name: item.name,
       description: item.description,
     }));
 
       
  const {
   
   heroTitle,
   heroDescription,
   last_reviewed,
   s2_Title,
   s2_Description,
   committed_to_protect_title,
   access_and_use,
   solutions,
   contacts,
   marketing,
   share_personal_info,
   info_and_security,
   retention,
   contact_us,
   rights,
   changes_to_privacy,
 
   } = jsonParsed.data[0]?.attributes;
 
   return {
 
     collection_of_info: collection_of_info,
     CTP_List: CTP_List,
     CTP_Points: CTP_Points,
     user_info_handling: user_info_handling,
     heroTitle,
     heroDescription,
     last_reviewed,
     s2_Title,
     s2_Description,
     committed_to_protect_title,
     access_and_use,
     solutions,
     contacts,
     marketing,
     share_personal_info,
     info_and_security,
     retention,
     contact_us,
     rights,
     changes_to_privacy,
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
        <Terms/>
        <Consultation/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
