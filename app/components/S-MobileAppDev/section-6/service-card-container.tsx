import React, { useEffect, useState } from "react";

import BlogCard from "./service-card";
import { strapiUrl } from "~/utils/urls";
import { useLoaderData } from "@remix-run/react";
import ServiceCard from "./service-card";
const ServiceCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="w-full bg-white">
      <div className="text-head-grape text-4xl  w-full justify-center flex flex-col items-center text-center py-6 gradient-bottom">
        <span className="h-fit whitespace-nowrap font-oxygen font-bold flex ">
          {loaderData.s6_serviceTitle}
        </span>
      </div>

      <span className="h-fit mt-2 font-oxygen flex flex-wrap service-summary">
        {loaderData.s6_serviceSummary}
      </span>
      <div className="w-full  flex flex-col mt-4 ">


        {Array.from({ length: Math.ceil(loaderData.ServicesCard.length / 3) }).map(
          (_, row) => (
            <div
              key={row}
              className="w-full h-full flex justify-evenly mb-2 flex-row "
            >
              {loaderData.ServicesCard.slice(row * 3, (row + 1) * 3).map((item: { id: React.Key | null | undefined; }, index: any) => (
                <React.Fragment key={item.id}>
                  <div className="flex w-96 h-60 mb-4">
            
                
                    <ServiceCard service={item} />
                  </div>
           
                </React.Fragment>
              ))}
            </div>
          )
        )}



      </div>
    </div>
  );
};

export default ServiceCardContainer;
