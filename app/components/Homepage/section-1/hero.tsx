import React, { useEffect, useState } from 'react';
import { strapiUrl } from "~/utils/urls";
import { scrollTo } from "~/root";
 const SECTION1_API_URL= `${strapiUrl}/api/section1s?populate=%2A`;
 
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
  const [c, setC] = useState(0);

  const closeChats = () => {
setC(0);
  };
  const openChats = () => {
    setC(1);
      };
  


  return (
    <div>
      <div className='video-content'>
     
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
        <button className="btn hero-btn" onClick={() => scrollTo("contact-us")}>Let's Talk</button>
      </div>
      {c===0 && (<div className="social-media-container" >
        
        <div className="ellipse-container">
          <img
            src="../assets/Ellipse.svg"
            alt="Ellipse"
            className="ellipse-image"
          />
           <img
               src="../assets/Chats.svg"
           alt="close"
               className="minus-image"

               onClick={() =>openChats()}
          />

        </div>
    </div>)}
      {c===1 && (<div className={`social-media-container ${c === 1 ? 'open' : ''}`}>
              <img className="social-media-item" src="../assets/Facebook.png" alt="social-media-icons" />
              <img className="social-media-item" src="../assets/linkedin.svg" alt="social-media-icons" />
        <div className="chats-ellipse-container social-media-item" >
          <img
            src="../assets/Ellipse.svg"
            alt="Ellipse"
            className="chats-ellipse-image"
          />
           <img
            src="../assets/skype.svg"
           alt="close"
               className="minus-image"
          />

        </div>
        <img className="social-media-item" src="../assets/skype.svg"  />
        <div className="chats-ellipse-container" onClick={() => closeChats()}>
          <img
            src="../assets/Ellipse.svg"
            alt="Ellipse"
            className="chats-ellipse-image"
          />
           <img
               src="../assets/X.svg"
           alt="close"
               className="minus-image"
          />

        </div>
        
    </div>
      )}
      <div className="side-nav">
         <p className='navigate'> Navigate to</p>
          <div className="line"><p>Contact Us</p> </div>
          <div className="line"><p>Testimonials</p></div>
          <div className="line"><p>About Us</p></div>
          <div className="line"><p>Services</p></div>
          <div className="line"  onClick={() => scrollTo("industries")}><p>Industries</p></div>

        </div>
    </div>
  );
};

export default Hero;
