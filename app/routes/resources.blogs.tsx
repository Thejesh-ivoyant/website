import { Suspense } from "react";
import Consultation from "~/components/Homepage/consultation";
import { Await, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { LinksFunction, defer } from "@remix-run/node";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery, categories, tagsQuery } from "~/graphql/queries";
import BlogCardContainer from "~/components/Resources/blogs/blogCard-container";
import Hero from "~/common-components/Hero";
import LoadingTest from "~/common-components/loading-test";
import { Daum } from "~/interfaces/CategoriesType";
import ResourcesStyle from '~/styles/resources.css'
export const links: LinksFunction = () => [
  {rel:"stylesheet", href:ResourcesStyle}
];
export const meta: MetaFunction = ({data}: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.heroTitle}` },
    {
      property: "og:title",
      content: "Blogs Page",
    },
    {
      name: "description",
      content: "Ivoyant Blogs ",
    },
  ];
};
export async function loader() {
  try {
    const blogGql = await fetchGraphQL(blogQuery);
    const [tagslist, categoryList] = await Promise.all([
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
    const res = await fetch(strapiUrl + "/api/resource?populate=%2A");
    let jsonParsed = await res.json();
    const { heroTitle, heroDescription, s2_title } =
      jsonParsed.data?.attributes ?? "";
    const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      description1: item.attributes.description1,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url: item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar:
          item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
      topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
      category: {
       name:item.attributes.category.data?.attributes.name
      }
    }));
    return defer({
      heroBgImageURl: jsonParsed.data?.attributes.heroImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      blogData: blogData,
      tags,
      categoriesList,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
const Index = () => {
  const data = useLoaderData<typeof loader>() as any;
  return (
    <>
    <Suspense fallback={<LoadingTest />}>
      <Await resolve={data.heroBgImageURl}>
          <Hero />
          <BlogCardContainer  />
          <Consultation />
          <Outlet />
     </Await>
      </Suspense>
    </>
  );
};
export default Index;
