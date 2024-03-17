import { useLoaderData } from "@remix-run/react";
import { Image } from "@unpic/react";
const PTCHero = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    zIndex: -1,
    background: `linear-gradient(100deg, white 55%, transparent 50%), url(${loaderData?.heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div
        className="relative md:flex hidden screen-height mt-20 flex-row min-h-fit"
        style={gradientStyle}
      >
        <div className="w-1/2 grid place-items-center px-6">
          <div className="privacy-hero-text flex flex-col my-auto max-w-lg">
            <small className="text-sm lg:text-lg font-poppins leading-8 font-normal">
              Last reviewed on: Dec 09, 2023
            </small>
            <h1 className="font-montserrat text-3xl lg:text-4xl font-extrabold text-haiti italic">
              {loaderData?.heroTitle}
            </h1>
            <p className="font-poppins text-base lg:text-lg font-normal lg:leading-8 leading-6 text-justify mt-5">
              {loaderData.heroDescription}
            </p>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <section className=" md:hidden flex py-12 px-10 mt-20 flex-row ">
        <div className="privacy-hero-text flex flex-col my-auto max-w-lg">
          <small className="text-sm font-poppins leading-8 font-normal">
            Last reviewed on: Dec 09, 2023
          </small>
          <h1 className="font-montserrat text-4xl font-bold text-haiti italic leading-10">
            {loaderData?.heroTitle}
          </h1>
          <p className="font-poppins text-sm font-normal leading-6 text-justify mt-5">
            {loaderData.heroDescription}
          </p>
        </div>
      </section>
      <Image
        src={loaderData?.heroImage}
        width={768}
        height={500}
        className="h-72 w-full object-cover object-right md:hidden block"
      />
      {/* <img
        src={loaderData?.heroImage}
        loading="eager"
        className="h-72 w-full object-cover object-right"
        alt="privacy-policy"
      /> */}
    </>
  );
};

export default PTCHero;
