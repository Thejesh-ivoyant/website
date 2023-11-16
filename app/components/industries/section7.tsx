import { Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/Industries.Healthcare";
import { strapiUrl } from "~/utils/urls";

const Section7 = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <section className="relative flex flex-col items-center h-screen w-full bg-haiti text-white p-10">
      <h1 className="text-HeaderGray font-montserrat text-5xl p-4">
        {loaderData.section7Title}
      </h1>
      <p className="top-gradient p-6 text-center w-2/3">
        {loaderData.section7Desc}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {loaderData.section7Pairs.map((pair: any) => (
          <div key={pair.id} className="flex flex-col items-center opaque-card px-10 aspect-video py-2">
            <img src={pair.picUrl} alt={pair.name} className="mb-2 p-2 aspect-square"></img>
            <p className="text-center leading-8 text-[FFFFFFD9] font-poppins">{pair.text}</p>
          </div>
        ))}
      </div>

      <Outlet />
    </section>
  );
};

export default Section7;
