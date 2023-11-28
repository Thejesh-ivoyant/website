// Index.tsx
import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import BlogPostsContainer from "~/components/Resources/blogPosts-container";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import IBlogMedia from "./IBlogMedia"; // Import the IBlogMedia interface

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
    const res = await fetch(strapiUrl + "/api/resource?populate=%2A");
    const componentRes = await fetchData("/api/blogs?populate=%2A");

    console.log("API Response:", componentRes);

    if (!componentRes || !Array.isArray(componentRes)) {
      throw new Error("Invalid API response structure");
    }

    const blogData: IBlogMedia[] = componentRes.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      description1: item.attributes.description1,
      description2: item.attributes.description2 || null,
      description3: item.attributes.description3 || null,
      slug: item.attributes.slug,
      bannerImage: {
        name: item.attributes.bannerImage.data.attributes.name,
        url: strapiUrl + item.attributes.bannerImage.data.attributes.url,
      },
      descriptionImage1: {
        name: item.attributes.descriptionImage1.data.attributes.name,
        url: strapiUrl + item.attributes.descriptionImage1.data.attributes.url,
      },
      descriptionImage2: {
        name: item.attributes.descriptionImage2.data.attributes.name,
        url: strapiUrl + item.attributes.descriptionImage2.data.attributes.url,
      },
      descriptionImage3: {
        name: item.attributes.descriptionImage3.data.attributes.name,
        url: strapiUrl + item.attributes.descriptionImage3.data.attributes.url,
      },
      author: {
        name: item.attributes.author.data.attributes.name,
        profileSummary: item.attributes.author.data.attributes.profileSummary,
      },
    }));
console.log("loader data ", blogData[0].title);
    return {
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
        console.log("/////////////////", fetchedData);
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
            {/* Render the entire data */}
            <BlogPostsContainer />
          </div>
          <Consultation />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
