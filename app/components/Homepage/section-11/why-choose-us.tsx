import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
interface Description {
  title: string;
  description: string;
}

interface DescriptionData {
  data: {
    id: number;
    attributes: {
      WhyChooseUs: any;
      DescriptionList: Description[];
      // Add any other attributes if present in the actual API response
    };
  }[];
}

const Why_Choose_Us = () => {
  const SECTION11_API_URL = `${strapiUrl}/api/section11s?populate=%2A`

  const [descriptionList, setDescriptionList] = useState<Description[]>([]);
  const [Title, setTitle] = useState<string>("");
  useEffect(() => {
    fetch(SECTION11_API_URL)
      .then((response) => response.json())
      .then((data: DescriptionData) => {
        const WhyChooseUs= data.data[0].attributes.WhyChooseUs;
        setTitle(WhyChooseUs);
        const firstItem = data.data[0];
        if (firstItem) {
          const descriptionList = firstItem.attributes.DescriptionList;
         debugger
          setDescriptionList(descriptionList);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="section-container">
      <section className="section-heading">
        <h2>Why Choose Us  </h2>
      </section>
      
      {descriptionList.length > 0 && (
        <div>
         
            <section>

<div className="flex flex-col space-y-4 ">
    {Array.from({ length: Math.ceil(descriptionList.length / 3) }).map((_, row) => (
      <div key={row} className="flex flex-row w-full gap-2 justify-evenly   py-8">
        {descriptionList.slice(row * 3, (row + 1) * 3).map((item, index) => (
          <div className=" flex flex-col Card-Container ">
          <div className="flex flex-row  gap-2 justify-start items-start ">
            <div className="flex">
            <img src="./assets/ClockCounterClockwise.svg"/>
            </div>
            <div className="card-title flex   text-sm font-poppins font-normal">
            {item.title}
            </div>

          </div>

           <span className="card-line h-6">
            </span>
          <div className="flex text-sm py-4 font-poppins font-normal card-description">
           {item.description}
          </div>
      </div>
        ))}
      </div>
    ))}
  </div>


           
            </section>
      
        </div>
      )}
    </div>
  );
};

export default Why_Choose_Us;
