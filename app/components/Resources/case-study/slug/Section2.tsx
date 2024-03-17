import ReactMarkdown from "react-markdown";
const Section2 = ({data}:{data:any}) => {
  let markdownString = "";
  markdownString = data?.section_2_description;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${
      data?.section2Bg?.data?.attributes.url
    }) lightgray 50% / cover no-repeat`,
    backgroundPosition: "100% 50%",
  };
  return (
    <section className="relative flex justify-center md:flex-row flex-col h-fit lg:min-h-[37.5rem] w-full bg-[#1B0740] ">
      <div
        id="left"
        className="flex flex-1 flex-col md:min-h-full bg-[#1B0740] xl:p-16 sm:p-10 p-6 text-white font-poppins justify-center"
      >
        <div className="bg-[#170D26] font-montserrat italic font-medium w-fit h-fit pb-2">{data?.section2MiniTag}</div>
        <h2 className="text-white font-montserrat text-4xl font-semibold">{data?.section2Title}</h2>
        <section className="h-full w-full mt-6 markdown">
          <ReactMarkdown>{markdownString}</ReactMarkdown>
        </section>
      </div>
      <div className="flex flex-1 flex-col  bg-black md:min-h-full md:m-0 m-3" style={gradientStyle}>
        <div className="md:hidden h-80 aspect-[10/13] object-cover object-right"></div>
      </div>
    </section>
  );
};
export default Section2;
