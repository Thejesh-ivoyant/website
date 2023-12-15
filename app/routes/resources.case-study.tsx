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
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Section6 from "~/components/industries/section6";
import Technologies from "~/components/S-MobileAppDev/section-7/technologies";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Faq from "~/components/Homepage/section-12/faq";
import Why_Join_Us from "~/components/careers/section-2/why-join-us";
import JobCards from "~/components/careers/section-3/job-cards";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery, careersQuery, topBlogQuery } from "~/graphql/queries";
import JobDescription from "~/components/careers/job-description";
import PrivacyPolicy from "~/components/privacy-policy";
import Section2 from "~/components/case-study/section-2";
import Section4 from "~/components/case-study/section-4";
import Section5 from "~/components/case-study/section-5";


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
  
  // const componentRes = await fetchData(
  //   "/api/career?populate=s4_cards.bgImage,s2_whyJoinUs.bgImage"
  // );


  // const JoinUsCard = componentRes.s4_cards.map((item: any) => ({
  //   id: item.id,
  //   title: item.title,
  //   description: item.description,
  //   link: item.link,
  //   bgImage: item.bgImage.data?.attributes.url,
  // }));
  // const JobDescription = componentRes.s2_whyJoinUs.map((item: any) => ({
  //   id: item.id,
  //   title: item.title,
  //   description: item.description,
  //   link: item.link,
  //   bgImage: item.bgImage.data?.attributes.url,
  // }));


  // const {
  //   heroTitle,
  //   heroDescription,
  //   s2_title,
  //   s2_description,
  //   s3_title,
  //   s3_description,
  //   s3_email,
  // } = jsonParsed.data?.career.data?.attributes;
  
  return {
    // heroImage:jsonParsed.data?.attributes.url,
    // heroTitle,
    // heroDescription,
    // s2_title,
    // s2_description,
    // s3_title,
    // s3_description,
    // s3_email,
    // JoinUsCard:JoinUsCard,
    // JobDescription:JobDescription,
  };
}

const Index = () => {

  const [loading, setLoading] = useState(true);
 

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {!loading ? (
        <LoadingComponent />
      ) : (
        <div>
        <Section2/>
        <Section4/>
        <Section5/>
        <Consultation/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;