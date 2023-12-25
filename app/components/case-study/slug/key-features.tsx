export const Features = ({data}:{data:any}) => {
  return (
    <>
      <div className="grid place-items-center gap-4 mx-12 p-7">
        <div className="italic font-montserrat bg-haiti w-fit text-white">{data?.section4MiniTitle}</div>
        <div className="text-PurpBlue text-center font-montserrat text-4xl font-semibold">{data?.section_4_title}</div>
        <svg className = 'w-full mx-auto' height="25" viewBox="0 0 1200 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 13)" fill="url(#a)" d="M0 13h.5v600H0z"/><path transform="rotate(90 1200 12.25)" fill="url(#b)" d="M1200 12.25h1v600h-1z"/><defs><linearGradient id="a" x1=".75" y1="608.529" x2=".75" y2="2.27" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1201.5" y1="607.779" x2="1201.5" y2="1.52" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
        <p className="text-[#262626] text-center text-xl font-normal">{data?.section_4_description}</p>
        <div className="w-full grid grid-cols-2 gap-6">
        {data?.section_4_cards?.map((item: any) => (
            <div key={item.id} className="col-span-1 h-72 flex flex-col justify-around items-center p-6 gap-4 feature-card">
                <h3 className="hue-blue-text-gradient text-center text-2xl font-montserrat font-medium">
                    {item?.name}
                </h3>
                <svg width="588" height="25" viewBox="0 0 588 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 0 12.5)" fill="url(#a)" d="M0 12.5h1v294H0z"/><path transform="rotate(90 588 11.5)" fill="url(#b)" d="M588 11.5h1v294h-1z"/><defs><linearGradient id="a" x1="1.5" y1="304.309" x2="1.5" y2="7.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="589.5" y1="303.309" x2="589.5" y2="6.242" gradientUnits="userSpaceOnUse"><stop stopColor="#AEBEFF"/><stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/></linearGradient></defs></svg>
                <p className="font-poppins text-center text-base font-normal">{item?.description}</p>
            </div>
            ))}
        </div>
      </div>
    </>
  );
};
