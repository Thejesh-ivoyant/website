import { Carousel } from "antd";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

const Section4 = ({ data }: { data: any }) => {
  console.log(JSON.stringify(data));
  return (
    <>
      <Carousel className="w-full p-6 my-6">
        {data?.section3Slideshow?.data.map((item: any, index: number) => (
          <img
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
