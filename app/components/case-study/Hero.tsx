import { useLoaderData } from "@remix-run/react";

 const Hero = ({heroBgImageUrl,heroTitle,heroDescription}:{heroBgImageUrl: string, heroTitle:string, heroDescription:string}) => {
    const gradientStyle = {
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${heroBgImageUrl}) lightgray 50% / cover no-repeat`,
    };
    return (
      <section className="hero min-h-screen text-white flex justify-center object-cover" style={gradientStyle}>
        
        <div className="relative flex mx-auto max-w-2xl text-center items-center justify-center flex-col gap-4" >
          <h1 className="font-semibold font-montserrat text-7xl">{heroTitle}</h1>
          <svg className="mx-auto w-full" width="888" height="25" viewBox="0 0 888 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v444H0z"/><path transform="rotate(90 888 11.5)" fill="url(#b)" d="M888 11.5h1v444h-1z"/><defs><linearGradient id="a" x1="1.5" y1="453.191" x2="1.5" y2="4.56" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="889.5" y1="452.191" x2="889.5" y2="3.56" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
          <div className="p-4 font-poppins font-normal text-xl">
            <span>
            {heroDescription}
            </span>
          </div>
        </div>
      </section>
    );
  };
export default Hero;