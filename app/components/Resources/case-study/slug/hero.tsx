const Hero = ({ data }: { data: any }) => {
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${data?.heroBgImage?.data?.attributes?.url}) lightgray 50% /cover no-repeat`,
  };
  return (
    <>
      <section
        className="md:mt-[4.5rem] screen-height text-white grid md:flex justify-center object-cover relative"
        style={gradientStyle}
      >
        <img
          src={data?.heroImage?.data?.attributes?.url}
          className="md:h-[80%] lg:w-fit md:w-[70%] md:block hidden absolute md:rounded-xl aspect-video mx-auto lg:top-16 object-contain"
          alt="icon"
        ></img>
        <div className="w-fit h-fit md:flex hidden flex-col xl:px-10 xl:py-12 lg:py-8 lg:px-6 md:px-4 md:py-6 gap-4 mx-12 -bottom-1/4 absolute text-black z-10 bg-white shadow-xl">
          <h1 className="font-montserrat md:text-3xl lg:text-4xl font-semibold">
            {" "}
            {data?.heroTitle}{" "}
          </h1>
          <p className="font-montserrat lg:text-base text-sm">
            {data?.heroDescription}
          </p>
          <div className="h-fit w-full flex flex-row gap-2 xl:mt-10">
            {data?.tags.map((tag: any, index: number) => (
              <div
                key={index}
                className="tags-indigo relative pl-5 gap-2 w-full"
              >
                <div className="font-semibold lg:text-2xl text-xl font-montserrat">
                  {tag.name}
                </div>
                <div className="lg:text-lg text-sm font-poppins ">
                  {tag.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="font-montserrat text-2xl p-4 font-semibold text-white mx-auto h-fit md:hidden">
          {" "}
          {data?.heroTitle}
        </h1>
        <div className="ml-auto pl-10 pb-10 md:hidden">
          <img
            src={data?.heroImage?.data?.attributes?.url}
            className="w-full h-full object-cover object-left"
            alt="icon"
          ></img>
        </div>
      </section>
      <div className="md:h-40 h-fit w-full py-5 px-4">
        <div className="w-fit h-fit md:hidden flex flex-col gap-4  text-black z-10">
          <p className="font-montserrat text-base text-justify leading-7">
            {data?.heroDescription}
          </p>
          <div className="h-fit w-full flex flex-col gap-4 xl:mt-10">
            {data?.tags.map((tag: any, index: number) => (
              <div
                key={index}
                className="tags-indigo relative pl-5 gap-2 w-full"
              >
                <div className="font-semibold  text-xl font-montserrat">
                  {tag.name}
                </div>
                <div className="text-sm font-poppins ">{tag.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
