import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "@remix-run/react";

const Services = () => {
  const servicesData = useLoaderData() as any;
  const servicesArray =
    servicesData?.homePage?.homepage?.data?.attributes?.services || [];
  const [serviceDescr, setServiceDescr] = useState<string>("");
  const [currentSelectedService, setCurrentService] = useState<string>("");
  const [serviceImage, setServiceImage] = useState("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState("#");

  useEffect(() => {
    if (servicesArray.length > 0) {
      const defaultService = servicesArray[0];
      setCurrentService(defaultService.title);
      setServiceImage(defaultService.bgImage.data.attributes.url);
      setDescription(defaultService.description);
      setLink(defaultService.link);
    }
  }, [servicesArray]);

  const handleServiceClick = (serviceTitle: string) => {
    const selectedService = servicesArray.find(
      (service: any) => service.title === serviceTitle
    );

    if (selectedService) {
      setCurrentService(serviceTitle);
      setServiceImage(selectedService.bgImage.data.attributes.url);
      setDescription(selectedService.description);
      setLink(selectedService.link);
    }
  };

  return (
    <div  id="services" className="flex flex-col w-full min-h-full lg:mx-0 lg:h-fit bg-haiti">
      <div className="text-gray-200 text-4xl w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
          Services we offer
        </span>
      </div>
      <div className="text-center text-violet-200 text-base font-normal font-poppins p-4 lg:mx-40">
        {serviceDescr}
      </div>
      <div className="w-fit flex flex-row h-min services-gradient place-self-end lg:my-8 ml-10 cursor-pointer">
        <div className="float-right w-fit flex flex-col overflow-y-auto items-center p-4 py-8 font-poppins cursor-pointer">
          {servicesArray.map((service: any) => (
            <div
              key={service.id}
              id={service.title}
              className={
                currentSelectedService === service.title
                  ? "service-list-cur"
                  : "service-list"
              }
              onClick={() => handleServiceClick(service.title)}
            >
              {service.title}
              <span
                className={
                  currentSelectedService === service.title
                    ? "material-symbols-outlined text-lg font-bold arrow"
                    : "material-symbols-outlined text-lg opacity-0 font-bold arrow"
                }
              >
                arrow_forward_ios
              </span>
            </div>
          ))}
        </div>

        <figure className="flex object-contain lg:h-[600px] lg:max-w-[52rem] xl:w-[63rem] relative service-img">
          
          <img
            className="w-full h-full object-cover"
            src={serviceImage}
            alt={currentSelectedService}
          />
          <div className="z-10 absolute inset-x-0 bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center items-center text-white bg-opacity-50 p-4 flex-col lg:w-4/6">
            <figcaption className="text-neutral-50 text-2xl font-medium font-poppins">
              <div className="w-fit px-2 p-1 bg-gray-900 items-center justify-center flex">
                <i className="text-blue-100 text-sm font-light">
                  {currentSelectedService}
                </i>
              </div>
              {description}
              <div className="flex justify-end font-normal items-center gap-3">
                <Link to={link}>Learn More</Link>
                <span>
                  <svg
                    width="40"
                    height="40"
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
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Services;
