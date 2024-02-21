import { useLoaderData } from "@remix-run/react";
import { ellipsis } from "~/utils/format";
const Phases = () => {
  const loaderData = useLoaderData() as any;
  return (
  <div className="bg-haiti py-5 h-fit">
<h1 className="section-title " style={{ color: "var(--HeadingGray, #E9E9EC)" }}>
      {loaderData.s5_title}
    </h1>
    <svg className="mx-auto" width="100%" height="24" viewBox="0 0 1200 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20.5" y="12.25" width="0.5" height="579.5" transform="rotate(-90 20.5 12.25)" fill="url(#paint0_linear_3845_64835)"/><rect x="1179.5" y="11.75" width="0.5" height="579.5" transform="rotate(90 1179.5 11.75)" fill="url(#paint1_linear_3845_64835)"/><defs><linearGradient id="paint0_linear_3845_64835" x1="21.25" y1="587.432" x2="21.25" y2="1.88636" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="paint1_linear_3845_64835" x1="1180.25" y1="586.932" x2="1180.25" y2="1.38636" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
  <div className="w-full h-fit flex justify-around flex-col lg:flex-row text-white p-10 gap-9">
      {loaderData.PhasesList?.map((item: any, index: number) => (
        <div key={item.id} className="flex sm:items-start gap-3 h-fit lg:h-[350px]">
          <img src={`../assets/${index + 1}.svg`} alt={`SVG ${index + 1}`} className="sm:flex justify-start lg:w-20 max-h-80 xl:w-fit h-36 lg:h-full p-1 object-cover" />
          <div className="flex flex-col-reverse lg:flex-col text-center  items-start lg:justify-between py-3 xl:p-3 gap-3 lg:h-full">
            <div className="flex flex-col gap-3 items-start text-start">
              <strong className="flex text-base font-bold tracking-wide font-montserrat text-TinBlue ">{item.s5_phasesTitle}</strong>
              <div className="flex font-poppins text-xs font-normal text-left leading-5 line-clamp-6">{ellipsis(`${item.s5_phasesDescription}`,200)}</div>
            </div>
                  <img src={item.s5_phasesImage} className="w-8 h-8 lg:w-10 lg:h-10 lg:mx-auto mr-auto" alt={item.s5_phasesImage} />
          </div>
        </div>
      ))}
              <img src="../assets/0.svg" className="min-h-full hidden xl:block object-cover" alt="vector" />
    </div>
  </div>
  );
};
export default Phases;
