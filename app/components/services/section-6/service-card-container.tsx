import React from "react";
import { useLoaderData } from "@remix-run/react";
import ServiceCard from "./service-card";
const ServiceCardContainer = () => {
  const loaderData = useLoaderData() as any;
  return (
    <div className="service-section-container section-p-y">
      <div className="w-full justify-center flex flex-col flex-wrap items-center text-center py-6 gradient-bottom">
        <span className="section-heading text-[#0D0B71]">
          {loaderData.s6_serviceTitle}
        </span>
      </div>
      <div className="w-full  flex flex-col gap-3">
         <p className="md:text-center mx-auto my-3 xl:max-w-6xl lg:max-w-5xl md:max-w-3xl">
          {loaderData.s6_serviceSummary}
        </p>
        <div className="service-grid-container service-container-property">
          {loaderData.ServicesCard.map(
            (item: { id: React.Key | null | undefined }, index: any) => (
              <ServiceCard service={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default ServiceCardContainer;
