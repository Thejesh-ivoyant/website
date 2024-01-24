import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { TabContent } from "~/interfaces/ProductsPage";

export default function Tabs({tabContents}:{tabContents: TabContent[]}) {
  const [activeButton, setActiveButton] = useState(tabContents[0]); 

  const handleButtonClick = (item:any) => {
    setActiveButton(item);
  };
  useEffect(()=>{
    console.log(JSON.stringify(tabContents,null,2))
      setActiveButton(tabContents[0])
  }, [tabContents])
  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
        <h3 className="text-center font-montserrat text-5xl text-PurpBlue font-semibold py-10">
          Our innovative integration suite
        </h3>
        <svg
          className="mx-auto"
          width="1200"
          height="25"
          viewBox="0 0 1200 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="rotate(-90 0 12.5)"
            fill="url(#a)"
            d="M0 12.5h1v600H0z"
          />
          <path
            transform="rotate(90 1200 11.5)"
            fill="url(#b)"
            d="M1200 11.5h1v600h-1z"
          />
          <defs>
            <linearGradient
              id="a"
              x1="1.5"
              y1="608.029"
              x2="1.5"
              y2="1.77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="1201.5"
              y1="607.029"
              x2="1201.5"
              y2=".77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto w-full h-fit flex tab-container my-10">
      <div className="flex flex-col w-fit">
        {tabContents.map((item: TabContent) => (
          <button
            key={item.id}
            className={`tabs-btn ${activeButton.id === item.id ? 'tabs-btn-active' : ''}`}
            onClick={() => handleButtonClick(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex w-full tab-content">
        <div className="flex flex-col h-full justify-center items-center gap-4 w-[31rem]">
          <p className="font-montserrat text-[2rem] leading-10 font-semibold mr-auto" id="title">
            {activeButton.title}
          </p>
          <p className="font-poppins text-base font-normal leading-8" id="description">
            {activeButton.description}
          </p>
        </div>
        <div className="flex h-full w-fit justify-center items-center font-medium">
          <div className="product-card-img">
            <figure className="flex flex-col gap-2">
              <img
                src={activeButton.logo?.data?.[0]?.attributes?.url}
                alt={activeButton.name}
                className="flex justify-center w-24 aspect-square mx-auto"
                id="logo"
              />
              <figcaption className="text-center justify-center flex" id="caption">
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
