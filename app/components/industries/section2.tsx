import { Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";

const Section2 = () => {
  const loaderData = useLoaderData() as any;

  return (
    <section className="relative flex justify-center flex-row lg:h-[600px] w-full">
      <div className="flex flex-1 flex-col h-full">
        <h2 className="pt-16 px-32 font-montserrat font-semibold text-[#0D0B71] leading-10 text-4xl flex justify-center">
          {loaderData.section2Title}
        </h2>
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/assets/industries-ornament.svg')`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={strapiUrl + loaderData.section2Image}
            className="py-16 pl-16 w-full h-full"
          > </img>
        </div>
      </div>
      <div className="flex flex-1 flex-col h-full">
        <section className="font-poppins leading-10 p-12 aspect-square text-justify">
          {/* {loaderData.section2Desc} */}

{/* There is something wrong with strapi long text so couldnt load it from there */}

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          deleniti facilis nesciunt reprehenderit atque doloremque consequatur
          quis quo repellat libero iste. Tempore, provident. Tenetur, quod id!
          Et laboriosam excepturi numquam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quos recusandae architecto incidunt
          provident animi ipsam voluptatibus fugiat quasi reiciendis corporis
          veniam, nemo culpa doloribus accusamus repudiandae? Ducimus itaque
          saepe quisquam.
        </section>
        <div className=" flex flex-row items-center inline-card w-fit -ml-32 mb-10">
          <div className="ml-auto flex gap-4 items-center text-white p-10">
            <span className="lg:text-3xl font-bold">50</span>
            <span className=" font-thin text-xs w-24">Delighted Clients</span>
          </div>
          <div className="ml-auto flex gap-4 items-center text-white p-10">
            <span className="lg:text-3xl font-bold">300+</span>
            <span className=" font-thin text-xs w-24">Projects Delivered</span>
          </div>
          <div className="ml-auto flex gap-4 items-center text-white p-10">
            <span className="lg:text-3xl font-bold">350</span>
            <span className=" font-thin text-xs w-24">Total projects</span>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Section2;
