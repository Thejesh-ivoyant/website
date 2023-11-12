import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
interface Testimonial {
  title: string;
  subtitle: string;
  designation: string;
  summary: string;
}

interface TestimonialData {
  data: {
    id: number;
    attributes: {
      TestimonialList: Testimonial[];
      // Add any other attributes if present in the actual API response
    };
  }[];
}

const Testimonials = () => {
  const SECTION9_API_URL = `${strapiUrl}/api/section9s?populate=%2A`


  const [testimonialList, setTestimonialList] = useState<Testimonial[]>([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    useState<number>(0);

  useEffect(() => {
    fetch(SECTION9_API_URL)
      .then((response) => response.json())
      .then((data: TestimonialData) => {
        const firstItem = data.data[0];
        if (firstItem) {
          const testimonialList = firstItem.attributes.TestimonialList;
          setTestimonialList(testimonialList);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const handleNextClick = () => {
    const nextIndex = currentTestimonialIndex + 1;
    if (nextIndex < testimonialList.length) {
      setCurrentTestimonialIndex(nextIndex);
    } else {
      setCurrentTestimonialIndex(0)
      // Handle case where there are no more testimonials
    }
  };

  const handleBackClick = () => {
    const nextIndex = currentTestimonialIndex - 1;

    if (nextIndex >= 0) {
      setCurrentTestimonialIndex(nextIndex);
    } else {
      setCurrentTestimonialIndex(testimonialList.length-1)
    }
  };

  return (
    <div className="section-container">
      <section className="section-heading">
        <h2>Testimonials</h2>
      </section>
      {testimonialList.length > 0 && (
        <div>
        
          <section className="section px-64 mt-4 gradient-top">
            <div className="inner-container w-full ">
              <div className="flex flex-col justify-center">
                <div className="industry flex items-start justify-start text-sm font-poppins font-normal">
                  {testimonialList[currentTestimonialIndex].title}
                </div>
                <div className="flex text-sm py-4 font-poppins font-normal subtitle justify-between" >
                  
                    <div className="flex">{testimonialList[currentTestimonialIndex].subtitle}</div>

                    <div className="flex mb-4"><img src="../assets/Quote.svg"/></div>
                </div>
                <div className="flex text-sm py-2 font-poppins font-normal designation ">
                  {testimonialList[currentTestimonialIndex].designation}
                </div>
                <div className="flex text-sm py-4 font-poppins font-normal summary">
                  {testimonialList[currentTestimonialIndex].summary}
                </div>
                <div className="flex flex-row gap-6">
                <button className="my-button" onClick={handleBackClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </button>

                <button className="my-button" onClick={handleNextClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>

                </div>
    
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
