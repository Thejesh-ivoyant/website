import React, { useEffect, useState } from "react";


import { strapiUrl } from "~/utils/urls";

import { useLoaderData } from "@remix-run/react";
import CaseStudy from "./caseStudy";

const CaseStudyContainer = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
        {loaderData.caseStudy.title}
        </span>
      </div>
      
      <div className="w-full h-fit relative p-2 flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="ornament" />
      <div className="w-full h-full flex justify-start gap-x-6 p-6  px-40 overflow-x-scroll whitespace-nowrap ">
      {/* {loaderData.blogData.map((blog:IBlogMedia) => ( */}
        {loaderData.CaseStudy.map((case:any) => (
            <CaseStudy key={case.id} blog={case} />
        ))}

        </div>
      </div>
      <button className="mx-40 button-test te"> <span>Learn more</span></button>
    </div>
  );
};

export default CaseStudyContainer;
