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
        Title:string;
        Content:string;
        DateOfBlog:string;
        BlogMedia: {
          data: BlogData[];
        };
        // Add any other attributes if present in the actual API response
      };
    }[];
  }
  
import BlogCard from "./blog-card";
import { strapiUrl } from "~/utils/urls";
const BlogsContainer = () => {

  const SECTION10_API_URL = `${strapiUrl}/api/section10s?populate=%2A`
  
  
    const [DateOfBlog, setDateOfBlog] = useState('');
    const [Content, setContent]= useState('');
    const [Title, setTitle] = useState("");
    const [BlogMedia, setBlogMedia] = useState<SectionData["data"]>([]);
    useEffect(() => {
    
        fetch(SECTION10_API_URL)
          .then((response) => response.json())
          .then((section4_data: SectionData) => {
            const{Title,Content,DateOfBlog} = section4_data.data[0].attributes;
            const blogs = section4_data.data || [];

            setTitle(Title);
            setContent(Content);
            setDateOfBlog(DateOfBlog);
            setBlogMedia(blogs);
    
            console.log(blogs,"blogggggooooooooooooooooo");
            
          })
          .catch((error) => {
            console.error("Error fetching data from API:", error);
          });
      }, []);
  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-oxygen font-bold">
          What's new on our blog?
        </span>
      </div>
      
      <div className="w-full h-fit relative p-2 flex flex-row justify-around">
        <img src="./assets/Ornament.png" className="absolute top-4 left-4"></img>
        <div className="w-full h-full flex justify-start gap-x-6 p-6  px-40 overflow-x-scroll whitespace-nowrap ">
  
        {BlogMedia.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
        ))}

        </div>
      </div>
      <button className="mx-40 button-test te"> <span>Learn more</span></button>
    </div>
  );
};

export default BlogsContainer;
