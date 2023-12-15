import React from 'react';
import SummaryCard from '../Homepage/section-2/summary-card';
import { strapiUrl } from '~/utils/urls';



const DescriptionCard  = ({ AboutDescription, DescriptionBackground }: { AboutDescription: any, DescriptionBackground: any }) => {
    return (
    <div className = "flex flex-col w-full lg:flex-row">
           

           <div className="lg:w-1/3 relative w-full CardDark opacity-95 flex flex-col justify-center items-center">
      {/* The moving dot animation 👻  */}
    
                <img src={strapiUrl + DescriptionBackground} className="h-full  object-cover object-left" alt={DescriptionBackground} />
    </div>





     <div className="flex lg:w-1/2 bg-white w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center py-8">
      <div className="flex flex-col gap- lg:gap-10 w-full h-fit">
        {/* <div className="leading-10 text-4xl md:text-[36px] py-4 font-montserrat font-medium">
     About iVoyant
          <span className="text-grape"> iVoyant </span>
        </div> */}
        <div className="text-md py-4 font-poppins font-light lg:leading-8 " id="about-desc">
        {AboutDescription}
        </div>
       
      </div>
    </div>



    </div>
  );
};

export default DescriptionCard;

