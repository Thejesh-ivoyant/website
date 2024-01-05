import { useLoaderData } from "@remix-run/react";
import Section2 from "~/components/Resources/case-study/slug/Section2";
import Section3 from "~/components/Resources/case-study/slug/Section3";
import Hero from "~/components/Resources/case-study/slug/hero";
import { case_study_query } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import Section4 from "~/components/Resources/case-study/slug/Section4";
import { LinksFunction, defer } from "@remix-run/node";
import Section5 from "~/components/Resources/case-study/slug/section5";
import Section6 from "~/components/Resources/case-study/slug/Section6";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { Features } from "~/components/Resources/case-study/slug/key-features";
import CaseStyle from '~/styles/CaseStudySlug.css'

export const links: LinksFunction = () => [
  {rel:"stylesheet", href:CaseStyle}
];

export async function loader({ params }: LoaderFunctionArgs) {
  const dynamicQuery = generateDynamicQuery(case_study_query, [
    "id",
  ]);
  const interpolatedQuery = dynamicQuery(params.slug);

  const [data] = await Promise.all([
    await fetchGraphQL(interpolatedQuery),
  ]);
  return defer({
    data,
  });
  };
  
  
const sample = () => {
  const data = useLoaderData() as any;
  
  const attributes = data?.data.data?.caseStudies?.data[0].attributes;
  
  return (
    <>
        <Hero data={attributes} />
        <div className="h-60 w-full"></div>
        <Section2 data={attributes}/>
        <Section3 data={attributes} />
        <Section4 data={attributes} />
        <Features data={attributes} />
        <Section5 data={attributes} />
        <Section6 data={attributes} />
    </>
  );
};

export default sample;