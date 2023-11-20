import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { scrollTo } from "~/root";
import { Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/services.MobileDev";
const Hero = () => {

  const loaderData = useLoaderData() as any;

  return (
    <div>
      <div className="video-content">
        <img src={`${strapiUrl}${loaderData.heroImage}`} alt="video" width="100%" />
      </div>
        <div className="hero-container">
            <p className="hero-title flex animated-text">
              {loaderData.heroTitle.split(" ").map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  {word.split("").map((char, charIndex) => (
                    <span key={charIndex} className="animated-char">
                      {char}
                    </span>
                  ))}
                  <span>&nbsp;</span>
                </React.Fragment>
              ))}
            </p>

            <hr className="hero-gradient-top flex"></hr>
            <p className="hero-description">{loaderData.heroDescription}</p>
            <button className="btn hero-btn" onClick={() => scrollTo("contact-us")}>
              Let's Talk
            </button>
          </div>
    </div>
  );
};

export default Hero;
