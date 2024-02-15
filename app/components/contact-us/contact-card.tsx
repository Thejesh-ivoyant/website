import avatar from '~/../public/assets/contactavatar.jpg'

const ContactCard = () => {
    return (
    <div className="flex lg:flex-row flex-col gap-9 items-center justify-center xl:py-16 xl:px-10 lg:px-6 lg:py-12 py-8 px-5">
        <div className="grid font-montserrat tracking-wide py-7 px-3 max-w-[40rem] md:h-72 relative group w-full contact-card">
            <div className="absolute h-1 w-full group-hover:bg-indigo-400"></div>
            <small className="uppercase text-base">India</small>
            <h1 className="text-xl font-semibold pt-2">iVoyant Systems Private Limited</h1>
            <address className="font-poppins capitalize font-light not-italic leading-7"> No. 12, 24th Main, JP Nagar 2nd Phase, Bengaluru (Bangalore) Urban, Karnataka, 560078   </address>
            <div className="flex sm:gap-6 gap-2">
                <img className="sm:w-28 w-20 aspect-square object-cover object-top" src={avatar}></img>
                <div className="grid capitalize font-light">
                    <small className="font-poppins text-xs">Office representative</small>
                    <h1 className="font-medium font-poppins text-sm">Representative name</h1>
                    <>
                    <div className="flex font-normal leading-7 items-center gap-2 normal-case sm:text-base text-xs">
                        <svg className="sm:w-5 w-3 aspect-square"  viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.725 9.751a6.59 6.59 0 0 0 3.05 3.038.619.619 0 0 0 .612-.047l1.956-1.304a.625.625 0 0 1 .593-.055l3.66 1.569a.623.623 0 0 1 .374.648 3.75 3.75 0 0 1-3.72 3.275A10.625 10.625 0 0 1 3.625 6.25 3.75 3.75 0 0 1 6.9 2.53a.623.623 0 0 1 .648.375l1.57 3.662a.625.625 0 0 1-.052.589l-1.3 1.985a.62.62 0 0 0-.041.61v0Z" stroke="#969AFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <a href="tel: +1 (770) 274 4336"> +1 (770) 274 4336</a>
                    </div>
                    <div className="flex font-normal leading-7 items-center gap-2 normal-case sm:text-base text-xs">
                        <svg className="sm:w-5 w-3 aspect-square" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.094 11.75 3 14.25v-10a.625.625 0 0 1 .625-.625h10a.625.625 0 0 1 .625.625v6.875a.624.624 0 0 1-.625.625H6.094Z" stroke="#969AFB" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 11.75v3.125a.625.625 0 0 0 .625.625h7.531L18 18V8a.625.625 0 0 0-.625-.625H14.25" stroke="#969AFB" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <a href="mailto:mail@ivoyant.com">mail@ivoyant.com</a>
                    </div>
                    </>
                </div>
            </div>
        </div>
        <div className="grid font-montserrat tracking-wide py-7 px-3 max-w-[40rem] md:h-72 relative group w-full contact-card">
            <div className="absolute h-1 w-full group-hover:bg-indigo-400"></div>
            <small className="uppercase text-base">USA</small>
            <h1 className="text-xl font-semibold pt-2">iVoyant Systems Private Limited</h1>
            <address className="font-poppins capitalize font-light not-italic leading-7"> 1155 Perimeter Center West, Suite 600, Atlanta GA 30338  </address>
            <div className="flex sm:gap-6 gap-2">
                <img className="sm:w-28 w-20 aspect-square object-cover object-top" src={avatar}></img>
                <div className="grid capitalize font-light">
                    <small className="font-poppins text-xs">Office representative</small>
                    <h1 className="font-medium font-poppins text-sm">Representative name</h1>
                    <>
                    <div className="flex font-normal leading-7 items-center gap-2 normal-case sm:text-base text-xs">
                        <svg className="sm:w-5 w-3 aspect-square"  viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.725 9.751a6.59 6.59 0 0 0 3.05 3.038.619.619 0 0 0 .612-.047l1.956-1.304a.625.625 0 0 1 .593-.055l3.66 1.569a.623.623 0 0 1 .374.648 3.75 3.75 0 0 1-3.72 3.275A10.625 10.625 0 0 1 3.625 6.25 3.75 3.75 0 0 1 6.9 2.53a.623.623 0 0 1 .648.375l1.57 3.662a.625.625 0 0 1-.052.589l-1.3 1.985a.62.62 0 0 0-.041.61v0Z" stroke="#969AFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <a href="tel: +1 (770) 274 4336"> +1 (770) 274 4336</a>
                    </div>
                    <div className="flex font-normal leading-7 items-center gap-2 normal-case sm:text-base text-xs">
                        <svg className="sm:w-5 w-3 aspect-square" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.094 11.75 3 14.25v-10a.625.625 0 0 1 .625-.625h10a.625.625 0 0 1 .625.625v6.875a.624.624 0 0 1-.625.625H6.094Z" stroke="#969AFB" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 11.75v3.125a.625.625 0 0 0 .625.625h7.531L18 18V8a.625.625 0 0 0-.625-.625H14.25" stroke="#969AFB" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <a href="mailto:mail@ivoyant.com">mail@ivoyant.com</a>
                    </div>
                    </>
                </div>
            </div>
        </div>
    </div>
      );
};

export default ContactCard;
