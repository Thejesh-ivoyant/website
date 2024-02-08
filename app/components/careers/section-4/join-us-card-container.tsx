import React, { useEffect, useState } from "react";

import { strapiUrl } from "~/utils/urls";
import { useLoaderData } from "@remix-run/react";

import JobCard from "./join-us-card";
const JoinUsCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="w-full bg-[#1B0740]">
      

     
      <div className="w-full  flex flex-col p-4">
        <div className="join-card ">
          {loaderData.DescriptionCard.map(
            (item: { id: React.Key | null | undefined }, index: any) => (
              <div
                key={item.id}
                className="grid-card"
              >
                <JobCard service={item} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinUsCardContainer;
