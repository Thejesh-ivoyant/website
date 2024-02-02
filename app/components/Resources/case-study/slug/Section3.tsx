
const Section3 = ({data}:{data:any}) => {
  
  return (
    <>
        <div className="flex flex-col justify center font-poppins h-fit w-full items-center md:px-10 md:py-10 px-6 py-8 gap-2">
                <div className="flex bg-black font-montserrat italic px-1 h-fit w-fit text-white md:text-base text-sm">{data?.section3MiniTitle}</div>
                <div className="lg:text-4xl md:text-3xl text-xl text-PurpBlue text-center w-full lg:px-12 md:leading-[3.75rem] font-semibold">{data?.section_3_title}</div>
                <svg className="mx-auto justify-center items-center w-full" width="1200" height="25" viewBox="0 0 1200 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h.5v600H0z"/><path transform="rotate(90 1200 11.75)" fill="url(#b)" d="M1200 11.75h1v600h-1z"/><defs><linearGradient id="a" x1=".75" y1="608.029" x2=".75" y2="1.77" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1201.5" y1="607.279" x2="1201.5" y2="1.02" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
                <p className="font-poppins text-left md:text-center lg:text-xl text-base">{data?.section_3_description}</p>
        </div>
    </>
  );
};

export default Section3;
