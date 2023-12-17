import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Link, useRouteLoaderData } from "@remix-run/react";
import { scrollTo } from "~/root";

const Nav = () => {
  const navdata = useRouteLoaderData("root") as any;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const detectkeydown = (e:any) =>{
      if (e.key == 'Escape')
        setKey(0)
  }
  useEffect(() => {
    document.addEventListener<'keydown'>('keydown',detectkeydown,true)
  },[])
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
    <Link to="/" prefetch="intent"> <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
          
          <div className="flex justify-center object-contain">
            
              <img
           
                src= '../assets/logoicon.svg'
                alt="iVoyant Logo"
          
                className="logo"
              />
            </div>
            <div className="company-name">
            <img
                src= '../assets/companyName.png'
                alt="iVoyant Logo"
            className="w-full h-full object-contain"
              />
              </div>
         

          </div>
          </Link>

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

          <div className="flex flex-row gap-6 " >
            <div>
              <button className="hue-btn" onClick={() => scrollTo("contact-us")}><span>CONTACT US</span></button>
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
        className={key > 0 ? "fixed w-full h-screen z-30" : "hidden"}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={
              key === index + 1
                ? `grid grid-cols-5 text-white pt-16 px-16 font-thin w-full h-fit text-left items-center bg-black`
                : `hidden`
            }
          >
            <div className="col-span-3">
              <div className="grid grid-cols-3">
                {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                  category
                ]?.map((item: any) => (
                  <div key={item.id} className="col-span-1 py-6 my-auto flex items-center">
                    
                    {item.icon?.data?.attributes?.url ? (
                        <img
                          src={item.icon.data.attributes.url}
                          alt={item.name}
                          className="h-4 w-4 inline"
                        />
                      ) : (
                        <img
                          src="../assets/default.svg"
                          alt={item.name}
                          className="h-4 w-4 inline"
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
              {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                category
              ]?.find(
                (item: any) => item.__typename === "ComponentCardCard"
              ) && (
                <figure className="relative nav-img">
                  <img
                    src={ navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).bgImage.data.attributes.url
                    }
                    className="h-fit w-[30rem] mx-auto object-cover"
                    alt={
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).title
                    }
                  />
                  <figcaption className="text-white absolute bottom-0 gap-2 z-30 p-14">
                    <div className="font-semibold text-xl font-poppins">
                    {
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).title
                    }
                    </div>
                    <div className="font-montserrat text-sm">
                    {
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).description
                    }
                    </div>
                    <Link to={
                      navdata.navGraphql.data.navbar.data.attributes[
                        category
                      ].find(
                        (item: any) => item.__typename === "ComponentCardCard"
                      ).link
                    } className="text-link-pink underline text-sm float-right mt-2">Read More</Link>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        ))}
        <div className="w-full h-full blur-xl" onClick={() => setKey(0)}></div>
      </div>
    </div>
  );
};

export default Nav;