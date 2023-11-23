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
  const SECTION11_API_URL = `${strapiUrl}/api/section11s?populate=%2A`;

  const [descriptionList, setDescriptionList] = useState<Description[]>([]);
  const [WhyChooseUs, setWhyChooseUs] = useState<string>("");
  useEffect(() => {
    fetch(SECTION11_API_URL)
      .then((response) => response.json())
      .then((data: DescriptionData) => {
        const WhyChooseUs = data.data[0].attributes.WhyChooseUs;
        setWhyChooseUs(WhyChooseUs);
        const firstItem = data.data[0];
        if (firstItem) {
          const descriptionList = firstItem.attributes.DescriptionList;

          setDescriptionList(descriptionList);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="section-container">
      <section className="section-heading py-8 gradient-bottom">
        <h2>Choose Confidence: Choose iVoyant </h2>
      </section>

      <div className="text-center text-violet-200 text-base font-normal font-poppins p-4 lg:mx-40">
        {WhyChooseUs}
          </div>

      {descriptionList.length > 0 && (
        <div>
          <section>
            <div className="flex flex-col space-y-4 py-8 ">
              {Array.from({
                length: Math.ceil(descriptionList.length / 3),
              }).map((_, row) => (
                <div
                  key={row}
                  className="w-full gap-2 justify-evenly why-choose-us-Container"
                >
                  {descriptionList
                    .slice(row * 3, (row + 1) * 3)
                    .map((item, index) => (
                      <div className=" flex flex-col Card-Container items-center justify-center">
                        <div className="flex card-image">
                                <img src="../assets/ClockCounterClockwise.svg" alt="cardIcon" />
                        </div>
                        <div className="card-title flex   text-sm font-poppins font-normal">
                          {item.title}
                        </div>

                        <span className="card-line h-6"></span>
                        <div className="flex text-sm py-4 font-poppins font-normal card-description">
                                <img src="../assets/ClockCounterClockwise.svg" alt="cardIcon" />
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
