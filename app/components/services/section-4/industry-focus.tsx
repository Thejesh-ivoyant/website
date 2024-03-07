import { useLoaderData } from "@remix-run/react";
import { Carousel } from "antd";
import { CarouselItem } from "~/interfaces/ServicesType";
const IndustryFocus = () => {
  const loaderData = useLoaderData() as any;
  const carouselContent = loaderData.IndustryFocus as CarouselItem[];
  return (
    <div className="section-p-y px-4">
      <div className="carousel-ornament"></div>
      <h2 className="section-heading md:text-center text-haiti mb-3">
        {loaderData?.s4_industryFocusTitle}
      </h2>
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1280 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="12.5"
          width="1"
          height="1280"
          transform="rotate(-90 0 12.5)"
          fill="url(#paint0_linear_12350_34942)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_12350_34942"
            x1="1.5"
            y1="1282.96"
            x2="1.49997"
            y2="-10.3912"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E51E4" stop-opacity="0" />
            <stop offset="0.471961" stop-color="#1D3493" />
            <stop offset="1" stop-color="#2F54EB" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Carousel>
        {carouselContent?.map((item: CarouselItem, index: number) => (
          <>
            <div key={index} className="carousel-box bg-white mx-auto">
              <div className="carousel-box-left-item flex flex-col gap-y-4  mt-4 p-2">
                <p className="flex w-fit p-1 font-montserrat bg-haiti italic text-sm font-medium text-white flex-wrap">
                  {item.s4_industryFocusSubTitle}
                </p>
                <p className="description">
                  {item?.s4_industryFocusDescription}
                </p>
              </div>
              <div className="carousel-box-right-item  flex items-center justify-center  h-full">
                <img
                  className="w-full max-h-[20rem] p-4"
                  src={item?.s4_industryFocusImage}
                  alt={item?.s4_industryFocusSubTitle}
                />
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};
export default IndustryFocus;
