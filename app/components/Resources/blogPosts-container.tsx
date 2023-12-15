import React, { useEffect, useState } from "react";


import { strapiUrl } from "~/utils/urls";
import BlogPostCard from "./blogPosts";
import { useLoaderData } from "@remix-run/react";
import IBlogMedia from "../../interfaces/IBlogMedia";
const BlogPostsContainer = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="w-full bg-white p-8 h-fit ">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
        {loaderData.s2_title}
        </span>
      </div>
      
      <div className="w-full h-fit p-2 relative flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="ornament" />
      <div className="w-full h-full justify-center flex gap-x-6 p-6  px-40 mx-auto">
  
        {loaderData.blogData.map((blog:IBlogMedia) => (
            <BlogPostCard key={blog.id} blog={blog} />
        ))}

        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
        <button className="button-test font-montserrat font-thin"> <span className="font-thin">Explore Now</span></button>
      </div>
      
    </div>
  );
};

export default BlogPostsContainer;
