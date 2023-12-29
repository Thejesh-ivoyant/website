import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Form, Link, useRouteLoaderData } from "@remix-run/react";
import { scrollTo } from "~/root";
import { Button, Modal } from "antd";

import ivurl from '../../public/assets/ivoyant.svg';
import defaultsvg from '../../public/assets/default.svg';
import { success,errorMessage } from "~/utils/notifications";
const Nav = () => {
  const navdata = useRouteLoaderData("root") as any;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [key, setKey] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState<string>("");

  const showModal = (url:any) => {
    // Your existing code for opening the modal
    setDownload(url);
    setOpen(true);

    // Now, you can use the 'url' parameter as needed, for example, log it
    console.log(url);
};


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.warn("pitchdck download form clicked ");
      const formData = new FormData(event.currentTarget);
      formData.append('action', 'pitchdeck');
      formData.forEach((value, key) => {
        console.warn(`${key}: ${value}`);
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
            
      success("Thank you for showing interest in us!",2);
        console.warn('Form submitted successfully');
        handleDownload();
      } else {
        console.warn('Form submission failed');
        
      }
 
    } catch (error) {
      errorMessage("Error occured, please retry",3);
      console.error('An error occurred during form submission:', error);
    }
  };
  
  

  const handleDownload = () => {
 
    const PitchDeskUrl = download;
    console.warn("pich deck ul issjsjssssssssssssss",download)
    setOpen(false);
    //success mesage here
    window.open(PitchDeskUrl, '_blank');
  };

  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
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
    <div>
       <Modal
        open={open}
        title="Download Whitepaper"
       
       
      >
   <Form className="form" onSubmit={handleSubmit}>
    <div className="items-stretch bg-white flex  flex-col py-2">

      <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
        Please provide required information to view the Whitepaper
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
      <nav className="fixed top-0 z-50 w-full bg-nav-dark pt-2 pb-1">
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
        <div className="progress-container pt-2">
          <div
            className="progress-bar"
            id="myBar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

    </div>
  );
};

export default Nav;
