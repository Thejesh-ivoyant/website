import { useEffect } from "react";

import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export default function Faq() {
  const data = useLoaderData() as any;
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const faqContents = attributes?.faq || [];
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpansion = (id:number) => {
    setExpandedItems((prev:[]) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <div className="w-full h-fit p-16 bg-slate">
        <h3 className="text-center font-montserrat text-5xl text-PurpBlue font-semibold py-10">
          {attributes.faqTitle}
        </h3>
        <svg
          className="mx-auto"
          width="1200"
          height="25"
          viewBox="0 0 1200 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="rotate(-90 0 12.5)"
            fill="url(#a)"
            d="M0 12.5h1v600H0z"
          />
          <path
            transform="rotate(90 1200 11.5)"
            fill="url(#b)"
            d="M1200 11.5h1v600h-1z"
          />
          <defs>
            <linearGradient
              id="a"
              x1="1.5"
              y1="608.029"
              x2="1.5"
              y2="1.77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="1201.5"
              y1="607.029"
              x2="1201.5"
              y2=".77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AEBEFF" />
              <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="p-16">
        {faqContents.map((item:any) => (
        <div key={item.id} className="w-full bg-white shadow-md p-4 mb-4">
          <div className="flex flex-row p-4">
            <p className="flex font-montserrat font-medium text-xl" id={`question-${item.id}`}>
              {item.question}
            </p>
            <button
              className="rounded-full float-right bg-light-indigo text-white p-4 w-10 h-10 flex items-center justify-center font-light text-xl ml-auto"
              onClick={() => toggleExpansion(item.id)}
            >
              {expandedItems[item.id] ? '-' : '+'}
            </button>
          </div>
          <div
            className={`px-4 font-poppins text-lg overflow-hidden ${
              expandedItems[item.id] ? 'h-fit' : 'h-0'
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
