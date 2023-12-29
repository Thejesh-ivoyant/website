import LoadingComponent from "~/common-components/loading";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getAuthorQuery, getBlogAuthorIDQuery, getPaperAuthorIDQuery } from "~/graphql/queries";
import BlobContent from "~/components/Resources/blogs/blob-content";
import { LoaderFunctionArgs } from "@remix-run/node";
import BlogHero from "~/components/Resources/blogs/blog-hero";
import LoadingTest from "~/common-components/loading-test";

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
console.warn(",,,,,,,,,,,,,,,,,,,,,,,,",paperid)

  const updatedAuthorGetIdQuery= getPaperAuthorIDQuery(paperid)

  const authorIdData=await fetchGraphQL(updatedAuthorGetIdQuery);
  console.warn("////////////////////// is ",authorIdData.data?.whitePaper.data?.attributes.author.data?.id);
  const authorId=authorIdData.data?.whitePaper.data?.attributes.author.data?.id;

  const updatedQuery = getAuthorQuery(authorId);
  const authorData =  await fetchGraphQL(updatedQuery);

  console.warn("/////////////////author url is ",authorData.data?.author.data?.attributes.avatar.data?.attributes?.url);
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


  return {
    avatar:authorData.data?.author.data?.attributes.avatar.data?.attributes?.url,
    bannerImage: jsonParsed.data?.attributes?.bannerImage?.data?.attributes?.url,
    whitepaper: jsonParsed.data?.attributes?.whitepaper?.data?.attributes?.url,
    authorName: jsonParsed.data?.attributes?.author?.data?.attributes?.name,
    authorSummary: jsonParsed.data?.attributes?.author?.data?.attributes?.profileSummary,
    title,
    maxReadTime,
    date,
    description1,

  };
 
}
catch (error:any) {

  console.error(`Error fetching data from ${url}: ${error.message}`);
  return null;
}

}


const Index = () => {

  const data= useLoaderData() as any;
  console.warn(JSON.stringify(data));
  return (
    <div >
      

      {!data ? (
        <LoadingTest />
      ) : (
      
        <div>
          <div className="mt-16">
          <BlogHero/>
        </div>
          <BlobContent/>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
