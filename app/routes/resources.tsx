// Index.tsx
import React, { useEffect, useState } from "react";
import LoadingComponent from "~/common-components/loading";
import BlogPostsContainer from "~/components/Resources/section-2/blogPosts-container";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { Outlet } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Hero from "~/components/S-MobileAppDev/section-1/hero";
import IBlogMedia from "../interfaces/IBlogMedia";
import PitchDeckConsultation from "~/components/Resources/section-5/pitchDeckConsultation";

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
    } = jsonParsed.data?.attributes;


    // const blogData: IBlogMedia[] = componentRes.map((item: any) => ({
  const blogData = componentRes.map((item: any) => ({
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
      heroImage:jsonParsed.data?.attributes.heroImage.data?.attributes.formats.large.url,
      pitchDeck:strapiUrl + jsonParsed.data?.attributes.pitchDesk.data?.attributes.url,
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
          <BlogPostsContainer />
          <Consultation />
          <BlogPostsContainer />
          <PitchDeckConsultation />
          <BlogPostsContainer />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
