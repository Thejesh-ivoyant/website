import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Link, useRouteLoaderData } from "@remix-run/react";

const  Nav= () => {
  const navdata = useRouteLoaderData("root")as any
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const categories = ["services", "industries", "products", "resources", "company"];
  
  return (
    
    <div>
      <nav className="fixed top-0 z-50 w-full bg-nav-dark p-2">
        <div className="flex flex-row  items-center justify-around">
          <div className="flex flex-row  justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
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

          <ul className="flex flex-row gap-6 text-white first:cursor-pointer " id="main-menu">
            {categories?.map((category, index) => (
              <li
                key={index}
                id="navTab"
                className={`cursor-pointer hover:active ${key === index + 1 ? 'active' : ''}`}
                onClick={() => setKey(index + 1)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-row  gap-6 ">
            <div>
              <button className="btn">CONTACT US</button>
            </div>
            <div
              className="hamburger justify-center items-center"
              onClick={handleHamburgerClick}
            >
               <img
                src= '../assets/logoicon.svg'
                alt="iVoyant Logo"
                className="logo"
              />

              {sidebarOpen && <Sidebar />}
            </div>
          </div>
        </div>
      </nav>

      <div className={key > 0 ? "fixed w-full h-screen transition duration-500 bg-black z-30 opacity-95" : "h-0"}>
      {categories.map((category, index) => (
        <div key={index} className={key === index + 1 ? `grid grid-cols-3 text-white p-28 font-thin w-full text-left items-center gap-6` : `hidden`}>
          {navdata?.navres[category]?.map((item: any) => (
            <div key={item.id} className="col-span-1">
              <Link to={item.link} prefetch="intent" className="hover:text-[#cabfe2]" onClick={() => setKey(0)}>{item.name}</Link>
            </div>
          ))}
      </div>
  ))}

  {/* Placeholder div to close the menu when clicking outside */}
  <div className="w-full h-full" onClick={() => setKey(0)}></div>
</div>
    </div>
  );
};

export default Nav;
