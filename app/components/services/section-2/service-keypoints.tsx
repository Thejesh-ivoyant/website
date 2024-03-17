// src/components/Card.js
import { useLoaderData } from "@remix-run/react";
const ServiceKeypoints = () => {
  const loaderData = useLoaderData() as any;
  return (
    <div className="key-card-container flex lg:w-1/2 bg-[#F9F8FC] w-full  md:px-12 sm:px-8 xl:px-24 lg:px-14 px-8 text-black font-[500px] justify-center items-center py-8">
        <div className="flex flex-col gap-4 lg:gap-8 w-full h-fit">
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
