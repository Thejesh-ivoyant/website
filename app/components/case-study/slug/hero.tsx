import { Outlet, useLoaderData } from "@remix-run/react";
import product from 'public/assets/product.png'
const Hero = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData?.heroBgImageURl}) lightgray 50% / cover no-repeat`,
  };
  return (
    <>
    <section className="hero min-h-screen text-white flex justify-center object-cover relative" style={gradientStyle}>
      <img src={product} className="w-3/5 rounded-xl aspect-video mx-auto mt-auto"></img>
      <div className="w-fit h-fit flex flex-col px-10 py-12 gap-4 mx-12 -bottom-1/4 absolute text-black z-10 bg-white shadow-xl">
        
        <h1 className="font-montserrat text-4xl font-semibold"> Absolute fucking shit </h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti commodi quo impedit itaque iure molestias officia consequuntur in, tenetur error mollitia ea iste perferendis totam debitis natus rerum sed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in id pariatur eius error ut laborum excepturi. Velit doloremque voluptas dolorum, a cupiditate quod numquam unde omnis, ullam sunt sint.
        </p>
        <div className="h-fit w-full flex flex-row gap-2 mt-10">
           <div className="tags-indigo relative px-5 gap-2 w-full">
                <div className="font-semibold text-2xl font-montserrat">Industry</div>
                <div className="text-lg font-poppins ">Logistics and Transportation</div>
           </div>
           <div className="tags-indigo relative px-5 gap-2 w-full">
                <div className="font-semibold text-2xl font-montserrat">Industry</div>
                <div className="text-lg font-poppins ">Logistics and Transportation</div>
           </div>
           <div className="tags-indigo relative px-5 gap-2 w-full">
                <div className="font-semibold text-2xl font-montserrat">Industry</div>
                <div className="text-lg font-poppins ">Logistics and Transportation</div>
           </div>
        </div>
    </div>
    </section>
    </>
  );
};

export default Hero;