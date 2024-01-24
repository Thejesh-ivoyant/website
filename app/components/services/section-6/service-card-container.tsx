import React from "react";

import { useLoaderData } from "@remix-run/react";
import ServiceCard from "./service-card";
const ServiceCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="w-full bg-[#F9F8FC]">
      <div className="text-PurpBlue text-4xl  w-full justify-center flex flex-col items-center text-center py-6 gradient-bottom">
        <span className="h-fit whitespace-wrap font-montserrat font-semibold flex ">
          {loaderData.s6_serviceTitle}
        </span>
      </div>

      <p className="h-fit mt-2 font-montserrat flex flex-wrap service-summary lg:w-[720px] text-center mx-auto pl-2 pr-2">
        {loaderData.s6_serviceSummary}
      </p>
      <div className="w-full  flex flex-col p-4">
        <div className="service-grid-container">
          {loaderData.ServicesCard.map(
            (item: { id: React.Key | null | undefined }, index: any) => (
              <div
                key={item.id}
                className="custom-service-grid "
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
