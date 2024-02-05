const Section5 = ({ data }: { data: any }) => {
  return (
    <>
      <div className="w-full flex bg-haiti h-[38.5rem] relative">
        <div className="flex-col flex-grow flex-1 sm:p-10 h-full mix-blend-luminosity relative cyan-gradient-arrow"></div>
        <div className="w-fit flex flex-col justify-center items-center text-white sm:p-6 gap-16 right-10 top-0 bottom-0 absolute ">
          {data?.section_5_pairs?.map((item: any, index: number) => (
            <div key={index} className=" flex flex-col sm:w-96 w-full h-fit gap-y-4 p-4">
              <h1 className="text-3xl font-montserrat font-semibold ">
                {item?.name}
              </h1>
              <p className="font-poppins text-sm leading-7">
              {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Section5;
