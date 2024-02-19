import { useLoaderData } from "@remix-run/react";
const Section6 = () => {
    const loaderData = useLoaderData() as any;
    return (
      <div className="bg-white py-5">
        <h1 className="text-PurpBlue flex items-center justify-center text-5xl font-montserrat p-6">
          {loaderData.techTitle}
        </h1>
        <div className="w-full flex justify-around flex-wrap text-black p-10 border-t-2">
          {loaderData?.techList?.map((pair: any) => (
            <div key={pair.id} className="flex flex-col items-center m-4">
              <img src={pair.picUrl} alt={pair.name}      key={pair.id}  className="w-16 h-16"  />
              <figcaption className="text-black mt-2">{pair.text}</figcaption>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Section6;
