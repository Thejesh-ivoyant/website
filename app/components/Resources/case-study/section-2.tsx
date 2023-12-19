import React, { useEffect, useState } from "react";


import { strapiUrl } from "~/utils/urls";

import { useLoaderData } from "@remix-run/react";


const Section2 = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="bg-indigo-950 pl-20 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
            <div className="text-blue-100 text-base italic font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 p-1">
              The Situation
            </div>
            <div className="self-stretch text-white text-4xl font-semibold leading-[50px] mt-2 max-md:max-w-full">
              Aramex needs a technology partner to support its digital strategy
            </div>
            <div className="self-stretch text-white text-base leading-7 mt-6 max-md:max-w-full">
              Aramex follows the ‘asset-light’ business model and is highly
              committed to innovation in their strategy. They recognise
              technology and innovation as its key differentiators and growth
              enablers. Continually investing in bespoke digital solutions,
              Aramex found it challenging to staff their fast-paced projects
              locally. Moreover, the innovative and user-centric nature of these
              projects required vast expertise in data science, UX design,
              business analysis and R&D.
              <br />
              In late 2015, Aramex decided to look for a technology partner from
              Eastern Europe to support their entire delivery process. They
              needed a technology peer who could proactively contribute to
              design and ideation, rather than just provide development services
              under close supervision. The client chose ELEKS for our best
              cost/value balance, extensive expertise in mobile UX, data science
              and R&D, as well as for our innovation culture.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
src="../assets/builderimage.png"           className="aspect-[0.84] object-contain object-center w-full self-stretch overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
