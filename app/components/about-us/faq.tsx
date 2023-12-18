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
