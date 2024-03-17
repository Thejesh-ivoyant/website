import { Carousel } from "antd";
const Section4 = ({ data }: { data: any }) => {
  return (
    <>
      <Carousel className="w-full p-6 my-6">
        {data?.section3Slideshow?.data.map((item: any, index: number) => (
          <img
            key={index} 
            className="h-[70dvh] w-5/6 my-bg object-contain"
            src={item.attributes.url}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </>
  );
};
export default Section4;
