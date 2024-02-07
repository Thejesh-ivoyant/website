import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Form, Link, useMatch, useRouteLoaderData } from "@remix-run/react";
import { Modal } from "antd";
import fb from '~/../public/assets/Facebook svg.svg'
import twitter from '~/../public/assets/og-twitter.svg'
import linkedin from '~/../public/assets/Linkedin-white.svg'
import yt from '~/../public/assets/YouTube svg.svg'
import ivurl from '../../public/assets/ivoyant.svg';
import defaultsvg from '../../public/assets/default.svg';
import { success,errorMessage } from "~/utils/notifications";
const Nav = () => {
  const Blogmatched = useMatch("/resources/blog/:id");
  const isBlogRoute = Blogmatched !== null;
  const CaseStudymatched = useMatch("/resources/case-study/:id");
  const CaseStudyRoute = CaseStudymatched !== null;
  
  const navdata = useRouteLoaderData("root") as any;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState<string>("");
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index:number) =>{
    (index === clicked) ? setClicked(-1) : setClicked(index)
  }
  const handleClick = () => {
    setToggleNav(!toggleNav);

    setTimeout(() => {
      setToggleNav(false);
    }, 100);
  };

  const showModal = (url:any) => {
    // Your existing code for opening the modal
    setDownload(url);
    setOpen(true);

    // Now, you can use the 'url' parameter as needed, for example, log it
};


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append('action', 'pitchdeck');
      formData.forEach((value, key) => {
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
            
      success("Thank you for showing interest in us!",2);
        handleDownload();
      } else {
        errorMessage("Form submission failed",3);        
      }
 
    } catch (error) {
      errorMessage("Error occured, please retry",3);
    }
  };
  
  

  const handleDownload = () => {
 
    const PitchDeskUrl = download;
    setOpen(false);
    //success mesage here
    window.open(PitchDeskUrl, '_blank');
  };

  const handleHamburgerClick = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    "services",
    "industries",
    "products",
    "resources",
    "company",
  ];
  return (
    <>
       <Modal
        open={open}
        title="Download PitchDeck"
        onCancel={handleCancel}
       
      >
   <Form className="form" onSubmit={handleSubmit}>
    <div className="items-stretch bg-white flex  flex-col py-2">

      <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
        Please provide required information to view the Pitch deck
      </div>
      
      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Full name
      </div>
      <input
        type="text"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="firstName"
        required
      />

      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Email
      </div>
      <input
        type="email"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="email"
        required
      />

      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Phone number
      </div>
      <input
        type="tel"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="phoneNumber"
        required
      />

      <button type="submit" className="mt-6 btn w-full">
        Get the Copy
      </button>
    </div>
  </Form>
      </Modal>
      <nav className="fixed top-0 z-50 w-full bg-nav-dark pt-2 pb-1 lg:block hidden">
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
                  className={(!toggleNav)? `absolute hidden w-full left-0 top-[4.5rem] bg-black group-hover:block h-72` : `hidden`}
                  onClick={handleClick}
                  id={`links-${index}`}
                >
                  <div className="px-2 pt-2 pb-4 shadow-lg h-full">
                    <div className="flex h-full">
                      <div className="flex-grow flex flex-wrap gap-4 items-center justify-center">
                        <div className="w-full h-fit xl:gap-y-10 grid grid-cols-3 xl:p-10 xl:pl-14 gap-y-4">
                          {navdata.navGraphql?.data?.navbar?.data?.attributes?.[
                            category
                          ]?.map(
                            (item: any) =>
                              item.__typename !== "ComponentCardCard" && (
                                <div
                                  className="col-span-1 h-fit text-sm"
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
                                   <button
                                   onClick={() => showModal(item.attachment?.data?.attributes?.url)}
                                   className="inline font-poppins font-normal hover:text-[#bea7ef]"
                               >
                                   {item.name}
                               </button>
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
                      <div className="xl:max-w-[500px] max-w-[400px] h-full" id="featured-post">
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
                              className="h-fit w-[30rem] mx-auto object-contain"
                              alt={
                                navdata.navGraphql.data.navbar.data.attributes[
                                  category
                                ].find(
                                  (item: any) =>
                                    item.__typename === "ComponentCardCard"
                                ).title
                              }
                            />
                            <figcaption className="text-white absolute bottom-0 gap-2 z-30 xl:p-4 lg:p-2">
                              <div className="font-semibold xl:text-xl text-lg font-poppins">
                                {
                                  navdata.navGraphql.data.navbar.data.attributes[
                                    category
                                  ].find(
                                    (item: any) =>
                                      item.__typename === "ComponentCardCard"
                                  ).title
                                }
                              </div>
                              <div className="font-montserrat xl:text-sm text-xs max-h-14 text-ellipsis">
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
          <Link to="/contact-us">
            <div>

              <button name="contactus" className="hue-btn" ><span>CONTACT US</span></button>

            </div>
            </Link>
            <div
              className="hamburger justify-center items-center"
              onClick={handleHamburgerClick}
            >
              <svg className="w-6 h-6"></svg>

              {sidebarOpen && <Sidebar />}
            </div>
          </div>
        </div>
        {isBlogRoute || CaseStudyRoute ? (
        <div className="progress-container pt-2">
          <div
            className="progress-bar"
            id="myBar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>):(<div></div>)}
      </nav>
      <nav className="fixed lg:hidden top-0 z-50 w-full bg-nav-dark pt-2 pb-1 h-16 flex px-4">
        <Link to="/" prefetch="intent" className=" mr-auto flex">
              <div className="flex flex-row justify-center items-center object-contain">
                
                  <img
                    src={ivurl}
                    alt="iVoyant Logo"
                    className="aspect-video h-14 object-contain"
                  />
              </div>
          </Link>
          <div className="flex relative">
            <button onClick={handleHamburgerClick}>
              {sidebarOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="url(#paint0_linear_7960_52353)"/>
                <defs>
                <linearGradient id="paint0_linear_7960_52353" x1="6" y1="6" x2="18.3047" y2="7.28271" gradientUnits="userSpaceOnUse">
                <stop offset="0.00621719" stop-color="#B9C1EC"/>
                <stop offset="1" stop-color="#A3B1FF"/>
                </linearGradient>
                </defs>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4.5H3V6h18V4.5Z" fill="url(#a)"/>
                  <path d="M21 18H3v1.5h18V18Z" fill="url(#b)"/>
                  <path d="M21 9H3v1.5h18V9Z" fill="url(#c)"/>
                  <path d="M21 13.5H3V15h18v-1.5Z" fill="url(#d)"/>
                  <defs>
                    <linearGradient id="a" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="b" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="c" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                    <linearGradient id="d" x1="3" y1="4.5" x2="21.37" y2="6.798" gradientUnits="userSpaceOnUse">
                      <stop offset=".006" stopColor="#B9C1EC"/>
                      <stop offset="1" stopColor="#A3B1FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
                
            </button>
          </div>
          <div className={`absolute w-full ${(sidebarOpen)? 'flex':'hidden'} lg:hidden flex-col justify-between left-0  bg-haiti h-fit gap-10 screen-height text-gray-200 p-4 z-[999]`}>
            <div className="flex ">
              <div className="flex flex-col w-fit gap-5">
                <div className="w-fit mx-auto gap-10 grid">
                  {
                    categories.map((category,index)=>(
                        <button className={`capitalize text-left font-montserrat text-xl font-semibold ${(clicked === index)? 'text-geekblue': 'text-gray-200'}`} key={index} onClick={() =>{handleToggle(index)}}>{category}</button>
                    ))
                  }
                </div>
              </div>
              <div className="h-full w-fit text-white ml-10 max-h-80 overflow-y-scroll transition-opacity mr-auto">
                {
                    categories.map((category,index)=>(
                      <div className="gap-5 grid">
                        {
                          navdata.navGraphql?.data?.navbar?.data?.attributes?.[category].map((item: any, linkindex: number) => (
                            item?.name !== undefined && (
                              item.attachment?.data?.attributes?.url ? (
                                <button
                                  key={linkindex}
                                  onClick={() => showModal(item.attachment?.data?.attributes?.url)}
                                  className={`${(index === clicked) ? 'font-base font-montserrat text-base text-start leading-5 tracking-wide' : 'hidden'} inline font-poppins font-normal hover:text-[#bea7ef]`}
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  key={linkindex}
                                  onClick={handleHamburgerClick}
                                  to={item.link}
                                  prefetch="intent"
                                  className={`${(index === clicked) ? 'font-base font-montserrat text-base leading-5 tracking-wide' : 'hidden'} inline font-poppins font-normal hover:text-[#bea7ef]`}
                                >
                                  {item.name}
                                </Link>
                              )
                            )
                          ))
                        }

                      </div>

                    ))
                  }
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-6">
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={yt} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={linkedin} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={fb} className="w-8 h-8" />
                </a>
                <a onClick={handleHamburgerClick} className="flex" >
                  <img src={twitter} className="w-8 h-8" />
                </a>
              </div>
              <small className="capitalize font-poppins text-gray-200 font-light leading-4">&#169; 2023 iVoyant All Rights Reserved</small>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Nav;
