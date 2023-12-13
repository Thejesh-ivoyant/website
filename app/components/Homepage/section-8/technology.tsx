// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";



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
      TechnologyExpertiseLogos: {
        data: LogoData[];
      };
      // Add any other attributes if present in the actual API response
    };
  }[];
}

const Technology = () => {
  const SECTION8_API_URL = `${strapiUrl}/api/section8s?populate=%2A`

  // const apiUrl = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'
  // const strapi = new Strapi(apiUrl);




  const [TechnologyExpertiseLogos, setTechnologyExpertiseLogos] = useState<
    LogoData[]
  >([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(SECTION8_API_URL)
      .then((response) => response.json())
      .then((section8_data: SectionData) => {
        const TechnologyExpertiseLogos =
          section8_data.data[0].attributes.TechnologyExpertiseLogos.data || [];
        setTechnologyExpertiseLogos(TechnologyExpertiseLogos);
        console.log("hhhhhhhhhhhhssss" + TechnologyExpertiseLogos);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="technology-section py-16">
      <section className="heading">
        <h2>Technology Expertise </h2>
      </section>

      <section className="px-4 py-2">
  {/* Create divs for each row */}
  <div className="flex flex-col space-y-4 gradient-bottom ">
    {Array.from({ length: Math.ceil(TechnologyExpertiseLogos.length / 5) }).map((_, row) => (
      <div key={row} className="flex flex-row w-full justify-evenly gradient-top py-8">
        {TechnologyExpertiseLogos.slice(row * 5, (row + 1) * 5).map((logo, index) => (
          <div className="logoitems flex flex-col gap-2 " key={logo.id}>
            <div className="flex"><img
              src={`${logo.attributes.url}`}
              className="ClientLogo"
              alt={`Logo ${index}`}
            />
            </div>
            <div className="flex"> 
              <figcaption className="text-black mt-2">testtlogo</figcaption>
            </div>
          
          </div>
        ))}
      </div>
    ))}
  </div>
</section>



    </div>
  );
};

export default Technology;
