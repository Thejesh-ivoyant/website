import React, { useEffect, useState } from "react";


import { strapiUrl } from "~/utils/urls";

import { useLoaderData } from "@remix-run/react";


const Section5 = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <>
    <div className="w-full flex bg-haiti h-[500px] relative">
      <div className="flex-col flex-1 p-14 h-full mix-blend-luminosity relative cyan-gradient-vision"  style={{
          backgroundRepeat: "no-repeat",
          transition:"ease",
          backgroundPosition: "bottom right", 
          backgroundSize: 'contain'
        }}>
         
      </div>
      <div className="items-stretch flex w-1/2 p-20 mx-10 flex-col">
      <div className="justify-center items-stretch flex w-full flex-col px-10 pt-4">
        <div className="text-white text-4xl font-semibold leading-10">
          Design Activities
        </div>
        <div className="text-white text-base leading-7 mt-3">
          Consulting, Stakeholder Workshop, Conceptualization, Wireframing,
          Visual Design, Front End Development, Dev. Coordination.
        </div>
      </div>
      <div className="justify-center items-stretch flex w-full flex-col mt-16 px-10 ">
        <div className="text-white text-4xl font-semibold leading-10">
          Current Status
        </div>
        <div className="text-white text-base leading-7 mt-3">
          Consulting, Stakeholder Workshop, Conceptualization, Wireframing,
          Visual Design, Front End Development, Dev. Coordination.
        </div>
      </div>
    </div>
  
    </div>
  </>
  );
};

export default Section5;
