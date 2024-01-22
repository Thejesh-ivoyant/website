import React, { Suspense } from "react";
import { Await, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";
import { topBlogQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { fetchData } from "~/utils/fetchdata";
import LoadingTest from "~/common-components/loading-test";
import { LinksFunction, LoaderFunctionArgs, defer } from "@remix-run/node";
import ServicesStyle from '~/styles/Services.css'

export const links: LinksFunction = () => [
  {rel:"stylesheet", href:ServicesStyle}
];
import Hero from "~/common-components/Hero";

const ServiceContainer = React.lazy(
  () =>
    import(
      "~/components/services/section-2/service-description-container"
    )
);
const ProjectPortfolio = React.lazy(
  () => import("~/components/services/section-3/project-portfolio")
);
const IndustryFocus = React.lazy(
  () => import("~/components/services/section-4/industry-focus")
);
const Phases = React.lazy(
  () => import("~/components/services/section-5/phases")
);
const ServiceCardContainer = React.lazy(
  () => import("~/components/services/section-6/service-card-container")
);
const Technologies = React.lazy(
  () => import("~/components/services/section-7/technologies")
);
const Consultation = React.lazy(
  () => import("~/components/Homepage/consultation")
);
const Footer = React.lazy(() => import("~/common-components/footer"));

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant |  Service" },
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
export async function loader({ params }: LoaderFunctionArgs) {

  const slugToServiceMap: Record<string, string> = {
    "mobiledev": "s-mad",
    "ui-ux": "s-ui-ux",
    "apiintegration": "s-api-integration",
    "cloudmigration": "s-cloud-migration",
    "customapplication": "s-custom-application",
    "dataintegration": "s-data-integration",
    "lowcode-nocode": "s-low-code-no-code",
    "devops": "s-dev-op",
    "websitedev": "s-website-development",
  };

  const service = slugToServiceMap[`${params.slug}`];


  const [res, keyComponentRes, phasesComponentRes, techComponentRes, serviceComponentRes, industryComponentRes,blogGql] = await Promise.all([
    fetch(strapiUrl + `/api/${service}?populate=%2A`),
    fetchData(`/api/${service}/?populate=s2_keyPoints.keyPointsImage`),
    fetchData(`/api/${service}/?populate=s5_phasesOfDevelopment.s5_phasesImage`),
    fetchData(`/api/${service}/?populate=s7_techIcons.s7_techIcon`),
    fetchData(`/api/${service}/?populate=s6_serviceCard.s6_serviceCardImage`),
    fetchData(`/api/${service}/?populate=s4_industryFocus.s4_IndustryFocusImage`),
    fetchGraphQL(topBlogQuery),  
  ]);

  let jsonParsed = await res.json();

  const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    date: item.attributes.date,
    maxReadTime: item.attributes.maxReadTime,
    bannerImage: {
      name: item.attributes.bannerImage.data?.attributes.name ?? "",
      url: item.attributes.bannerImage.data?.attributes.url ?? "",
    },
    author: {
      name: item.attributes.author.data?.attributes.name,
      profileSummary: item.attributes.author.data?.attributes.profileSummary,
    },
    topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
      category: {
       name:item.attributes.category.data?.attributes.name
      
      }
  }));
  const IndustryFocus = industryComponentRes.s4_industryFocus.map((item: any) => ({
    id: item.id,
    s4_industryFocusSubTitle: item.s4_industryFocusSubTitle,
    s4_industryFocusDescription: item.s4_industryFocusDescription,
    s4_industryFocusImage: item.s4_IndustryFocusImage.data?.attributes.url,
  }));
  const PhasesList = phasesComponentRes.s5_phasesOfDevelopment.map((item: any) => ({
    id: item.id,
    s5_phasesTitle: item.s5_phasesTitle,
    s5_phasesDescription: item.s5_phasesDescription,
    s5_phasesImage: item.s5_phasesImage.data?.attributes.url,
  }));
  const KeyPoints = keyComponentRes.s2_keyPoints.map((item: any) => ({
    id: item.id,
    keyPoints: item.keyPoints,
    keyPointsImage: item.keyPointsImage.data?.attributes.url,
  }));
  const ServicesCard = serviceComponentRes.s6_serviceCard.map((item: any) => ({
    id: item.id,
    s6_serviceCardTitle: item.s6_serviceCardTitle,
    s6_serviceCardDescription: item.s6_serviceCardDescription,
    s6_serviceCardImage:
      item.s6_serviceCardImage.data?.attributes.formats.medium.url,
  }));
  const Technologies = techComponentRes.s7_techIcons.map((item: any) => ({
    id: item.id,
    s7_techIcon: item.s7_techIcon.data?.attributes.url,
    s7_techIconName: item.s7_techIconName,
  }));

  const {
    heroTitle,
    heroDescription,
    s2_Title,
    s2_Description,
    s3_countryCount,
    s3_projectDelieverdCount,
    s3_TotalProjectCount,
    s4_industryFocusTitle,
    s5_title,
    s6_serviceTitle,
    s6_serviceSummary,
    s7_techTitle,
  } = jsonParsed.data?.attributes;

  return defer({
    heroBgImageURl: jsonParsed.data?.attributes.heroImage.data?.attributes.url,
    heroTitle,
    heroDescription,
    s2_Title,
    s2_Description,
    s3_countryCount,
    s3_projectDelieverdCount,
    s3_TotalProjectCount,
    s4_industryFocusTitle,
    s5_title,
    s6_serviceTitle,
    s6_serviceSummary,
    s7_techTitle,
    PhasesList: PhasesList,
    KeyPoints: KeyPoints,
    IndustryFocus: IndustryFocus,
    ServicesCard: ServicesCard,
    Technologies: Technologies,
    blogData: blogData,
  });
}

const Service = () => {
  const data = useLoaderData<typeof loader>() as any;
    return (
    <>
      <Suspense fallback={<LoadingTest />}>
    <Await resolve={data.IndustryFocus}>
   
            <Hero />
      
          <ServiceContainer />
          {/* <ProjectPortfolio /> */}
        <IndustryFocus/>
          {/* <Phases />
          <ServiceCardContainer /> */}
          {/* <Technologies /> */}
          {/* <Consultation />
          <BlogPostsContainer /> */}
          <Outlet />
        </Await>
      </Suspense>
    </>
  );
};

export default Service;
