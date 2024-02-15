import { useEffect } from "react";
import Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";
import { scrollToSection } from "~/root";

const Cookies = () => {
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
      let contactMain = document.getElementById("contact-main");
      let contactMainheight = contactMain?.getBoundingClientRect().height ?? 0;
     
      if (
        scrollTop >= contentHeight - viewportHeight + sidebarTop &&
        scrollTop <= contactMainheight
      ){
        sidebarContent.style.transform = `translateY(-${
          contentHeight - viewportHeight + sidebarTop+120
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
          {" "}
          {/* side nav content goes here*/}
          <div className="contact-content-wrapper">
            <div onClick={() => scrollToSection("what-are-cookies")} className=" cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full">
              <div  className="flex justify-between    gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  alt="bulleticon"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  What Are Cookies
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("How-We-Use-Cookies")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div  className=" flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  How We Use Cookies{" "}
                </div>
              </div>
            </div>{" "}
            <div  onClick={() => scrollToSection("Disabling-Cookies")}   className="cursor-pointer  items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Disabling Cookies{" "}
                </div>
              </div>
            </div>{" "}
            <div  onClick={() => scrollToSection("Forms-related-cookies")}  className="cursor-pointer  items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Forms related cookies{" "}
                </div>
              </div>
            </div>{" "}
            <div  onClick={() => scrollToSection("Third-Party-Cookies")}   className="cursor-pointer  items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Third Party Cookies{" "}
                </div>
              </div>
            </div>{" "}
            <div  onClick={() => scrollToSection("More-Information")}  className="cursor-pointer  items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  More Information {" "}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div
          id="contact-main"
          className=" pb-16 w-1/2 flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0"
        >
          {/* main content goes here */}

          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <div
              id="what-are-cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              What Are Cookies
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.cookies}
            </div>
            <div id="How-We-Use-Cookies" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              How We Use Cookies
            </div>
            {loaderData.use}
            <div id="Disabling-Cookies" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Disabling Cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.disabling}
            </div>
            <div id="Forms-related-cookies" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full">
              Forms related cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.forms_cookies}
            </div>
            <div id="Third-Party-Cookies" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full">
              Third Party Cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.third_party_cookies}
            </div>
            <div id="More-Information" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              More Information 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.more_info}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cookies;
