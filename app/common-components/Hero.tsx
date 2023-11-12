import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/Industries.Healthcare";
import { strapiUrl } from "~/utils/urls";

const Hero = () => {
  const loaderData = useLoaderData<typeof loader>();

  
  return (
    <section className="hero" >
      <img
        src={strapiUrl + loaderData.heroBgImageURl}
        className="w-full h-full object-cover"
        alt="Hero Image for healthcare section"
      ></img>
      <div className="overlay">
        <h6>{loaderData.heroTitle}</h6>
      </div>
    </section>
  );
};

export default Hero;
