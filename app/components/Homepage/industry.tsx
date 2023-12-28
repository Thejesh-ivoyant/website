// Sidebar.tsx
import React, { useEffect, useState } from "react";
import services from "~/routes/company.About_Us";

import { strapiUrl } from "~/utils/urls";
const Services = () => {
  const SECTION5_API_URL = `${strapiUrl}/api/section5s?populate=%2A`
  const SECTION5_PICTURE_URL = `${strapiUrl}/api/industry-pictures?populate=%2A`

  const [Banner, setBanner] = useState('');
  // const Services = () => {
    const [IndustryList, setIndustryList] = useState<{ [key: string]: string } | undefined >();
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [description, setDescription] = useState<string>("");
    const [currentSelectedService, setCurrentService] = useState<string>("");
  
  
    useEffect(() => {
      // Fetch data from the API endpoint
      fetch(SECTION5_API_URL)
        .then((response) => response.json())
        .then((section5_data) => {
          const { IndustryList } =
            section5_data.data[0].attributes;
         
          setIndustryList(IndustryList);
          setDescription(IndustryList ? IndustryList[Object.keys(IndustryList)[0]] : "defaultDescription");//default desc
          setCurrentService(Object.keys(IndustryList)[0])//setting default service
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }, []);
    
  useEffect(() => {
    // api call
    fetch(SECTION5_PICTURE_URL)
    .then((response) => response.json())
    .then((section5_pic) => {
      // Assuming data is in the expected format and HomeTitle holds the company name
      const{Banner} = section5_pic.data[0].attributes;
      setBanner(Banner.data[1].attributes.url)

    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
  }, []);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setDescription(IndustryList ? IndustryList[service] : "");
    setCurrentService(service);
  };
  return (
    <div id="industries" className="section-container">
      
      <section className="section-heading">
        <h2>Industry Expertise </h2>
      </section>

<section className="section">
  <div className="flex flex-row gradient-top cursor-pointer">
  {IndustryList && Object.keys(IndustryList).map((service) => (
      <div key={service} id={service} onClick={() => handleServiceClick(service)} className="item" style={{fontSize:"1.4rem"}}>
        {service}
      </div>
    ))}
  </div>
</section>

      <section className="section px-24 mt-4">
        <div className="industry-inner-container w-full flex flex-row ">


            <div className="flex w-1/2 flex-col  justify-center">
                <div className="industry flex items-start justify-start text-sm  font-poppins font-normal">{currentSelectedService}</div>
                <div className="flex text-sm py-4 font-poppins font-normal">

{description}

               </div>
                <div className="flex  justify-end text-sm font-poppins font-normal gap-3">
                  <span>Learn more</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#824BEA" />
                    <path
                      d="M21.5 12.5L20.4275 13.5448L26.1125 19.25H11V20.75H26.1125L20.4275 26.4297L21.5 27.5L29 20L21.5 12.5Z"
                      fill="#F0F5FF"
                    />
                  </svg>
                </span>
                </div>
            </div>

            <div className="flex  items-center justify-center">
                <img src={Banner} alt="iVoyant Logo"  />
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Services;
