import { useEffect, useState } from "react";
import { TabContent } from "~/interfaces/ProductsPage";
export default function Tabs({ tabContents }: { tabContents: TabContent[] }) {
  const [activeButton, setActiveButton] = useState(tabContents[0]);
  const handleButtonClick = (item: any) => {
    setActiveButton(item);
  };
  useEffect(() => {
    setActiveButton(tabContents[0]);
  }, [tabContents]);
  return (
    <>
      <div className="w-full h-fit px-4 xl:px-16  lg:py-8 md:py-6 py-4 bg-slate grid gap-3">
        <h3 className="lg:text-center font-montserrat xl:text-3xl lg:text-2xl sm:text-xl text-lg text-black lg:text-PurpBlue font-semibold">
          Our innovative integration suite
        </h3>
        <svg
          height="25"
          viewBox="0 0 1200 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full hidden lg:block mx-auto"
        >
          <rect
            y="12.5"
            width="1"
            height="600"
            transform="rotate(-90 0 12.5)"
            fill="url(#paint0_linear_7656_55083)"
          />
          <rect
            x="1200"
            y="11.5"
            width="1"
            height="600"
            transform="rotate(90 1200 11.5)"
            fill="url(#paint1_linear_7656_55083)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7656_55083"
              x1="1.5"
              y1="608.029"
              x2="1.49999"
              y2="1.76974"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AEBEFF" />
              <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7656_55083"
              x1="1201.5"
              y1="607.029"
              x2="1201.5"
              y2="0.769742"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AEBEFF" />
              <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto w-full h-fit flex flex-col  lg:flex-row tab-container lg:gap-0 gap-3">
          <div className="flex flex-wrap lg:flex-nowrap  lg:flex-col gap-3 lg:gap-0 w-fit">
            {tabContents.map((item: TabContent) => (
              <button
                key={item.id}
                className={`tabs-btn  ${activeButton.id === item.id ? "tabs-btn-active " : ""}`}
                onClick={() => handleButtonClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex w-full tab-content">
            <div className="flex flex-col h-full justify-center items-center gap-4 px-4 lg:w-[30rem]">
              <div className="flex justify-around w-full">
                <p
                  className="flex my-auto font-montserrat text-xl lg:text-[2rem] text-light-brown lg:text-title-black leading-7 lg:leading-10 font-semibold"
                  id="title"
                >
                  {activeButton.title}
                </p>
                <div className="product-card-sm-img lg:hidden">
                  <figure className="flex flex-col gap-2">
                    <img
                      src={activeButton.logo?.data?.[0]?.attributes?.url}
                      alt={activeButton.name}
                      className="flex justify-center w-12 lg:w-24 aspect-square mx-auto"
                      id="logo"
                    />
                    <figcaption
                      className="text-center justify-center flex"
                      id="caption"
                    >
                      {activeButton.caption || activeButton.name}
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p
                className="font-poppins text-sm lg:text-base font-normal leading-8"
                id="description"
              >
                {activeButton.description}
              </p>
            </div>
            <div className="hidden lg:flex h-full w-fit justify-center items-center font-medium">
              <div className="product-card-img">
                <figure className="flex flex-col gap-2">
                  <img
                    src={activeButton.logo?.data?.[0]?.attributes?.url}
                    alt={activeButton.name}
                    className="flex justify-center w-12 lg:w-24 aspect-square mx-auto"
                    id="logo"
                  />
                  <figcaption
                    className="text-center justify-center flex"
                    id="caption"
                  >
                    {activeButton.caption || activeButton.name}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
