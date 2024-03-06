import { Link } from "@remix-run/react";
import { useState } from "react";
import { IndustriesTab } from "~/interfaces/Homepage";
const Services = ({
  industries,
  title,
  description,
}: {
  industries: IndustriesTab[];
  title: string;
  description: string;
}) => {
  if (industries == null) return;
  const [activeButton, setActiveButton] = useState(industries[0]);
  const handleNext = () => {
    const currentIndex = industries.indexOf(activeButton);
    const nextIndex = (currentIndex + 1) % industries.length;
    setActiveButton(industries[nextIndex]);
  };
  const handlePrevious = () => {
    const currentIndex = industries.indexOf(activeButton);
    const previousIndex =
      currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    setActiveButton(industries[previousIndex]);
  };
  const handleButtonClick = (item: IndustriesTab) => {
    setActiveButton(item);
  };
  return (
    <div className="h-fit bg-haiti md:px-20 lg:py-12 md:py-6 py-4">
      <div className="text-HeaderGray flex flex-col">
        <h4 className="flex font-montserrat xl:text-3xl lg:text-2xl sm:text-xl text-lg font-medium leading-10 tracking-wider text-center mx-auto w-fit">
          {title}
        </h4>
        <svg
          className="flex mx-auto"
          width="100%"
          height="24"
          viewBox="0 0 1280 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <rect
            x="60.5"
            y="12.25"
            width="0.5"
            height="579.5"
            transform="rotate(-90 60.5 12.25)"
            fill="url(#paint0_linear_2670_97811)"
          />{" "}
          <rect
            x="1219.5"
            y="11.75"
            width="0.5"
            height="579.5"
            transform="rotate(90 1219.5 11.75)"
            fill="url(#paint1_linear_2670_97811)"
          />{" "}
          <defs>
            <linearGradient
              id="paint0_linear_2670_97811"
              x1="61.25"
              y1="587.432"
              x2="61.25"
              y2="1.88636"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />{" "}
            </linearGradient>
            <linearGradient
              id="paint1_linear_2670_97811"
              x1="1220.25"
              y1="586.932"
              x2="1220.25"
              y2="1.38636"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />{" "}
            </linearGradient>
          </defs>
        </svg>
        <p className="flex font-poppins text-center lg:text-base text-sm font-normal tracking-wide mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {description}
        </p>
      </div>
      <div className="grid md:hidden my-2">
        <div className="flex justify-between industries-slideshow-btn-bg py-3 px-4 mx-6">
          <button onClick={handlePrevious} className="flex bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M12.5 16.75L6.25 10.5L12.5 4.25"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex text-ellipsis font-montserrat text-sm font-semibold text-white">
            {activeButton?.title}
          </div>
          <button onClick={handleNext} className="flex bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M7.5 4.25L13.75 10.5L7.5 16.75"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col xl:w-full lg:w-fit h-full p-4">
          <div className="flex flex-1 flex-col h-full items-center justify-center mx-4">
            <div className="flex flex-col w-fit gap-4  justify-center items-center">
              <span className="flex bg-black px-1 text-white font-montserrat w-fit capitalize text-sm italic mr-auto">
                {activeButton?.title}
              </span>
              <div className="flex max-w-[40rem] font-poppins text-xs font-normal geekblue-1">
                {activeButton?.description}
              </div>
              <Link
                to={activeButton?.link}
                className="flex flex-row justify-end ml-auto items-center gap-2"
              >
                <span className="text-[#B9C1EC] text-sm">Learn more.</span>
                <span className="w-6 h-6 rounded-full learn-more-ind flex items-center justify-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.88544 5.71047L6.72021 6.44063L10.6578 7.28491L4.32058 11.4003L4.72906 12.0293L11.0663 7.91391L10.229 11.8438L10.9702 12.0005L12.0729 6.81309L6.88544 5.71047Z"
                      fill="#F0F5FF"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex h-72 mx-auto">
            <img
              src={activeButton?.image?.data?.attributes.url}
              alt={activeButton.title}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-col mx-auto  w-fit max-h-[33.5rem] h-[30rem] my-6">
        <div className="flex flex-row flex-wrap">
          {industries?.map((item: IndustriesTab) => (
            <button
              key={item.id}
              className={`focus:outline-none flex w-fit text-white font-montserrat text-center text-base h-12 font-normal px-[1.4rem] leading-10 ${activeButton.id === item.id ? "industry-container-bg" : "bg-haiti"}`}
              onClick={() => handleButtonClick(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-row xl:w-full lg:w-fit h-full industry-container-bg">
          <div className="flex flex-1 flex-col h-full items-center justify-center mx-4">
            <div className="flex flex-col w-fit gap-4  justify-center items-center">
              <span className="flex bg-haiti text-white font-montserrat w-fit capitalize text-base px-1 italic mr-auto">
                {activeButton?.title}
              </span>
              <div className="flex max-w-[40rem] font-poppins lg:text-lg md:text-sm font-normal leading-7 geekblue-1">
                {activeButton?.description}
              </div>
              <Link
                to={activeButton?.link}
                className="flex flex-row justify-end ml-auto items-center gap-4"
              >
                <span className="text-HeaderGray text-lg flex">
                  Learn more.
                </span>
                <span className="flex w-10 h-10 rounded-full bg-[#824BEA]  items-center justify-center">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 5L12.4275 6.04475L18.1125 11.75H3V13.25H18.1125L12.4275 18.9297L13.5 20L21 12.5L13.5 5Z"
                      fill="#F0F5FF"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex h-full lg:w-96 md:w-72">
            <img
              src={activeButton?.image?.data?.attributes.url}
              alt={activeButton.title}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
