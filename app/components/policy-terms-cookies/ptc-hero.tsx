import { useLoaderData } from "@remix-run/react";

const PTCHero = () => {
  const loaderData = useLoaderData() as any;

  return (
    <>
  
        <div className="screen-height mt-[4.5rem] gap-5 flex ">
          <div className="flex flex-col  w-[50%] ">
            <div className="flex-col mt-16 fill-white overflow-hidden relative flex grow items-center  max-md:max-w-full max-md:px-5">
             
           
              <div className="relative indigo-950 text-opacity-80  mt-24 max-md:max-w-full max-md:mt-10 text-xl leading-[58px] w-[504px] max-w-full ">
            Last reviewed on: {loaderData.last_reviewed}
              </div>
              <div className="relative text-violet-950 text-4xl italic font-extrabold leading-[58px] w-[504px] max-w-full mt-1">
            {loaderData.heroTitle}
              </div>
              <div className="relative text-indigo-950 text-xl leading-8 w-[504px] max-w-full mt-5 mb-16 max-md:mb-10">
              {loaderData.heroDescription}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[53%] z-10">
            <div className="skew-container">
              <img
               
                src={loaderData.heroImage}
                className=" screen-height object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>


        </div>
      </>

  );
};

export default PTCHero;