import { Carousel } from "antd";
import { useEffect, useState } from "react";
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
  const SECTION9_API_URL = `${strapiUrl}/api/section9s?populate=%2A`;
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
  const handleCarouselChange = (current: number) => {
    setCurrentTestimonialIndex(current);
  };
  return (
    <div className="section-container lg:py-12 md:py-6 py-4">
      <section className="section-heading">
        <h2 className="xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wider">
          Testimonials
        </h2>
      </section>
      <svg
        className="flex mx-auto"
        width="100%"
        height="24"
        viewBox="0 0 1280 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <rect
          x="60.5"
          y="12.25"
          width="0.5"
          height="579.5"
          transform="rotate(-90 60.5 12.25)"
          fill="url(#paint0_linear_2670_97811)"
        ></rect>{" "}
        <rect
          x="1219.5"
          y="11.75"
          width="0.5"
          height="579.5"
          transform="rotate(90 1219.5 11.75)"
          fill="url(#paint1_linear_2670_97811)"
        ></rect>{" "}
        <defs>
          <linearGradient
            id="paint0_linear_2670_97811"
            x1="61.25"
            y1="587.432"
            x2="61.25"
            y2="1.88636"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stop-color="#AEBEFF"></stop>
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0"></stop>{" "}
          </linearGradient>
          <linearGradient
            id="paint1_linear_2670_97811"
            x1="1220.25"
            y1="586.932"
            x2="1220.25"
            y2="1.38636"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stop-color="#AEBEFF"></stop>
            <stop offset="1" stop-color="#A7B8FE" stop-opacity="0"></stop>{" "}
          </linearGradient>
        </defs>
      </svg>
      {testimonialList.length > 0 && (
        <>
          <section className="testimonial-section pb-4">
            <Carousel
              beforeChange={handleCarouselChange}
              afterChange={handleCarouselChange}
            >
              {testimonialList.map((testimonial, index) => (
                <div key={index} className="inner-container pb-4 w-full">
                  <div className="flex flex-col justify-center">
                    <div className="industry flex items-start justify-start testimonial-industry">
                      {testimonial?.title}
                    </div>
                    <div className="flex text-sm py-4 font-poppins font-normal subtitle justify-between">
                      <div className="flex text-start">
                        {testimonial.subtitle}
                      </div>
                      <div className="flex mb-4">
                        <img src="../assets/Quote.svg" alt="vector" />
                      </div>
                    </div>
                    <div className="flex text-sm py-2 font-poppins font-normal designation">
                      {testimonial?.designation}
                    </div>
                    <div className="flex text-sm py-4 font-poppins font-normal summary">
                      {testimonial?.summary}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
        </>
      )}
    </div>
  );
};
export default Testimonials;
