import { Outlet, useLoaderData } from "@remix-run/react";

const Section2 = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${
      loaderData?.section3Image
    }) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center flex-row lg:h-[600px] w-full">
      <div
        id="left"
        className="flex flex-1 flex-col h-full bg-[#1B0740] lg:p-16 text-white font-poppins justify-center col-span-2 max-w-[50%]"
      >
        <div className="bg-[#170D26] font-montserrat italic font-medium w-fit h-fit pb-2">My mini title</div>
        <h2 className="text-white font-montserrat text-4xl font-semibold">Aramex needs a technology partner to support its digital strategy</h2>
        <section className="h-full w-full mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, perferendis optio? Deleniti asperiores quos voluptas commodi quisquam ullam ab nihil vero, sapiente praesentium sit laudantium dolorem pariatur delectus quae quis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptates et doloremque nobis modi commodi? Inventore nobis laboriosam unde magni aliquam modi tempora, quaerat placeat aut nesciunt et molestias odio?
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur praesentium ullam corporis aspernatur ipsa rerum consequatur voluptatem accusamus ab vero, nobis omnis in labore mollitia officiis blanditiis soluta officia?
        </section>
        
      </div>
      <div className="flex flex-1 flex-col h-full" style={gradientStyle}>
      </div>

      <Outlet />
    </section>
  );
};

export default Section2;
