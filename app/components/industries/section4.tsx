import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
const Section4 = () => {
  const loaderData = useLoaderData() as any;
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [toggleState, setToggleState] = useState(1);
  const [currState, setCurrState] = useState<number>(-1);
  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId));
  };
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.section4Image}) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center flex-col lg:flex-row lg:h-[600px] w-full">
      <div
        className="flex flex-1 flex-col h-full min-h-[16rem]"
        style={gradientStyle}
      >
        <h2 className="flex float-left text-2xl lg:text-3xl my-auto lg:my-0 text-white font-montserrat items-center justify-center px-4 lg:px-6 py-6 lg:text-right font-medium ">
          {loaderData.section4Title}
        </h2>
      </div>
      <div className="flex flex-1 flex-col h-full font-montserrat justify-center">
        <div className="overflow-y-auto w-fit">
          {loaderData.servicesList?.map((service: any) => (
            <div
              key={service.id}
              className="flex flex-col items-center gap-1 w-full p-4"
            >
              <div
                onClick={() => toggleExpansion(service.id)}
                className="flex justify-start bg-slate items-start cursor-pointer font-medium text-xl w-full service-title p-4"
              >
                <span className="text-left" title={service?.name}>
                  {service?.name}
                </span>
                <img
                  src={
                    !(service.id === currState)
                      ? `../assets/down-arrow.svg`
                      : `../assets/up-arrow-Dbg.svg`
                  }
                  className="ml-auto my-auto block"
                  alt="vector"
                />
              </div>
              <div
                className={`service-description ${service.id === currState ? "open" : ""} font-poppins px-4`}
              >
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Section4;
