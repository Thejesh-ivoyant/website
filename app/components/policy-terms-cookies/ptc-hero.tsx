import { useLoaderData } from "@remix-run/react";
const PTCHero = () => {
  const loaderData = useLoaderData() as any;
  return (
    <>
   <div className="bg-slate-50 mt-[4.5rem]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col ptc-left-container ">
          <div className="flex relative flex-col grow items-center px-14 py-12 text-xl fill-white h-fit  max-md:px-5 max-md:max-w-full">
            <div className=" mt-2 text-4xl italic font-extrabold leading-[58px] text-violet-950 w-full max-md:max-w-full">
            {loaderData.heroTitle}
            </div>
            <div className=" mt-5 leading-8 text-indigo-950 w-full max-md:max-w-full">
            {loaderData.heroDescription}
            </div>
          </div>
        </div>
    <div className="flex flex-col ptc-right-container">
        <div className="skew-container">
                <img
                      alt="heroimage"
                      loading="eager"
                  src={loaderData.heroImage}
                  className="object-center w-full overflow-hidden grow max-md:max-w-full h-full"
                />
              </div>
        </div>
      </div>
    </div>
        </>
  );
};
export default PTCHero;