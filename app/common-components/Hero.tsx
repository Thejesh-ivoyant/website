import { Outlet, useLoaderData } from "@remix-run/react";
import { scrollTo } from "~/root";
const Hero = () => {

  const loaderData = useLoaderData() as any;

  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.heroBgImageURl}) lightgray 50% / cover no-repeat`,
  };
  return (
    <section className="hero min-h-screen text-white flex justify-center object-cover" style={gradientStyle}>
      
      <div className="relative flex mx-auto max-w-2xl text-center items-center justify-center flex-col gap-4" >
        <h1 className="font-semibold font-montserrat text-4xl">{loaderData.heroTitle}</h1>
        <svg  width="888" height="25" viewBox="0 0 888 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="12.5" width="1" height="444" transform="rotate(-90 0 12.5)" fill="url(#paint0_linear_1695_48769)"/><rect x="888" y="11.5" width="1" height="444" transform="rotate(90 888 11.5)" fill="url(#paint1_linear_1695_48769)"/><defs><linearGradient id="paint0_linear_1695_48769" x1="1.5" y1="453.191" x2="1.5" y2="4.55961" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_1695_48769" x1="889.5" y1="452.191" x2="889.5" y2="3.55961" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient></defs></svg>
        <div className="font-poppins">
          <span>
          {loaderData.heroDescription}
          </span>
        </div>
        <button className="btn hero-btn"  onClick={() => scrollTo('contact-us')}>Let's Talk</button>
      </div>
      <Outlet />
    </section>
  );
};

export default Hero;
