import { useLoaderData } from "@remix-run/react";
const Section5 = () => {
  const loaderData = useLoaderData() as any;
  return (
  <div className="bg-haiti py-5">
    <h1 className="text-HeaderGray flex items-center justify-center text-5xl font-montserrat p-6">
    Our software development process
    </h1>
    <svg className="mx-auto" width="1200" height="24" viewBox="0 0 1200 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20.5" y="12.25" width="0.5" height="579.5" transform="rotate(-90 20.5 12.25)" fill="url(#paint0_linear_3845_64835)"/><rect x="1179.5" y="11.75" width="0.5" height="579.5" transform="rotate(90 1179.5 11.75)" fill="url(#paint1_linear_3845_64835)"/><defs><linearGradient id="paint0_linear_3845_64835" x1="21.25" y1="587.432" x2="21.25" y2="1.88636" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_3845_64835" x1="1180.25" y1="586.932" x2="1180.25" y2="1.38636" gradientUnits="userSpaceOnUse"><stop stop-color="#AEBEFF"/><stop offset="1" stop-color="#A7B8FE" stop-opacity="0"/></linearGradient></defs></svg>
  <div className="w-full h-[500px] flex justify-around flex-row text-white p-10">
      {loaderData.PhasesList?.map((item: any, index: number) => (
        <div key={item.id} className="flex items-center gap-3 h-[350px]">
          <img src={`../assets/${index + 1}.svg`} alt={`SVG ${index + 1}`} className="w-fit h-full p-1" />
          <div className="flex flex-col  items-start justify-between p-3  h-full">
            <strong className="flex text-base font-bold tracking-wide font-montserrat text-TinBlue ">{item.title}</strong>
            <div className="flex font-poppins text-xs font-normal text-left leading-5">{item.description}</div>
                  <img src={item.ornament} className="w-10 h-10 mx-auto" alt={item.ornament} />
          </div>
        </div>
      ))}
              <img src="../assets/0.svg" className="h-[400px]" alt="vector" />
    </div>
  </div>

    
  );
};

export default Section5;
{/* <div>Description: {item.description}</div> */}
