import { Outlet, useLoaderData } from "@remix-run/react";

const Section7 = () => {
  const loaderData = useLoaderData() as any;

  return (
    <section className="relative flex flex-col items-center h-screen w-full bg-haiti text-white p-10">
      <h1 className="text-HeaderGray font-montserrat text-5xl p-4">
        {loaderData.section7Title}
      </h1>
      <svg width="1257" height="25" viewBox="0 0 1257 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.248)" fill="url(#a)" d="M0 12.248h.5v628.5H0z"/><path transform="rotate(90 1257 11.748)" fill="url(#b)" d="M1257 11.748h.5v628.5h-.5z"/><defs><linearGradient id="a" x1=".75" y1="636.065" x2=".75" y2="1.008" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="1257.75" y1="635.565" x2="1257.75" y2=".508" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient></defs></svg>

      <p className="top-gradient p-6 text-center w-2/3">
        {loaderData.section7Desc}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {loaderData.section7Pairs.map((pair: any) => (
          <div
            key={pair.id}
            className="flex flex-col items-center opaque-card px-10 aspect-video py-2"
          >
            <img
              src={pair.picUrl}
              alt={pair.name}
              className="mb-2 p-2 aspect-square"
            ></img>
            <p className="text-center leading-8 text-[FFFFFFD9] font-poppins">
              {pair.text}
            </p>
          </div>
        ))}
      </div>

      <Outlet />
    </section>
  );
};

export default Section7;
