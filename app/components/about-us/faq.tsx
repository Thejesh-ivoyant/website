import { useState } from "react";
import { FAQItem } from "~/DTO/faq";
export default function Faq({ faqContents }: { faqContents: FAQItem[] }) {
  const [currState, setCurrState] = useState<number>(-1);
  const toggleExpansion = (clickedId: number) => {
    setCurrState((prevState) => (prevState === clickedId ? -1 : clickedId));
  };
  return (
    <>
      <div className="w-full relative h-fit section-p-y bg-slate overflow-hidden">
        <div className="flex w-fit font-montserrat  h-fit mx-auto text-head-grape lg:text-5xl md:text-4xl sm:text-2xl text-xl font-semibold">
          FAQs
        </div>
        <svg
          className="mx-auto"
          width="100%"
          height="24"
          viewBox="0 0 1280 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60.5"
            y="12.25"
            width="0.5"
            height="579.5"
            transform="rotate(-90 60.5 12.25)"
            fill="url(#paint0_linear_7957_66393)"
          />
          <rect
            x="1219.5"
            y="11.75"
            width="0.5"
            height="579.5"
            transform="rotate(90 1219.5 11.75)"
            fill="url(#paint1_linear_7957_66393)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7957_66393"
              x1="61.25"
              y1="587.432"
              x2="61.25"
              y2="1.88636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D3493" />
              <stop offset="1" stop-color="#2F54EB" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7957_66393"
              x1="1220.25"
              y1="586.932"
              x2="1220.25"
              y2="1.38636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D3493" />
              <stop offset="1" stop-color="#2F54EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="md:px-16 md:py-12 py-4 grid gap-4 px-6">
          {faqContents?.map((item: FAQItem) => (
            <div
              key={item.id}
              className={`flex flex-col w-full bg-white text-[#090519] p-4 lg:pl-16 lg:pr-6 max-w-7xl mx-auto gap-4 ${item.id === currState ? "faq-box-shadow" : ""}`}
            >
              <div className="flex flex-row sm:pl-4 pl-1 gap-4">
                <p
                  className="flex font-montserrat font-semibold lg:text-xl md:text-lg items-center text-base"
                  id={`question-${item.id}`}
                >
                  {item.question}
                </p>
                <button
                  className="rounded-full float-right bg-light-indigo text-white lg:p-4 lg:w-10 lg:h-10 w-8 h-8 p-3 flex text-center items-center justify-center font-light text-xl ml-auto"
                  onClick={() => toggleExpansion(item.id)}
                >
                  {item.id === currState ? "-" : "+"}
                </button>
              </div>
              <div
                className={
                  item.id === currState
                    ? `flex transition-all px-1 sm:px-4 font-poppins lg:text-lg md:text-base text-sm md:leading-8 lg:leading-9 leading-7 overflow-hidden`
                    : `hidden`
                }
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
