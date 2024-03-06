import { useState } from "react";
import { HeroBg } from "~/interfaces/Homepage";
import { scrollToSection } from "~/root";
const Hero = ({
  heroText,
  heroTitle,
  heroDescription,
  heroBgImage,
}: {
  heroText: string;
  heroTitle: string;
  heroDescription: string;
  heroBgImage: HeroBg;
}) => {
  const [c, setC] = useState(0);
  const closeChats = () => {
    setC(0);
  };
  const openChats = () => {
    setC(1);
  };
  return (
    <>
      <div className="screen-height min-h-fit hero-container-section flex-col items-center justify-center">
        <video
          aria-label="background-video"
          preload="true"
          muted
          loop
          playsInline
          src={`${heroBgImage?.data.attributes.url}`}
          autoPlay
          className="-z-10 absolute top-0 object-cover right-0 w-full screen-height  mt-[4.5rem]"
        />
        <div className="hero-wrapper">
          <div>
            <p className="hero-title  animated-text">{heroText}</p>
            <h1 className="hero-title hero-subtitle mt-2">{heroTitle}</h1>
          </div>
          <svg
            width="100%"
            height="25"
            viewBox="0 0 888 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="12.5"
              width="1"
              height="444"
              transform="rotate(-90 0 12.5)"
              fill="url(#paint0_linear_1695_48769)"
            />
            <rect
              x="888"
              y="11.5"
              width="1"
              height="444"
              transform="rotate(90 888 11.5)"
              fill="url(#paint1_linear_1695_48769)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1695_48769"
                x1="1.5"
                y1="453.191"
                x2="1.5"
                y2="4.55961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1695_48769"
                x1="889.5"
                y1="452.191"
                x2="889.5"
                y2="3.55961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hero-description lg:px-10 px-5">
            <span>{heroDescription}</span>
          </div>
          <button
            className="hue-btn-primary btn"
            onClick={() => scrollToSection("contact-us")}
          >
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Hero;
