import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getAuthorQuery, getPaperAuthorIDQuery, whitepaperQuery } from "~/graphql/queries";
import { LoaderFunctionArgs } from "@remix-run/node";
import BlogHero from "~/components/Resources/blogs/blog-hero";
import LoadingTest from "~/common-components/loading-test";
import { Suspense } from "react";
import Blog_WhitepaperContent from "~/components/Resources/blogs/blog-whitepaper-content";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";
import Consultation from "~/components/Homepage/consultation";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Mobile App Development" },
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


export async function loader({   params, }: LoaderFunctionArgs){
const paperid=`${params.whitepaperid}`;

  const updatedAuthorGetIdQuery= getPaperAuthorIDQuery(paperid)

  const authorIdData=await fetchGraphQL(updatedAuthorGetIdQuery);
  const authorId=authorIdData.data?.whitePaper.data?.attributes.author.data?.id;

  const updatedQuery = getAuthorQuery(authorId);
  const authorData =  await fetchGraphQL(updatedQuery);
  const whitepaperGql = await fetchGraphQL(whitepaperQuery)
  // const blogData: IBlogMedia[] = componentRes.map((item: any) => ({
    const whitePaperData = whitepaperGql.data?.whitePapers.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      description1: item.attributes.description1,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url:  item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
    }));

  const url= strapiUrl+`/api/white-papers/${paperid}?populate=%2A`;// hardcoded value
 
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();
   
    
 const {
  title,
  maxReadTime,
  date,
  description1,


  } = jsonParsed.data?.attributes;


  return defer({
    avatar:authorData.data?.author.data?.attributes.avatar.data?.attributes?.url,
    bannerImage: jsonParsed.data?.attributes?.bannerImage?.data?.attributes?.url,
    whitepaper: jsonParsed.data?.attributes?.whitepaper?.data?.attributes?.url,
    authorName: jsonParsed.data?.attributes?.author?.data?.attributes?.name,
    authorSummary: jsonParsed.data?.attributes?.author?.data?.attributes?.profileSummary,
    title,
    maxReadTime,
    date,
    description1,
    blogData: whitePaperData,
  });
 
}
catch (error:any) {

  console.error(`Error fetching data from ${url}: ${error.message}`);
  return null;
}

}


const Index = () => {

  const data = useLoaderData<typeof loader>() as any;  return (
    <>
    <Suspense fallback={<LoadingTest />}>
       <Await resolve={data.heroImage}>
  
          <div className="mt-16">
          <BlogHero/>
        </div>
          <Blog_WhitepaperContent/>
          <Consultation />
          <BlogPostsContainer/>
          <Outlet />
        
      </Await>
      </Suspense>

      </>
  );
};

export default Index;
