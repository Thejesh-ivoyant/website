import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
const IndustryFocus = () => {
  const SECTION3_API_URL = `${strapiUrl}/api/section3s?populate=%2A`;
  const [serviceDescr, setServiceDescr] = useState<string>("");
  const [servicesList, setServicesList] = useState<
    { [key: string]: string } | undefined
  >();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [currentSelectedService, setCurrentService] = useState<string>("");
  const [serviceImage, setServiceImage] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(SECTION3_API_URL)
      .then((response) => response.json())
      .then((section3_data) => {
        const { ServiceDescription, servicesList, serviceImage } =
          section3_data.data[0].attributes;
        setServiceDescr(ServiceDescription);
        setServicesList(servicesList);
        setServiceImage(strapiUrl + serviceImage.data[0].attributes.url);
        setDescription(
          servicesList
            ? servicesList[Object.keys(servicesList)[0]]
            : "defaultDescription"
        ); //default desc
        setCurrentService(Object.keys(servicesList)[0]); //setting default service
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setDescription(servicesList ? servicesList[service] : "");
    setCurrentService(service);
  };
  return (
    <div className="flex relative flex-col w-full min-h-full lg:mx-0 mb-16 lg:h-full bg-white">
      <img src="../assets/Ellipse61.svg" className="absolute top-16 left-4"></img>
      <img src="../assets/Ornament.png" className="absolute top-32 right-4"></img>
      <div className="text-black text-4xl mb-10 w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-oxygen font-bold">
        Our Mobile Projects from Different Industries
        </span>
      </div>
      <div className="flex flex-col gap-2 industry-focus-main lg:flex-row">
 
          <div className="flex bg-white w-3/4  text-black font-[500px] justify-center items-center py-4">
            <div className="flex flex-col gap- lg:gap-10 w-full">
              <div className="industry-focus-text-container">
              <span className="industry-focus-text">HealthCare</span> 
               
              </div>
              <div
                className="text-sm font-poppins font-light lg:leading-8 "
                id="about-desc"
              >
                
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i ndustry's standard dummy text ever since.em Ipsum is simply dummy text of the priem Ipsum is simply dummy textndustry's standard dummy text ever since.em Ipsum is simply dummy text of the priem .
             </div>
            </div>
          </div>
          <div className="relative flex w-1/4 bg-white  text-black font-[500px] justify-center items-center">
  <img src="../assets/S.MAD.mobile.png" className="absolute  h-[140%]"></img>
</div>

     
      </div>
    </div>
  );
};

export default IndustryFocus;
