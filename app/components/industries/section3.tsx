import { Outlet, useLoaderData } from "@remix-run/react";

const Section3 = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${
      loaderData.section3Image
    }) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  const items = loaderData.section3Tags?.split(",");
  return (
    <section className="relative flex justify-center flex-row lg:h-[600px] w-full">
      <div
        id="left"
        className="flex flex-1 flex-col h-full bg-[#1B0740] lg:p-16 gap-24 text-white font-poppins justify-center col-span-2 max-w-[50%]"
      >
        <section className="">{loaderData.section3Desc}</section>
        <div className="grid grid-cols-2 gap-2 font-poppins">
          {items?.map((item: string, index: number) => (
            <div
              key={index}
              className="col-span-1 flex gap-2 items-center justify-start p-4 bg-gradient-to-b from-[#360E81] to-[#20084D] w-full h-full"
            >
              <img
                src="/assets/tick.svg"
                className="inline w-4 h-4"
                alt="Tick"
              />
              <span className="text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col h-full" style={gradientStyle}>
        <h2 className="flex float-left text-3xl text-white font-montserrat items-center justify-center px-6 py-6 text-right font-medium ">
          {loaderData.section3Title}
        </h2>
      </div>

      <Outlet />
    </section>
  );
};

export default Section3;
