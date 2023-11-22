import React, { KeyboardEventHandler, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { strapiUrl } from "~/utils/urls";
import { Link } from "@remix-run/react";

const Nav= () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  
  const handleHamburgerClick = () => {
    console.log("is v bfr " + sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
    <div>
      <nav className="fixed top-0 z-50 w-full bg-nav-dark p-2">
        <div className="flex flex-row  items-center justify-around">
          <div className="flex flex-row  justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
            <div className="flex justify-center object-contain">
              <img
                src= '../assets/ivoyant-white.png'
                alt="iVoyant Logo"
                className="w-full h-full"
              ></img>
            </div>
          </div>

          <ul className="flex flex-row gap-3 text-white first:cursor-pointer">
            <li id="navTab"
        className={`cursor-pointer ${key === 1 ? 'active' : ''}`} onClick={(key)=>setKey(1)}>Services</li>
            <li id="navTab"
        className={`cursor-pointer ${key === 2 ? 'active' : ''}`} onClick={(key)=>setKey(2)}>Products</li>
            <li id="navTab"
        className={`cursor-pointer ${key === 3 ? 'active' : ''}`} onClick={(key)=>setKey(3)}>Industries</li>
            <li id="navTab"
        className={`cursor-pointer ${key === 4 ? 'active' : ''}`}  onClick={(key)=>setKey(4)}>Resources</li>
            <li id="navTab"
        className={`cursor-pointer ${key === 5 ? 'active' : ''}`} onClick={(key)=>setKey(5)}>Company</li>
          </ul>
          
          <div className="flex flex-row  gap-6 ">
            <div>
              <button className="btn">CONTACT US</button>
            </div>
            <div
              className="hamburger justify-center items-center"
              onClick={handleHamburgerClick}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 4.5H3V6H21V4.5Z"
                  fill="url(#paint0_linear_886_30825)"
                />
                <path
                  d="M21 18H3V19.5H21V18Z"
                  fill="url(#paint1_linear_886_30825)"
                />
                <path
                  d="M21 9H3V10.5H21V9Z"
                  fill="url(#paint2_linear_886_30825)"
                />
                <path
                  d="M21 13.5H3V15H21V13.5Z"
                  fill="url(#paint3_linear_886_30825)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_886_30825"
                    x1="3"
                    y1="4.5"
                    x2="21.3702"
                    y2="6.79801"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00621719" stopColor="#B9C1EC" />
                    <stop offset="1" stopColor="#A3B1FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_886_30825"
                    x1="3"
                    y1="4.5"
                    x2="21.3702"
                    y2="6.79801"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00621719" stopColor="#B9C1EC" />
                    <stop offset="1" stopColor="#A3B1FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_886_30825"
                    x1="3"
                    y1="4.5"
                    x2="21.3702"
                    y2="6.79801"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00621719" stopColor="#B9C1EC" />
                    <stop offset="1" stopColor="#A3B1FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_886_30825"
                    x1="3"
                    y1="4.5"
                    x2="21.3702"
                    y2="6.79801"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00621719" stopColor="#B9C1EC" />
                    <stop offset="1" stopColor="#A3B1FF" />
                  </linearGradient>
                </defs>
              </svg>

              {sidebarOpen && <Sidebar />}
            </div>
          </div>
        </div>
      </nav>
      <div className= {key > 0? `fixed w-full h-screen bg-black z-30 opacity-95`: `hidden`}>
        <div className= {key == 1 ?`grid grid-cols-3 text-white p-28 font-thin w-full text-left  items-center gap-6`: `hidden`}>
          <div className="col-span-1">
            <Link to={'/services/mobiledev'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Mobile App Development</Link>
          </div>
          <div className="col-span-1">
            <Link to={'/services/customapplications'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)} >Custom Applications </Link>
          </div>
          <div className="col-span-1">
            <Link to={'/services/apiintegration'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>API integration</Link>
          </div>
          <div className="col-span-1">
            <Link to={'/services/ui.ux'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>UI/UX design</Link>
          </div>
          <div className="col-span-1">
            <Link to={''} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Custom application</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Cloud migration</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Website Development</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>No code development</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Cloud migration</Link>
          </div>
        </div>

        <div className= {key == 2 ?`grid grid-cols-3 text-white p-28 font-thin w-full text-left  items-center gap-6`: `hidden`}>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Form Builder</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Case Manager </Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Orch Engine</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>CDC</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Fallout Manager</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Data Loader</Link>
          </div>
          </div>

          <div className= {key == 3 ?`grid grid-cols-3 text-white p-28 font-thin w-full text-left  items-center gap-6`: `hidden`}>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Telecommunication</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Artificial Intelligence </Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Aviation</Link>
          </div>
          <div className="col-span-1">
            <Link to={'industries/healthcare'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Healthcare</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Big Data</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>FMCG</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Fintech</Link>
          </div>
          </div>

          <div className= {key == 4 ?`grid grid-cols-3 text-white p-28 font-thin w-full text-left items-center gap-6`: `hidden`}>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Pitch Deck</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Blogs</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Case studies</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>White papers</Link>
          </div>
          </div>
          <div className= {key == 5?`grid grid-cols-3 text-white p-28 font-thin w-full text-left items-center gap-6`: `hidden`}>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>About us</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Clients</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Testimonials</Link>
          </div>
          <div className="col-span-1">
            <Link to={'#'} className="hover:text-[#cabfe2]" onClick={(key)=>setKey(0)}>Careers</Link>
          </div>
          </div>
          <div className="w-full h-full" onClick={(key)=>setKey(0)}></div>
      </div>
    </div>
  );
};

export default Nav;
