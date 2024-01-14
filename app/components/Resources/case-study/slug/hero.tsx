const Hero = ({data}:{data:any}) => {
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${data?.heroBgImage?.data.attributes.url}) lightgray 50% / 100% 100% no-repeat`,
  };
  return (
    <>
    <section className="mt-[4.5rem] screen-height text-white flex justify-center object-cover relative" style={gradientStyle}>
      <img src={data?.heroImage?.data.attributes.url} className="w-3/5 rounded-xl aspect-video mx-auto mt-auto"></img>
      <div className="w-fit h-fit flex flex-col px-10 py-12 gap-4 mx-12 -bottom-1/4 absolute text-black z-10 bg-white shadow-xl">
        
        <h1 className="font-montserrat text-4xl font-semibold"> {data?.heroTitle} </h1>
        <p>
          {data?.heroDescription}
        </p>
        
        <div className="h-fit w-full flex flex-row gap-2 mt-10">
        {data?.tags.map((tag:any, index:number) => (
          <div key={index} className="tags-indigo relative px-5 gap-2 w-full">
                <div className="font-semibold text-2xl font-montserrat">{tag.name}</div>
                <div className="text-lg font-poppins ">{tag.description}</div>
          </div>
        ))}
        </div>
    </div>
    </section>
    </>
  );
};

export default Hero;