// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { Partners } from "~/interfaces/Homepage";
import { strapiUrl } from "~/utils/urls";

interface PartnerLogoData {
  id: number;
  attributes: {
    url: string;
  };
}


interface SectionData {
  data: {
    id: number;
    attributes: {
    PartnerLogos: {
        data: PartnerLogoData[];
      };
    };
  }[];
}

const Section6 = ({partners}:{partners:Partners | undefined}) => {
  return (
    <div className="Container">
      
      <section className="section">
        <h2>Trusted Partners</h2>
      </section>

      <section className="section">
        <hr />
      </section>

      <section className="section">
        <div className="carousel">
          {partners?.data.map((logo,index:number) => (
            <div key={index} className="card gradient-left grayscale hover:grayscale-0">
              <img
                src={`${logo.attributes.url}`}
                alt="Partners Logo"
                className="ClientLogo"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section6;
