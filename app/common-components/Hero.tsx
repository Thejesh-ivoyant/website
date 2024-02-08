import { Outlet, useLoaderData } from "@remix-run/react";
import { scrollToSection } from "~/root";
const Hero = () => {

  const loaderData = useLoaderData() as any;

  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.heroBgImageURl}) lightgray 50% /cover no-repeat`,
  };
  return (
    <section className="screen-height hero-container-section" style={gradientStyle}>
      
      <div className="hero-wrapper" >
        <h1 className="hero-title ">{loaderData.heroTitle}</h1>
        
        <svg  width="100%" height="25" viewBox="0 0 888 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="12.5" width="1" height="444" transform="rotate(-90 0 12.5)" fill="url(#paint0_linear_1695_48769)"/><rect x="888" y="11.5" width="1" height="444" transform="rotate(90 888 11.5)" fill="url(#paint1_linear_1695_48769)"/><defs><linearGradient id="paint0_linear_1695_48769" x1="1.5" y1="453.191" x2="1.5" y2="4.55961" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="paint1_linear_1695_48769" x1="889.5" y1="452.191" x2="889.5" y2="3.55961" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
        <div className="hero-description">
          <span>
          {loaderData.heroDescription}
          </span>
        </div>
        <button className="btn  hero-btn"  onClick={() => scrollToSection('contact-us')}>Let's Talk</button>
      </div>
    </section>
  );
};

export default Hero;
