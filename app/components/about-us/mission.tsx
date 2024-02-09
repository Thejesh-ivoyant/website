import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/about-us";

const MissionCard = () => {
  const loaderData = useLoaderData<typeof loader>()
  const data =  loaderData?.aboutUsData.data?.aboutus.data.attributes
  return (
    <>
      <div className="w-full flex lg:flex-row flex-col bg-haiti sm:h-[37.5rem] h-[50rem] relative">
        <div className="flex-col flex-1 sm:p-10 p-4 h-full mix-blend-luminosity relative cyan-gradient-vision"  style={{
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right", 
            backgroundSize: 'contain'
          }}>
            <div className=" flex text-3xl items-center font-montserrat text-HeaderGray py-3 z-50">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 40.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm-5.25-27L15 21m0-7.5L7.5 21M33 31.5l7.5 7.5m0-7.5L33 39m-7.5-24V7.5H33" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/><path d="m25.5 7.5 3 3C36 18 30 27 24 28.5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Vision 
            </div>
            <p className="flex sm:w-96 h-fit font-poppins font-light text-HeaderGray text-sm z-50">
              {data.vision}
            </p>
        </div>
        <div className="flex-col flex-1 sm:p-10 p-4 h-full mix-blend-luminosity relative cyan-gradient-mission" style={{
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right",
            backgroundSize: 'contain'

          }}>
            <div className=" flex text-3xl items-center font-montserrat text-HeaderGray py-3 z-50">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 40.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm-5.25-27L15 21m0-7.5L7.5 21M33 31.5l7.5 7.5m0-7.5L33 39m-7.5-24V7.5H33" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/><path d="m25.5 7.5 3 3C36 18 30 27 24 28.5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Mission 
            </div>
            <p className="flex sm:w-96 h-fit font-poppins font-light text-HeaderGray text-sm z-10">
              {data.mission}
            </p>
            
        </div>
      </div>
    </>
  );
};

export default MissionCard;
