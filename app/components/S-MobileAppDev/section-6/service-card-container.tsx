import React, { useEffect, useState } from "react";

import BlogCard from "./service-card";
import { strapiUrl } from "~/utils/urls";
import { useLoaderData } from "@remix-run/react";
import ServiceCard from "./service-card";
const ServiceCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="w-full bg-[#F9F8FC]">
      <div className="text-PurpBlue text-4xl  w-full justify-center flex flex-col items-center text-center py-6 gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-semibold flex ">
          {loaderData.s6_serviceTitle}
        </span>
      </div>

      <p className="h-fit mt-2 font-montserrat flex flex-wrap service-summary lg:w-[720px] text-center mx-auto">
        {loaderData.s6_serviceSummary}
      </p>
      <div className="w-full  flex flex-col p-4">
        <div className="grid grid-cols-3 self-center h-fit gap-4 p-2">
          {loaderData.ServicesCard.map(
            (item: { id: React.Key | null | undefined }, index: any) => (
              <div
                key={item.id}
                className="grid col-span-1 w-96 aspect-square object-cover"
              >
                <ServiceCard service={item} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardContainer;
