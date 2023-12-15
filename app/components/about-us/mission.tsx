import { useLoaderData } from "@remix-run/react";

const MissionCard = () => {
    const data = useLoaderData() as any;
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima a quidem quam quo laudantium et commodi? Perspiciatis similique eos enim, corporis iste recusandae est ducimus laborum ad temporibus officiis!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima a quidem quam quo laudantium et commodi? Perspiciatis similique eos enim, corporis iste recusandae est ducimus laborum ad temporibus officiis!
            </p>
            
        </div>
      </div>
    </>
  );
};

export default MissionCard;
