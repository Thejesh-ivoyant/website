import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import Footer from "~/common-components/footer";
import Why_Choose_Us from "~/components/Homepage/section-11/why-choose-us";
import Section4 from "~/components/Homepage/section-4/clients";
import { strapiUrl } from "~/utils/urls";
// The URL of the API endpoint
const API_URL = `${strapiUrl}/api/section1s?populate=%2A`

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const MobDev = () => {
  // State to store the company name
  const [companyName, setCompanyName] = useState("");
  const [AboutUs, setServiceDescription] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is in the expected format and HomeTitle holds the company name
        const { HomeTitle, HomeText } = data.data[0].attributes;
        setCompanyName(HomeTitle);
        setServiceDescription(AboutUs);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  // Hide the scroll bar for the entire page
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Re-enable scroll when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#000000", padding: "0px", overflowX: "hidden" }}>
      {/* Top Header Navbar */}
      

      <div style={{ position: "relative", width: "100%", height: "580px", overflow: "hidden"}}>
      <video autoPlay muted loop playsInline id="myVideo" style={{ width: "100%", height: "100%", objectFit: "cover"}}>
  <source src="./assets/video.mp4" type="video/mp4" />
</video>
</div>
<Why_Choose_Us></Why_Choose_Us>
<Footer/>

    </div>

    
  );
};

export default MobDev;
