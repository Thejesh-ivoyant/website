import { Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";

const Hero = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${strapiUrl + loaderData.heroBgImageURl}) lightgray 50% / cover no-repeat`,
  };
  return (
    <section className="hero min-h-screen text-white flex justify-center object-cover" style={gradientStyle}>
      
      <div className="relative flex mx-auto max-w-2xl text-center items-center justify-center flex-col gap-4" >
        <h1 className="font-semibold font-montserrat text-4xl">{loaderData.heroTitle}</h1>
        <div className="top-gradient p-4">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos amet eveniet quis temporibus aperiam! Ex sed reprehenderit necessitatibus rem et. Nisi, autem nesciunt consequuntur sunt rerum vero.
          </span>
        </div>
        <button className="btn hero-btn">Let's Talk</button>
      </div>
      <Outlet />
    </section>
  );
};

export default Hero;
