// src/components/Card.js
import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Outlet, useLoaderData } from "@remix-run/react";

const Description = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="flex lg:w-1/2 bg-white w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center py-8">
      <div className="flex flex-col gap- lg:gap-10 w-full h-fit">
        <div className="leading-10 text-4xl md:text-[36px] py-4 font-oxygen font-medium">
          {loaderData.s2_Title}
          <span className="text-grape"> iVoyant </span>
        </div>
        <div className="text-md py-4 font-poppins font-light lg:leading-8 " id="about-desc">
          {loaderData.s2_Description}
        </div>
     
    
      </div>
    </div>
  );
};

export default Description;
