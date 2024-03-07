import { useState, useEffect } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/Homepage";
import { Image } from "@unpic/react";

const Services = ({ attributes }: { attributes: Attributes }) => {
  const servicesData = useLoaderData() as any;
  const servicesArray =
    servicesData?.homePage?.homepage?.data?.attributes?.services || [];
  const [currentSelectedService, setCurrentService] = useState<string>("");
  const [serviceImage, setServiceImage] = useState("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState("#");
  const serviceDescription =
    servicesData?.homePage?.homepage?.data?.attributes?.serviceDescription;
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
    <div className="flex flex-col w-full max-h-fit lg:mx-0 lg:h-fit bg-haiti section-p-y">
      <div className="xl:text-3xl lg:text-2xl sm:text-xl text-lg w-full justify-center flex gradient-bottom">
        <h1 className="h-fit font-montserrat font-medium service-heading leading-10 md:mb-3">
          {attributes.servicesTitle}
        </h1>
      </div>
      <div className="text-center text-violet-200 text-base md:text-base font-normal font-poppins p-4 lg:mx-40">
        {attributes.serviceDescription}
      </div>
      <div className="w-full grid-cols-2 grid md:hidden sm:gap-4 gap-2 p-4">
        {servicesArray.map((service: any, index: number) => (
          <Link
            to={service?.link}
            key={index}
            className="relative aspect-[10/7] w-full grid col-span-1 bg-black"
          >
            <Image
              width={400}
              height={250}
              src={service?.bgImage?.data.attributes.url as string}
              alt={service?.title as string}
            />
            <div className="absolute text-white sm:text-lg font-montserrat font-bold tracking-wider text-xs text-center w-full bottom-0 py-2 bg-haiti bg-opacity-95 z-10">
              {service?.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-fit hidden md:flex md:flex-row h-min  place-self-end lg:my-8 ml-10 cursor-pointer">
        <div className="float-right  w-fit flex flex-col overflow-y-auto items-center p-4 font-poppins cursor-pointer">
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
              <svg
                className={
                  currentSelectedService === service.title
                    ? "material-symbols-outlined text-xl font-extrabold arrow mr-4"
                    : "material-symbols-outlined text-xl opacity-0 font-extrabold arrow mr-4"
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"
                  fill="#F0F5FF"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <figure className="flex object-contain  lg:max-w-[52rem] xl:w-[63rem] relative service-img">
            <Image
              width={800}
              height={630}
              src={serviceImage}
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
                <div className="flex flex-row justify-end font-montserrat font-normal items-center gap-3 lg:text-base text-sm lg:mt-4 mt-2">
                  <Link
                    to={link}
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
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Services;
