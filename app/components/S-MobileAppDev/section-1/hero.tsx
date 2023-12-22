import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

const Hero = () => {
  const loaderData = useLoaderData() as any;


  return (
    <div>
      <div className="h-screen">
      {/* <img src={`${strapiUrl}${loaderData.heroImage}`} alt="video" width="100%" /> */}
        <img src={`${loaderData.heroImage}`} alt="video" width="100%" />
      </div>
      <div className="hero-container">
        <p className="hero-title flex animated-text">
          {loaderData.heroTitle}
        </p>

        <hr className="hero-gradient-top flex"></hr>
        <p className="hero-description">{loaderData.heroDescription}</p>
      
         <Link to="/contact-us">
          <button className="btn hero-btn" >
            Let's Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
