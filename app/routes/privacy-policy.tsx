import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import PrivacyPolicy from "~/components/policy-terms-cookies/privacy-policy";
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";
import LoadingTest from "~/common-components/loading-test";
import { Suspense } from "react";
import CompanyStyle from '~/styles/company.css'
import { LinksFunction } from "@remix-run/node";
export const links: LinksFunction = () => [
  {rel:"stylesheet", href:CompanyStyle}
];
export const meta: MetaFunction = ({data}: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.heroTitle}` },
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
   visitor,
   share_personal_info,
   info_and_security,
   retention,
   contact_us,
   rights,
   changes_to_privacy,
   } = jsonParsed.data[0]?.attributes;
   return defer({
    heroImage: jsonParsed.data[0]?.attributes.heroImage.data?.attributes.url,
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
     visitor,
     share_personal_info,
     info_and_security,
     retention,
     contact_us,
     rights,
     changes_to_privacy,
   });
}
catch (error:any) {
  console.error(`Error fetching data hggfrom ${url}: ${error.message}`);
}
}
const Index = () => {
  const data = useLoaderData<typeof loader>() as any; 
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
       <Await resolve={data.heroImage}>
          <PTCHero/>
        <PrivacyPolicy/>
        <Consultation/>
          <Outlet />
      </Await>
      </Suspense>
      </>
  );
};
export default Index;
