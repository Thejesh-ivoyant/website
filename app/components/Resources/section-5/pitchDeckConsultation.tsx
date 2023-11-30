import { useLoaderData, useMatch } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

const API_URL = `${strapiUrl}/api/section7s?populate=%2A`


const PitchDeckConsultation = () => {
    const loaderData = useLoaderData() as any;
    const match = useMatch("/resources");
    const isResourcesRoute = match !== null;
    const handleDownload = () => {
      const pitchDeckUrl = loaderData.pitchDeck;
      window.open(pitchDeckUrl, '_blank');
    };

  const [tagline, setTagline] = useState("");
  const [bgImageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(({ data }) => {
        const { ContactUsDescription, section7bg } = data[0].attributes;
        setTagline(ContactUsDescription);
     
        setImageUrl(strapiUrl + section7bg.data[0].attributes.url);
        console.log("url is" + strapiUrl + section7bg.data[0].attributes.url);
      })
      .catch((error) => {
        console.warn("Section 7 Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="relative flex w-full items-center h-48">
      <img
        className="w-full h-full object-cover"
        src={bgImageUrl}
        alt="Background"
      />
      <div className="flex flex-row items-center justify-between"> 
       <div className=" flex absolute left-8 font-montserrat text-white text-4xl font-bold leading-[60px] tracking-wide lg:w-2/3 xl:w-2/3">
        {tagline}
      </div>
      <button className="flex absolute right-8 btn-white" onClick={handleDownload}>
            Download
          </button>
      </div>
     
    </div>
  );
};

export default PitchDeckConsultation;
