import { Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";

const Section4 = () => {
  const loaderData = useLoaderData() as any;
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [toggleState, setToggleState] = useState(1);


  const toggleService = (id: number) => {
    setOpenServices((prevOpenServices) =>
      prevOpenServices.includes(id)
        ? prevOpenServices.filter((openId) => openId !== id)
        : [...prevOpenServices, id]
    );
  };
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${
      loaderData.section4Image
    }) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center flex-row lg:h-[600px] w-full">
        <div className="flex flex-1 flex-col h-full" style={gradientStyle}>
        <h2 className="flex float-left text-3xl text-white font-montserrat items-center justify-center px-6 py-6 text-right font-medium ">
            {loaderData.section4Title}
        </h2>
      </div>
      <div className="flex flex-1 flex-col h-full font-montserrat justify-center">
      <div className="overflow-y-auto w-fit">
      {loaderData.servicesList?.map((service:any) => (
        <div key={service.id} className="flex flex-col items-center gap-1 w-full p-4">
          <div onClick={() => toggleService(service.id) } className="flex justify-start items-start cursor-pointer font-medium text-xl w-full service-title p-4">
            <span>{service.name}</span>
                  <img src="../assets/down-arrow.svg"       className={toggleState === 1 ? 'ml-auto block' : 'hidden'} alt="vector" />
                  <img src="../assets/up-arrow-Dbg.svg" className={toggleState === 0 ? 'ml-auto block' : 'hidden'} alt="vector" />
          </div>
          <div className={`service-description ${openServices.includes(service.id) ? 'open' : ''} font-poppins px-4`}>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
      

      <Outlet />
    </section>
  );
};

export default Section4;
