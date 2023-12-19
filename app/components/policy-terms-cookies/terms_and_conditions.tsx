import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import  Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";

const Terms = () => {
  const loaderData = useLoaderData() as any;

   
      
    return (
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
                        Committed to protect 
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
                        Collection of user infromation
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
                        User information handeling
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
                        Access and use of websites
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
                        Solution and product offering
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
                        User Employee contacts
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
                        Visitor information
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
                        Marketing
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
                        Sharing of personal information
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
                        Information security and accuracy
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
                        Retention period
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
                        How to contact us
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
                        Your rights
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
                        Changes to our Privacy Statements 
                      </div>
                    </div>
                  </div>
                    </div>
                </div>

                  <div id="contact-main" className="overflow-y  h-screen w-1/2 contact-main flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                    {/* main content goes here */}

                    <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider max-md:max-w-full">
                    iVoyant is committed to protect the information you provide
                    us
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
             {loaderData.committed_to_protect_title}
                  </div>{" "}
                  {loaderData.CTP_Points.map((item: any) => (
                        <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                          <img
                            loading="lazy"
                            src={Bulletimg}                              className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                          />{" "}
                          <div className="text-neutral-800 text-base leading-7 self-stretch grow whitespace-nowrap max-md:max-w-full">
                        {item.description}
                          </div>
                        </div>
                    ))}
                  
                  
                  {loaderData.CTP_List.map((item: any) => (
                    <div>
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                
                {item.name}
                  </div>{" "}
               
                  <div className="text-violet-950 text-base leading-7 underline mt-3 max-md:max-w-full">
                    <span className="text-neutral-800">
                     {item.description}
                    </span>
                    {/* <a
                      href="mailto:marketing@ivoyant.com"
                      className="text-violet-950"
                      target="_blank"
                    >
                      marketing@ivoyant.com
                    </a> */}
                    <span className="text-violet-950"> </span>
                  </div>
                  </div>
                       ))}
                  <div className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
                    How we collect information
                  </div>
                
                  {loaderData.collection_of_info.map((item: any) => (
                  <div>
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                 {item.name}
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                  {item.description}
                  </div>{" "}
                </div>
                    ))}
                 
                  
                 
                  <div className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
                    How iVoyant handles information
                  </div>
                  {loaderData.user_info_handling.map((item: any) => (
                  <div> <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                       {item.name}
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                  {item.description}
                  </div></div>
                  ))}
                 
                  
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Access and use of websites 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                {loaderData.access_and_use} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Responding to your request for information for a solution or
                    product offering of iVoyant 
                  </div>
                  {loaderData.solutions} 
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Contacting employees of our clients, prospects, partners and
                    suppliers
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.contacts} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Visitor information 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                   {loaderData.visitor} 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Marketing 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                   
                {loaderData.marketing}
                   
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Sharing of Personal Information 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.share_personal_info}
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Information Security and Accuracy
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                   {loaderData.info_and_security}
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Retention Period 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.retention}
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    How to contact us 
                  </div>
                  <div className="text-violet-950 text-base leading-7 underline mt-4 max-md:max-w-full">
                   {loaderData.contact_us}
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Your Rights
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    {loaderData.rights}
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Changes to our Privacy Statements 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                  {loaderData.changes_to_privacy}
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