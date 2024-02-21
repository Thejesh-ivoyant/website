import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
interface LogoData {
  id: number;
  attributes: {
    url: string;
    caption: string;
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
  const SECTION8_API_URL = `${strapiUrl}/api/section8s?populate=%2A`;
  const [TechnologyExpertiseLogos, setTechnologyExpertiseLogos] = useState<LogoData[]>([]);
  const [columnCount, setColumnCount] = useState<number>(5); // Default column count
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(SECTION8_API_URL)
      .then((response) => response.json())
      .then((section8_data: SectionData) => {
        const logos = section8_data.data[0]?.attributes.TechnologyExpertiseLogos?.data || [];
        setTechnologyExpertiseLogos(logos);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);
  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(max-width: 576px)").matches) {
        setColumnCount(3);
      } else if (window.matchMedia("(min-width: 577px) and (max-width: 768px)").matches) {
        setColumnCount(4);
      } else {
        setColumnCount(5);
      }
    }
    // Initial call to set column count based on window size
    handleResize();
    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount
  return (
    <div className="technology-section py-16">
      <section className="section-title">
        <h2>Technology Expertise</h2>
      </section>
      <section className="px-4 py-2">
        <div className="flex flex-col space-y-4 gradient-bottom">
          {Array.from({ length: Math.ceil(TechnologyExpertiseLogos.length / columnCount) }).map((_, row) => (
            <div key={row} className="flex flex-row w-full justify-evenly gradient-top py-8">
              {TechnologyExpertiseLogos.slice(row * columnCount, (row + 1) * columnCount).map((logo, index) => (
                <div className="logoitems flex flex-col gap-2" key={logo.id}>
                  <div className="flex">
                    <img src={`${logo.attributes.url}`} className="ClientLogo" alt={`Logo ${index}`} />
                  </div>
                  <div className="flex">
                    <figcaption className="text-black mt-2">{logo.attributes.caption}</figcaption>
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
