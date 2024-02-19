import Hero from "~/components/Homepage/hero";
import Services from "~/components/Homepage/services"
import Section4 from "~/components/Homepage/clients";
import Section6 from "~/components/Homepage/partners";
import Section5 from "~/components/Homepage/industry";
import Consultation from "~/components/Homepage/consultation";
import Technology from "~/components/Homepage/technology";
import Testimonials from "~/components/Homepage/testimonials";
import BlogPostsContainer from "~/components/Resources/blogs/blogPosts-container";
import { MetaFunction, defer, useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { homeQuery, topBlogQuery } from "~/graphql/queries";
import ContactUs from "~/common-components/contactUs";
import { Attributes } from "~/interfaces/Homepage";
import WhyChooseUs from "~/components/Homepage/why-choose-us";
import AboutCardContainer from "~/components/Homepage/about-card-container";
import { Popup } from "~/common-components/social-media-popup";
export const meta: MetaFunction = ({data}: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.homePage?.homepage?.data?.attributes.heroText}` },
    {
      property: "og:title",
      content: "Home Page",
    },
    {
      name: "description",
      content: "Ivoyants Homepage",
    },
  ];
};

export async function loader() {
  try {
    const homeGql = await fetchGraphQL(homeQuery);
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

    return defer({
      blogData: blogData,
      homePage: homeGql.data,
    },{
      "Cache-Control": "public, s-maxage=600",
    });
      
  } catch (error) {
    console.warn("Error fetching data from contact API:", error);
    return {
    };
  }
}
const App = () => {
  const data = useLoaderData<typeof loader>() as any
  const attributes = data?.homePage?.homepage?.data?.attributes as Attributes
  
  return (
    <>
      <Hero heroBgImage={attributes.heroBg} heroText={attributes.heroText}  heroTitle={attributes.heroTitle} heroDescription={attributes.heroDescription}/>
      <AboutCardContainer attributes={attributes} />
      <Services attributes={attributes} />
      <Section4 clients={attributes?.clients} />
      <Section5 industries={attributes?.industriesTabs} title={attributes?.industriesTitle} description={attributes.IndustriesDescription} />
      <Section6 partners={attributes?.partners}/>
      <Consultation />
      <Technology/>
      <Testimonials/>
      <BlogPostsContainer/>
      <WhyChooseUs pairs={attributes.pairs} title={attributes.whychooseus} description={attributes.whychooseusDesc} />
      <ContactUs />
      <Popup/>
    </>
  );
};

export default App;
