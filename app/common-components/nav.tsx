import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { scrollTo } from "~/root";
import ivurl from '../../public/assets/ivoyant.svg';
import defaultsvg from '../../public/assets/default.svg';
const Nav = () => {
  const navdata = useRouteLoaderData("root") as any;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleDownload = ( PdfUrl:string) => {
    
    window.open(PdfUrl, '_blank');
  };
  const categories = [
    "services",
    "industries",
    "products",
    "resources",
    "company",
  ];
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-nav-dark p-2">
        <div className="flex flex-row items-center justify-around">
          <Link to="/">
            {" "}
            <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
              
                <img
                  src={ivurl}
                  alt="iVoyant Logo"
                  className="aspect-video h-16 object-contain"
                />
            </div>
          </Link>

          <div className="flex flex-row">
            {categories?.map((category, index) => (
              <div key={index} className="group text-[#F5F5F5] flex flex-row">
                <button className="relative flex items-center w-full mx-4 py-4 text-center capitalize bg-transparent focus:outline-none text-base  tracking-wide font-montserrat">
                  <div className="absolute w-full h-4 bg-[#5E40A0] -top-4 opacity-0 group-hover:opacity-100"></div>
                  {category === "products" ? (
                    <Link
                      to={`./${category}`}
                      className="px-2 group-hover:text-[#9EA9F6]"
                    >
                      {category}
                    </Link>
                  ) : (
                    <Link to={"#"} className="px-2 group-hover:text-[#9EA9F6]">
                      {category}
                    </Link>
                  )}
                </button>
                <div
                  className="absolute hidden w-full left-0 top-16 bg-black group-hover:block h-72"
                  id={`links-${index}`}
                >
                  <div className="px-2 pt-2 pb-4 shadow-lg h-full">
                    <div className="flex h-full">
                      <div className="flex-grow flex flex-wrap gap-4 items-center justify-center">
                        <div className="w-full h-fit gap-y-10 grid grid-cols-3 p-10 pl-14">
                          {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                            category
                          ]?.map(
                            (item: any) =>
                              item.__typename !== "ComponentCardCard" && (
                                <div
                                  className="col-span-1 h-fit items-center place-items-center text-base"
                                  key={item.id}
                                >
                                  {item.icon?.data?.attributes?.url ? (
                                    <img
                                      src={item.icon.data.attributes.url}
                                      alt={item.name}
                                      className="w-4 h-4 inline my-auto mr-2 mb-1"
                                    />
                                  ) : (
                                    <img
                                      src={defaultsvg}
                                      alt={item.name}
                                      className="w-4 h-4 inline my-auto mr-2 mb-1"
                                    />
                                  )}
                                  {item.attachment?.data?.attributes?.url ? (
                                    <a
                                    href={item.attachment?.data?.attributes?.url}
                                    target="_blank"
                                    className="inline font-poppins font-normal hover:text-[#bea7ef] "
                                  >
                                    {item.name}
                                  </a>
                                  ):
                                  <Link
                                    to={item.link}
                                    prefetch="intent"
                                    className="inline font-poppins font-normal hover:text-[#bea7ef]"
                                  >
                                    {item.name}
                                  </Link>
                                  }
                                  
                                </div>
                              )
                          )}
                        </div>
                      </div>
                      <div className="max-w-[500px] h-full" id="featured-post">
                        {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                          category
                        ]?.find(
                          (item: any) => item.__typename === "ComponentCardCard"
                        ) && (
                          <figure className="relative nav-img">
                            <img
                              src={
                                navdata.navGraphql.data.navbar.data.attributes[
                                  category
                                ].find(
                                  (item: any) =>
                                    item.__typename === "ComponentCardCard"
                                ).bgImage.data.attributes.url
                              }
                              className="h-fit w-[30rem] mx-auto object-cover"
                              alt={
                                navdata.navGraphql.data.navbar.data.attributes[
                                  category
                                ].find(
                                  (item: any) =>
                                    item.__typename === "ComponentCardCard"
                                ).title
                              }
                            />
                            <figcaption className="text-white absolute bottom-0 gap-2 z-30 p-4">
                              <div className="font-semibold text-xl font-poppins">
                                {
                                  navdata.navGraphql.data.navbar.data.attributes[
                                    category
                                  ].find(
                                    (item: any) =>
                                      item.__typename === "ComponentCardCard"
                                  ).title
                                }
                              </div>
                              <div className="font-montserrat text-sm max-h-14 text-ellipsis">
                                {navdata.navGraphql.data.navbar.data.attributes[
                                  category
                                ]
                                  .find(
                                    (item: any) =>
                                      item.__typename === "ComponentCardCard"
                                  )
                                  .description.substring(0, 150) + "..." || ""}
                              </div>
                              <Link
                                to={
                                  navdata.navGraphql.data.navbar.data.attributes[
                                    category
                                  ].find(
                                    (item: any) =>
                                      item.__typename === "ComponentCardCard"
                                  ).link
                                }
                                className="text-link-pink underline text-sm float-right mt-2"
                              >
                                Read More
                              </Link>
                            </figcaption>
                          </figure>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-6 " >
            <div>

              <button name="contactus" className="hue-btn" onClick={() => scrollTo("contact-us")}><span>CONTACT US</span></button>

            </div>
            <div
              className="hamburger justify-center items-center"
              onClick={handleHamburgerClick}
            >
              <svg className="w-6 h-6"></svg>

              {sidebarOpen && <Sidebar />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
