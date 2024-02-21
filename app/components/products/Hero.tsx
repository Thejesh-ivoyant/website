import { Carousel } from "antd";
import { Link } from "@remix-run/react";
const Hero = ({carousel}:{carousel: any})=>{
    return (
        <>
        <Carousel autoplay >
            {carousel.map((item:any) => (
                <div key={item.id} className="relative h-[50rem] md:h-[30rem] lg:mt-0 mt-16 lg:h-screen text-white slit-gradient flex flex-row">
                <div className="flex md:flex-1 flex-col items-center md:w-80 lg:w-[31.5rem] max-w-xl md:h-full md:justify-center px-6 lg:mx-10 xl:mx-20 gap-5">
                    <p className="text-haiti font-extrabold prod-hero-title font-montserrat italic pt-12 md:pt-0">
                    {item.title}
                    </p>
                    <p className="font-poppins text-[#1B0740] prod-hero-desc text-3xl font-light text-left">
                    {item.description}
                    </p>
                    <Link to={'company/about-us'} className="prod-abt-us-btn">
                        About Us
                    </Link>
                </div>
                <div className="absolute bottom-0 right-0 w-fit h-full hidden md:flex -z-30">
                    <div className=" md:h-[70%] lg:h-[80%] md:aspect-square md:object-left md:object-cover md:mt-auto blur-bg-img">
                        <img src={item.ornament?.data?.attributes?.url} alt="product-image" className="w-full h-full object-cover object-left" />
                    </div>
                </div>
                <div className=" w-[90%] h-[22rem] absolute bottom-0 right-0 mb-4 md:hidden">
                    <img src={item.ornament?.data?.attributes?.url} alt="product-image" className="w-full h-full object-cover object-left" />
                </div>
                </div>
            ))}
      </Carousel>
        </>
    );
}
export default Hero;
