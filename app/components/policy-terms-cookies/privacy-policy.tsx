import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useLoaderData } from "@remix-run/react";

const PrivacyPolicy = () => {
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/926a2e540e091eaa010d7fbba33d6f8373fefdd7bd2cb6d2ae61d4c082fcdd9a?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/134060715a1da5ca17804c70a069f1a4b28cc874e86b39d252cf600fb527bc84?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/923a6b58c6373ae7193aeeda93e60d49eba42a67139d8888f81ed59951ba1d7e?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2300f135826da8fc2cfb71aa872fbec1c17156160fe173c6e3ba83038a1d9a63?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e687e10205eaa54ada499c2c109c805a13600b952891c4e59277c0728031e52d?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60129b1bb9e486ba14aac14bc4836c62cc94699df368d3a88d9a187bb01b85d3?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/612e5ae25d0186b8f9ea5068787d1514ca1454d5e2335b190fe1afb58e0aad65?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/617b6a49e19fd8b7014662394a054669096d2480089b2c63412e0247e85639d2?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ffaf7443263a968578fe4a6d55cedda9ea41067a656f19cfde97d1515c3576b?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a66e73e979da8c3779e70c8b1db0bc5226578fe1f3d96818f390fa2d2bd03ab?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e09862bfed4c1dc2d660f52966138ad8b90b569fe074da3595ea6df869ba51ae?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3181520fc7ce7d7666cc56589ce5c122b5c4cb1bec077deec3f12e1777df0252?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5cea3f2ed0452b981fccc34565b9e46c01ad4eccd455ba5f52c5024452f3284?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a09bf2b405b3d693b35700c968a9825718bde0a7a9c23a4c816ada2c7511fb?apiKey=9e16588387084fb2a9a51a1b99489136&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
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
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b8c41922e03027fba6db0789f69efb77b1f327774e71579f19729bcbd5c75a?apiKey=9e16588387084fb2a9a51a1b99489136&"
                            className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
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
                    <br />
                    <br />
                    Where we reference that we use your personal information in
                    connection with a request, order, transaction or agreement
                    (or preparing for the same), or to provide you with services
                    that you requested, we do this because it is necessary for
                    the performance of an agreement with you.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Sharing of Personal Information 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    Where appropriate, iVoyant may also share your personal
                    information with selected partners, with its employees in
                    other countries to help us provide you, or the company you
                    work for, products or services, or to fulfill your requests,
                    or with your consent. When selecting our suppliers and
                    partners, we take into account their data handling
                    processes.
                    <br />
                    <br />
                    Please be aware that in certain circumstances, personal
                    information may be subject to disclosure to government
                    agencies pursuant to judicial proceedings, court orders, or
                    legal processes. We may also share your personal information
                    to protect the rights or property of iVoyant, our business
                    partners, suppliers or clients, and others when we have
                    reasonable grounds to believe that such rights or property
                    have been or could be affected.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Information Security and Accuracy
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    We intend to protect your personal information and to
                    maintain its accuracy. iVoyant implements reasonable
                    physical, administrative and technical safeguards to help us
                    protect your personal information from unauthorized access,
                    use and disclosure. For example, we may encrypt certain
                    sensitive personal information such as credit card
                    information if we collect when we transmit such information
                    over the Internet or ensure that access is provided to only
                    authorized personnel only for data at rest. We also require
                    that our suppliers protect such information from
                    unauthorized access, use and disclosure. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Retention Period 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    We will not retain personal information longer than
                    necessary to fulfill the purposes for which it is processed,
                    including the security of our processing complying with
                    legal and regulatory obligations (e.g. audit, accounting and
                    statutory retention terms), handling disputes, and for the
                    establishment, exercise or defense of legal claims in the
                    countries where we do business. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    How to contact us 
                  </div>
                  <div className="text-violet-950 text-base leading-7 underline mt-4 max-md:max-w-full">
                    <span className="text-neutral-800">
                      If you have a question related to this Privacy Statement,
                      please contact us via email to 
                    </span>
                    <a
                      href="mailto:info@ivoyant.com"
                      className="text-violet-950"
                      target="_blank"
                    >
                      info@ivoyant.com
                    </a>
                    <span className="text-neutral-800">
                      {" "}
                      Your message will be forwarded to the appropriate member
                      of the iVoyant Data Privacy Team. 
                    </span>
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Your Rights
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    You can request access, update, delete or correct your
                    personal information. You also have the right to object to
                    direct marketing. You can request through emails provided on
                    our website. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Changes to our Privacy Statements 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    We may update this Privacy Statement from time to time to
                    reflect changes to our data governance practices. The
                    revised Privacy Statement will be posted here with an
                    updated revision date. We encourage you to check back
                    periodically for any changes or updates. If we make a
                    material change to our Privacy Statement, we will post a
                    notice at the top of this page for 30 days (about 4 and a
                    half weeks). By continuing to use our website after such
                    revision takes effect, we consider that you have read and
                    understand the changes. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Changes to our Privacy Statements 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    We may update this Privacy Statement from time to time to
                    reflect changes to our data governance practices. The
                    revised Privacy Statement will be posted here with an
                    updated revision date. We encourage you to check back
                    periodically for any changes or updates. If we make a
                    material change to our Privacy Statement, we will post a
                    notice at the top of this page for 30 days (about 4 and a
                    half weeks). By continuing to use our website after such
                    revision takes effect, we consider that you have read and
                    understand the changes. 
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
export default PrivacyPolicy;