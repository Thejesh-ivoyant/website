import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import BlogPostCard from "./blogPosts";
import BlogMedia from "../blogMediaInterface";
import { useLoaderData } from "@remix-run/react";

const BlogPostsContainer = () => {

  const loaderData = useLoaderData() as any;
  
  const [blogMedia, setBlogMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData(endpoint: string) {
    try {
      const response = await fetch("http://localhost:1337" + endpoint);

      if (!response.ok) {
        throw new Error(
          `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
        );
      }

      const jsonData = await response.json();
      const blogData = jsonData.data?.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        date: item.attributes.date,
        maxReadTime: item.attributes.maxReadTime,
        description1: item.attributes.description1,
        description2: item.attributes.description2,
        description3: item.attributes.description3,
        slug: item.attributes.slug,
        bannerImage: {
          name: item.attributes.bannerImage.data.attributes.name,
          url: strapiUrl + item.attributes.bannerImage.data.attributes.url,
        },
        DescriptionImage1: {
          name: item.attributes.DescriptionImage1.data.attributes.name,
          url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
        },
        descriptionImage2: {
          name: item.attributes.DescriptionImage1.data.attributes.name,
          url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
        },
        descriptionImage3: {
          name: item.attributes.DescriptionImage1.data.attributes.name,
          url: strapiUrl + item.attributes.DescriptionImage1.data.attributes.url,
        },
        author: {
          name: item.attributes.author.data.attributes.name,
          profileSummary: item.attributes.author.data.attributes.profileSummary,
        },
      }));

      setBlogMedia(blogData);

    
      return blogData;
    } catch (error: any) {
      console.error(`Error fetching data from ${endpoint}: ${error.message}`);
      return [];
    }
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData("/api/posts?populate=%2A");
        setData(fetchedData);
        setLoading(false);

      } catch (error) {

        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
      <div className="text-head-grape text-4xl w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
          What's new on our blog?
        </span>
      </div>

      <div className="w-full h-fit relative p-2 flex flex-row justify-around">
        <img
          src="../assets/Ornament.png"
          className="absolute top-4 left-4"
          alt="ornament"
        />
        <div className="w-full h-full flex justify-start gap-x-6 p-6 px-40 overflow-x-scroll whitespace-nowrap">
          {data.map((blog: BlogMedia) => (
            <BlogPostCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <button className="mx-40 button-test te">
        <span>Learn more</span>
      </button>
    </div>
  );
};

export default BlogPostsContainer;
