import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FAQItem } from "~/DTO/faq";

export default function Faq({ faqContents }: { faqContents: FAQItem[] }) {
  const data = useLoaderData() as any;

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    if (expandedItem === id) {
      return;
    }

    faqContents.forEach((item: FAQItem) => {
      const answerElement = document.getElementById(`answer-${item.id}`);
      if (answerElement) {
        if (item.id === id) {
          answerElement.style.height = "auto";
        } else {
          answerElement.style.height = "0"; 
        }
      }
    });

    setExpandedItem(id);
  };

  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
      <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape text-5xl font-semibold'>FAQs</div>
      <svg className="w-full mx-auto mt-2" width="1280" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>        
        <div className="p-16">
          {faqContents.map((item: FAQItem) => (
            <div key={item.id} className="w-full bg-white shadow-md p-4 mb-4">
              <div className="flex flex-row p-4">
                <p className="flex font-montserrat font-medium text-xl" id={`question-${item.id}`}>
                  {item.question}
                </p>
                <button
                  className="rounded-full float-right bg-light-indigo text-white p-4 w-10 h-10 flex items-center justify-center font-light text-xl ml-auto"
                  onClick={() => toggleExpansion(item.id)}
                >
                  {item.id === expandedItem ? "-" : "+"}
                </button>
              </div>
              <div
                className="px-4 font-poppins text-lg overflow-hidden"
                id={`answer-${item.id}`}
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
