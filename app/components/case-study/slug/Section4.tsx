import { Carousel } from "antd";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno



const Section4 =()=>{
    return (
        <>
        <Carousel className="w-full p-6">
          <div className=" h-[70dvh] w-5/6 my-bg bg-blue-500">

          </div>
          <div className=" h-[70dvh] w-5/6 my-bg bg-red-500">

          </div>
          <div className=" h-[70dvh] w-5/6 my-bg bg-green-500">

          </div>
          </Carousel>
        </>
    )
    
}

export default Section4;