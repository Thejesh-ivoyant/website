const Section6 = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex flex-col w-full max-h-fit lg:flex-row CardDark">
        <div className="flex lg:w-1/2 flex-1 bg-white flex-wrap w-full text-black font-medium justify-center items-center p-4">
          <div className="flex flex-col gap-7 w-[34rem]  h-fit">
          <div className="flex bg-black font-montserrat italic px-1 h-fit w-fit text-white md:text-base text-sm">{data?.section6MiniTitle}</div>
          <div className="about-title">
              {data?.section_6_title}
          </div>
            <div
              className="text-md font-poppins font-light lg:leading-[1.75rem] "
              id="about-desc"
            >
              {data?.section_6_description}
            </div>
          </div>
        </div>
        <div className="relative h-full flex items-center  justify-center font-montserrat overflow-hidden opacity-95 my-auto">
          <div className="moving-bg"></div>
          <div className="grid grid-cols-2 aspect-square w-full">
            <div className="aspect-square inline-flex justify-center items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold md:text-left text-center">
                  90
                </div>
                <div className="text-xl h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Delighted Clients
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-top items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  89
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-left  items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  67
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Successful Projects
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-bottom items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  100
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  In-House Experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section6;
{
  /* <div className="flex">
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
      </div> */
}
