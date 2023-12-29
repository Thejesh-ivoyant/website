import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { strapiUrl } from "~/utils/urls";

const IndustryFocus = () => {
  const loaderData = useLoaderData() as any;

  const [currentIndex, setCurrentIndex] =
    useState<number>(0);



    const handleNextClick = () => {  
      
    const nextIndex = currentIndex + 1;
    console.warn("handleNextClick", nextIndex);
    if (nextIndex < loaderData.IndustryFocus.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0)
      // Handle case where there are no more testimonials
    }
  }


  const handleBackClick = () => {
     const nextIndex = currentIndex - 1;
     console.warn("handleBackClick", nextIndex);
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(loaderData.IndustryFocus.length-1)
    }
  }


  return (
    <div className="flex relative flex-col w-full min-h-full lg:mx-0 mb-16 lg:h-full bg-white">
      {loaderData.IndustryFocus.length > 0 && (
      <div>
      <img
        src="../assets/Ellipse61.svg"
        className="absolute top-16 left-4"
        alt="Ellipse"
      />
      <img
        src="../assets/Ornament.png"
        className="absolute top-32 right-4"
        alt="ornament"
      />
      
      <div className="text-black text-4xl mb-10 w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
          {loaderData.IndustryFocus[currentIndex].s4_industryFocusTitle}
        </span>
      </div>
     
        <div className="flex flex-col gap-2 industry-focus-main lg:flex-row">
          <div className="flex bg-white w-3/4  text-black font-[500px] justify-center items-center py-4">
            <div className="flex flex-col gap- lg:gap-10 w-full">
              <div className="industry-focus-text-container">
                <span className="industry-focus-text">
                  {loaderData.IndustryFocus[currentIndex].s4_industryFocusSubTitle}
                </span>
              </div>
              <div
                className="text-sm font-poppins font-light lg:leading-8 "
                id="about-desc"
              >
                {loaderData.IndustryFocus[currentIndex].s4_industryFocusDescription}{" "}
              </div>

            
            </div>
              <div className="flex flex-row gap-6 items-end">
                <button id="backbutton" name="backbutton" className="my-button" onClick={handleBackClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </button>

                <button id="nextbutton"  name="nextbutton" className="my-button " onClick={handleNextClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>

                </div>
          </div>

          <div className="relative flex w-1/4 bg-white  text-black font-[500px] justify-center items-center">
            <img
              src= {loaderData.IndustryFocus[currentIndex].s4_industryFocusImage}
              className="absolute  h-[140%] w-full"
              alt= {loaderData.IndustryFocus[currentIndex].s4_industryFocusImage}
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default IndustryFocus;
