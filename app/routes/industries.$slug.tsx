import { LoaderFunctionArgs, defer, json } from "@remix-run/node";
import { Await, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Hero from "~/common-components/Hero";
import LoadingTest from "~/common-components/loading-test";
import Section2 from "~/components/industries/section2";
import Section3 from "~/components/industries/section3";
import Section4 from "~/components/industries/section4";
import Section5 from "~/components/industries/section5";
import Section6 from "~/components/industries/section6";
import { fetchData } from "~/utils/fetchdata";
import ProductStyle from "~/styles/Industry.css";
import { LinksFunction } from "@remix-run/node";
import WhyChooseUs from "~/components/Homepage/why-choose-us";
import { Technologies } from "~/components/products/technologies";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: ProductStyle },
];
export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const industry = `${params.slug}`;
    const [jsonParsed, section7PairsJson, section5Parsed, techParsed] =
      await Promise.all([
        fetchData(`/api/${industry}/?populate=%2A`),
        fetchData(`/api/${industry}/?populate=pairs.pic`),
        fetchData(`/api/${industry}/?populate=process.ornament`),
        fetchData(`/api/${industry}/?populate=technologies.pic`),
      ]);
    const section7Pairs = section7PairsJson.pairs;
    const technologies = techParsed.technologies;
    const PhasesList = section5Parsed.process.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      ornament: item.ornament.data?.attributes.url,
    }));
    return defer({
      heroBgImageURl: jsonParsed.heroBgImage.data?.attributes.formats.large.url,
      heroTitle: jsonParsed.heroTitle,
      heroDescription: jsonParsed.heroDescription,
      section2Title: jsonParsed.section_2_title,
      section2Image: jsonParsed.section_2_image.data?.attributes.url,
      section2Desc: jsonParsed.section_2_description,
      section3Title: jsonParsed.section_3_title,
      section3Desc: jsonParsed.section_3_description,
      section3Tags: jsonParsed.section_3_tags,
      section3Image:
        jsonParsed.section_3_image.data?.attributes.formats.large.url,
      section4Image:
        jsonParsed.section_4_image.data?.attributes.formats.large.url,
      section4Title: jsonParsed.section_4_title,
      servicesList: jsonParsed.servicesList,
      section7Title: jsonParsed.section_7_title,
      section7Desc: jsonParsed.section_7_description,
      section7Pairs: section7Pairs,
      PhasesList: PhasesList,
      techTitle: techParsed.techTitle,
      techList: technologies,
    });
  } catch (error) {
    return json({});
  }
}
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.heroTitle as string },
    {
      name: "description",
      content: data?.heroDescription,
    },
  ];
};
const Index = () => {
  const data = useLoaderData<typeof loader>() as any;
  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data.jsonParsed}>
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Technologies title={data?.techTitle} pairs={data?.techList}/>
          <WhyChooseUs
            pairs={data?.section7Pairs}
            title={data?.section7Title as string}
            description={data?.section7Desc}
          />
        </Await>
      </Suspense>
    </>
  );
};
export default Index;
