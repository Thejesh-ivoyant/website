import { useLoaderData } from "@remix-run/react";
import heroImage from '~/../public/assets/policy.png'
const PTCHero = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    zIndex: -1,
    background: `linear-gradient(100deg, white 50%, transparent 50%), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <>
    <div  className="relative screen-height mt-20 text-white flex flex-row" style={gradientStyle}>
      <div className="w-1/2 grid place-items-center">
        <div className="privacy-hero-text flex flex-col my-auto max-w-lg">
          <small className="text-lg font-poppins leading-8 font-normal">Last reviewed on: {loaderData?.last_reviewed}</small>
          <h1 className="font-montserrat text-4xl font-extrabold text-haiti italic">{loaderData?.heroTitle}</h1>
          <p className="font-poppins text-lg font-normal leading-8 text-justify mt-5">
            {loaderData.heroDescription}
          </p>
        </div> 
      </div>     
    </div>
    </>
  );
};

export default PTCHero;

{/* <div className="flex flex-col items-stretch w-1/2 bg-white">
            <div className="flex-col fill-white overflow-hidden relative flex min-h-[691px] grow items-center px-20 py-12 max-md:max-w-full max-md:px-5">
             
              <div className="relative text-indigo-950 text-opacity-80 text-xl leading-8 whitespace-nowrap mt-24 max-md:max-w-full max-md:mt-10">
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

<img
loading="eager"
src= '../assets/policy.jpg'              className="object-contain h-full -z-10 right-0 top-0"
/> */}