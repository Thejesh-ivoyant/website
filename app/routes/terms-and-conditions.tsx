import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";
import Terms from "~/components/policy-terms-cookies/terms_and_conditions";
import LoadingTest from "~/common-components/loading-test";
import { Suspense } from "react";

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
 const url = strapiUrl +`/api/terms?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
    const componentRes = jsonParsed.data[0]?.attributes;
  
 
     const confidentialityPoints = componentRes.confidentialityPoints?.map((item: any) => ({
       id: item.id,
       description: item.description,
     }));
 
       
  const {
    heroTitle,
   heroDescription,
   last_reviewed,
   overview,
   generic,
   disclaimer,
   confidentialityParagraph1,
   confidentialityParagraph2,
   relationships,
   warranty,
   limitation,
  
 
   } = jsonParsed.data[0]?.attributes;
 
   return defer({
    heroImage:jsonParsed.data[0]?.attributes.heroImage.data?.attributes.url,
    heroTitle,
    heroDescription,
    last_reviewed,
    overview,
    generic,
    disclaimer,
    confidentialityParagraph1,
    confidentialityParagraph2,
    relationships,
    warranty,
    limitation,
    confidentialityPoints:confidentialityPoints,
   
   });
       
  
}
catch (error:any) {

  console.error(`Error fetching data hggfrom ${url}: ${error.message}`);
}

}

const Index = () => {
  const data= useLoaderData() as any;
 
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
       <Await resolve={data.heroImage}>
  
          <PTCHero/>
        <Terms/>
        <Consultation/>
          <Outlet />
        
      </Await>
      </Suspense>

      </>
  );
};

export default Index;
