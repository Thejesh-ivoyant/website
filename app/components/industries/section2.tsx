import { Outlet, useLoaderData } from "@remix-run/react";
const Section2 = () => {
  const loaderData = useLoaderData() as any;

  return (
    <section className="relative flex justify-center flex-col-reverse lg:flex-row max-h-fit w-full overflow-hidden bg-slate">
      <div className="flex flex-1 flex-col lg:min-h-full justify-between">
        <h2 className="md pt-14 xl:pt-16 px-4 font-montserrat font-semibold text-[#0D0B71] leading-10 text-4xl lg:flex hidden justify-center h-fit max-w-[30.625rem]">
            {loaderData.section2Title}
          </h2>
          <div
            className="h-full w-full lg:flex hidden"
            style={{
              backgroundImage: `url('/assets/industries-ornament.svg')`,
              backgroundRepeat: "no-repeat",
            }}
          >
          <img src={loaderData.section2Image} className=" mx-auto my-auto h-52 lg:h-[26.8rem] aspect-video object-contain px-4"alt="ornament" />
          </div>
          <div
              className="h-full w-fit mx-auto overflow-visible flex lg:hidden"
              style={{
                backgroundImage: `url('/assets/industries-ornament-small.svg')`,
                backgroundRepeat: "no-repeat",
              }}
            >
            <img src={loaderData.section2Image} className=" mx-auto my-auto h-52 md:h-[20rem] aspect-video object-contain px-4"alt="ornament" />
          </div>
      </div>
      <div className="flex flex-col h-full w-full lg:w-1/2">
        <section className="font-poppins leading-10 p-12 lg:aspect-square text-justify flex flex-col lg:justify-between gap-4">
          <h2 className="lg:pt-14 xl:pt-16 lg:px-4 p-0 font-montserrat font-semibold text-[#0D0B71] text-left leading-10 text-4xl lg:hidden flex justify-center h-fit lg:max-w-[30.625rem]">
            {loaderData.section2Title}
          </h2>
          <div className="flex lg:w-[30rem] max-w-2xl mx-auto lg:my-auto text-sm lg:text-base">
            {loaderData.section2Desc}
          </div>
          <div className=" 2xl:-translate-x-32 lg:-translate-x-72 hidden lg:flex bottom-0  flex-row items-center inline-card w-fit h-[10.625rem] text-HeaderGray mb-10">
            <div className="ml-auto flex gap-4 items-center  p-10">
              <span className="lg:text-4xl font-extrabold  leading-[3.5rem] font-mplus">50+</span>
              <span className=" font-light text-sm w-24">Country</span>
            </div>
            <div className="ml-auto flex gap-4 items-center p-10">
              <span className="lg:text-4xl font-extrabold  leading-[3.5rem] font-mplus">300+</span>
              <span className=" font-light text-sm w-24">Projects Delivered</span>
            </div>
            <div className="ml-auto flex gap-4 items-center p-10">
              <span className="lg:text-4xl font-extrabold  leading-[3.5rem] font-mplus">350</span>
              <span className=" font-light text-sm w-24">Total projects</span>
            </div>
        </div>
        </section>
        
      </div>
      <Outlet />
    </section>
  );
};

export default Section2;
