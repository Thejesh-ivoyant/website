// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { Partners } from "~/interfaces/Homepage";
import line from '../../../public/assets/pur-line.svg'

const Section6 = ({partners}:{partners:Partners | undefined}) => {
  return (
    <>
      <div className="text-PurpBlue font-montserrat font-medium text-4xl text-center p-10 tracking-wider">
        <h1>Trusted Partners</h1>
      </div>
      <img className= "mx-auto" src = {line}/>
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {partners?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo" className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>

        <div className="logos-slide">
          {partners?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo" className="gradient-left grayscale hover:grayscale-0 hover:shadow-xl" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section6;
