// Index.tsx
import { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Hero from "~/components/S-MobileAppDev/section-1/hero";
import IBlogMedia from "../interfaces/IBlogMedia";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery } from "~/graphql/queries";
import BlogCardContainer from "~/components/Resources/blogs/blogCard-container";

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

async function fetchData(endpoint: string) {
  try {
    const response = await fetch(strapiUrl + endpoint);

    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
      );
    }

    const jsonData = await response.json();
    return jsonData.data;
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    throw error;
  }
}

export async function loader() {
  try {
    const blogGql = await fetchGraphQL(blogQuery)

    const res = await fetch(strapiUrl + "/api/resource?populate=%2A");
    let jsonParsed = await res.json();

    const componentRes = await fetchData("/api/blogs?populate=%2A");
    if (!componentRes || !Array.isArray(componentRes)) {
      throw new Error("Invalid API response structure");
    }
    const {
      heroTitle,
      heroDescription,
      s2_title,
      s4_title,
      s5_statement,
      s6_title,
    } = jsonParsed.data?.attributes ?? "";


    // const blogData: IBlogMedia[] = componentRes.map((item: any) => ({
  const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
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
    console.log("compsres loader data ", blogData);

    
  console.log("loader data ", blogGql.data?.blogs.data);
    return {
      heroImage:jsonParsed.data?.attributes.heroImage.data?.attributes.url,
      pitchDeck:jsonParsed.data?.attributes.pitchDeck.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      s4_title,
      s5_statement,
      s6_title,
      blogData: blogData,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ blogData: IBlogMedia[] } | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await loader();
        setData(fetchedData);
        console.log("//", fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div>
          <div className="video">
          <Hero/>
            {/* Render the entire data */}
          </div>
          <BlogCardContainer />
      
          <Consultation />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
