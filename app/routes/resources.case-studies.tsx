import { Await, MetaFunction, useLoaderData } from "@remix-run/react";
import { case_study_home, case_study_paginated, categories, tagsQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { LinksFunction, defer } from "@remix-run/node";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/common-components/Resources-hero";
import { Container } from "~/components/Resources/case-study/caseStudyContainer";
import { Daum } from "~/interfaces/CategoriesType";
import Consultation from "~/components/Homepage/consultation";
import ResourcesStyle from '~/styles/resources.css'
export const links: LinksFunction = () => [
  {rel:"stylesheet", href:ResourcesStyle}
];
const limit = 3
const offset = 0
export async function loader() {
  const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
    "offset",
    "limit",
    "sort",
    "title",
    "category"
  ]);
  const interpolatedQuery = dynamicQuery(offset, limit, "createdAt:asc",'','');
  const [data, lists, tagslist, categoryList] = await Promise.all([
    await fetchGraphQL(case_study_home),
    await fetchGraphQL(interpolatedQuery),
    await fetchGraphQL(tagsQuery),
    await fetchGraphQL(categories)
  ]);
  const tagsData = tagslist?.data?.topicTags?.data as Daum[]
  const categoryListData = categoryList?.data?.categories.data as Daum[]
  const tags = tagsData?.map((daum) => ({
    value: daum.attributes.name,
    label: daum.attributes.name,
  }));
  const categoriesList = categoryListData?.map((daum) => ({
    value: daum.attributes.name,
    label: daum.attributes.name,
  }));
  return defer(
    {
      data,
      lists,
      tags,
      categoriesList,
    },
    {
      headers: { "Cache-Control": "public, s-maxage=3600" },
    }
  );
}
export const meta: MetaFunction<typeof loader> = ({
  data,
}) => {
  const attributes = data?.data.data?.caseStudyHome?.data?.attributes;
  return [{ title: "Ivoyant | "+attributes?.heroTitle  as string },
    {
      name: "description",
      content: data?.heroDescription as string,
    }];
};
const Index = () => {
  const { data, lists, tags, categoriesList } = useLoaderData<typeof loader>();
  const attributes = data?.data?.caseStudyHome?.data?.attributes;
  return (
    <Suspense fallback={<LoadingTest />}>
      <Await resolve={lists}>
        {(lists) => (
          <>
            <Hero
              heroBgImageUrl={attributes?.heroBgImage?.data?.attributes?.url}
              heroTitle={attributes?.heroTitle}
              heroDescription={attributes?.heroDescription}
            />
            <Container data={lists} tags={tags} categories={categoriesList} initLimit={limit} initOffset={offset}/>
            <Consultation/>
          </>
        )}
      </Await>
    </Suspense>
  );
};
export default Index;
