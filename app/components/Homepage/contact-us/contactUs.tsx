import { Form, useRouteLoaderData } from "@remix-run/react";
import { FormData, ActionFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { loader } from "~/routes/_index";

export let action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
};
const ContactUs = () => {
  const loaderData = useRouteLoaderData<typeof loader>("routes/_index");
  const CONTACT_US = `${strapiUrl}/api/contact-uses?populate=%2A`;
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <section
      id="contact-us"
      className="w-full h-[90vh] bg-cover bg-center flex font-montserrat overflow-hidden"
    >
      <div className="flex flex-col bg-haiti pl-20 p-10">
        <div>
          <h1 className="py-4">
            <span className="flex text-white text-4xl font-medium">
              Contact
            </span>
          </h1>
          <img
            className="flex w-[300px] h-[300px] justify-self-center mx-auto object-cover"
            src={
              toggleState === 1
                ? strapiUrl + loaderData?.contactUsImage
                : strapiUrl + loaderData?.hireUsImage
            }
            alt="Image Alt Text"
          />
        </div>
        <div className="w-full py-6">
          <p className="text-HeaderGray w-full text-xl text-center p-4">
            Connect with us
          </p>
          <div className="grid grid-cols-2 top-gradient border-t-iv-purple w-full items-center p-2 gap-3">
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img className="w-4 h-4 inline" src="../assets/phone.svg"></img>
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img className="w-4 h-4 inline" src="../assets/phone.svg"></img>
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img className="w-4 h-4 inline" src="../assets/phone.svg"></img>
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img className="w-4 h-4 inline" src="../assets/phone.svg"></img>
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white p-10">
        <div className="flex flex-row gap-x-10 pb-10">
          <div>
            <span
              className={
                toggleState === 1 ? "tab active-tab font-bold" : "tab font-thin"
              }
              onClick={() => toggleTab(1)}
            >
              {" "}
              Let's Talk{" "}
            </span>
          </div>
          <div>
            <span
              className={
                toggleState === 2 ? "tab active-tab font-bold" : "tab font-thin"
              }
              onClick={() => toggleTab(2)}
            >
              {" "}
              Work Enquiry
            </span>
          </div>
        </div>
        <p className="font-poppins text-sm font-light px-10">
          Take a no-compromise approach to customer experience in times where
          disruption is just around the corner and customer retention is
          everything. Ensure high availabi
        </p>
        <Form
          method="post"
          className={
            toggleState === 1
              ? "flex flex-col gap-8 active-content p-8"
              : "hidden"
          }
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Name*
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Email*
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Phone Number
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Organization
              </label>
            </div>
            <div className="w-full relative grid">
              <label className="py-2 text-xs">Your Message</label>
              <textarea
                minLength={3}
                maxLength={250}
                id="username"
                cols={30}
                rows={5}
                required
                className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer col-span-2"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-purp-grad w-fit text-HeaderGray font-normal">
            Send my message
          </button>
        </Form>
        <Form
          method="post"
          className={
            toggleState === 2
              ? "flex flex-col gap-14 active-content px-10 py-4"
              : "hidden"
          }
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Name*
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Email*
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Phone Number
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Organization
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Organization
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Organization
              </label>
            </div>
            <div className="w-full relative grid">
              <label className="py-2 text-xs">Your Message</label>
              <textarea
                minLength={3}
                maxLength={250}
                id="username"
                cols={30}
                rows={3}
                required
                className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer col-span-2"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-purp-grad w-fit text-HeaderGray font-normal">
            Send my message
          </button>
        </Form>
      </div>
    </section>
  );
};

export default ContactUs;
