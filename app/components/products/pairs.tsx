import { Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";

const Pairs = () => {
  const data = useLoaderData() as any;
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const pairsData = attributes?.pairs || [];

  return (
    <section className="relative flex flex-col items-center h-screen w-full bg-haiti text-white p-10">
      <h1 className="text-HeaderGray font-montserrat text-5xl p-4">
        {attributes.section_4_title}
      </h1>
      <p className="top-gradient p-6 text-center w-2/3">
        {attributes.section_4_description}
      </p>
      <div className="grid grid-cols-3 gap-4">
      {pairsData.map((pair: any) => (
        <div key={pair.id} className="flex flex-col items-center opaque-card px-10 aspect-video py-2">
          <img src={pair.pic.data.attributes.url} alt={pair.text} className="mb-2 p-2 aspect-square"></img>
          <p className="text-center leading-8 text-[FFFFFFD9] font-poppins">{pair.text}</p>
        </div>
      ))}
    </div>

      <Outlet />
    </section>
  );
};


export default Pairs;