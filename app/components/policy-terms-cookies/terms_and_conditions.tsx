import  Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";

const Terms = () => {
  const loaderData = useLoaderData() as any;

   
      
    return (
        <div className="items-stretch flex flex-col">
     


      <div className="items-center bg-slate-50 flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
         


            <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 w-full flex flex-row justify-center h-fit over">
                   
                <div id="contact-sidebar" className=" w-1/2 contact-sidebar   p-2 h-fit flex flex-col items-stretch  max-md:w-full max-md:ml-0">
                    {/* side nav content goes here*/}
                       
                    <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Overview
                      </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Generic Terms of Use                     </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
    src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Disclaimer                   </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Client and Partner Confidentiality                    </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Business Relationships               </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Disclaimer of Warranty                    </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
                    <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src={Bulletimg}                          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                      Limitation of Liability            </div>
                    </div>
                  </div>{" "}
                 
            </div>
        </div>

                  <div id="contact-main" className="overflow-y  h-screen w-1/2 contact-main flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                    {/* main content goes here */}

                    <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                
                
               
                  
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                  Overview
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                {loaderData.overview} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                  Generic Terms of Use 
                  </div>
                  {loaderData.generic} 
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                  Disclaimer
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.disclaimer} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                  Confidential Information from Clients and Partners 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                   {loaderData.confidentialityParagraph1} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                  Business Relationships 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                   
                {loaderData.relationships}
                   
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                  Disclaimer of Warranty
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.warranty}
                  </div>

                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Limitation of Liability 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.limitation}
                  </div>
                  
                  
                 
                 
                 
                 
                </div>

                  </div>
                 
                </div>
            </div>
        </div>
      </div>
    
   
    </div>
      );  
};
export default Terms;