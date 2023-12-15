import { useEffect } from "react";

import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export default function Faq() {
  const data = useLoaderData() as any;
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const faqContents = attributes?.faq || [];
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
        {/* ... (your existing JSX) */}
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