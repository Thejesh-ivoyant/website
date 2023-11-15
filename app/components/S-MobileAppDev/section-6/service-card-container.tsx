import React, { useEffect, useState } from "react";

interface BlogData {
  id: number;
  attributes: {
    url: string;
    // Add any other attributes if present in the actual API response
  };
}

interface SectionData {
  data: {
    id: number;
    attributes: {
      Title: string;
      Content: string;
      DateOfBlog: string;
      BlogMedia: {
        data: BlogData[];
      };
      // Add any other attributes if present in the actual API response
    };
  }[];
}

import BlogCard from "./service-card";
import { strapiUrl } from "~/utils/urls";
const ServiceCardContainer = () => {
  const SECTION10_API_URL = `${strapiUrl}/api/section10s?populate=%2A`;

  const [DateOfBlog, setDateOfBlog] = useState("");
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const [BlogMedia, setBlogMedia] = useState<SectionData["data"]>([]);
  useEffect(() => {
    fetch(SECTION10_API_URL)
      .then((response) => response.json())
      .then((section4_data: SectionData) => {
        const { Title, Content, DateOfBlog } = section4_data.data[0].attributes;
        const blogs = section4_data.data || [];

        setTitle(Title);
        setContent(Content);
        setDateOfBlog(DateOfBlog);
        setBlogMedia(blogs);

        console.log(blogs, "blogggggooooooooooooooooo");
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="text-head-grape text-4xl  w-full justify-center flex flex-col items-center text-center py-6 gradient-bottom">
        <span className="h-fit whitespace-nowrap font-oxygen font-bold flex ">
          What's new on our blog?
        </span>
       
      </div>

      <span className="h-fit mt-2 font-oxygen flex flex-wrap service-summary">
        Our mobile app developers are skilled in providing various mobile app development services that satisfies the diverse needs of the clients and take their business to next level. We provide range of mobile application development services such as.
        </span>
      <div className="w-full h-fit relative flex flex-col mt-4 ">
  {Array.from({ length: Math.ceil(BlogMedia.length / 3) }).map((_, row) => (
    <div key={row} className="w-full h-full flex justify-evenly flex-row whitespace-nowrap">
      {BlogMedia.slice(row * 3, (row + 1) * 3).map((blog, index) => (
        <React.Fragment key={blog.id}>
          <div className="w-96 h-60"> {/* Adjust the width (w-32) and height (h-48) as needed */}
            <BlogCard blog={blog} />
          </div>
          {/* Adjust space between cards */}
        </React.Fragment>
      ))}
    </div>
  ))}
</div>




    </div>
  );
};


export default ServiceCardContainer;
