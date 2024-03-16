import { Form, Link, useRouteLoaderData } from "@remix-run/react";
import { Attributes } from "~/interfaces/NavType";
import fb from "~/../public/assets/Facebook svg.svg";
import mail from "~/../public/assets/Twitter  svg.svg";
import linkedin from "~/../public/assets/Linkedin-white.svg";
import yt from "~/../public/assets/YouTube svg.svg";
import ivoyantLogo from "~/../public/assets/ivoyant-footer.svg";
import { errorMessage, success } from "~/utils/notifications";
import AccordionItem from "./footer-item";
import { useState } from "react";
import { Modal } from "antd";
const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneerror, setPhoneError] = useState('');
  const [personname, setPersonName] = useState('');
  const [nameerror, setNameError] = useState('');

  const [email, setEmail] =useState("");
  const [emailerror, setEmailError] = useState('');
  const [btnLoadingResource, setBtnLoadingResource] = useState<boolean>(false);

  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState<string>("");
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [clicked, setClicked] = useState(-1);
  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };
  const showModal = (url: any) => {
    debugger;
    setDownload(url);
    setOpen(true);
  };

  const handlePhoneNumberChange = (e: any) => {
    const phone = e.target.value;
    setPhoneNumber(phone);
    setPhoneError("");
    const phoneRegex = /^(?:[0-9]{3})[-. ]*(?:[0-9]{3})[-. ]*(?:[0-9]{4})(?: *[x/#]{1}[0-9]+)?$/;
    if (!phone) {
        setPhoneError("Phone number is required");
    } else if (!phoneRegex.test(phone)) {
        setPhoneError("Invalid phone number format");
    }
};
const handleEmailChange = (e: any) => {
  const emailValue = e.target.value;
  setEmail(emailValue);
  // Reset email error
  setEmailError("");
  // Validate email
  if (!emailValue.trim()) {
    setEmailError("Email is required");
} else if (!/^[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*@[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*(\.[a-z]{2,3})+$/.test(emailValue)) {
    setEmailError("Invalid email address");
}
};
const handleNameChange = (e: any) => {
  const personName = e.target.value;
  setPersonName(personName);
  setNameError("");
  const noNumbersPattern = /\d/;
  const noSpecialCharsPattern = /[^\w\s]/;
  const noConsecutiveCharsPattern = /(\w)\1{3}/;

  if (!personName) {
      setNameError("Full name is required");
  } else if (personName.length < 3) {
      setNameError("Name must be at least 3 characters long");
  } else if (personName.length > 35) {
      setNameError("Name must be less than 36 characters");
  } else if (noNumbersPattern.test(personName)) {
      setNameError("Name cannot contain numbers");
  } else if (noSpecialCharsPattern.test(personName)) {
      setNameError("Name cannot contain special characters");
  } else if (noConsecutiveCharsPattern.test(personName)) {
      setNameError("Name cannot contain repeating consecutive characters four times");
  }
};

  const handleModalSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setBtnLoadingResource(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append("action", "pitchdeck");
      formData.forEach((value, key) => {});
      const response = await fetch(
        "https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        success("Thank you for showing interest in us!", 2);
        handleDownload();
      } else {
        errorMessage("Form submission failed", 3);
      }
    } catch (error) {
      errorMessage("Error occured, please retry", 3);
    }
    setBtnLoadingResource(false);
  };

  const handleDownload = () => {
    const PitchDeskUrl = download;
    setOpen(false);
    //success mesage here
    window.open(PitchDeskUrl, "_blank");
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setBtnLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.forEach((value, key) => {});
      const response = await fetch(
        "https://forms.hubspot.com/uploads/form/v2/39872873/30829101-edb6-4d51-8bb7-1a089dd60533",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        success(
          "Subscribed for NewsLetter, Thank you for showing interest in us!",
          2
        );
      } else {
        errorMessage("Form submission failed", 3);
      }
    } catch (error) {
      errorMessage("Error occured, please retry", 3);
    }
    setBtnLoading(false);
  };
  const data = useRouteLoaderData("root") as any;
  const attributes = data.navGraphql?.data?.navbar?.data
    ?.attributes as Attributes;
  return (
    <>
      <Modal open={open} title="Download PitchDeck" onCancel={handleCancel}>
        <Form className="form" onSubmit={handleModalSubmit}>
          <div className="items-stretch bg-white flex  flex-col py-2">
            <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
              Please provide required information to view the Pitch deck
            </div>
            <div className="text-box-form-label mt-4 max-md:max-w-full">
              Full Name*
            </div>
            <div className="relative w-full flex flex-col">
            <input
              type="text"
              className="text-box-form flex shrink-0 h-[29px] flex-col mt-1  max-md:max-w-full"
              name="firstName"
              required
              value={personname}
              onChange={handleNameChange}
            />
             {nameerror &&(
          <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{nameerror}</span>
          )}
          </div>
          
            <div className="text-box-form-label mt-4 max-md:max-w-full">
              Email*
            </div>
            <div className="relative w-full flex flex-col">
            <input
              type="email"
              className="text-box-form flex shrink-0 h-[29px] flex-col mt-1 max-md:max-w-full"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
             {emailerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{emailerror}</span>
          )}
          </div>
            <div className="text-box-form-label mt-4 max-md:max-w-full">
              Phone Number*
            </div>
            <div className="relative w-full flex flex-col">
            <input
              type="tel"
              className=" flex shrink-0 h-[29px] flex-col mt-1 text-box-form max-md:max-w-full"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {phoneerror &&(
          <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{phoneerror}</span>
          )}
</div>
            
            <button type="submit" className="hue-btn-primary mt-6 btn w-full"   disabled={btnLoadingResource ||  personname==='' || email==='' || phoneNumber==='' || !!phoneerror || !!emailerror || !!nameerror}
>
              Get the Copy
            </button>
          </div>
        </Form>
      </Modal>
      <footer className="w-full main-footer bg-haiti xl:py-16 lg:py-6 xl:px-16 md:px-4 font-montserrat text-white h-fit ">
        <section className="flex flex-row w-full gradient-bottom p-6"></section>
        <section className="footer-div  w-full">
          <div className="left-box flex flex-row w-full  justify-center">
            <div className="flex-1 flex flex-col ">
              <span className="footer-heading">Services</span>
              <div className="flex items-start py-3 gap-2">
                <div className="flex flex-col footer-font justify-center gap-4">
                  {attributes?.services?.map((item, index) =>
                    item.__typename != "ComponentCardCard" ? (
                      <Link
                        prefetch="intent"
                        className="hover:font-medium"
                        to={item.link}
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col ">
              <span className="footer-heading">Industries</span>
              <div className="flex items-start py-3 gap-2">
                <div className="flex flex-col  footer-font justify-center gap-4">
                  {attributes?.industries?.map((item, index) =>
                    item.__typename != "ComponentCardCard" ? (
                      <Link
                        prefetch="intent"
                        className="hover:font-semibold"
                        to={item.link}
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col ">
              <span className="footer-heading">Products</span>
              <div className="flex items-start py-3 gap-2">
                <div className="flex flex-col footer-font justify-center gap-4">
                  {attributes?.products?.map((item, index) =>
                    item.__typename != "ComponentCardCard" ? (
                      <Link
                        prefetch="intent"
                        className="hover:font-medium"
                        to={item.link}
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
          <Form
            onSubmit={handleSubmit}
            className="right-box flex flex-row w-full  justify-center"
          >
            <div className="flex-1 flex flex-col ">
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
                        className="hover:font-semibold"
                        prefetch="intent"
                      >
                        {item.name}
                      </Link>
                    ) : item.attachment?.data?.attributes?.url ? (
                      <button
                        onClick={() => {
                          showModal(item.attachment?.data?.attributes?.url);
                        }}
                        className="text-left hover:font-semibold"
                      >
                        {item.name}
                      </button>
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
              <span className="footer-heading tablet-hidden">Company</span>
              <div className="flex items-start py-3 gap-2 tablet-hidden">
                <div className="flex flex-col footer-font justify-center gap-4">
                  {attributes?.company?.map((item, index: number) => (
                    <Link
                      prefetch="intent"
                      className="hover:font-medium"
                      to={item?.link}
                      key={index}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1  flex-col footer-company-item">
              <span className="footer-heading">Company</span>
              <div className="flex items-start py-3 gap-2">
                <div className="flex flex-col footer-font justify-center gap-4">
                  {attributes?.company?.map((item, index: number) => (
                    <Link
                      prefetch="intent"
                      className="hover:font-medium"
                      to={item?.link}
                      key={index}
                      aria-label={item?.name}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between ">
              <div className="flex flex-col">
                <span className="footer-heading">CONNECT</span>
                <div className="flex flex-col">
                  <div className="flex items-start py-3 gap-2">
                    <div className="flex flex-col footer-font justify-center">
                      <span className="">Mail</span>
                      <a
                        href="mailto:sales@ivoyant.com"
                        className="hover:font-semibold"
                      >
                        sales@ivoyant.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start py-3 gap-2">
                    <div className="flex flex-col footer-font justify-center">
                      <span className="">Phone</span>
                      <span className="hover:font-semibold">
                        info@ivoyant.com
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start py-3 gap-2">
                    <div className="flex flex-col footer-font justify-center">
                      <span className="">Skype</span>
                      <a
                        href="skype:live:.cid.37875f1d394a53b6?chat"
                        className="hover:font-semibold"
                      >
                        live:.cid.37875f1d394a53b6
                      </a>
                      <a
                        href="mailto:ivoyantsales@outlook.com"
                        className="hover:font-semibold"
                      >
                        ivoyantsales@outlook.com{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" tablet-hidden">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email*"
                  className="footer-font email-container w-full mt-auto focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col  justify-between">
              <div className="flex flex-col">
                <span className="footer-heading">MAIL US</span>
                <div className="flex flex-col items-start py-3 gap-4">
                  <div className="flex flex-col footer-font justify-center gap-4">
                    <div className="grid gap-1">
                      <span className="">For Clients</span>
                      <a
                        href="mailto:info@ivoyant.com"
                        className="hover:font-semibold"
                      >
                        info@ivoyant.com
                      </a>
                    </div>
                    <div className="grid gap-1">
                      <span className="">For Future developers</span>
                      <a
                        href="mailto:jobs@ivoyant.com"
                        className="hover:font-semibold"
                      >
                        jobs@ivoyant.com
                      </a>
                    </div>
                    <span className="flex gap-2 py-4 tablet-hidden">
                      <img
                        src={fb}
                        alt="facebook-meta"
                        className=" xl:h-7 h-5 object-contain cursor-pointer"
                      />
                      <img
                        src={mail}
                        alt="Mail"
                        className="xl:h-7 h-5 object-contain cursor-pointer"
                      />
                      <img
                        src={linkedin}
                        alt="Linked-in"
                        className="xl:h-7 h-5 object-contain cursor-pointer"
                      />
                      <img
                        src={yt}
                        alt="Youtube-channel"
                        className="xl:h-7 h-5 object-contain cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" tablet-hidden">
                <button
                  type="submit"
                  disabled={btnLoading}
                  className="bg-white disabled:cursor-not-allowed  h-10 w-full font-montserrat  text-sm font-semibold text-haiti"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </Form>
          {/* Tablet view  */}
          <div className="footer-buttons flex-row justify-between w-full items-center pb-4 pr-2">
            <div className="flex">
              <span className="flex gap-2 py-4 p-[1.5rem]">
                <img
                  src={fb}
                  alt="facebook-meta"
                  className=" xl:h-7 h-5 object-contain cursor-pointer"
                />
                <img
                  src={mail}
                  alt="Mail"
                  className="xl:h-7 h-5 object-contain cursor-pointer"
                />
                <img
                  src={linkedin}
                  alt="Linked-in"
                  className="xl:h-7 h-5 object-contain cursor-pointer"
                />
                <img
                  src={yt}
                  alt="Youtube-channel"
                  className="xl:h-7 h-5 object-contain cursor-pointer"
                />
              </span>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email*"
                  className="footer-font email-container  w-full mt-auto focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={btnLoading}
                  className="bg-white disabled:cursor-not-allowed h-10 w-fit px-2 font-montserrat  text-sm font-semibold text-haiti"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </Form>
          </div>
        </section>
        <div className="flex flex-row gap-[6rem] justify-center w-full text-xs gradient-top font-medium text-center p-4">
          <Link to={"/privacy-policy"} className="hover:font-medium">
            <div className="flex">Privacy Policy</div>
          </Link>
          <Link to={"/terms-and-conditions"} className="hover:font-medium">
            <div className="flex">Terms and Conditions</div>
          </Link>
          <Link to={"/cookies"} className="hover:font-medium">
            <div className="flex">Cookie Policy</div>
          </Link>
        </div>
        <div className="flex gap-3 justify-center w-full text-xs gradient-top font-medium text-center p-4">
          <span>&copy; 2023 iVoyant </span>
          <span> All Rights Reserved</span>{" "}
        </div>
      </footer>
      {/* phone footer */}
      <footer className="w-full mobile-footer py-6  bg-haiti font-montserrat text-white h-fit">
        <div className="grid place-items-center md:hidden">
          <Link to={"/"} className="hover:font-medium">
            <img src={ivoyantLogo} alt="iVoyant Logo" />
          </Link>
          <span className="flex gap-2 py-4">
            <a href="">
              <img
                src={fb}
                alt="facebook-meta"
                className=" xl:h-7 h-5 object-contain cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={mail}
                alt="Mail"
                className="xl:h-7 h-5 object-contain cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={linkedin}
                alt="Linked-in"
                className="h-5 object-contain cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src={yt}
                alt="Youtube-channel"
                className="h-5 object-contain cursor-pointer"
              />
            </a>
          </span>
          <svg className="my-4"
            width="100%"
            height="26"
            viewBox="0 0 340 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="13.4492"
              width="0.5"
              height="170"
              transform="rotate(-90 0 13.4492)"
              fill="url(#paint0_linear_10756_24007)"
            />
            <rect
              x="340"
              y="12.9492"
              width="0.5"
              height="170"
              transform="rotate(90 340 12.9492)"
              fill="url(#paint1_linear_10756_24007)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10756_24007"
                x1="0.75"
                y1="182.182"
                x2="0.749999"
                y2="10.409"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_10756_24007"
                x1="340.75"
                y1="181.682"
                x2="340.75"
                y2="9.90898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <ul className="grid place-items-start sm:w-80 w-72 h-fit my-2 gap-4">
            <AccordionItem
              list={attributes?.services}
              onToggle={() => handleToggle(1)}
              num={1}
              name="services"
              active={clicked === 1}
              showModal={showModal}
            />
            <AccordionItem
              list={attributes?.industries}
              onToggle={() => handleToggle(2)}
              num={2}
              name="industries"
              active={clicked === 2}
              showModal={showModal}
            />
            <AccordionItem
              list={attributes?.products}
              onToggle={() => handleToggle(3)}
              num={3}
              name="products"
              active={clicked === 3}
              showModal={showModal}
            />
            <AccordionItem
              list={attributes?.resources}
              onToggle={() => handleToggle(4)}
              num={4}
              name="resources"
              active={clicked === 4}
              showModal={showModal}
            />
            <AccordionItem
              onToggle={() => handleToggle(5)}
              num={5}
              name="contact"
              active={clicked === 5}
              showModal={showModal}
            />
            <AccordionItem
              onToggle={() => handleToggle(6)}
              num={6}
              name="enquiry"
              active={clicked === 6}
              showModal={showModal}
            />
          </ul>
          <svg className="my-4"
            width="100%"
            height="26"
            viewBox="0 0 340 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="13.4492"
              width="0.5"
              height="170"
              transform="rotate(-90 0 13.4492)"
              fill="url(#paint0_linear_10756_24007)"
            />
            <rect
              x="340"
              y="12.9492"
              width="0.5"
              height="170"
              transform="rotate(90 340 12.9492)"
              fill="url(#paint1_linear_10756_24007)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10756_24007"
                x1="0.75"
                y1="182.182"
                x2="0.749999"
                y2="10.409"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_10756_24007"
                x1="340.75"
                y1="181.682"
                x2="340.75"
                y2="9.90898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AEBEFF" />
                <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col items-center justify-center gap-2 pb-2 pl-2 pr-2">
              <input
                name="email"
                type="email"
                required
                placeholder="Email*"
                className="footer-font email-container  max-w-xs w-full mt-auto focus:outline-none"
              />
              <button
                disabled={btnLoading}
                type="submit"
                className="bg-white  h-10 max-w-xs w-full px-2 font-montserrat  text-sm font-semibold text-haiti disabled:cursor-not-allowed"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </Form>
          <div className="grid capitalize text-xs font-normal gap-3 place-items-center my-4">
            <Link to={"/privacy-policy"} className="hover:font-semibold">
              privacy policy
            </Link>
            <Link to={"/terms-and-conditions"} className="hover:font-semibold">
              terms and conditions
            </Link>
            <Link to={"/cookies"} className="hover:font-semibold">
              Cookie policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
