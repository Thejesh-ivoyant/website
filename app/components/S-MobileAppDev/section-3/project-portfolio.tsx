// src/components/Card.js
import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";


const ProjectPortfolio = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="lg:w-full relative w-full CardDark opacity-95 flex flex-col justify-center items-center">
      {/* The moving dot animation 👻  */}
      <div className='absolute  left-20 w-32 h-32 bg-slate-500 rounded-full blur-3xl -z-20' id='moving-circle'></div>
      <div className='flex flex-1 w-full max-h-[300px] justify-center'>
          <div className='aspect-square w-fit h-[300px] flex items-center px-12 grape-shadow'>
            <div className='ml-auto flex gap-4 items-center '>
              <span className='lg:text-6xl text-4xl font-bold'>{loaderData.s3_countryCount}</span>
              <span className=' font-thin w-24'>Delighted Clients</span>
            </div>
          </div>
          <div className=' aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow'>
            <div className='mr-auto flex gap-4 items-center'>
              <span className='lg:text-6xl font-bold text-4xl'>  {loaderData.s3_projectDelieverdCount} </span>
              <span className=' font-thin w-24'>Years of Experience</span>
            </div>
          </div>
          <div className=' aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow'>
            <div className='mr-auto flex gap-4 items-center'>
              <span className='lg:text-6xl font-bold text-4xl'>  {loaderData.s3_TotalProjectCount} </span>
              <span className=' font-thin w-24'>third of Experience</span>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default ProjectPortfolio;
