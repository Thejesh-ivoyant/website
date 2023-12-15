import React from 'react';
import SummaryCard from '../Homepage/section-2/summary-card';


const AboutCard = () => {
  return (
    <div className = "flex flex-1 w-full lg:flex-row h-[41.25rem]">
      <div className='flex lg:w-1/2 aspect-square bg-white w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center lg:p-10 font-poppins leading-10 text-xl'>
      Ivoyant is a solutions and services provider for technology-led enterprise business transformation. We help enterprises leverage data and digital solutions to grow revenues, strengthen customer relationships, improve operational performance, manage risks, navigate disruptions and capitalize on new market opportunities. We work closely with enterprises across industry segments such as telecom, airline, logistics, retail and financial services to provide tailored business solutions.      
      </div>
      <SummaryCard />
    </div>
  );
};

export default AboutCard;