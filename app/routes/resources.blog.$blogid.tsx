import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getAuthorQuery, getBlogAuthorIDQuery } from "~/graphql/queries";
import { LoaderFunctionArgs } from "@remix-run/node";
import BlogHero from "~/components/Resources/blogs/blog-hero";
import LoadingTest from "~/common-components/loading-test";
import { Suspense } from "react";
import Blog_WhitepaperContent from "~/components/Resources/blogs/blog-whitepaper-content";

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
const blogid=`${params.blogid}`;
  const updatedAuthorGetIdQuery= getBlogAuthorIDQuery(blogid)

  const authorIdData=await fetchGraphQL(updatedAuthorGetIdQuery);
  console.warn("////////////////////// is ",authorIdData.data?.blog.data?.attributes.author.data?.id);
  const authorId=authorIdData.data?.blog.data?.attributes.author.data?.id;

  const updatedQuery = getAuthorQuery(authorId);
  const authorData =  await fetchGraphQL(updatedQuery);

  console.warn("/////////////////author link isssssssssss ",authorData.data.attributes);
  const url= strapiUrl+`/api/blogs/${params.blogid}?populate=%2A`;
  try {
    const res = await fetch(url);
           let jsonParsed = await res.json();
   
    
 const {
  title,
  maxReadTime,
  date,
  description1,
  description2,
  description3,
  } = jsonParsed.data?.attributes;


  return defer({
        avatar:authorData.data?.author.data?.attributes.avatar.data?.attributes?.url,
        bannerImage: jsonParsed.data?.attributes?.bannerImage?.data?.attributes?.url,
        descriptionImage1: jsonParsed.data?.attributes?.descriptionImage1?.data?.attributes?.url,
        descriptionImage2: jsonParsed.data?.attributes?.descriptionImage2?.data?.attributes?.url, 
        descriptionImage3: jsonParsed.data?.attributes?.descriptionImage3?.data?.attributes?.url, 
        authorName: jsonParsed.data?.attributes?.author?.data?.attributes?.name,
        authorSummary: jsonParsed.data?.attributes?.author?.data?.attributes?.profileSummary,
        title,
        maxReadTime,
        date,
        description1,
        description2,
        description3,
  });
 
}
catch (error:any) {
  console.error(`Error fetching data from ${url}: ${error.message}`);
  return null;
  }
}


const Index = () => {
  const data = useLoaderData<typeof loader>() as any;
  return (
    <>
   <Suspense fallback={<LoadingTest />}>
      <Await resolve={data.bannerImage}>
 
          <div className="mt-16">
          <BlogHero/>
        </div>
          <Blog_WhitepaperContent/>
          <Outlet />
       
      </Await>
      </Suspense>

      </>
  );
};

export default Index;
