// src/components/Card.js
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

const ProjectPortfolio = () => {
  const SECTION2_API_URL = `${strapiUrl}/api/s-mad-s3s?populate=%2A`

  const [countryCount, setCountryCount] = useState("");
  const [projectDeliveredCount, setProjectDeliveredCount] = useState("");
  const [totalProjectCount, setTotalProjectCount] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SECTION2_API_URL);
        const { data } = await response.json();
        const { CountryCount, ProjectDeliveredCount, TotalProjectCount } = data[0].attributes;

        setCountryCount(CountryCount);
  
        setProjectDeliveredCount(ProjectDeliveredCount);
        setTotalProjectCount(TotalProjectCount);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:w-full relative w-full CardDark opacity-95 flex flex-col justify-center items-center">
      {/* The moving dot animation 👻  */}
      <div className='absolute  left-20 w-32 h-32 bg-slate-500 rounded-full blur-3xl -z-20' id='moving-circle'></div>
      <div className='flex flex-1 w-full max-h-[300px] justify-center'>
          <div className='aspect-square w-fit h-[300px] flex items-center px-12 grape-shadow'>
            <div className='ml-auto flex gap-4 items-center '>
              <span className='lg:text-6xl text-4xl font-bold'>{countryCount}</span>
              <span className=' font-thin w-24'>FDelighted Clients</span>
            </div>
          </div>
          <div className=' aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow'>
            <div className='mr-auto flex gap-4 items-center'>
              <span className='lg:text-6xl font-bold text-4xl'>  {projectDeliveredCount} </span>
              <span className=' font-thin w-24'>sYears of Experience</span>
            </div>
          </div>
          <div className=' aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow'>
            <div className='mr-auto flex gap-4 items-center'>
              <span className='lg:text-6xl font-bold text-4xl'>  {totalProjectCount} </span>
              <span className=' font-thin w-24'>third of Experience</span>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default ProjectPortfolio;
