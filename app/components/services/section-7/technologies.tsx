import { useLoaderData } from "@remix-run/react";
const Technologies = () => {
  const loaderData = useLoaderData() as any;

  return (
    <div className="bg-white py-5">
      <h1 className="text-PurpBlue flex items-center justify-center text-5xl font-montserrat p-6">
        {loaderData.s7_techTitle}
      </h1>
      <div className="w-full flex justify-around flex-wrap text-black p-10 border-t-2">
        {loaderData.Technologies.map((item: any) => (
          <div key={item.id} className="flex flex-col items-center m-4">
            <img
              src={item.s7_techIcon}
              alt={item.s7_techIconName}
              className="w-16 h-16"
            />
            <figcaption className="text-black mt-2">
              {item.s7_techIconName}
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
