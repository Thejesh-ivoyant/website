import { Await, useLoaderData } from "@remix-run/react";
import { case_study_home, case_study_paginated, categories, tagsQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { defer } from "@remix-run/node";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/components/Resources/case-study/Hero";
import { Container } from "~/components/Resources/case-study/Search-containter";
import { Daum } from "~/interfaces/CategoriesType";
import Consultation from "~/components/Homepage/consultation";

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

  return defer({
    data,
    lists,
    tags,
    categoriesList
  });
}

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
