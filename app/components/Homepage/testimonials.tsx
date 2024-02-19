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
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);

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
    <div id="testimonials" className="section-container pt-4">
      <section className="section-heading">
        <h2>Testimonials</h2>
      </section>
      {testimonialList.length > 0 && (
        <div>
          <section className="testimonial-section mt-4 gradient-top pb-4">
            <Carousel autoplay beforeChange={handleCarouselChange} afterChange={handleCarouselChange}>
              {testimonialList.map((testimonial, index) => (
                <div key={index} className="inner-container pb-4 w-full">
                  <div className="flex flex-col justify-center">
                    <div className="industry flex items-start justify-start testimonial-industry">
                      {testimonial.title}
                    </div>
                    <div className="flex text-sm py-4 font-poppins font-normal subtitle justify-between">
                      <div className="flex text-start">{testimonial.subtitle}</div>
                      <div className="flex mb-4">
                        <img src="../assets/Quote.svg" alt="vector" />
                      </div>
                    </div>
                    <div className="flex text-sm py-2 font-poppins font-normal designation">
                      {testimonial.designation}
                    </div>
                    <div className="flex text-sm py-4 font-poppins font-normal summary">
                      {testimonial.summary}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
