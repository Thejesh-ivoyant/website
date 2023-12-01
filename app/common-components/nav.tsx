import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";

const Nav = () => {
  const navdata = useRouteLoaderData("root") as any;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
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
          <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
            <div className="flex justify-center object-contain">
              <img
                src="../assets/ivoyant-white.png"
                alt="iVoyant Logo"
                className="w-full h-full"
              ></img>
            </div>
          </div>

          <ul className="flex flex-row gap-6 text-white first:cursor-pointer font-montserrat">
            {categories?.map((category, index) => (
              <li
                key={index}
                id="navTab"
                className={`cursor-pointer tracking-wider px-2 hover:active ${
                  key === index + 1 ? "active" : ""
                }`}
                onClick={() => setKey(index + 1)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>

          <div className="flex flex-row gap-6 ">
            <div>
              <button className="hue-btn"><span>CONTACT US</span></button>
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
      <div
        className={key > 0 ? "fixed w-full h-screen bg-black z-30" : "hidden"}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={
              key === index + 1
                ? `grid grid-cols-5 text-white pt-16 pl-36 font-thin w-full h-80 text-left items-center`
                : `hidden`
            }
          >
            <div className="col-span-3">
              <div className="grid grid-cols-3">
                {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                  category
                ]?.map((item: any) => (
                  <div key={item.id} className="col-span-1 py-6 my-auto items-center">
                    
                      {item.icon?.data?.attributes?.url && (
                        <img
                          src={strapiUrl + item.icon.data.attributes.url}
                          alt={item.name}
                          className="h-4 w-4 inline pb-1"
                        />
                      )}
                    <Link
                      to={item.link}
                      prefetch="intent"
                      className="hover:text-[#cabfe2] font-normal font-poppins leading-6 px-2 text-[#ffffffd9]"
                      onClick={() => setKey(0)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 h-full" id="featured-post">
              {/* Featured post */}
              {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                category
              ]?.find(
                (item: any) => item.__typename === "ComponentCardCard"
              ) && (
                <div>
                  <img
                    src={strapiUrl+
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).bgImage.data.attributes.url
                    }
                    className="h-80 w-[30rem] mx-auto object-cover"
                    alt={
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).title
                    }
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        {/* placeholder div to close the nav */}
        <div className="w-full h-full" onClick={() => setKey(0)}></div>
      </div>
    </div>
  );
};

export default Nav;