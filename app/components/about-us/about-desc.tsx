import React from 'react';
import SummaryCard from '../Homepage/summary-card';
import { useLoaderData } from '@remix-run/react';
import { loader } from '~/routes/about-us';


const AboutCard = () => {
  const loaderData = useLoaderData<typeof loader>()
  const data =  loaderData?.aboutUsData.data?.aboutus.data.attributes
  return (
    <div className = "flex flex-1 w-full lg:flex-row h-[41.25rem]">
      <div className='flex lg:w-1/2 aspect-square bg-white w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center lg:p-10 font-poppins leading-10 text-xl'>
      {data.aboutus}
      </div>
      <SummaryCard />
    </div>
  );
};

export default AboutCard;