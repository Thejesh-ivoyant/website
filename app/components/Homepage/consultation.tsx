import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

const API_URL = `${strapiUrl}/api/section7s?populate=%2A`;

const Consultation = () => {
  const [tagline, setTagline] = useState("");
  const [bgImageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(({ data }) => {
        const { ContactUsDescription, section7bg } = data[0].attributes;
        setTagline(ContactUsDescription);

        setImageUrl(section7bg.data[0].attributes.url);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${bgImageUrl}) lightgray 50% /cover no-repeat`,
  };
  return (
    <div
      className=" flex flex-row  gap-4 w-full items-center h-48"
      style={gradientStyle}
    >
      <div className=" flex flex-wrap  font-montserrat text-white text-4xl font-bold leading-[60px] tracking-wide ">
        {tagline}
      </div>
      <div className="flex items-center right-0 ">
        <button className="btn-white">GRAB A CONSULTATION</button>
      </div>
    </div>
  );
};

export default Consultation;
