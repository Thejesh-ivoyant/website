import { Form, Link, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/NavType";
import fb from '~/../public/assets/Facebook svg.svg'
import mail from '~/../public/assets/Twitter  svg.svg'
import linkedin from '~/../public/assets/Linkedin-white.svg'
import yt from '~/../public/assets/YouTube svg.svg'
import ivoyantLogo from "~/../public/assets/ivoyant-footer.svg"
import { errorMessage, success } from "~/utils/notifications";
import AccordionItem from "./footer-item";
import { useState } from "react";

const Footer = () => {
  const [clicked, setClicked] = useState(-1);
  const handleToggle = (index:number) => {
    if (clicked === index) {
     return setClicked(-1);
    }
    setClicked(index);
   };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.forEach((value, key) => {
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/30829101-edb6-4d51-8bb7-1a089dd60533', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
            
      success("Subscribed for NewsLetter, Thank you for showing interest in us!",2);
      
      } else {
        errorMessage("Form submission failed",3);
      }
 
    } catch (error) {
      errorMessage("Error occured, please retry",3);
    }
  };
  
  const data = useRouteLoaderData("root") as any;
  const attributes = data.navGraphql?.data?.navbar?.data
    ?.attributes as Attributes;

  return (
    <>
      <footer className="w-full lg:block hidden bg-haiti xl:py-16 lg:py-6 xl:px-16 md:px-4 font-montserrat text-white h-fit ">
        <section className="flex flex-row w-full gradient-bottom p-6"></section>
        <Form onSubmit={handleSubmit}>
          <section className="flex flex-row w-full gap-4  p-6">
          <div className="xl:flex-1 xl:max-w-none max-w-fit">
            <span className="footer-heading">Services</span>
            <div className="flex items-start py-3 gap-2">
              <div className="flex flex-col footer-font justify-center gap-4">
              {attributes?.services?.map((item, index) => (
                  item.__typename != "ComponentCardCard" ? (
                      <Link prefetch="intent" to={item.link} key={index}>
                      {item.name}
                      </Link>
                  ) : null
                  ))}
              </div>
            </div>
          </div>

          <div className="xl:flex-1 xl:max-w-none max-w-fit">
            <span className="footer-heading">Industries</span>
            <div className="flex items-start py-3 gap-2">
              <div className="flex flex-col  footer-font justify-center gap-4">
              {attributes?.industries?.map((item, index) => (
                  item.__typename != "ComponentCardCard" ? (
                      <Link prefetch="intent" to={item.link} key={index}>
                      {item.name}
                      </Link>
                  ) : null
                  ))}
              </div>
            </div>
          </div>

          <div className="xl:flex-1 xl:max-w-none max-w-fit">
            <span className="footer-heading">Products</span>
            <div className="flex items-start py-3 gap-2">
              <div className="flex flex-col footer-font justify-center gap-4">
              {attributes?.products?.map((item, index) => (
                  item.__typename != "ComponentCardCard" ? (
                      <Link prefetch="intent" to={item.link} key={index}>
                      {item.name}
                      </Link>
                  ) : null
                  ))}
              </div>
            </div>
          </div>
          <div className="xl:flex-1 xl:max-w-none max-w-fit">
            <span className="footer-heading">Resources</span>
            <div className="flex items-start py-3 gap-2">
              <div className="flex flex-col footer-font justify-center gap-4 hover:text-[#]">
                {attributes?.resources?.map((item, index: number) =>
                  item.link &&
                  !item.attachment?.data?.attributes?.url &&
                  item.__typename !== "ComponentCardCard" ? (
                    <Link
                      key={index}
                      to={item.link}
                      prefetch="intent"
                    >
                      {item.name}
                    </Link>
                  ) : item.attachment?.data?.attributes?.url ? (
                    <a
                      key={index}
                      href={item.attachment.data.attributes.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.__typename != "ComponentCardCard" && (
                      <span
                        key={index}
                        className="inline font-poppins font-normal hover:text-[#bea7ef]"
                      >
                        {item.name}
                      </span>
                    )
                  )
                )}
              </div>
            </div>
            <span className="footer-heading">Company</span>
            <div className="flex items-start py-3 gap-2">
              <div className="flex flex-col footer-font justify-center gap-4">
                {attributes?.company?.map((item, index: number) => (
                  <Link prefetch="intent" to={item?.link} key={index}>
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="footer-heading">CONNECT WITH US</span>
              <div className="flex flex-col">
                <div className="flex items-start py-3 gap-2">
                  <div className="flex flex-col footer-font justify-center">
                    <span className="">Mail</span>
                    <a href="mailto:sales@ivoyant.com">sales@ivoyant.com</a>
                  </div>
                </div>
                <div className="flex items-start py-3 gap-2">
                  <div className="flex flex-col footer-font justify-center">
                    <span className="">Skype</span>
                    <a href="skype:live:.cid.37875f1d394a53b6?chat">live:.cid.37875f1d394a53b6</a>
                    <a href="mailto:ivoyantsales@outlook.com">ivoyantsales@outlook.com </a>
                  </div>
                </div>
                <div className="flex items-start py-3 gap-2">
                  <div className="flex flex-col footer-font justify-center">
                    <span className="">Phone</span>
                    <span className="">info@ivoyant.com</span>
                  </div>
                </div>
              </div>
            </div>
          

          
            <input
            name="email"
            type="email"
            required
              placeholder="Email*"
              className="footer-font email-container  w-full mt-auto focus:outline-none"
            />
          </div>


          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col">
              <span className="footer-heading">MAIL US</span>
              <div className="flex flex-col items-start py-3 gap-2">
                <div className="flex flex-col footer-font justify-center gap-1">
                  <span className="">For Clients</span>
                  <a href="mailto:info@ivoyant.com">info@ivoyant.com</a>
                  <span className="">For Future developers</span>
                  <a href="mailto:jobs@ivoyant.com">jobs@ivoyant.com</a>
                  <span className="flex gap-2 py-4">
                    <img src={fb} alt="facebook-meta" className=" xl:h-7 h-5 object-contain cursor-pointer"/>
                    <img src={mail} alt="Mail" className="xl:h-7 h-5 object-contain cursor-pointer"/>
                    <img src={linkedin} alt="Linked-in" className="xl:h-7 h-5 object-contain cursor-pointer"/>
                    <img src={yt} alt="Youtube-channel" className="xl:h-7 h-5 object-contain cursor-pointer" />
                  </span>
                </div>
              </div>
            </div>
            <button type="submit" className="bg-white h-10 w-full font-montserrat  text-sm font-semibold text-haiti">
                Subscribe to Newsletter
            </button>
            
          </div>
          
        </section>
        </Form>
        
        <div className="flex flex-row gap-[6rem] justify-center w-full text-xs gradient-top font-medium text-center p-4">
          <Link to={"/privacy-policy"}>
            <div className="flex">Privacy Policy</div>
          </Link>
          <Link to={"/terms-and-conditions"}>
            <div className="flex">Terms and Conditions</div>
          </Link>
          <Link to={"/cookies"}>
            <div className="flex">Cookie Policy</div>
          </Link>
        </div>

        <div className="flex gap-3 justify-center w-full text-xs gradient-top font-medium text-center p-4">
          <span>&copy; 2023 iVoyant </span>
          <span> All Rights Reserved</span>{" "}
        </div>
      </footer>
      <footer className="w-full lg:hidden py-6 block bg-haiti font-montserrat text-white h-fit">
        <div className="grid place-items-center">
          <Link to={'/'}>
            <img src={ivoyantLogo} alt="iVoyant Logo" />
          </Link>
          
          <span className="flex gap-2 py-4">
            <a href=""><img src={fb} alt="facebook-meta" className=" xl:h-7 h-5 object-contain cursor-pointer"/></a>
            <a href=""><img src={mail} alt="Mail" className="xl:h-7 h-5 object-contain cursor-pointer"/></a>
            <a href=""><img src={linkedin} alt="Linked-in" className="h-5 object-contain cursor-pointer"/></a>
            <a href=""><img src={yt} alt="Youtube-channel" className="h-5 object-contain cursor-pointer" /></a>
          </span>
          <svg width="100%" height="26" viewBox="0 0 340 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="13.4492" width="0.5" height="170" transform="rotate(-90 0 13.4492)" fill="url(#paint0_linear_10756_24007)"/>
            <rect x="340" y="12.9492" width="0.5" height="170" transform="rotate(90 340 12.9492)" fill="url(#paint1_linear_10756_24007)"/>
            <defs>
            <linearGradient id="paint0_linear_10756_24007" x1="0.75" y1="182.182" x2="0.749999" y2="10.409" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AEBEFF"/>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_10756_24007" x1="340.75" y1="181.682" x2="340.75" y2="9.90898" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AEBEFF"/>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
          <ul className="grid place-items-start sm:w-80 w-72 h-fit my-2">
            <AccordionItem list = {attributes?.services} onToggle={()=> handleToggle(1)} num = {1}  name="services" active = {clicked === 1} />
            <AccordionItem list = {attributes?.industries} onToggle={()=> handleToggle(2)} num = {2} name="industries" active = {clicked === 2} />
            <AccordionItem list = {attributes?.resources} onToggle={()=> handleToggle(3)} num = {3} name="resources" active = {clicked === 3} />
            <AccordionItem onToggle={()=> handleToggle(4)} num = {4} name="contact" active = {clicked === 4} />            
            <AccordionItem onToggle={()=> handleToggle(5)} num = {5} name="enquiry" active = {clicked === 5} />            
            
          </ul>  
          <svg width="100%" height="26" viewBox="0 0 340 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="13.4492" width="0.5" height="170" transform="rotate(-90 0 13.4492)" fill="url(#paint0_linear_10756_24007)"/>
            <rect x="340" y="12.9492" width="0.5" height="170" transform="rotate(90 340 12.9492)" fill="url(#paint1_linear_10756_24007)"/>
            <defs>
            <linearGradient id="paint0_linear_10756_24007" x1="0.75" y1="182.182" x2="0.749999" y2="10.409" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AEBEFF"/>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_10756_24007" x1="340.75" y1="181.682" x2="340.75" y2="9.90898" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AEBEFF"/>
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="grid capitalize text-xs font-normal gap-3 place-items-center">
            <Link to={"/privacy-policy"}>
              privacy policy
            </Link>
            <Link to={"/terms-and-conditions"}>
              terms and conditions
            </Link>
            <Link to={"/cookies"}>
                Cookie policy
            </Link>
          </div>
        </div>
      </footer>
    </>
    
  );
};

export default Footer;
