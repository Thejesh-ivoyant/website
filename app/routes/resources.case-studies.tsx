import { Await, useLoaderData } from "@remix-run/react";
import { case_study_home, case_study_paginated } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { defer } from "@remix-run/node";
import { Suspense } from "react";
import LoadingTest from "~/common-components/loading-test";
import Hero from "~/components/case-study/Hero";

export async function loader() {
  const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
    "limit",
    "sort",
  ]);
  const interpolatedQuery = dynamicQuery(1, "createdAt:asc");

  const [data, lists] = await Promise.all([
    await fetchGraphQL(case_study_home),
    await fetchGraphQL(interpolatedQuery),
  ]);

  return defer({
    data,
    lists,
  });
}

const Index = () => {
  const { data, lists } = useLoaderData<typeof loader>();
  //   "data":{"caseStudyHome":{"data":{"attributes":{"heroTitle"
  const attributes = data?.data?.caseStudyHome?.data?.attributes;

  return (
    <Suspense fallback={<LoadingTest />}>
      <Await resolve={lists}>
        {(lists) => (
          <>
            <Hero
              heroBgImageUrl={attributes.heroBgImage?.data?.attributes?.url}
              heroTitle={attributes.heroTitle}
              heroDescription={attributes.heroDescription}
            />
            
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default Index;
