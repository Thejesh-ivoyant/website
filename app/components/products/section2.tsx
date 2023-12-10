import { useLoaderData } from "@remix-run/react";

export default function Section2() {
  const data = useLoaderData() as any;
  const attributes = data?.productsResponse?.data?.product?.data?.attributes;
  const section2 = attributes?.section2 || "";
  const section2Bg = attributes?.section2Bg?.data?.attributes?.url || "";

  return (
    <>
      <div className="relative flex w-full items-center h-48">
        <img
          className="w-full h-full object-cover"
          src={section2Bg}
          alt="Background"
        />
        <div className="flex flex-row items-center justify-between absolute inset-0 p-10">
          <div className="flex left-8 font-montserrat text-white text-4xl font-bold leading-[60px] tracking-wide lg:w-2/3 xl:w-2/3">
            <p>{section2}</p>
          </div>
          <button className="flex right-8 btn-white">
            GRAB A CONSULTATION
          </button>
        </div>
      </div>
    </>
  );
}
