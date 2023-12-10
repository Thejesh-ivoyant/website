import React, { useEffect, useState } from "react";

import { strapiUrl } from "~/utils/urls";
import { useLoaderData } from "@remix-run/react";

import JobCard from "./join-us-card";
const JoinUsCardContainer = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="w-full bg-[#F9F8FC]">
      

     
      <div className="w-full  flex flex-col p-4">
        <div className="grid grid-cols-3 self-center h-fit gap-4 p-2">
          {loaderData.DescriptionCard.map(
            (item: { id: React.Key | null | undefined }, index: any) => (
              <div
                key={item.id}
                className="flex flex-row justify-around w-96 aspect-square object-cover"
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
