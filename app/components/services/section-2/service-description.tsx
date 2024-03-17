import { useLoaderData } from "@remix-run/react";
const Description = () => {
  const loaderData = useLoaderData() as any;
  return (
    <div className="flex lg:w-1/2 bg-[#F9F8FC] w-full md:px-12 xl:px-24 py-6 px-4 lg:px-14 text-black font-semibold justify-center items-center">
      <div className="flex flex-col lg:gap-8 w-full h-fit">
        <div className="leading-10 md:text-4xl text-2xl md:text-[36px] md:py-4 font-montserrat font-medium">
          {loaderData.s2_Title}
          <span className="text-grape"> iVoyant </span>
        </div>
        <div
          className="text-md py-4 font-poppins font-light lg:leading-8 "
          id="about-desc"
        >
          {loaderData.s2_Description}
        </div>
      </div>
    </div>
  );
};
export default Description;
