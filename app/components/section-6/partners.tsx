// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

interface PartnerLogoData {
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
    PartnerLogos: {
        data: PartnerLogoData[];
      };
      // Add any other attributes if present in the actual API response
    };
  }[];
}

const Section6: React.FC = () => {
  const SECTION6_API_URL = `${strapiUrl}/api/section6s?populate=%2A`
  const [PartnerLogos, setPartnerLogos] = useState<PartnerLogoData[]>([]);

  useEffect(() => {
    fetch(SECTION6_API_URL)
      .then((response) => response.json())
      .then((section6_data: SectionData) => {
        const logos = section6_data.data[0]?.attributes.PartnerLogos.data || [];
        setPartnerLogos(logos);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

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
          {PartnerLogos.map((logo) => (
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

export default Section6;
