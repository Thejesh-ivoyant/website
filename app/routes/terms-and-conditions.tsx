import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/consultation";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";
import Terms from "~/components/policy-terms-cookies/terms_and_conditions";
import LoadingTest from "~/common-components/loading-test";

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
 
   return {
 
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
        <LoadingTest />
      ) : (
        <div>
          <PTCHero/>
        <Terms/>
        <Consultation/>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
