import  Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";
import PrivacyPolicyScroll from "./privacy-scroll";

const PrivacyPolicy = () => {
  const loaderData = useLoaderData() as any;

   
      
    return (
      <>
        <div className="items-stretch flex flex-col">
     


      <div className="items-center bg-slate-50 flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
          <div className="text-violet-950 text-4xl font-semibold max-w-[530px] max-md:max-w-full">
           {loaderData.s2_Title}
          </div>
          <div className="self-stretch flex justify-between gap-0 mt-4 py-3 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="bg-[linear-gradient(0deg,#AEBEFF_0.75%,rgba(167,184,254,0.00)_101.79%)] flex w-[600px] shrink-0 max-w-full h-px flex-col" />
            <div className="self-stretch bg-[linear-gradient(0deg,#AEBEFF_0.75%,rgba(167,184,254,0.00)_101.79%)] flex w-[600px] shrink-0 max-w-full h-0.5 flex-col" />
          </div>
          <div className="text-neutral-800 text-center text-base leading-7 max-w-[971px] mt-4 max-md:max-w-full">
           {loaderData.s2_Description}
          </div>{" "}


            
        </div>
      </div>
    
   
    </div>
    <PrivacyPolicyScroll/>
    </>
      );  
};
export default PrivacyPolicy;