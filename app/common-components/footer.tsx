import { Link } from "@remix-run/react"

const Footer = ()=>
{
    return (
        <footer className="w-full  bg-haiti py-16 px-16 font-montserrat text-white">
            <section className="flex flex-row w-full gradient-bottom p-6">
             
                
                
            </section>
            <section className="flex flex-row w-full  p-6">
                <div className="flex-1">
                <span className="footer-heading">SERVICES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col footer-font justify-center gap-4">
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                               
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="footer-heading">PRODUCTS</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col  footer-font justify-center gap-4">
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                               
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="footer-heading">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col footer-font justify-center gap-4">
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                <span className="footer-heading">RESOURCES</span>
                        <div className="flex items-start py-3 gap-2">
                            <div className="flex flex-col footer-font justify-center gap-4">
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                                <span className="">Privacy Policy</span>
                                <span className="">Cookie Policy</span>
                                <span className="">Terms & Conditions</span>
                            </div>
                        </div>
                </div>
                <div className="flex-1">
                    <span className="footer-heading">CONNECT WITH US</span>
                    
                        <div className="flex items-start py-3 gap-2">
                          
                            <div className="flex flex-col footer-font justify-center">
                                <span className="">Mail</span>
                                <span className="">sales@ivoyant.com</span>
                            </div>
                        </div>
                        <div className="flex items-start py-3 gap-2">
                       
                            <div className="flex flex-col footer-font  justify-center">
                                <span className="">Skype</span>
                                <span className="">live:.cid.37875f1d394a53b6</span>
                                <span className="">ivoyantsales@outlook.com </span>
                            </div>
                        </div>
                        <div className="flex items-start py-3 gap-2">
                            
                            <div className="flex flex-col footer-font justify-center">
                                <span className="">Phone</span>
                                <span className="">info@ivoyant.com</span>
                            </div>

                        </div>
                       
                    
                </div>
              
              
                <div className="flex-1 pl-4 ">
                    <span className="footer-heading">MAIL US</span>
                        <div className="flex flex-col items-start py-3 gap-2">
                            <div className="flex flex-col footer-font justify-center gap-1">
                                <span className="">For Clients</span>
                                <span className="">info@ivoyant.com</span>
                                <span className="">For Future developers</span>
                                <span className="">jobs@ivoyant.com</span>
                                <span className="flex gap-2 py-4">
                                <img src="./assets/facebook.png" alt="icons" />
                                <img src="./assets/mail.svg" alt="icons" />
                                <img src="./assets/linkedin.svg" alt="icons" />
                                <img src="./assets/youtube.svg" alt="icons" />
                                </span>
                            </div>
                          
                        </div>
                </div>
                
            </section>
            <div className="relative flex flex-row w-full mr-24   bottom-24 justify-end items-end">
                    <div className="flex row w-1/2 gap-1 justify-end items-end ">
                        <div className="flex-1"></div>
                        <div className="flex-1 w-3/4 justify-end">
                                <input  placeholder="Email*" className="footer-font email-container"></input>
                        </div>
                        <div className="flex subscribe">
                                <button className="subscribe-text">Subscribe for NewsLetter</button>
                        </div>
                    </div>
                </div>
            <div className="flex flex-row gap-[6rem] justify-center w-full text-xs gradient-top font-medium text-center p-4">
              
          <Link to={"/privacy-policy"}>
                <div className="flex">
                    Privacy Policy
                </div>
                </Link>
                <Link to={"/terms-and-conditions"}>
                <div className="flex">
                    Terms and Conditions
                </div>
                </Link>
                <Link to={"/cookies"}>
                <div className="flex">
                  Cookie Policy
                </div>
                </Link>

            </div>
     

            <div className="flex gap-3 justify-center w-full text-xs gradient-top font-medium text-center p-4"><span>&copy; 2023 iVoyant </span><span> All Rights Reserved</span> </div>
        </footer>
    )
}

export default Footer