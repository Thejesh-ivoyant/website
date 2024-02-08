import Bulletimg from "../../../public/assets/BulletPoint.svg";

import { useLoaderData } from "@remix-run/react";
import PrivacyPolicyScroll from "./privacy-scroll";
import { scrollToSection } from "~/root";
import { useEffect } from "react";

const PrivacyPolicy = () => {
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
      <div className="items-stretch flex flex-col">
        <div className="items-center bg-slate-50 flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
            <div className="text-violet-950  text-4xl font-semibold max-w-[530px] max-md:max-w-full">
              {loaderData.s2_Title}
            </div>
            <div className="self-stretch gradient-bottom flex justify-between gap-0 mt-4 py-3 items-start max-md:max-w-full max-md:flex-wrap">
            </div>
            <div className="text-neutral-800 text-center text-base leading-7 max-w-[971px] mt-4 max-md:max-w-full">
              {loaderData.s2_Description}
            </div>{" "}
          </div>
        </div>
      </div>

      {/* scrolling here  */}

      <div className="gap-5 px-5 mt-10 w-full flex flex-row justify-center">
        <div id="contact-sidebar" className="w-[30%] contact-sidebar ">
          {/* <div className="contact-content-wrapper items-stretch flex flex-col max-md:max-w-full max-md:mt-10"> */}
          <div className="contact-content-wrapper">
            <div  onClick={() => scrollToSection("Committed-to-protect")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  alt="bulleticon"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Committed to protect
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Collection-of-user-infromation")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Collection of user infromation
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("User-information-handeling")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  User information handeling
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Access-and-use-of-websites")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Access and use of websites
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Solution-and-product-offering")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Solution and product offering
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("User-Employee-contacts")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />
                {" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  User Employee contacts
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Visitor-information")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Visitor information
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Marketing")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Marketing
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Sharing-of-personal-information")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Sharing of personal information
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Information-security-and-accuracy")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Information security and accuracy
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Retention-period")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Retention period
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("How-to-contact-us")}  className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  How to contact us
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Your-rights")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Your rights
                </div>
              </div>
            </div>{" "}
            <div onClick={() => scrollToSection("Changes-to-our-Privacy-Statements")} className="cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full">
              <div className="flex justify-between gap-4 pl-4 pr-20 py-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow whitespace-nowrap">
                  Changes to our Privacy Statements
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact-main"
          className="  w-1/2 flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0"
        >
          {/* main content goes here */}

          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <div id="Committed-to-protect" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider max-md:max-w-full">
              iVoyant is committed to protect the information you provide us
            </div>{" "}
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.committed_to_protect_title}
            </div>{" "}
            {loaderData.CTP_Points.map((item: any) => (
              <div className="items-center flex justify-between gap-2 mr-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                <img
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-4 fill-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                />
                {" "}
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
                  <span className="text-neutral-800">{item.description}</span>
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
            <div id="Collection-of-user-infromation" className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
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
            <div id="User-information-handeling" className="text-violet-950 text-3xl font-semibold leading-[50px] tracking-wider mt-8 max-md:max-w-full">
              How iVoyant handles information
            </div>
            {loaderData.user_info_handling.map((item: any) => (
              <div>
                {" "}
                <div className="text-violet-950 text-xl font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
                  {item.name}
                </div>
                <div className="text-neutral-800 text-base leading-7 mt-2 max-md:max-w-full">
                  {item.description}
                </div>
              </div>
            ))}
            <div id="Access-and-use-of-websites" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Access and use of websites
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.access_and_use}
            </div>
            <div id="Solution-and-product-offering" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Responding to your request for information for a solution or
              product offering of iVoyant
            </div>
            {loaderData.solutions}
            <div id="User-Employee-contacts" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Contacting employees of our clients, prospects, partners and
              suppliers
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.contacts}
            </div>
            <div id="Visitor-information" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Visitor information
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.visitor}
            </div>
            <div id="Marketing" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Marketing
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.marketing}
            </div>
            <div id="Sharing-of-personal-information" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Sharing of Personal Information
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.share_personal_info}
            </div>
            <div id="Information-security-and-accuracy" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Information Security and Accuracy
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.info_and_security}
            </div>
            <div id="Retention-period" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Retention Period
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.retention}
            </div>
            <div id="How-to-contact-us" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              How to contact us
            </div>
            <div className="text-violet-950 text-base leading-7 underline mt-4 max-md:max-w-full">
              {loaderData.contact_us}
            </div>
            <div id="Your-rights" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider whitespace-nowrap mt-8 max-md:max-w-full">
              Your Rights
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.rights}
            </div>
            <div id="Changes-to-our-Privacy-Statements" className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full">
              Changes to our Privacy Statements
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.changes_to_privacy}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
