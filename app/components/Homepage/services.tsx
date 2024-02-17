import { useState, useEffect } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/Homepage";
import sample from '~/../public/assets/product.png'

const Services = ({attributes}:{attributes:Attributes}) => {
  const servicesData = useLoaderData() as any;
  const servicesArray =
    servicesData?.homePage?.homepage?.data?.attributes?.services || [];
  const [currentSelectedService, setCurrentService] = useState<string>("");
  const [serviceImage, setServiceImage] = useState("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState("#");
  const serviceDescription = servicesData?.homePage?.homepage?.data?.attributes?.serviceDescription;

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
    <div className="flex flex-col w-full min-h-full lg:mx-0 lg:h-fit bg-haiti">
      <div className=" md:text-4xl sm:text-3xl text-xl w-full justify-center flex md:py-8 py-4 h-fit gradient-bottom">
        <span className="h-fit font-montserrat font-bold service-heading">
         {attributes.servicesTitle}
        </span>
      </div>
      <div className="text-center text-violet-200 sm:text-sm text-xs md:text-base font-normal font-poppins p-4 lg:mx-40">
        {attributes.serviceDescription}
      </div>
      <div className="w-full grid-cols-2 grid md:hidden sm:gap-4 gap-2 p-4">
      {servicesArray.map((service: any, index:number) => (
          <Link to={service?.link} key={index} className="relative aspect-[10/7] w-full grid col-span-1 bg-black">
            <img src={service?.bgImage?.data.attributes.url} alt={service?.title} className="w-full h-full object-cover"/>
            <div className="absolute text-white sm:text-lg font-montserrat font-bold tracking-wider text-xs text-center w-full bottom-0 py-2 bg-haiti bg-opacity-95 z-10">{service?.title}</div>
          </Link>
      ))}
      </div>
      <div className="w-fit hidden md:flex md:flex-row h-min  place-self-end lg:my-8 ml-10 cursor-pointer">
        <div className="float-right  w-fit flex flex-col overflow-y-auto items-center p-4  py-8 font-poppins cursor-pointer">
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
                    ? "material-symbols-outlined text-xl font-extrabold arrow mr-4"
                    : "material-symbols-outlined text-xl opacity-0 font-extrabold arrow mr-4"
                }
              >
                arrow_forward_ios
              </span>
            </div>
          ))}
        </div>
<div className="flex items-center">

        <figure className="flex object-contain  lg:max-w-[52rem] xl:w-[63rem] relative service-img">
          
          <img
            className="w-full h-full object-cover"
            src={serviceImage}
            loading="eager"
            alt={currentSelectedService}
          />
          <div className="z-10 absolute inset-x-0 bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center items-center text-white bg-opacity-50 p-4 flex-col lg:w-5/6 w-full">
            <figcaption className="text-neutral-50 xl:text-2xl lg:text-xl md:text-sm font-medium font-poppins">
              <div className="w-fit px-2 p-1 bg-gray-900 items-center justify-center flex">
                <i className="text-blue-100 lg:text-sm text-xs font-light">
                  {currentSelectedService}
                </i>
              </div>
              {description}
              <div className="flex justify-end font-montserrat font-normal items-center gap-3 lg:text-base text-sm lg:mt-4 mt-2">
                <Link to={link}>Learn more.</Link>
                <Link to={link}>
                  <svg
                    className="lg:h-10 lg:w-10 h-6 w-6"
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
                </Link>
              </div>
            </figcaption>
          </div>
        </figure>
</div>

      </div>
    </div>
  );
};

export default Services;
