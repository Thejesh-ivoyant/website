export const Features = ({data}:{data:any}) => {
  return (
    <>
      <div className="grid place-items-center gap-4 xl:mx-12 lg:mx-8 mx-4 p-7">
        <div className="italic font-montserrat bg-haiti w-fit text-white px-1">{data?.section4MiniTitle}</div>
        <div className="text-PurpBlue text-center font-montserrat text-4xl font-semibold">{data?.section_4_title}</div>
        <svg className = 'w-full mx-auto' height="25" viewBox="0 0 1200 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 13)" fill="url(#a)" d="M0 13h.5v600H0z"/><path transform="rotate(90 1200 12.25)" fill="url(#b)" d="M1200 12.25h1v600h-1z"/><defs><linearGradient id="a" x1=".75" y1="608.529" x2=".75" y2="2.27" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1201.5" y1="607.779" x2="1201.5" y2="1.52" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
        <p className="text-[#262626] text-center text-xl font-normal">{data?.section_4_description}</p>
        <div className="w-full md:grid hidden place-items-center grid-cols-2 gap-6">
        {data?.section_4_cards?.map((item: any) => (
            <div key={item?.id} className="col-span-1 xl:h-72 h-fit xl:max-w-[40rem] xl:w-full flex flex-col justify-around items-center p-6 lg:gap-4 gap-2 feature-card">
                <h3 className="hue-blue-text-gradient text-center text-2xl font-montserrat font-medium">
                    {item?.name}
                </h3>
                <svg width="100%" height="25" viewBox="0 0 588 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v294H0z"/><path transform="rotate(90 588 11.5)" fill="url(#b)" d="M588 11.5h1v294h-1z"/><defs><linearGradient id="a" x1="1.5" y1="304.309" x2="1.5" y2="7.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="589.5" y1="303.309" x2="589.5" y2="6.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
                <p className="font-poppins xl:text-center text-justify text-ellipsis text-base font-normal">{item?.description}</p>
            </div>
            ))}
        </div>
        <div className="w-full md:hidden flex whitespace-nowrap overflow-x-scroll  gap-6">
        {data?.section_4_cards?.map((item: any) => (
            <div key={item?.id} className="mob-feature-card-layout ">
                <h3 className="mob-feature-card-title whitespace-normal">{item?.name}</h3>
                <svg width="100%" height="25" viewBox="0 0 588 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v294H0z"/><path transform="rotate(90 588 11.5)" fill="url(#b)" d="M588 11.5h1v294h-1z"/><defs><linearGradient id="a" x1="1.5" y1="304.309" x2="1.5" y2="7.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="589.5" y1="303.309" x2="589.5" y2="6.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
                <p className="mob-feature-card-desc text-ellipsis">{item?.description}</p>
            </div>
            ))}
        </div>
      </div>
    </>
  );
};
