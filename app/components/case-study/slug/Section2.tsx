
const Section2 = ({data}:{data:any}) => {
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${
      data?.section2Bg?.data?.attributes.url
    }) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center flex-row lg:h-[600px] w-full">
      <div
        id="left"
        className="flex flex-1 flex-col h-full bg-[#1B0740] lg:p-16 text-white font-poppins justify-center col-span-2 max-w-[50%]"
      >
        <div className="bg-[#170D26] font-montserrat italic font-medium w-fit h-fit pb-2">{data?.section2MiniTag}</div>
        <h2 className="text-white font-montserrat text-4xl font-semibold">{data?.section2Title}</h2>
        <section className="h-full w-full mt-6">
          {data?.section_2_description}
        </section>
      </div>
      <div className="flex flex-1 flex-col h-full" style={gradientStyle}>
      </div>

    </section>
  );
};

export default Section2;
