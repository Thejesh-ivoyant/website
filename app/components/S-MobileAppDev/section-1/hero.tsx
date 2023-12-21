import React from "react";
import { Link, useMatch } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import { scrollTo } from "~/root";
import { Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/services.MobileDev";

const Hero = () => {
  const loaderData = useLoaderData() as any;


  return (
    <div>
      <div className="">
      {/* <img src={`${strapiUrl}${loaderData.heroImage}`} alt="video" width="100%" /> */}
        <img src={`${loaderData.heroImage}`} alt="video" width="100%" />
      </div>
      <div className="hero-container">
        <p className="hero-title flex animated-text">
          {loaderData.heroTitle}
        </p>

        <hr className="hero-gradient-top flex"></hr>
        <p className="hero-description">{loaderData.heroDescription}</p>
      
         <Link to="/contact-us">
          <button className="btn hero-btn" >
            Let's Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
