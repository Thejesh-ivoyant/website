import { useLoaderData } from "@remix-run/react";

const MissionCard = () => {
    const data = useLoaderData() as any;
  return (
    <>
      <div className="w-full flex bg-haiti h-[500px]">
        <div className="flex-col flex-1 p-10 h-full mix-blend-luminosity mission"  style={{
            background: 'radial-gradient(225.99% 112.99% at 100.42% -0.35%, #15416E 0%, #0A0353 1%, #0D2954 23%, #091657 45%, #071D70 70%, #0A195E 100%)',
            backgroundImage: `url('/assets/vision.png')`,
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right", 
            backgroundSize: 'contain'
          }}>
            <h1 className=" flex text-3xl font-montserrat text-HeaderGray py-3"> Vision </h1>
            <p className="flex w-96 h-fit font-poppins font-light text-HeaderGray text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima a quidem quam quo laudantium et commodi? Perspiciatis similique eos enim, corporis iste recusandae est ducimus laborum ad temporibus officiis!
            </p>
        </div>
        <div className="flex-col flex-1 p-10 h-full mix-blend-luminosity mission" style={{
            background: 'radial-gradient(225.99% 112.99% at 100.42% -0.35%, #15416E 0%, #0A0353 1%, #0D2954 23%, #091657 45%, #071D70 70%, #0A195E 100%)',
            backgroundImage: `url('/assets/mission.png')`,
            backgroundRepeat: "no-repeat",
            transition:"ease",
            backgroundPosition: "bottom right",
            backgroundSize: 'contain'

          }}>
            <h1 className=" flex text-3xl font-montserrat text-HeaderGray py-3"> Mission </h1>
            <p className="flex w-96 h-fit font-poppins font-light text-HeaderGray text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima a quidem quam quo laudantium et commodi? Perspiciatis similique eos enim, corporis iste recusandae est ducimus laborum ad temporibus officiis!
            </p>
            
        </div>
      </div>
    </>
  );
};

export default MissionCard;
