import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/about-us";

const MissionCard = () => {
  const loaderData = useLoaderData<typeof loader>()
  const data =  loaderData?.aboutUsData.data?.aboutus.data.attributes
  return (
    <>
      <div className="w-full flex bg-haiti h-[500px] relative">
        <div className="flex-col flex-1 p-10 h-full mix-blend-luminosity relative cyan-gradient-vision"  style={{
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right", 
            backgroundSize: 'contain'
          }}>
            <h1 className=" flex text-3xl font-montserrat text-HeaderGray py-3 z-50"> Vision </h1>
            <p className="flex w-96 h-fit font-poppins font-light text-HeaderGray text-sm z-50">
              {data.vision}
            </p>
        </div>
        <div className="flex-col flex-1 p-10 h-full mix-blend-luminosity relative cyan-gradient-mission" style={{
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right",
            backgroundSize: 'contain'

          }}>
            <h1 className=" flex text-3xl font-montserrat text-HeaderGray py-3 z-10"> Mission </h1>
            <p className="flex w-96 h-fit font-poppins font-light text-HeaderGray text-sm z-10">
              {data.mission}
            </p>
            
        </div>
      </div>
    </>
  );
};

export default MissionCard;
