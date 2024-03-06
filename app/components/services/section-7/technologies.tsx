import { useLoaderData } from "@remix-run/react";
const Technologies = () => {
  const loaderData = useLoaderData() as any;
  return (
    <div className="bg-white grid gap-3 section-p-y">
      <h1 className="section-heading text-[#0D0B71] text-center  flex-wrap items-center">
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
