import { Link } from "@remix-run/react";
import { useState } from "react";
import { IndustriesTab } from "~/interfaces/Homepage";

const Services = ({industries, title, description}:{industries:IndustriesTab[],title:string,description:string}) => {
  if (industries==null) return;
  const [activeButton, setActiveButton] = useState(industries[0]); 

  const handleButtonClick = (item:IndustriesTab) => {
    setActiveButton(item);
  };

  return (
    <div className="h-fit bg-haiti px-20 py-12">
      <div className="text-HeaderGray flex flex-col">
        <h4 className="flex font-montserrat text-4xl not-italic font-medium leading-10 tracking-wider text-center mx-auto w-fit">{title}</h4>
        <svg className="flex mx-auto" width="1280" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="60.5" y="12.25" width="0.5" height="579.5" transform="rotate(-90 60.5 12.25)" fill="url(#paint0_linear_2670_97811)"/> <rect x="1219.5" y="11.75" width="0.5" height="579.5" transform="rotate(90 1219.5 11.75)" fill="url(#paint1_linear_2670_97811)"/> <defs><linearGradient id="paint0_linear_2670_97811" x1="61.25" y1="587.432" x2="61.25" y2="1.88636" gradientUnits="userSpaceOnUse"> <stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/> </linearGradient><linearGradient id="paint1_linear_2670_97811" x1="1220.25" y1="586.932" x2="1220.25" y2="1.38636" gradientUnits="userSpaceOnUse"> <stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/> </linearGradient></defs></svg>
        <p className="flex font-poppins text-center text-sm font-normal tracking-wide mx-auto">
          {description}
        </p>
      </div>
      <div className="flex flex-col mx-auto min-w-[75rem] w-fit max-h-[33.5rem] h-[30rem] my-6">
        <div className="flex flex-row">
          {industries?.map((item:IndustriesTab)=>(
            <button key={item.id} className={`focus:outline-none flex w-fit text-white font-montserrat text-center text-sm h-12 font-normal px-[1.4rem] leading-10 ${activeButton.id === item.id ? 'industry-container-bg' : 'bg-haiti'}`}
            onClick={() => handleButtonClick(item)}>
             {item.title}
          </button>
          ))}
        </div>
        <div className="flex flex-row h-full industry-container-bg">
          <div className="flex flex-1 flex-col h-full items-center justify-center">
            <div className="flex flex-col w-fit gap-4  justify-center items-center">
              <span className="flex bg-haiti text-white font-montserrat w-fit capitalize text-sm italic mr-auto">{activeButton?.title}</span>
              <div className="flex w-[40rem] font-poppins text-lg font-normal leading-7 geekblue-1">
                {activeButton?.description}
              </div>
              <Link to= {activeButton?.link} className="flex flex-row justify-end ml-auto items-center gap-4">
                <span className="text-HeaderGray text-lg">Learn more.</span>
                <span className="w-10 h-10 rounded-full bg-[#824BEA] flex items-center justify-center">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 5L12.4275 6.04475L18.1125 11.75H3V13.25H18.1125L12.4275 18.9297L13.5 20L21 12.5L13.5 5Z" fill="#F0F5FF"/></svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex h-full w-96 ">
            <img  src={activeButton?.image?.data?.attributes.url} alt={activeButton.title}  className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
