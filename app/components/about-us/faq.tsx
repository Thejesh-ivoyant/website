import { useState } from "react";
import { FAQItem } from "~/DTO/faq";

export default function Faq({ faqContents }: { faqContents: FAQItem[] }) {
  const [currState, setCurrState] = useState<number>(-1);

  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId));
  };
  
  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
      <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape text-5xl font-semibold'>FAQs</div>
      <svg className="w-full mx-auto mt-2" width="1280" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>        
        <div className="p-16">
          {faqContents?.map((item: FAQItem) => (
            <div key={item.id} className="w-full bg-white shadow-md p-4 mb-4">
              <div className="flex flex-row p-4">
                <p className="flex font-montserrat font-medium text-xl" id={`question-${item.id}`}>
                  {item.question}
                </p>
                <button
                  className="rounded-full float-right bg-light-indigo text-white p-4 w-10 h-10 flex items-center justify-center font-light text-xl ml-auto"
                  onClick={() => toggleExpansion(item.id)}
                >
                  {item.id === currState ? "-" : "+"}
                </button>
              </div>
              <div
                className={ (item.id === currState)? `transition-all px-4 font-poppins text-lg overflow-hidden` : `hidden`}
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
