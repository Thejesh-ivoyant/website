const Section5 = ({ data }: { data: any }) => {
  return (
    <>
      <div className="w-full flex bg-haiti h-[38.5rem] relative">
        <div className="flex-col flex-grow flex-1 p-10 h-full mix-blend-luminosity relative cyan-gradient-arrow"></div>
        <div className="w-fit flex flex-col justify-center items-center text-white p-6 gap-16 mr-10">
          {data?.section_5_pairs?.map((item: any, index: number) => (
            <div className=" flex flex-col w-96  h-fit gap-y-4 p-2">
              <h1 className="text-4xl font-montserrat font-semibold ">
                {item?.name}
              </h1>
              <p className="font-poppins leading-7">
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
