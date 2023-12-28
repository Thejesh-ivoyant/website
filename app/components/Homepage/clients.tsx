import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Clients } from "~/interfaces/Homepage";

const Section4 = ({clients}:{clients:Clients | undefined}) => {
  
  
  return (
    <div className="Container">
      <section className="section">
        <h2>Satisfied Clients</h2>
      </section>
      <section className="section">
        <hr />
      </section>
      <section className="section">
        <div className="carousel ">
          {clients?.data.map((logo,index:number) => (
            <div key={index} className="card gradient-left grayscale hover:grayscale-0">
              <img
                src={`${logo.attributes.url}`}
                alt="Client Logo"
                className="ClientLogo "
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;