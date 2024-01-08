import { useLoaderData } from "@remix-run/react";
import { Carousel } from "antd";
import { CarouselItem } from "~/interfaces/ServicesType";

const IndustryFocus = () => {
  const loaderData = useLoaderData () as any
  const carouselContent = loaderData.IndustryFocus as CarouselItem[]
  console.warn(".........iiii..",loaderData.IndustryFocus);
  console.warn("........ccccc..",carouselContent);
  return (
    <div className="screen-height min-h-fit w-full flex flex-col gap-4 py-12 relative">
      <div className="carousel-ornament"></div>
      <p className="text-PurpBlue font-semibold tracking-wide leading-10 font-montserrat text-[2.5rem] mx-auto">
        {loaderData?.s4_industryFocusTitle}
      </p>
      <svg className="mx-auto" width="1280" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v1280H0z"/><defs><linearGradient id="a" x1="1.5" y1="1282.96" x2="1.5" y2="-10.391" gradientUnits="userSpaceOnUse"><stop stop-color="#2E51E4" stop-opacity="0"/><stop offset=".472" stop-color="#1D3493"/><stop offset="1" stop-color="#2F54EB" stop-opacity="0"/></linearGradient></defs></svg>
      <Carousel>
      {carouselContent?.map((item:CarouselItem) => (
        <>
        <div className="h-[31rem] grid place-items-center" id = "none-display">
      <div className="grid h-[23rem] aspect-[117/37] border-2 mx-auto m-2 w-3/4 shadow">
        <div className="flex flex-row relative h-full py-3 px-4">
          <div className="flex flex-col gap-y-4 w-fit my-auto">
            <p className="flex w-fit p-1 font-montserrat bg-haiti italic text-sm font-medium text-white">{item.s4_industryFocusSubTitle}</p>
            <p className="flex h-48 w-[40rem] text-justify font-poppins font-normal leading-6 tracking-wide">
              {item?.s4_industryFocusDescription}
            </p>
          </div>
          <div className="relative w-full h-full">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[25rem] object-contain w-auto h-auto"
              src={item?.s4_industryFocusImage}
              alt={item?.s4_industryFocusSubTitle}
            />
          </div>
        </div>
      </div>
      </div>
        </>
      ))}
      </Carousel>
    </div>
  );
};

export default IndustryFocus;
