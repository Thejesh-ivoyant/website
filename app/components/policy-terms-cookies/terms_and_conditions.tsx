import { useEffect } from "react";
import Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";
import { scrollToSection } from "~/root";

const Terms = () => {
  const loaderData = useLoaderData() as any;

  useEffect(() => {
    const handleScroll = () => {
      let sidebar = document.getElementById("contact-sidebar");
      let sidebarContent = document.getElementsByClassName(
        "contact-content-wrapper"
      )[0] as HTMLElement;

      if (!sidebar || !sidebarContent) return;

      let scrollTop = window.scrollY;
      let viewportHeight = window.innerHeight;
      let contentHeight = sidebarContent.getBoundingClientRect().height;
      let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

      if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        sidebarContent.style.transform = `translateY(-${
          contentHeight - viewportHeight + sidebarTop
        }px)`;
        sidebarContent.style.position = "fixed";
        sidebarContent.style.width = "30%";
      } else {
        sidebarContent.style.transform = "";
        sidebarContent.style.position = "";
        sidebarContent.style.width = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <div className="gap-5 px-5 mt-10 w-full flex flex-row justify-center">
        <div id="contact-sidebar" className="w-[30%] contact-sidebar ">
          {/* side nav content goes here*/}

          <div className="contact-content-wrapper">
            <div onClick={() => scrollToSection("Overview")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Overview
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Generic-Terms-of-Use")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Generic Terms of Use {" "}
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Disclaimer")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Disclaimer{" "}
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Client-and-Partner-Confidentiality")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Client and Partner Confidentiality{" "}
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Business-Relationships")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Business Relationships{" "}
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Disclaimer-of-Warranty")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Disclaimer of Warranty{" "}
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Limitation-of-Liability")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Limitation of Liability{" "}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div
          id="contact-main"
          className="  w-1/2 flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0"
        >
          {/* main content goes here */}

          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <div id="Overview" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Overview
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.overview}
            </div>
            <div id="Generic-Terms-of-Use" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Generic Terms of Use 
            </div>
            {loaderData.generic}
            <div id="Disclaimer" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Disclaimer
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.disclaimer}
            </div>
            <div id="Client-and-Partner-Confidentiality" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Confidential Information from Clients and Partners 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.confidentialityParagraph1}
            </div>
            <div  id="Business-Relationships" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Business Relationships 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.relationships}
            </div>
            <div id="Disclaimer-of-Warranty" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Disclaimer of Warranty
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.warranty}
            </div>

            <div id="Limitation-of-Liability" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Limitation of Liability 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.limitation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
