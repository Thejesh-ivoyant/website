import { Form, Link, useLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/NavType";
import fb from '~/../public/assets/Facebook svg.svg'
import mail from '~/../public/assets/Twitter  svg.svg'
import linkedin from '~/../public/assets/Linkedin-white.svg'
import yt from '~/../public/assets/YouTube svg.svg'
import { errorMessage, success } from "~/utils/notifications";

const Footer = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.warn("pitchdck download form clicked ");
      const formData = new FormData(event.currentTarget);
  
      formData.forEach((value, key) => {
        console.warn(`${key}: ${value}`);
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/30829101-edb6-4d51-8bb7-1a089dd60533', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
            
      success("Subscribed for NewsLetter, Thank you for showing interest in us!",2);
        console.warn('Form submitted successfully');
      
      } else {
        console.warn('Form submission failed');
        
      }
 
    } catch (error) {
      errorMessage("Error occured, please retry",3);
      console.error('An error occurred during form submission:', error);
    }
  };
  
  const data = useLoaderData() as any;
  const attributes = data.navGraphql?.data?.navbar?.data
    ?.attributes as Attributes;
  return (
    <footer className="w-full  bg-haiti py-16 px-16 font-montserrat text-white screen-height ">
      <section className="flex flex-row w-full gradient-bottom p-6"></section>
      <Form onSubmit={handleSubmit}>
        <section className="flex flex-row w-full  p-6">
        <div className="flex-1">
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
        <div className="flex-1">
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
        <div className="flex-1">
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
        <div className="flex-1">
          <span className="footer-heading">Resources</span>
          <div className="flex items-start py-3 gap-2">
            <div className="flex flex-col footer-font justify-center gap-4">
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
                  <img src={fb} alt="facebook-meta" className=" h-7  object-contain cursor-pointer"/>
                  <img src={mail} alt="Mail" className="h-7 object-contain cursor-pointer"/>
                  <img src={linkedin} alt="Linked-in" className="h-7  object-contain cursor-pointer"/>
                  <img src={yt} alt="Youtube-channel" className="h-7 object-contain cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-white h-10 w-full font-montserrat  text-sm font-semibold text-haiti mx-1">
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
  );
};

export default Footer;
