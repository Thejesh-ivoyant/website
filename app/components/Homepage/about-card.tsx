// src/components/Card.js
import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

const AboutCard = () => {
  const SECTION2_API_URL = `${strapiUrl}/api/section2s?populate=%2A`

  const [aboutUsTitle, setAboutUsTitle] = useState("");
  const [aboutUsDescription, setAboutUsDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SECTION2_API_URL);
        const { data } = await response.json();
        const { AboutUsTitle, AboutUs } = data[0].attributes;

        setAboutUsTitle(AboutUsTitle);
        setAboutUsDescription(AboutUs);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex lg:w-1/2 bg-white w-full md:px-32 xl:px-28 lg:px-16 px-16 text-black font-[500px] justify-center items-center py-8">
      <div className="flex flex-col gap- lg:gap-10 w-full h-fit">
        <div className="leading-10 text-4xl md:text-[36px] py-4 font-montserrat font-medium">
          {aboutUsTitle}
          <span className="text-grape"> iVoyant </span>
        </div>
        <div className="text-md py-4 font-poppins font-light lg:leading-8 " id="about-desc">
          {aboutUsDescription}
        </div>
     
    
          <Link to={"/company/about_us"} className="button-test relative py-4 lg:py-3 hover:text-white">
            <a>About Us</a>
          </Link>

      </div>
    </div>
  );
};

export default AboutCard;