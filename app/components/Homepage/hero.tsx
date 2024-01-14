import React, { useState } from "react";
import { HeroBg } from "~/interfaces/Homepage";

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
      <div className="h-screen relative grid place-items-center blur-bg">
        <div className="absolute w-full h-full z-10 bg-pink-gradient"></div>
        <video
          preload="true"
          muted
          loop
          playsInline
          src={`${heroBgImage?.data.attributes.url}`}
          autoPlay
          className="-z-10 absolute top-0 object-cover right-0 w-full h-full"
        />
        <div className="w-fit h-fit grid place-items-center  gap-4 z-20">
          <div className=" hero-title leading-[4rem] tracking-wider animated-text">
          
          {heroText?.split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <span key={charIndex} className="animated-char">
                  {char}
                </span>
              ))}
              <span>&nbsp;</span>
            </React.Fragment>
          ))}
        
          </div>
          <div className="text-white text-7xl flex font-montserrat font-bold leading-[4rem] tracking-[0.0969rem]">
            {heroTitle}
          </div>
          <svg
            className="fade-in"
            width="1159"
            height="25"
            viewBox="0 0 1159 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="rotate(-90 0 12.5)"
              fill="url(#a)"
              d="M0 12.5h1V592H0z"
            />
            <path
              transform="rotate(90 1159 11.5)"
              fill="url(#b)"
              d="M1159 11.5h1V591h-1z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="1.5"
                y1="587.682"
                x2="1.5"
                y2="2.136"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="1160.5"
                y1="586.682"
                x2="1160.5"
                y2="1.136"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="paragraph-animation flex h-14 aspect-[66/6] text-white text-center text-xl font-normal font-poppins">
            {heroDescription}
          </p>
          <button className="hue-btn-primary mt-14">
            <span>Lets Talk</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
