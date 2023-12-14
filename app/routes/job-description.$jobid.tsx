import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Hero from "~/components/S-MobileAppDev/section-1/hero";
import ProjectPortfolio from "~/components/S-MobileAppDev/section-3/project-portfolio";
import IndustryFocus from "~/components/S-MobileAppDev/section-4/industry-focus";
import Phases from "~/components/S-MobileAppDev/section-5/phases";
import ServiceCardContainer from "~/components/S-MobileAppDev/section-6/service-card-container";
import Technology from "~/components/Homepage/section-8/technology";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
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
import { LoaderFunctionArgs } from "@remix-run/node";

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



export async function loader({   params, }: LoaderFunctionArgs){

  const url= strapiUrl+`/api/job-descriptions/${params.jobid}`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
   
      
 const {
  Title,
  location,
  date,
  job_id,
  s1_title,
  s2_title, 
  s3_title, 
  summary,

  } = jsonParsed.data?.attributes;


  return {
  
  title:Title,
  location,
  date,
  job_id,
  s1_title,
  s2_title, 
  s3_title, 
  summary,

  };
}
catch (error:any) {

  console.error(`Error fetching data from ${url}: ${error.message}`);
}

}
const Index = () => {
const data= useLoaderData() as any;
console.warn(JSON.stringify(data));
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {!data ? (
        <LoadingComponent />
      ) : (
        <div>
          <JobDescription />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
