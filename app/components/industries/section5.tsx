import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
const Section5 = () => {
  const loaderData = useLoaderData() as any;
  const defaultDesc = "Lorem ipsum dolor sit amet consectetur adipiscing elit molestie, curabitur posuere ultricies habitant tempor convallis"
  return (
  <div className="bg-haiti py-5">
    <h1 className="text-HeaderGray flex items-center justify-center text-5xl font-montserrat p-6">
    Our software development process
    </h1>
  <div className="w-full h-[500px] flex justify-around flex-row text-white p-10 top-gradient">
      {loaderData.PhasesList.map((item: any, index: number) => (
        <div key={item.id} className="flex items-center px-4 h-[400px]">
          <img src={`../assets/${index + 1}.svg`} alt={`SVG ${index + 1}`} className="w-fit h-full p-1" />
          <div className="flex flex-col ml-4 items-start justify-center p-3 gap-6">
            <strong className="text-base font-bold tracking-wide font-montserrat text-TinBlue ">{item.title}</strong>
            <div className="font-poppins text-xs font-normal text-left leading-5">{defaultDesc}</div>
                  <img src={item.ornament} className="w-10 h-10 mx-auto" alt={item.ornament} />
          </div>
        </div>
      ))}
              <img src="../assets/0.svg" className="h-[400px]" alt="vector" />
    </div>
  </div>

    
  );
};

export default Section5;
{/* <div>Description: {item.description}</div> */}
