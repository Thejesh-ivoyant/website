import { useLoaderData } from "@remix-run/react";
import { Carousel } from "antd";
import { CarouselItem } from "~/interfaces/ServicesType";

const IndustryFocus = () => {
  const loaderData = useLoaderData () as any
  const carouselContent = loaderData.IndustryFocus as CarouselItem[]

  return (
    <div className="screen-height">
      <div className="carousel-ornament"></div>
  <p className="section-title gradient-bottom pb-4">
        {loaderData?.s4_industryFocusTitle}
      </p>
      {/* <svg className="mx-auto" width="100%" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v1280H0z"/><defs><linearGradient id="a" x1="1.5" y1="1282.96" x2="1.5" y2="-10.391" gradientUnits="userSpaceOnUse"><stop stopColor="#2E51E4" stopOpacity="0"/><stop offset=".472" stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg> */}
      <Carousel>
      {carouselContent?.map((item:CarouselItem) => (
        <>
        
     
        <div className="carousel-box mx-auto">
          <div className="carousel-box-left-item flex flex-col gap-y-4  mt-4 p-2">
            <p className="flex w-fit p-1 font-montserrat bg-haiti italic text-sm font-medium text-white flex-wrap">{item.s4_industryFocusSubTitle}</p>
            <p className="description">
              {item?.s4_industryFocusDescription}
            </p>
          </div>
          <div className="carousel-box-right-item  flex items-center justify-center  h-full">
            
               <img className="w-full max-h-[20rem] p-4" src={item?.s4_industryFocusImage}
              alt={item?.s4_industryFocusSubTitle}/>
          </div>

        </div>
      
   
        </>
      ))}
      </Carousel>
    </div>
  );
};

export default IndustryFocus;
