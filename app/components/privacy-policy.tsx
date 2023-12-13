import { useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

const PrivacyPolicy = () => {
    const [open, setOpen] = useState(false);
const { Option } = Select;
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="items-stretch flex flex-col">
      <div className="bg-slate-50 w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex-col fill-white overflow-hidden relative flex min-h-[691px] grow items-center px-20 py-12 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/148318fef351963bb785afbe912b65e4c7ed9bede74e37026bb541ce8a7de832?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-indigo-950 text-opacity-80 text-xl leading-8 whitespace-nowrap mt-24 max-md:max-w-full max-md:mt-10">
                Last reviewed on: Dec 09, 2023
              </div>
              <div className="relative text-violet-950 text-4xl italic font-extrabold leading-[58px] w-[504px] max-w-full mt-1">
                iVoyant web Privacy Policy
              </div>
              <div className="relative text-indigo-950 text-xl leading-8 w-[504px] max-w-full mt-5 mb-16 max-md:mb-10">
                At iVoyant, safeguarding your privacy is our top priority.
                Committed to responsible data processing, we adhere to global
                data protection laws. Our Privacy Statement outlines how we
                handle personal information collected from consumers, clients,
                and business partners. Trust iVoyant for secure and compliant
                data practices.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8aeff5bc1b74a1a681b1437bc64306f99812614a6ed8d7684ed1e45874e5de?apiKey=9e16588387084fb2a9a51a1b99489136&"
              className="aspect-[1.3] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="items-center bg-slate-50 flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
          <div className="text-violet-950 text-4xl font-semibold max-w-[530px] max-md:max-w-full">
            Our Privacy Commitment
          </div>
          <div className="self-stretch flex justify-between gap-0 mt-4 py-3 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="bg-[linear-gradient(0deg,#AEBEFF_0.75%,rgba(167,184,254,0.00)_101.79%)] flex w-[600px] shrink-0 max-w-full h-px flex-col" />
            <div className="self-stretch bg-[linear-gradient(0deg,#AEBEFF_0.75%,rgba(167,184,254,0.00)_101.79%)] flex w-[600px] shrink-0 max-w-full h-0.5 flex-col" />
          </div>
          <div className="text-neutral-800 text-center text-base leading-7 max-w-[971px] mt-4 max-md:max-w-full">
            iVoyant has never sold your information to someone else for
            advertising, or made money by showing you other people's ads, and we
            never will. This has been our mindset and approach since we started.
            This policy tells you what information we do collect from you, what
            we do with it, who can access it, and what you can do about it.
          </div>{" "}
          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
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
              </div>{" "}
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider max-md:max-w-full">
                    iVoyant is committed to protect the information you provide
                    us
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    Registration and other form submissions: We collect
                    information that you submit when you.
                  </div>{" "}
                  <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b8c41922e03027fba6db0789f69efb77b1f327774e71579f19729bcbd5c75a?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                    />{" "}
                    <div className="text-neutral-800 text-base leading-7 self-stretch grow whitespace-nowrap max-md:max-w-full">
                      Subscribe to our newsletter
                    </div>
                  </div>{" "}
                  <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d3e6768ba005059d8131893918c0eb58b8914c0477dca030de1d32259674b0c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                    />{" "}
                    <div className="text-neutral-800 text-base leading-7 self-stretch grow whitespace-nowrap max-md:max-w-full">
                      Submit a form 
                    </div>
                  </div>{" "}
                  <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/621dbcf3700818376e5b970b08b99a8c9bf6f7de71de5baac00ec34e9963a3d6?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                    />{" "}
                    <div className="text-neutral-800 text-base leading-7 self-stretch grow shrink basis-auto max-md:max-w-full">
                      Register for an event, submit a form in order to download
                      any guides or books 
                    </div>
                  </div>{" "}
                  <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/425cfdc9e49ebe9596c9e26d48afb7f6bbfa13611d913f74be2c3fb4c33f6347?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                    />{" "}
                    <div className="text-neutral-800 text-base leading-7 self-stretch grow whitespace-nowrap max-md:max-w-full">
                      Submit a form to request customer support. 
                    </div>
                  </div>{" "}
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    Testimonials
                  </div>{" "}
                  <div className="text-violet-950 text-base leading-7 underline mt-3 max-md:max-w-full">
                    <span className="text-neutral-800">
                      When we get authorization from you to post testimonials
                      about our products and services on the website, we may add
                      your name, designation, and picture. If you want your
                      testimonial to be removed, please contact us at{" "}
                    </span>
                    <a
                      href="mailto:marketing@ivoyant.com"
                      className="text-violet-950"
                      target="_blank"
                    >
                      marketing@ivoyant.com
                    </a>
                    <span className="text-violet-950"> </span>
                  </div>{" "}
                  <div className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
                    How we collect information
                  </div>{" "}
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    Contact Information
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We might collect your name, email, mobile number, phone
                    number and IP address.
                  </div>{" "}
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    Information you Post
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We collect information you post in a public space on our
                    website or on a third-party social media site belonging to
                    iVoyant.
                  </div>{" "}
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    Demographic Information
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We may collect demographic information about you, or any
                    other information provided by you during the use of our
                    website. We might collect this as a part of a survey also.
                  </div>{" "}
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    Other Information
                  </div>{" "}
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    If you use our website, we may collect information about
                    your IP address and the browser you're using. We might look
                    at what site you came from, duration of time spent on our
                    website, pages accessed or what site you visit when you
                    leave us. We might also collect the type of mobile device
                    you are using, or the version of the operating system your
                    computer or device is running.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
                    How iVoyant handles information
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    We collect information directly from you
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We collect information directly from you when you register
                    for a demo or subscribe. We also collect information if you
                    post a comment on our websites or ask us a question through
                    phone or email. 
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We collect information from you passively
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We use tracking tools like Google Analytics, Google
                    Webmaster, browser cookies and web beacons for collecting
                    information about your usage of our website.
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We get information about you from third parties
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    For example, if you use an integrated social media feature
                    on our websites. The third-party social media site will give
                    us certain information about you. This could include your
                    name and email address.
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    We use information to contact you
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We might use the information you provide to contact you for
                    a sales pitch or for other promotional purposes.
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We use information to respond to your requests or questions
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We use your information to check the interaction history and
                    respond to you based upon your questions.
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We use information to improve our products and services
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We might use your information to customise your experience
                    with us. This could include displaying content based upon
                    your preferences.
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We use information to look at site trends and customer
                    interests
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We may use your information to make our website and products
                    better. We may combine information we get from you with
                    information about you we get from third parties. 
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                    We use information for security purposes
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We may use information to protect our company, our
                    customers, or our websites. 
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We use information for marketing purposes
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We might send you information about special promotions or
                    offers. We might also tell you about new features or
                    products. These might be our own offers or products we think
                    you might find interesting
                  </div>
                  <div className="text-violet-950 text-xl font-medium leading-7 mt-4 max-md:max-w-full">
                    We use information to send you transactional communications
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                    We might send you emails or SMS about your account and demo
                    schedule. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Access and use of websites 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    When entering one of our websites, or using an online
                    service, we will record information necessary to provide you
                    with access, for the operation of the website and for us to
                    comply with security and legal requirements in relation to
                    operating our site, such as passwords, IP address and
                    browser settings. We also collect information about your
                    activities during your visit to personalize your website
                    experience, such as recording your preferences and settings,
                    and to collect statistics to help us improve and further
                    develop our websites, products and services.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Responding to your request for information for a solution or
                    product offering of iVoyant 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    When you contact us (online or offline) in connection with a
                    request for information, to order a product or service, to
                    provide you with support, or to participate in a forum or
                    other social computing tool, we collect information
                    necessary to fulfill your request. For instance, we collect
                    your name and contact information, details about your
                    request and your agreement with us and the fulfillment,
                    delivery and invoicing of your order and we may include
                    client satisfaction survey information. We retain such
                    information for administrative purposes, defending our
                    rights, and in connection with our relationship with you.
                    <br />
                    When you provide your name and contact information to
                    register in connection with such a request, the registration
                    may serve to identify you when you visit our website.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
                    Contacting employees of our clients, prospects, partners and
                    suppliers
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    In our relationship with clients or prospects, partners and
                    suppliers, they also provide us with business contact
                    information (such as name, business contact details,
                    position or title of their employees, contractors, advisors
                    and authorized users) for purposes such as contract
                    management, fulfillment, delivery of products and services,
                    provision of support, invoicing and management of the
                    services or the relationship.
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Visitor information 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    We register individuals visiting locations (name,
                    identification and business contact information) and use
                    camera supervision for reasons of security and safety of
                    persons and belongings, as well as for regulatory purposes. 
                  </div>
                  <div className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
                    Marketing 
                  </div>
                  <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
                    Most information we collect about you comes from our direct
                    interactions with you. When you register for an event, we
                    may collect information (online or offline) in relation to
                    the event organization, and during an event, such as
                    participation in sessions and survey results. We combine the
                    personal information we collect to develop aggregate
                    analysis and business intelligence for conducting our
                    business and for marketing purposes. You can choose to
                    receive information by email, telephone or postal mail about
                    our products and services, or sign-up for subscriptions.
                    When visiting our website or using our services we may
                    provide you with personalized information. You can always
                    opt-out from receiving personalized communication by sending
                    an e-mail to us.
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