// src/components/Card.js
import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";


const ProjectPortfolio = () => {
  const loaderData = useLoaderData() as any;

  return (
    <>
      <div className=" flex flex-row items-center justify-around bg-haiti h-80  ">
        <div className="flex gap-4 items-center text-white p-10 summary-card">
          <span className="lg:text-6xl font-bold">{loaderData?.s3_countryCount}</span>
          <span className="font-poppins font-medium text-xs w-24">Country</span>
        </div>
        <svg width="2" height="300" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(-1 0 0 1 1.666 0)" fill="url(#a)" d="M0 0h1v150H0z"/><path transform="rotate(-180 1.666 300)" fill="url(#b)" d="M1.666 300h1v150h-1z"/><defs><linearGradient id="a" x1="1.5" y1="148.882" x2="1.5" y2="-2.683" gradientUnits="userSpaceOnUse"><stop stop-color="#CDBCFF"/><stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="3.166" y1="448.882" x2="3.166" y2="297.317" gradientUnits="userSpaceOnUse"><stop stop-color="#CDBCFF"/><stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/></linearGradient></defs></svg>
        
        <div className="flex gap-4 items-center text-white p-10 summary-card">
          <span className="lg:text-6xl font-bold">{loaderData?.s3_projectDelieverdCount}</span>
          <span className="font-poppins font-thin text-xs w-24">Projects Delivered</span>
        </div>
        <svg width="2" height="300" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(-1 0 0 1 1.666 0)" fill="url(#a)" d="M0 0h1v150H0z"/><path transform="rotate(-180 1.666 300)" fill="url(#b)" d="M1.666 300h1v150h-1z"/><defs><linearGradient id="a" x1="1.5" y1="148.882" x2="1.5" y2="-2.683" gradientUnits="userSpaceOnUse"><stop stop-color="#CDBCFF"/><stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="3.166" y1="448.882" x2="3.166" y2="297.317" gradientUnits="userSpaceOnUse"><stop stop-color="#CDBCFF"/><stop offset="1" stop-color="#8B2BB8" stop-opacity="0"/></linearGradient></defs></svg>

        <div className="flex gap-4 items-center text-white p-10 summary-card">
          <span className="lg:text-6xl font-bold">{loaderData?.s3_TotalProjectCount}</span>
          <span className="font-poppins font-thin text-xs w-24">Total projects</span>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolio;
