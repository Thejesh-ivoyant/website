import React from "react";

import { useLoaderData } from "@remix-run/react";
import ServiceCard from "./service-card";
const ServiceCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="service-section-container " >
      <div className="w-full justify-center flex flex-col flex-wrap items-center text-center py-6 gradient-bottom">
        <span className="section-title">
          {loaderData.s6_serviceTitle}
        </span>
      </div>

      <p className="h-fit mt-2  flex flex-wrap section-summary  w-full text-center mx-auto ">
        {loaderData.s6_serviceSummary}
      </p>
      <div className="w-full  flex flex-col ">
        <div className="service-grid-container service-container-property">
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
