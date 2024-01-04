// src/components/Card.js
import { useLoaderData } from "@remix-run/react";

const ServiceKeypoints = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="flex lg:w-1/2 bg-[#F9F8FC] w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center py-8">
   
        <div className="flex flex-col gap- lg:gap-10 w-full h-fit">
        {loaderData.KeyPoints.map((item: any) => (
          <div className="key-points-container ">
            <div className="key-points-icon">
              <img
                src={item.keyPointsImage}

                        className="w-10 h-10 mx-auto"
                        alt="keypointslogo"
              />
            </div>
            <div className="key-points-text">{item.keyPoints}</div>
          </div>
             ))}
        </div>
   
    </div>
  );
};

export default ServiceKeypoints;
