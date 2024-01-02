import React from "react";
import { useMatch } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { scrollTo } from "~/root";
import { Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/services.MobileDev";

const PTCHero = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div>
       <div className="bg-slate-50 w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex-col fill-white overflow-hidden relative flex min-h-[691px] grow items-center px-20 py-12 max-md:max-w-full max-md:px-5">
             
              <div className="relative text-indigo-950 text-opacity-80 text-xl leading-8 whitespace-nowrap mt-24 max-md:max-w-full max-md:mt-10">
                Last reviewed on: {loaderData.last_reviewed}
              </div>
              <div className="relative text-violet-950 text-4xl italic font-extrabold leading-[58px] w-[504px] max-w-full mt-1">
            {loaderData.heroTitle}
              </div>
              <div className="relative text-indigo-950 text-xl leading-8 w-[504px] max-w-full mt-5 mb-16 max-md:mb-10">
              {loaderData.heroDescription}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src= '../assets/policy.jpg'              className="aspect-[1.3] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTCHero;
