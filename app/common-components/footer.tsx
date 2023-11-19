const Footer = ()=>
{
    return (
        <footer className="w-full  bg-haiti py-16 px-32 font-montserrat text-white">
            <section className="flex flex-row w-full gradient-bottom p-6">
                <div className="flex-1 object-contain items-center justify-center flex">
                    <img src="../assets/ivoyant-light.svg" alt="ivoyant-logo" ></img>
                </div>
                <div className="flex-1">
                    <span className="text-geekblue font-medium text-[1.25rem]">CONNECT WITH US</span>
                    
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-row">
                                <img src="../assets/mail.svg" className=""></img>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-medium text-[1rem]">Mail</span>
                                <span className="font-thin text-lg">sales@ivoyant.com</span>
                            </div>
                        </div>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-row">
                                <img src="./assets/skype.svg" className=""></img>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-medium text-[1rem]">Skype</span>
                                <span className="font-thin text-lg">live:.cid.37875f1d394a53b6</span>
                                <span className="font-thin text-lg">ivoyantsales@outlook.com </span>
                            </div>
                        </div>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-row">
                                <img src="./assets/phone.svg" className=""></img>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-medium text-[1rem]">Phone</span>
                                <span className="font-thin text-lg">info@ivoyant.com</span>
                            </div>
                        </div>
                    
                    
                </div>
                <div className="flex-1 pl-4 ">
                    <span className="text-geekblue font-medium text-[1.25rem]">MAIL US</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-1">
                                <span className="font-medium text-[1rem]">For Clients</span>
                                <span className="font-thin text-lg">info@ivoyant.com</span>
                                <span className="font-medium text-[1rem]">For Future developers</span>
                                <span className="font-thin text-lg">jobs@ivoyant.com</span>
                                <span className="flex gap-2 py-4">
                                    <img src="./assets/facebook.svg"></img>
                                    <img src="./assets/X.svg"></img>
                                    <img src="./assets/linkedin.svg"></img>
                                    <img src="./assets/youtube.svg"></img>
                                </span>
                            </div>
                        </div>
                </div>
            </section>
            <section className="flex flex-row w-full gradient-bottom p-6">
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">SERVICES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">PRODUCTS</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="text-geekblue font-medium text-[1.25rem]">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <span className="font-medium text-sm">Privacy Policy</span>
                                <span className="font-medium text-sm">Cookie Policy</span>
                                <span className="font-medium text-sm">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
            </section>
            <div className="flex gap-3 justify-center w-full text-xs font-medium text-center p-4"><span>&copy; 2023 iVoyant </span><span> All Rights Reserved</span> </div>
        </footer>
    )
}

export default Footer