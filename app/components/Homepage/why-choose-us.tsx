import { Outlet, useLoaderData } from "@remix-run/react";
import { Pair } from "~/interfaces/Homepage";

const WhyChooseUs = ({pairs, title, description}:{pairs:Pair[],title:string, description:string}) => {
  const loaderData = useLoaderData() as any;

  return (
    <section className="relative flex flex-col items-center min-h-fit h-fit w-full bg-haiti text-white p-10 gap-8">
      <h1 className="text-HeaderGray font-montserrat text-5xl font-semibold">
        {title}
      </h1>
      <svg
        width="1257"
        height="25"
        viewBox="0 0 1257 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="12.248"
          width="0.5"
          height="628.5"
          transform="rotate(-90 0 12.248)"
          fill="url(#paint0_linear_3363_29830)"
        />
        <rect
          x="1257"
          y="11.748"
          width="0.5"
          height="628.5"
          transform="rotate(90 1257 11.748)"
          fill="url(#paint1_linear_3363_29830)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3363_29830"
            x1="0.75"
            y1="636.065"
            x2="0.749987"
            y2="1.0081"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AEBEFF" />
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3363_29830"
            x1="1257.75"
            y1="635.565"
            x2="1257.75"
            y2="0.508102"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AEBEFF" />
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <p className="text-center w-2/3 font-normal leading-6 text-sm tracking-wider font-poppins">
        {description}
      </p>
      <div className="grid grid-cols-3 gap-4 p-6 blur-[150%] bg-opacity-[0.16] moving-noise">
  {pairs?.map((pair,index) => (
    <div
      key={index}
      className="group relative flex flex-col items-center opaque-card aspect-video py-2 w-[28.5rem] h-[16.563rem] cursor-pointer"
    >
      <img
        src={pair.pic.data.attributes.url}
        alt={pair.text}
        className="hidden mb-2 p-2 aspect-square absolute top-0 left-0 transition-opacity group-hover:block"
      />
      
      <img
        src={pair.pic.data.attributes.url}
        alt={pair.text}
        className="mb-2 p-2 aspect-square group-hover:hidden"
      ></img>
      <p className="text-center leading-8 text-[FFFFFFD9] font-poppins w-3/5 group-hover:hidden">
        {pair.text}
      </p>
      <p className="relative p-4 text-sm text-left text-[FFFFFFD9] font-poppins  hidden group-hover:block font-thin">
      {pair.description}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChooseUs;
