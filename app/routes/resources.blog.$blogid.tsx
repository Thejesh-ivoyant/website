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
import { fetchGraphQL, fetchGraphQLWithParameter } from "~/graphql/fetchGraphQl";
import { blogQuery, careersQuery, getAuthorIDQuery, getAuthorQuery, getBlogAuthorIDQuery, productsQuery, topBlogQuery } from "~/graphql/queries";
import JobDescription from "~/components/careers/job-description";
import BlobContent from "~/components/Resources/blogs/blob-content";
import { LoaderFunctionArgs } from "@remix-run/node";
import BlogHero from "~/components/Resources/blogs/blog-hero";

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
const blogid=`${params.blogid}`;
  const updatedAuthorGetIdQuery= getBlogAuthorIDQuery(blogid)

  const authorIdData=await fetchGraphQL(updatedAuthorGetIdQuery);
  console.warn("////////////////////// is ",authorIdData.data?.blog.data?.attributes.author.data?.id);
  const authorId=authorIdData.data?.blog.data?.attributes.author.data?.id;

  const updatedQuery = getAuthorQuery(authorId);
  const authorData =  await fetchGraphQL(updatedQuery);

  console.warn("/////////////////author url is ",authorData.data?.author.data?.attributes.avatar.data?.attributes?.url);
  const url= strapiUrl+`/api/blogs/${params.blogid}?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
   
    
 const {
  title,
  maxReadTime,
  date,
  description1,
  description2,
  description3,

  } = jsonParsed.data?.attributes;


  return {
        avatar:authorData.data?.author.data?.attributes.avatar.data?.attributes?.url,
        bannerImage: jsonParsed.data?.attributes?.bannerImage?.data?.attributes?.url,
        descriptionImage1: jsonParsed.data?.attributes?.descriptionImage1?.data?.attributes?.url,
        descriptionImage2: jsonParsed.data?.attributes?.descriptionImage2?.data?.attributes?.url, 
        descriptionImage3: jsonParsed.data?.attributes?.descriptionImage3?.data?.attributes?.url, 
        authorName: jsonParsed.data?.attributes?.author?.data?.attributes?.name,
        authorSummary: jsonParsed.data?.attributes?.author?.data?.attributes?.profileSummary,
        title,
        maxReadTime,
        date,
        description1,
        description2,
        description3,

  };
 
}
catch (error:any) {

  console.error(`Error fetching data from ${url}: ${error.message}`);
  return null;
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
          <div className="mt-20">
          <BlogHero/>
        </div>
          <BlobContent/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
