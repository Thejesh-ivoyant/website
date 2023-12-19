import React, { useEffect, useState } from "react";


import { strapiUrl } from "~/utils/urls";

import { Link, useLoaderData } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
import BlogCard from "./blogCard";
const BlogCardContainer = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
        {loaderData.s2_title}
        </span>

      </div>
      
      <div className="w-full h-fit relative p-2 flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="ornament" />
      <div className="w-[1100px] z-10 h-full flex flex-col justify-center gap-y-6 p-6  px-20 overflow-y-scroll  ">
  
        {loaderData.blogData.map((blog:IBlogMedia) => (
           <Link to={`../resources/blog/${blog.id}`} key={blog.id}>
            <BlogCard key={blog.id} blog={blog} />
            </Link>
        ))}

        </div>
      </div>
      <button className="mx-40 button-test te"> <span>Learn more</span></button>
    </div>
  );
};

export default BlogCardContainer;
