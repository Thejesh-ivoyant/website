import { Technology } from "~/interfaces/ProductsPage";
export const Technologies = ({
  title,
  pairs,
}: {
  title: string;
  pairs: Technology[];
}) => {
  return (
    <>
      <div className="bg-white section-p-y md:py-6 py-4 px-4 grid lg:gap-3">
        <h1 className="text-PurpBlue flex items-center justify-center font-montserrat font-semibold xl:text-3xl lg:text-2xl sm:text-xl text-lg">
          {title}
        </h1>
        <svg
          width="100%"
          height="26"
          viewBox="0 0 1280 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60.5"
            y="13.248"
            width="0.5"
            height="579.5"
            transform="rotate(-90 60.5 13.248)"
            fill="url(#paint0_linear_3851_70127)"
          />
          <rect
            x="1219.5"
            y="12.748"
            width="0.5"
            height="579.5"
            transform="rotate(90 1219.5 12.748)"
            fill="url(#paint1_linear_3851_70127)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3851_70127"
              x1="60.5"
              y1="13.248"
              x2="61.0183"
              y2="13.2481"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00621719" stop-color="#B9C1EC" />
              <stop offset="1" stop-color="#A3B1FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3851_70127"
              x1="1219.5"
              y1="12.748"
              x2="1220.02"
              y2="12.7481"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00621719" stop-color="#B9C1EC" />
              <stop offset="1" stop-color="#A3B1FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="w-full flex justify-around flex-wrap text-black">
          {pairs.map((pair, index) => (
            <div key={index} className="flex flex-col items-center m-4">
              <img
                src={pair?.pic.data.attributes.url}
                alt={pair.text}
                className="w-16 h-16"
              />
              <figcaption className="text-black mt-2">{pair.text}</figcaption>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
