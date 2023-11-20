import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
const IndustryFocus = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="flex relative flex-col w-full min-h-full lg:mx-0 mb-16 lg:h-full bg-white">
      <img
        src="../assets/Ellipse61.svg"
        className="absolute top-16 left-4"
      ></img>
      <img
        src="../assets/Ornament.png"
        className="absolute top-32 right-4"
      ></img>
      <div className="text-black text-4xl mb-10 w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-oxygen font-bold">
          {loaderData.s4_industryFocusTitle}
        </span>
      </div>
      {loaderData.IndustryFocus.map((item: any) => (
      <div className="flex flex-col gap-2 industry-focus-main lg:flex-row">
    
        <div className="flex bg-white w-3/4  text-black font-[500px] justify-center items-center py-4">
          <div className="flex flex-col gap- lg:gap-10 w-full">
            <div className="industry-focus-text-container">
              <span className="industry-focus-text">
                {item.s4_industryFocusSubTitle}
              </span>
            </div>
            <div
              className="text-sm font-poppins font-light lg:leading-8 "
              id="about-desc"
            >
              {item.s4_industryFocusDescription}{" "}
            </div>
          </div>
        </div>
        <div className="relative flex w-1/4 bg-white  text-black font-[500px] justify-center items-center">
        
          <img
            src={item.s4_industryFocusImage}
            className="absolute  h-[140%] w-full"
          ></img>
        </div>


   
      </div>
      ))}
    </div>
  );
};

export default IndustryFocus;
