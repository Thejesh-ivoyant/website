import { Suspense } from "react";
import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Why_Join_Us from "~/components/careers/section-2/why-join-us";
import JobCards from "~/components/careers/section-3/job-cards";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { careersQuery, departmentQuery, expQuery, jobrolesQuery, locationsQuery } from "~/graphql/queries";
import JoinUsCardContainer from "~/components/careers/section-4/join-us-card-container";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/common-components/Hero";
import { LinksFunction } from "@remix-run/node";
import CompanyStyle from '~/styles/company.css'

export const links: LinksFunction = () => [
  {rel:"stylesheet", href:CompanyStyle}
];

export const meta: MetaFunction = ({data}: { data: any }) => {
  return [
    { title: data.heroTitle },
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

async function fetchData(endpoint: string) {
  try {
    const response = await fetch(strapiUrl + endpoint);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const jsonData = await response.json();
    return jsonData.data?.attributes;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error; // Re-throw the error to be caught by the caller
  }
}

export async function loader() {
  const componentRes = await fetchData(
    "/api/career?populate=s4_cards.bgImage,s2_whyJoinUs.bgImage"
  );

  const [jsonParsed,locationsList, JobRolesList, DepList, ExperienceList] = await Promise.all([
    await fetchGraphQL(careersQuery),
    await fetchGraphQL(locationsQuery),
    await fetchGraphQL(jobrolesQuery),
    await fetchGraphQL(departmentQuery),
    await fetchGraphQL(expQuery)
  ]);
  const LocData = locationsList?.data?.locations?.data
  const RolesData = JobRolesList?.data?.jobRoles.data 
  const DepData = DepList?.data?.departments.data 
  const ExpData = ExperienceList?.data?.experiences.data

  const LocList = LocData.map((item:any) => ({
    value: item.attributes.location,
    label: item.attributes.location,
  }));
  const RolesList = RolesData.map((item:any) => ({
    value: item.attributes.role,
    label: item.attributes.role,
  }));
  const DepartmentList = DepData.map((item:any) => ({
    value: item.attributes.DepartmentName,
    label: item.attributes.DepartmentName,
  }));

  const ExpList = ExpData.map((item:any) => ({
    value: item.attributes.experienceRange,
    label: item.attributes.experienceRange,
  }));
 

  const JobDesc =
    jsonParsed?.data?.career?.data?.attributes?.job_descriptions?.data?.map(
      (item: any) => ({
        id: item.id, // Add this line to capture the job ID
        job_id: item.attributes.job_id,
        Title: item.attributes.Title,
        location: item.attributes.location.data.attributes.location,
        Role: item.attributes.job_role.data.attributes.role,
        ExperienceRange: item.attributes.experience.data.attributes.experienceRange,
        DepartmentName: item.attributes.department.data.attributes.DepartmentName,
      })
    );

  const JoinUsCard = componentRes.s2_whyJoinUs.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    bgImage: item.bgImage.data?.attributes.url,
  }));

  const DescriptionCard = componentRes.s4_cards.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    bgImage: item.bgImage.data?.attributes.url,
  }));
  

  const {
    heroTitle,
    heroDescription,
    s2_title,
    s2_description,
    s3_title,
    s3_description,
    s3_email,
  } = jsonParsed.data?.career.data?.attributes;

  return defer ({
    heroBgImageURl:
      jsonParsed.data?.career.data?.attributes.heroImage.data?.attributes.url,
    heroTitle,
    heroDescription,
    s2_title,
    s2_description,
    s3_title,
    s3_description,
    s3_email,
    JoinUsCard: JoinUsCard,
    DescriptionCard: DescriptionCard,
    JobDesc: JobDesc,
    LocList,
    RolesList,
    DepartmentList,
    ExpList,
  });
}

const Careers = () => {
  const data = useLoaderData<typeof loader>() as any;

  return (
  <>
   <Suspense fallback={<LoadingTest />}>
      <Await resolve={data.heroBgImageURl}>
 
   <Hero />
       
       <Why_Join_Us />
   
       <JobCards />
       <JoinUsCardContainer />
       <Outlet />
       </Await>
       </Suspense>
  </>
           
      
    
  );
};

export default Careers;
