
const ContactCard = () => {
  
    //grow w-full pl-12 pr-3 py-12 max-md:max-w-full max-md:pl-5
  return (
    <div className="bg-[#fff] p-20 w-full flex flex-row items-center gap-[36px] justify-center">
      
                <div className="justify-center w-full items-stretch self-stretch shadow-sm bg-[#fff] hover:bg-violet-50 flex max-w-[641px] flex-col px-6 py-10 hover:border-t-4 hover:border-t-indigo-400 hover:border-solid max-md:px-5">
                    <div className="text-black text-base tracking-wide uppercase max-md:max-w-full">
                      INDIA
                    </div>
                    <div className="text-black text-xl font-semibold tracking-wide mt-2 max-md:max-w-full">
                        iVoyant Systems Private Limited
                    </div>
                    <div className="text-black text-base font-light leading-7 tracking-wide max-md:max-w-full">
                    No. 12, 24th Main, JP Nagar 2nd Phase, Bengaluru (Bangalore) Urban, Karnataka, 560078 {" "}
                    </div>
                    <div className="mt-3 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                            <img
                            loading="lazy"
                            src= '../assets/contactavatar.jpg'   className="aspect-square object-contain object-center w-[117px] overflow-hidden shrink-0 max-w-full max-md:mt-6"
                            />
                        </div>
                        <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-between items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                            <div className="text-black text-xs font-light leading-4 tracking-wide whitespace-nowrap max-md:max-w-full">
                                Office representative
                            </div>
                            <div className="text-black text-base font-medium leading-7 tracking-wide whitespace-nowrap max-md:max-w-full">
                                Representative name
                            </div>
                            <div className="items-center flex gap-2 mt-2.5 self-start">
                                <img
                                loading="lazy"
                                src= '../assets/phoneicon.svg'                                className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-black text-base leading-7 tracking-wide self-stretch grow whitespace-nowrap">
                                {" "}
                                +1 (770) 274 4336
                                </div>
                            </div>
                            <div className="items-center flex gap-2 mt-2.5 self-start">
                                <img
                                loading="lazy"
                                src= '../assets/Chatsicon.svg'                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-black text-base leading-7 tracking-wide self-stretch grow whitespace-nowrap">
                                mail@ivoyant.com
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    
          
                <div className="justify-center w-full items-stretch self-stretch shadow-sm bg-[#fff] hover:bg-violet-50 flex max-w-[641px] flex-col px-6 py-10 hover:border-t-4 hover:border-t-indigo-400 hover:border-solid max-md:px-5">
            <div className="text-black text-base tracking-wide uppercase max-md:max-w-full">
                USA
            </div>
            <div className="text-black text-xl font-semibold tracking-wide mt-2 max-md:max-w-full">
                iVoyant Systems Private Limited
            </div>
            <div className="text-black text-base font-light leading-7 tracking-wide max-md:max-w-full">
                1155 Perimeter Center West, Suite 600, Atlanta GA 30338{" "}
            </div>
            <div className="mt-3 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                    <img
                    loading="lazy"
                    src= '../assets/contactavatar.jpg'                    className="aspect-square object-contain object-center w-[117px] overflow-hidden shrink-0 max-w-full max-md:mt-6"
                    />
                </div>
                <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-between items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                    <div className="text-black text-xs font-light leading-4 tracking-wide whitespace-nowrap max-md:max-w-full">
                        Office representative
                    </div>
                    <div className="text-black text-base font-medium leading-7 tracking-wide whitespace-nowrap max-md:max-w-full">
                        Representative name
                    </div>
                    <div className="items-center flex gap-2 mt-2.5 self-start">
                        <img
                        loading="lazy"
                        src= '../assets/phoneicon.svg'                        className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-black text-base leading-7 tracking-wide self-stretch grow whitespace-nowrap">
                        {" "}
                        +1 (770) 274 4336
                        </div>
                    </div>
                    <div className="items-center flex gap-2 mt-2.5 self-start">
                        <img
                        loading="lazy"
                        src= '../assets/Chatsicon.svg'                         className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-black text-base leading-7 tracking-wide self-stretch grow whitespace-nowrap">
                        mail@ivoyant.com
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                </div>
       
    </div>
      );
};

export default ContactCard;
