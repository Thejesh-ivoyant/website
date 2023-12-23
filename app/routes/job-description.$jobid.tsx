import LoadingComponent from "~/common-components/loading";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import JobDescription from "~/components/careers/job-description";
import { LoaderFunctionArgs } from "@remix-run/node";
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



export async function loader({   params, }: LoaderFunctionArgs){
  // const productsData =  await fetchGraphQLWithParameter(productsQuery,`${params.jobid}`);
 const url =  strapiUrl +`/api/job-descriptions/${params.jobid}?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
       
    const componentRes = jsonParsed.data?.attributes;
    console.warn("/////////////",componentRes.s1_points[0].description)
   console.warn("//////////////",JSON.stringify(componentRes))
   

    const s1_points = componentRes.s1_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }));
    const s2_points = componentRes.s2_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }));
    const s3_points = componentRes.s3_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }));

      
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
    s1_points: s1_points || '',
    s2_points: s2_points || '',
    s3_points: s3_points || '',
    title: Title || '',
    location: location || '',
    date: date || '',
    job_id: job_id || '',
    s1_title: s1_title || '',
    s2_title: s2_title || '',
    s3_title: s3_title || '',
    summary: summary || '',
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
        <LoadingTest />
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
