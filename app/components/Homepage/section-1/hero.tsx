import React, { useEffect, useState } from 'react';
import { strapiUrl } from "~/utils/urls";

 const SECTION1_API_URL= `${strapiUrl}/api/section1s?populate=%2A`

const Hero = () => {
  const [section1Data, setSection1Data] = useState({
    HomeVideo: '',
    HomeTitle: '',
    HomeDescription: '',
    HomeText: ''
  });

  useEffect(() => {
    fetch(SECTION1_API_URL)
      .then((response) => response.json())
      .then((section1_data) => {
        const { HomeTitle, HomeText, HomeDescription, HomeVideo } = section1_data.data[0].attributes;
        setSection1Data({
          HomeVideo: HomeVideo.data[0].attributes.url,
          HomeTitle,
          HomeText,
          HomeDescription
        });
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const { HomeVideo, HomeTitle, HomeText, HomeDescription } = section1Data;

  return (
    <div>
      <div className='video-content'>
        <div className="nav-content">
          <div className="hero-nav-left flex ">
            <img src="./assets/nav-left.svg" alt="ivoyant-logo" />
          </div>
          <div className="hero-nav-right flex ">
            <img src="./assets/nav-right.svg" alt="ivoyant-logo" />
          </div>
        </div>
        <video muted loop playsInline src={`${strapiUrl}${HomeVideo}`} autoPlay width="100%" />
      </div>
      <div className="hero-container">
        <p className="hero-title flex animated-text">
          {HomeTitle.split(' ').map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="animated-char">{char}</span>
              ))}
              <span>&nbsp;</span>
            </React.Fragment>
          ))}
        </p>
        <p className="hero-subtitle flex">{HomeText}</p>
        <hr className="hero-gradient-top flex"></hr>
        <p className="hero-description">{HomeDescription}</p>
        <button className="btn hero-btn">Let's Talk</button>
      </div>
    </div>
  );
};

export default Hero;
