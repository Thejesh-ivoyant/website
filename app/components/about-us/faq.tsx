import { useEffect } from "react";

import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FAQItem } from "~/DTO/faq";
export default function Faq( {faqContents}:{ faqContents: FAQItem[]}) {
  const data = useLoaderData() as any;
  
  
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
      <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape text-5xl font-semibold'>FAQs</div>
      <svg className='w-full mx-auto' width="1300" height="40" viewBox="0 0 1300 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 70.5 76)" fill="url(#a)" d="M70.5 76h.5v579.5h-.5z"/><path transform="rotate(90 1229.5 75.5)" fill="url(#b)" d="M1229.5 75.5h.5V655h-.5z"/><defs><linearGradient id="a" x1="71.25" y1="651.182" x2="71.25" y2="65.636" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1230.25" y1="650.682" x2="1230.25" y2="65.136" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>
        <div className="p-16">
          {faqContents.map((item: any) => (
            <div key={item.id} className="w-full bg-white shadow-md p-4 mb-4">
              <div className="flex flex-row p-4">
                <p className="flex font-montserrat font-medium text-xl" id={`question-${item.id}`}>
                  {item.question}
                </p>
                <button
                  className="rounded-full float-right bg-light-indigo text-white p-4 w-10 h-10 flex items-center justify-center font-light text-xl ml-auto"
                  onClick={() => toggleExpansion(item.id)}
                >
                  {expandedItem === item.id ? '-' : '+'}
                </button>
              </div>
              <div
                className={`px-4 font-poppins text-lg overflow-hidden ${
                  expandedItem === item.id ? 'h-fit' : 'h-0'
                }`}
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