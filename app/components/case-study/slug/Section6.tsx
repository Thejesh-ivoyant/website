const Section6 = ({data}:{data:any}) => {
  return (
    <>
      <div className="flex">
        <div className="flex-grow justify-center items-center flex">
            <div className=" flex flex-col h-fit w-[32rem] gap-4">
                <p className="w-fit bg-black font-montserrat italic text-white">{data?.section6MiniTitle}</p>
                <p className="text-5xl font-light self-stretch leading-[3rem] tracking-wide">{data?.section_6_title}</p>
                <p className="font-poppins text-base leading-7">{data?.section_6_description}</p>
            </div>
        </div>
        <div className="lg:w-1/2 relative w-full CardDark opacity-95 flex flex-col justify-center items-center">
          <div className="flex flex-1 w-full max-h-[300px] justify-center">
            <div className="aspect-square w-fit h-[300px] flex items-center px-12 grape-shadow">
              <div className="ml-auto flex gap-4 items-center ">
                <span className="lg:text-6xl text-4xl font-bold">99</span>
                <span className=" font-thin w-24">Delighted Clients</span>
              </div>
            </div>
            <div className=" aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow">
              <div className="mr-auto flex gap-4 items-center">
                <span className="lg:text-6xl font-bold text-4xl"> 88 </span>
                <span className=" font-thin w-24">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 w-full max-h-[300px] justify-center">
            <div className="aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-left px-12 grape-shadow">
              <div className="ml-auto flex gap-4  items-center">
                <span className="lg:text-6xl text-4xl font-bold"> 77 </span>

                <span className=" font-thin w-24">Successful Projects</span>
              </div>
            </div>
            <div className="w-fit aspect-square  h-[300px] flex  gap-6 items-center border-container-bottom px-12 grape-shadow">
              <div className="mr-auto flex gap-4  items-center">
                <span className="lg:text-6xl text-3xl font-bold">99 </span>
                <span className="font-thin w-24">Delighted Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
