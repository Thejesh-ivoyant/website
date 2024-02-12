import { Await, MetaFunction, Outlet, defer, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogCategoryQuery, categories, getAuthorQuery, getBlogAuthorIDQuery, tagsQuery, topBlogQuery } from "~/graphql/queries";
import { LoaderFunctionArgs } from "@remix-run/node";
import BlogHero from "~/components/Resources/blogs/blog-hero";
import LoadingTest from "~/common-components/loading-test";
import { Suspense } from "react";
import Blog_WhitepaperContent from "~/components/Resources/blogs/blog-whitepaper-content";
import Consultation from "~/components/Homepage/consultation";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";

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
  const authorId=authorIdData.data?.blog.data?.attributes.author.data?.id;

  const updatedQuery = getAuthorQuery(authorId);
  const authorData =  await fetchGraphQL(updatedQuery);

  const url= strapiUrl+`/api/blogs/${params.blogid}?populate=%2A`;
  const blogCategoryGql = await fetchGraphQL(blogCategoryQuery);
  const blog = blogCategoryGql.data?.blogs.data || [];
  const BlogCategory = blog.map((item:any) => ({
    id: item.id,
    category: {
      name: item.attributes.category.data?.attributes.name,
    },
  }));

  const authordataMain = authorData.data?.author.data?.attributes || {};
const socialMediaLinks = authordataMain.socialMediaLinks || [];

const authordatamapped = socialMediaLinks.map((linkItem: any) => ({
  link: linkItem.link,
  logo: linkItem.logo.data.attributes.url,
}));

  const [tagslist, categoryList] = await Promise.all([
    await fetchGraphQL(tagsQuery),
    await fetchGraphQL(categories)
  ]);
  const tagsData = tagslist?.data?.topicTags?.data 
  const categoryListData = categoryList?.data?.categories.data 
  const blogGql = await fetchGraphQL(topBlogQuery);
  const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    date: item.attributes.date,
    maxReadTime: item.attributes.maxReadTime,
    bannerImage: {
      name: item.attributes.bannerImage.data?.attributes.name ?? "",
      url: item.attributes.bannerImage.data?.attributes.url ?? "",
    },
    author: {
      name: item.attributes.author.data?.attributes.name,
    },
    topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
    category: {
     name:item.attributes.category.data?.attributes.name
    
    }
  }));

  const tags = tagsData.map((item:any) => ({
    value: item.attributes.name,
    label: item.attributes.name,
  }));
  const categoriesList = categoryListData.map((item:any) => ({
    value: item.attributes.name,
    label: item.attributes.name,
  }));

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
        authorData:authordatamapped,
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
        tags,
        categoriesList,
        BlogCategory,
        blogData: blogData,
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
          <Consultation />
          <BlogPostsContainer/>
          <Outlet />
      </Await>
      </Suspense>

      </>
  );
};

export default Index;
