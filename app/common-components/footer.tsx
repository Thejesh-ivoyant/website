import { Link, useLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/NavType";
import fb from '~/../public/assets/facebook.png'
import mail from '~/../public/assets/mail.svg'
import linkedin from '~/../public/assets/linkedin.svg'
import yt from '~/../public/assets/youtube.svg'

const Footer = () => {
  const data = useLoaderData() as any;
  const attributes = data.navGraphql?.data?.navbar?.data
    ?.attributes as Attributes;
  return (
    <footer className="w-full  bg-haiti py-16 px-16 font-montserrat text-white">
      <section className="flex flex-row w-full gradient-bottom p-6"></section>
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
                <img src={fb} alt="facebook-meta" className=" h-7  object-contain"/>
                <img src={mail} alt="Mail" className="h-7 object-contain"/>
                <img src={linkedin} alt="Linked-in" className="h-7  object-contain"/>
                <img src={yt} alt="Youtube-channel" className="h-7 object-contain" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="relative flex flex-row w-full mr-24   bottom-24 justify-end items-end">
        <div className="flex row w-1/2 gap-1 justify-end items-end ">
          <div className="flex-1"></div>
          <div className="flex-1 w-3/4 justify-end">
            <input
              placeholder="Email*"
              className="footer-font email-container w-full"
            ></input>
          </div>
          <div className="flex subscribe">
            <button className="subscribe-text">Subscribe for NewsLetter</button>
          </div>
        </div>
      </div>
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
