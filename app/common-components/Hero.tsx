import { useLoaderData } from "@remix-run/react";
import { indexLoader } from "~/routes/Industries.Healthcare";


const Hero = () => {
  const loaderData = useLoaderData<typeof indexLoader>();
  return (
    <section className="hero">
      
    </section>
  );
};

export default Hero;