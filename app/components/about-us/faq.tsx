import { useState } from "react";
import { FAQItem } from "~/DTO/faq";

export default function Faq({ faqContents }: { faqContents: FAQItem[] }) {
  const [currState, setCurrState] = useState<number>(-1);

  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId));
  };
  
  return (
    <>
      <div className="w-full relative h-fit lg:py-16  md:py-14  sm:py-12 py-10 bg-slate overflow-hidden">
      <svg className="absolute sm:hidden block -top-4 left-4" width="1" height="92" viewBox="0 0 1 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-180 1 92)" fill="url(#a)" d="M1 92h1v126H1z"/><defs><linearGradient id="a" x1="2.5" y1="217.061" x2="2.5" y2="89.747" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient></defs></svg>
      <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape lg:text-5xl md:text-4xl sm:text-2xl text-xl font-semibold'>FAQs</div>
      <svg className="w-full sm:block hidden mx-auto mt-2" width="100%" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg> 
      <svg className="sm:hidden block" width="100%" height="24" viewBox="0 0 360 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 -88 12)" fill="url(#a)" d="M-88 12h.5v628.5h-.5z"/><defs><linearGradient id="a" x1="-87.25" y1="635.817" x2="-87.25" y2=".76" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient></defs></svg>
            
        <div className="md:px-16 md:py-12 py-4 grid gap-4 px-6">
          {faqContents?.map((item: FAQItem) => (
            <div key={item.id} className={`flex flex-col w-full bg-white text-[#090519] p-4 lg:pl-16 lg:pr-6 max-w-7xl mx-auto gap-4 ${(item.id === currState)? 'faq-box-shadow': ''}`}>
              <div className="flex flex-row sm:pl-4 pl-1 gap-4">
                <p className="flex font-montserrat font-semibold lg:text-xl md:text-lg items-center text-base" id={`question-${item.id}`}>
                  {item.question}
                </p>
                <button
                  className="rounded-full float-right bg-light-indigo text-white lg:p-4 lg:w-10 lg:h-10 w-8 h-8 p-3 flex items-center justify-center font-light text-xl ml-auto"
                  onClick={() => toggleExpansion(item.id)}
                >
                  {item.id === currState ? "-" : "+"}
                </button>
              </div>
              <div
                className={ (item.id === currState)? `flex transition-all px-1 sm:px-4 font-poppins lg:text-lg md:text-base text-sm md:leading-8 lg:leading-9 leading-7 overflow-hidden` : `hidden`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
