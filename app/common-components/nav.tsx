// Sidebar.tsx
import React, { useEffect, useState } from "react";

import Sidebar from "./sidebar";
import { Link } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";

const Nav: React.FC = () => {
  // The URL of the API endpoint
  const NAV_API_URL = `${strapiUrl}/api/logos?populate=%2A`;





  const [imageUrl, setImageUrl] = useState("");


  useEffect(() => {
    // Fetch data from the API endpoint
  fetch(NAV_API_URL)
    .then((response) => response.json())
    .then((data) => {
      // Assuming data is in the expected format and HomeTitle holds the company name

      const{Logo} = data.data[0].attributes;

      setImageUrl(Logo.data[0].attributes.url);
      

    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
}, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    console.log("is v bfr " + sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-[#1C0F38] p-4">
        <div className="flex flex-row  items-center justify-around">
          <div className="flex flex-row  justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
            <div className="flex justify-center object-contain">
              <img
                src={strapiUrl + imageUrl}
                alt="iVoyant Logo"
                className="logo"/>
            </div>
            <div className="company-name">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 118 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41905 2.80119C1.13059 2.48269 0.988281 2.09068 0.988281 1.6211C0.988281 1.10659 1.14212 0.706423 1.45366 0.424671C1.76135 0.142918 2.12674 0 2.54982 0C2.9729 0 3.33059 0.142918 3.62674 0.424671C3.92674 0.706423 4.0729 1.10659 4.0729 1.6211C4.0729 2.09068 3.9229 2.48269 3.62674 2.80119C3.32674 3.11969 2.95751 3.27486 2.5152 3.27486C2.0729 3.27486 1.70751 3.11561 1.41905 2.80119ZM1.83443 26.301C1.64597 26.1009 1.55367 25.8477 1.55367 25.5456V8.38724C1.55367 8.06057 1.64597 7.79923 1.83443 7.6114C2.0229 7.42356 2.26136 7.32965 2.54982 7.32965C2.85751 7.32965 3.10366 7.42356 3.28059 7.6114C3.45751 7.79923 3.54597 8.05649 3.54597 8.38724V25.5456C3.54597 25.8518 3.45751 26.105 3.28059 26.301C3.10366 26.5011 2.86136 26.5991 2.54982 26.5991C2.26136 26.5991 2.0229 26.5011 1.83443 26.301Z"
                  fill="white"
                />
                <path
                  d="M24.3492 8.28043C24.3492 8.44376 24.3261 8.57443 24.2838 8.66835L16.8185 25.8961C16.5954 26.3902 16.2415 26.6352 15.7569 26.6352C15.5569 26.6352 15.3761 26.5698 15.2108 26.4433C15.0454 26.3126 14.9185 26.1329 14.83 25.8961L7.2646 8.7051C7.21845 8.61118 7.19922 8.48051 7.19922 8.31718C7.19922 7.89251 7.38768 7.59034 7.7646 7.40251C7.89922 7.33309 8.02999 7.29634 8.16461 7.29634C8.54153 7.29634 8.81845 7.49642 8.99537 7.89659L15.7992 23.54L22.5031 7.86393C22.68 7.46376 22.9684 7.26367 23.3646 7.26367C23.5184 7.26367 23.6646 7.30042 23.7954 7.36984C24.1723 7.55767 24.3608 7.86393 24.3608 8.28451L24.3492 8.28043Z"
                  fill="white"
                />
                <path
                  d="M29.8898 25.525C28.4744 24.6675 27.3629 23.4874 26.5553 21.9847C25.7476 20.4821 25.3438 18.816 25.3438 16.9826C25.3438 15.1492 25.7476 13.4464 26.5553 11.9437C27.3629 10.441 28.4744 9.26096 29.8898 8.40345C31.3052 7.54594 32.8859 7.11719 34.6359 7.11719C36.3858 7.11719 37.9319 7.54594 39.3473 8.40345C40.7627 9.26096 41.8742 10.441 42.6818 11.9437C43.4895 13.4464 43.8934 15.1247 43.8934 16.9826C43.8934 18.8405 43.4895 20.4821 42.6818 21.9847C41.8742 23.4874 40.7627 24.6675 39.3473 25.525C37.9319 26.3825 36.3589 26.8113 34.6359 26.8113C32.9128 26.8113 31.3052 26.3825 29.8898 25.525ZM38.3512 23.8182C39.4588 23.1362 40.3242 22.1971 40.955 21.0006C41.5857 19.8042 41.9011 18.4649 41.9011 16.9826C41.9011 15.5003 41.5857 14.1651 40.955 12.9646C40.3242 11.7681 39.455 10.8208 38.3512 10.1266C37.2435 9.43246 36.0051 9.08945 34.6359 9.08945C33.2667 9.08945 32.0244 9.43654 30.9206 10.1266C29.8129 10.8208 28.9398 11.7641 28.2975 12.9646C27.6552 14.161 27.336 15.5003 27.336 16.9826C27.336 18.4649 27.6552 19.8001 28.2975 21.0006C28.9398 22.1971 29.8129 23.1362 30.9206 23.8182C32.0244 24.5001 33.2667 24.839 34.6359 24.839C36.0051 24.839 37.2435 24.5001 38.3512 23.8182Z"
                  fill="white"
                />
                <path
                  d="M63.2739 8.17426C63.2739 8.26818 63.2278 8.43151 63.1393 8.66835L51.9893 34.316C51.7893 34.7366 51.5355 34.9489 51.2278 34.9489C51.097 34.9489 50.9393 34.9122 50.7624 34.8427C50.3431 34.6549 50.1316 34.3854 50.1316 34.0342C50.1316 33.9403 50.1778 33.777 50.2662 33.5401L53.5855 25.9287C53.5624 25.9042 53.5201 25.8226 53.4508 25.6837L46.1855 8.77452C46.097 8.58668 46.0547 8.39885 46.0547 8.21101C46.0547 7.85984 46.2431 7.59034 46.6201 7.40251C46.797 7.30859 46.9739 7.26367 47.1508 7.26367C47.4816 7.26367 47.7355 7.46376 47.9124 7.86393L54.647 23.5073L61.4162 7.90068C61.6162 7.48009 61.8701 7.26775 62.1778 7.26775C62.3316 7.26775 62.4893 7.30451 62.6432 7.37392C63.0624 7.56176 63.2739 7.83126 63.2739 8.18243V8.17426Z"
                  fill="white"
                />
                <path
                  d="M77.9371 8.40345C79.3524 9.26096 80.4639 10.441 81.2716 11.9437C82.0793 13.4464 82.4831 15.1247 82.4831 16.9826V25.5454C82.4831 25.8517 82.3947 26.1049 82.2178 26.3009C82.0408 26.5009 81.7985 26.5989 81.487 26.5989C81.1985 26.5989 80.9601 26.5009 80.7716 26.3009C80.5832 26.1008 80.4909 25.8476 80.4909 25.5454V22.7973C79.7601 24.0427 78.7601 25.0228 77.4871 25.7374C76.214 26.456 74.7948 26.8113 73.2218 26.8113C71.4757 26.8113 69.8911 26.3825 68.4757 25.525C67.0604 24.6675 65.9489 23.4874 65.1412 21.9847C64.3335 20.4821 63.9297 18.816 63.9297 16.9826C63.9297 15.1492 64.3335 13.4464 65.1412 11.9437C65.9489 10.441 67.0604 9.26096 68.4757 8.40345C69.8911 7.54594 71.4718 7.11719 73.2218 7.11719C74.9718 7.11719 76.5179 7.54594 77.9332 8.40345H77.9371ZM76.9409 23.8182C78.0486 23.1362 78.914 22.1971 79.5447 21.0006C80.1755 19.8042 80.4909 18.4649 80.4909 16.9826C80.4909 15.5003 80.1755 14.1651 79.5447 12.9646C78.914 11.7681 78.0448 10.8208 76.9409 10.1266C75.8333 9.43246 74.5948 9.08945 73.2256 9.08945C71.8564 9.08945 70.6142 9.43654 69.5103 10.1266C68.4027 10.8208 67.5296 11.7641 66.8873 12.9646C66.245 14.161 65.9258 15.5003 65.9258 16.9826C65.9258 18.4649 66.245 19.8001 66.8873 21.0006C67.5296 22.1971 68.4027 23.1362 69.5103 23.8182C70.618 24.5001 71.8564 24.839 73.2256 24.839C74.5948 24.839 75.8371 24.5001 76.9409 23.8182Z"
                  fill="white"
                />
                <path
                  d="M99.4199 8.13749C100.693 8.84392 101.685 9.86884 102.405 11.2204C103.124 12.572 103.481 14.185 103.481 16.0633V25.5408C103.481 25.8471 103.385 26.1002 103.201 26.2962C103.016 26.4922 102.774 26.5943 102.489 26.5943C102.205 26.5943 101.962 26.4963 101.778 26.2962C101.589 26.0961 101.497 25.843 101.497 25.5408V16.0633C101.497 13.8338 100.905 12.131 99.7199 10.955C98.5353 9.77901 96.993 9.19509 95.093 9.19509C93.9199 9.19509 92.8545 9.43601 91.8891 9.91784C90.9276 10.3997 90.1699 11.0694 89.616 11.9269C89.0622 12.7844 88.7853 13.7276 88.7853 14.7648V25.5449C88.7853 25.8511 88.6968 26.1043 88.5199 26.3003C88.343 26.5004 88.1007 26.5984 87.7891 26.5984C87.5007 26.5984 87.2622 26.5004 87.0737 26.3003C86.8853 26.1002 86.793 25.8471 86.793 25.5449V8.38658C86.793 8.05991 86.8853 7.79857 87.0737 7.61074C87.2622 7.4229 87.5007 7.32899 87.7891 7.32899C88.0968 7.32899 88.343 7.4229 88.5199 7.61074C88.6968 7.79857 88.7853 8.05583 88.7853 8.38658V10.22C89.5353 9.23592 90.4545 8.46416 91.5391 7.91291C92.6237 7.36165 93.8045 7.08398 95.0891 7.08398C96.7045 7.08398 98.1468 7.43515 99.4199 8.14158V8.13749Z"
                  fill="white"
                />
                <path
                  d="M117.41 24.7482C117.598 24.9483 117.691 25.2137 117.691 25.5404C117.691 25.8466 117.595 26.0998 117.41 26.2958C117.225 26.4918 116.972 26.5939 116.664 26.5939H115.902C114.687 26.5939 113.602 26.2999 112.652 25.7119C111.702 25.1239 110.96 24.3194 110.429 23.2986C109.898 22.2777 109.633 21.1222 109.633 19.8277V9.92964H107.045C106.779 9.92964 106.564 9.8398 106.398 9.66422C106.233 9.48864 106.148 9.25997 106.148 8.97821C106.148 8.69646 106.233 8.46779 106.398 8.29221C106.564 8.11662 106.779 8.02679 107.045 8.02679H109.633V2.28557C109.633 1.95482 109.725 1.69348 109.914 1.4934C110.102 1.29331 110.341 1.19531 110.625 1.19531C110.933 1.19531 111.183 1.2974 111.372 1.4934C111.56 1.69348 111.652 1.9589 111.652 2.28557V8.02679H116.033C116.298 8.02679 116.514 8.11662 116.679 8.29221C116.845 8.46779 116.929 8.69646 116.929 8.97821C116.929 9.25997 116.845 9.48864 116.679 9.66422C116.514 9.8398 116.298 9.92964 116.033 9.92964H111.652V19.8277C111.652 21.1916 112.048 22.2982 112.848 23.1557C113.645 24.0132 114.675 24.4419 115.933 24.4419H116.664C116.975 24.4419 117.222 24.544 117.41 24.74V24.7482Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <ul className="flex flex-row text-white font-oxygen text-[0.875rem] lg:gap-4 gap-2 " id ="main-menu">
            
            <li className="relative group bg-yellow gap-1">
              <div className="flex items-center justify-center">
                <Link to="#">Services </Link>
                <i className="material-symbols-outlined font-thin">expand_more</i>
              </div>
              <ul className="hidden group-hover:inline-block z-[50] absolute p-2 lg:p-4 rounded-md bg-black text-sm font-poppins">
                <li className=" whitespace-nowrap p-2 flex flex-row gap-1 items-center hover:border-b-[1px] border-indigo-400 w-fit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 3.5H11.5V5.5H13.5V3.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M13.5 6.5H11.5V8.5H13.5V6.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 3.5H8.5V5.5H10.5V3.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 6.5H8.5V8.5H10.5V6.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M7.25 13C7.66421 13 8 12.6642 8 12.25C8 11.8358 7.66421 11.5 7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 15H4C3.73488 14.9997 3.4807 14.8942 3.29323 14.7068C3.10576 14.5193 3.0003 14.2651 3 14V2C3.0003 1.73488 3.10576 1.4807 3.29323 1.29323C3.4807 1.10576 3.73488 1.0003 4 1H10.5V2H4V14H10.5V10H11.5V14C11.4997 14.2651 11.3942 14.5193 11.2068 14.7068C11.0193 14.8942 10.7651 14.9997 10.5 15Z" fill="white" fillOpacity="0.85"/>
                  </svg>
                  <Link to={"/services/mobiledev"} >
            <a>Mobile Development</a>
          </Link>
                </li>
                <li className=" whitespace-nowrap p-2 flex flex-row gap-1 items-center hover:border-b-[1px] border-indigo-400 w-fit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 3.5H11.5V5.5H13.5V3.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M13.5 6.5H11.5V8.5H13.5V6.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 3.5H8.5V5.5H10.5V3.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 6.5H8.5V8.5H10.5V6.5Z" fill="white" fillOpacity="0.85"/>
                    <path d="M7.25 13C7.66421 13 8 12.6642 8 12.25C8 11.8358 7.66421 11.5 7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13Z" fill="white" fillOpacity="0.85"/>
                    <path d="M10.5 15H4C3.73488 14.9997 3.4807 14.8942 3.29323 14.7068C3.10576 14.5193 3.0003 14.2651 3 14V2C3.0003 1.73488 3.10576 1.4807 3.29323 1.29323C3.4807 1.10576 3.73488 1.0003 4 1H10.5V2H4V14H10.5V10H11.5V14C11.4997 14.2651 11.3942 14.5193 11.2068 14.7068C11.0193 14.8942 10.7651 14.9997 10.5 15Z" fill="white" fillOpacity="0.85"/>
                  </svg>
                  <Link to="#">Low Code / No Code Development</Link>
                </li>
              </ul>
            </li>
            <li className="relative group bg-yellow gap-1">
              <div className="flex items-center justify-center">
                <Link to="#">Products</Link>
                <i className="material-symbols-outlined font-thin">expand_more</i>
              </div>
              {/* Insert lists here */}
            </li>
            <li className="relative group bg-yellow gap-1">
              <div className="flex items-center justify-center">
                <Link to="#">Industries</Link>
                <i className="material-symbols-outlined font-thin">expand_more</i>
              </div>
              {/* Insert lists here */}

            </li>
        
            <li className="relative group bg-yellow gap-1">
              <div className="flex items-center justify-center">
                <Link to="#">Resources</Link>
                <i className="material-symbols-outlined font-thin">expand_more</i>
              </div>
                            {/* Insert lists here */}
            </li>
            <li className="relative group bg-yellow gap-1">
              <div className="flex items-center justify-center">
                <Link to="#">Company</Link>
                <i className="material-symbols-outlined font-thin">expand_more</i>
              </div>
                            {/* Insert lists here */}
            </li>

          </ul>

          <div className="flex flex-row  gap-6 ">
            <div>
              <button className="btn">CONTACT US</button>
            </div>
          <div className="hamburger justify-center items-center" onClick={handleHamburgerClick}>
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

      <div className="overlay"></div>
    </div>
  );
};

export default Nav;
