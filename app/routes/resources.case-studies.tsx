import { Await, useLoaderData } from "@remix-run/react";
import { case_study_home, case_study_paginated, categories, tagsQuery } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { defer } from "@remix-run/node";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/components/case-study/Hero";
import { Container } from "~/components/case-study/Search-containter";
import { fetchData } from "~/utils/fetchdata";
import { Daum } from "~/interfaces/CategoriesType";

export async function loader() {
  const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
    "limit",
    "sort",
    "title",
    "category"
  ]);
  const interpolatedQuery = dynamicQuery(3, "createdAt:asc",'','');

  const [data, lists, tagslist, categoryList] = await Promise.all([
    await fetchGraphQL(case_study_home),
    await fetchGraphQL(interpolatedQuery),
    await fetchGraphQL(tagsQuery),
    await fetchGraphQL(categories)
  ]);
  const tagsData = tagslist?.data?.topicTags?.data as Daum[]
  const categoryListData = categoryList?.data?.categories.data as Daum[]

  const tags = tagsData.map((daum) => ({
    value: daum.attributes.name,
    label: daum.attributes.name,
  }));
  const categoriesList = categoryListData.map((daum) => ({
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
            <Container data={lists} tags={tags} categories={categoriesList} />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default Index;
