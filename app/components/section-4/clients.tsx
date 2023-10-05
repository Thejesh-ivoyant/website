// Sidebar.tsx
import React, { useEffect, useState } from "react";

interface LogoData {
  id: number;
  attributes: {
    url: string;
    // Add any other attributes if present in the actual API response
  };
}

interface SectionData {
  data: {
    id: number;
    attributes: {
      ClientLogos: {
        data: LogoData[];
      };
      // Add any other attributes if present in the actual API response
    };
  }[];
}

const Section4: React.FC = () => {
  const SECTION4_API_URL = "http://localhost:1337/api/Section4s?populate=%2A";
  const strapiUrl = "http://localhost:1337";

  const [clientLogos, setClientLogos] = useState<LogoData[]>([]);
  
  // const apiKey = process.env;

  // console.log("apiKey", apiKey);

  useEffect(() => {
    
    fetch(SECTION4_API_URL)
      .then((response) => response.json())
      .then((section4_data: SectionData) => {
        const logos = section4_data.data[0]?.attributes.ClientLogos.data || [];
        setClientLogos(logos);

        console.log(logos+"lofgooooooooooooooooo");
        
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  
  return (
    <div className="Container">
      <section className="section">
        <h2>Satisfied Clients</h2>
      </section>
      <section className="section">
        <hr />
      </section>
      <section className="section">
        <div className="carousel">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="card gradient-left">
              <img
                src={`${strapiUrl}${logo.attributes.url}`}
                alt="Client Logo"
                className="ClientLogo"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;