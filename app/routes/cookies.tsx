import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Cookies from "~/components/policy-terms-cookies/cookies";
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
      content: "Cookies Page",
    },
    {
      name: "description",
      content: "Ivoyant Cookies Policy",
    },
  ];
};
export async function loader() {
  const url = strapiUrl + `/api/cookies?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
    const {
      heroTitle,
      heroDescription,
      last_reviewed,
      cookies,
      use,
      disabling,
      forms_cookies,
      third_party_cookies,
      more_info,
    } = jsonParsed.data[0]?.attributes;
    return defer({
      heroImage:jsonParsed.data[0]?.attributes.heroImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      last_reviewed,
      cookies,
      use,
      disabling,
      forms_cookies,
      third_party_cookies,
      more_info,
    });
  } catch (error: any) {
    console.error(`Error fetching data hggfrom ${url}: ${error.message}`);
  }
}
const Index = () => {
  const data = useLoaderData<typeof loader>() as any;
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
       <Await resolve={data.heroImage}>
          <PTCHero />
          <Cookies />
          <Consultation />
          <Outlet />
      </Await>
      </Suspense>
      </>
  );
};
export default Index;
