import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import DescriptionCard from "~/components/about-us/description-card";
import ContactUs from "~/components/contact-us/contactUs";
import Footer from "~/components/footer";
import BlogsContainer from "~/components/section-10/blog-container";
import Why_Choose_Us from "~/components/section-11/why-choose-us";
import AboutCardContainer from "~/components/section-2/about-card-container";
import Section4 from "~/components/section-4/clients";
import Section6 from "~/components/section-6/partners";
import Testimonials from "~/components/section-9/testimonials";
const strapiUrl = "http://localhost:1337";
// The URL of the API endpoint
const ABOUTUS_API_URL= `${strapiUrl}/api/about-uses?populate=%2A`

const About_Us = () => {
  const [aboutData, setAboutData] = useState({
    BackgroundImage: '',
    AboutHeading: '',
    AboutDescription: '',
    DescriptionBackground: '',
  });

  useEffect(() => {
    fetch(ABOUTUS_API_URL)
      .then((response) => response.json())
      .then((about_data) => {
        const { AboutHeading,AboutDescription,BackgroundImage ,DescriptionBackground} = about_data.data[0].attributes;
        setAboutData({
          BackgroundImage: BackgroundImage.data[0].attributes.url,
          AboutHeading,
          AboutDescription,
          DescriptionBackground: DescriptionBackground.data[0].attributes.url
        });
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const { BackgroundImage, AboutHeading, AboutDescription ,DescriptionBackground} = aboutData;



  return (
    <div>
      <div className='video-content'>
        <div className="nav-content">
          <div className="hero-nav-left flex ">
            <img src="../assets/nav-left.svg" alt="ivoyant-logo" />
          </div>
          <div className="hero-nav-right flex ">
            <img src="../assets/nav-right.svg" alt="ivoyant-logo" />
          </div>
        </div>
  <img src={`${strapiUrl}${BackgroundImage}`}/>
      </div>
      <div className="hero-container">
        <p className="hero-title flex animated-text">
          {"Company".split(' ').map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="animated-char">{char}</span>
              ))}
              <span>&nbsp;</span>
            </React.Fragment>
          ))}
        </p>

        <hr className="hero-gradient-top flex"></hr>
        <p className="hero-description">{AboutHeading}</p>
        <button className="btn hero-btn">Let's Talk</button>
      </div>

      <DescriptionCard AboutDescription={AboutDescription} DescriptionBackground={DescriptionBackground} />

      <BlogsContainer/>
      <Section4/>
      <Testimonials/>
      <BlogsContainer/>
      <ContactUs/>
      <Footer/>
 
    </div>
  );
};


export default About_Us;
