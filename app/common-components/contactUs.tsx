import { Form, useRouteLoaderData } from "@remix-run/react";
import { FormData, ActionFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { loader } from "~/routes/_index";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Button, DatePicker, Space, Upload, UploadProps, message } from "antd";
import { CalendarOutlined, FileAddOutlined, DeleteOutlined, CloseOutlined } from "@ant-design/icons";

import type { RangePickerProps } from "antd/es/date-picker";
import { UploadOutlined } from "@ant-design/icons";
dayjs.extend(customParseFormat);

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().startOf("day");
};

const disabledDateTime = (selectedDate: dayjs.Dayjs | null) => {
  const today: Dayjs = dayjs().startOf("day");
  const currentHour: number = dayjs().hour();
  const currentMinute: number = dayjs().minute();
  const isToday = selectedDate?.isSame(today, "day");

  return {
    disabledHours: () => (isToday ? range(0, currentHour) : []),
    disabledMinutes: () =>
      isToday && selectedDate?.hour() == dayjs().hour()
        ? range(0, currentMinute)
        : [],
  };
};

const ContactUs = () => {
  const loaderData = useRouteLoaderData<typeof loader>("routes/_index");
  const CONTACT_US = `${strapiUrl}/api/contact-uses?populate=%2A`;
  const [toggleState, setToggleState] = useState(1);
  const [openc1, setOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      // Perform actions with the selected file
      console.warn("Selected File:", selectedFile);
    }
  };
  const handleClearFile = () => {
    // Clear the selected file and hide the file information
    setSelectedFileName(null);
    // Optionally, you can reset the file input value to allow selecting the same file again
    const fileInput = document.getElementById("attachment") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <section
      id="contact-us"
      className="w-full h-[90vh] bg-cover bg-center flex font-montserrat overflow-hidden"
    >
      <div className="flex flex-col flex-1 bg-haiti pl-20 p-10">
        <div>
          <h1 className="py-4">
            <span className="flex text-white text-4xl font-medium">
              Contact
            </span>
          </h1>
          <img
            className="flex w-full max-h-[500px] justify-self-center mx-auto object-cover"
            src={
              toggleState === 1
                ? loaderData?.contactUsImage
                : loaderData?.hireUsImage
            }
            alt="contactUs"
          />
        </div>
        <div className="w-full py-6">
          <p className="text-HeaderGray w-full text-xl text-center p-4">
            Connect with us
          </p>
          <div className="grid grid-cols-2 top-gradient border-t-iv-purple max-w-xl mx-auto gap-x-4 gap-4 items-center p-4">
            <div className="col-span-1 text-white items-left">
              <div className="flex text-iv-purple items-left gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/enquire.svg"
                  alt="enquire"
                />
                <span>Enquires</span>
              </div>
              <a className="block" href="mailto:sales@ivoyant.com">
                sales@ivoyant.com
              </a>
            </div>
            <div className="col-span-1 text-white items-left ">
              <div className="flex text-iv-purple items-left gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/phone-outlined.svg"
                  alt="phone"
                />
                <span>Phone</span>
              </div>
              <a className="block" href="tel:+91 987654121">
                +91 987654121
              </a>
            </div>
            <div className="col-span-1 text-white items-left">
              <div className="flex text-iv-purple items-left gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/info.svg"
                  alt="info"
                />
                <span>Information</span>
              </div>
              <a className="block" href="mailto:info@ivoyant.com">
                info@ivoyant.com
              </a>
            </div>
            <div className="col-span-1 text-white items-left ">
              <div className="flex text-iv-purple items-left gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/skype-outlined.svg"
                  alt="skype"
                />
                <span>Connect with us</span>
              </div>
              <a className="block" href="mailto:ivoyantsales@outlook.com">
                ivoyantsales@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white p-10">
        <div className="flex flex-row gap-x-10">
          <div>
            <span
              className={
                toggleState === 1
                  ? "tab active-tab font-semibold"
                  : "tab font-thin"
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
                toggleState === 2
                  ? "tab active-tab font-semibold"
                  : "tab font-thin"
              }
              onClick={() => toggleTab(2)}
            >
              {" "}
              Work Enquiry
            </span>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "glider ml-[15rem]" : "glider ml-5"}
        ></div>
        <p className="font-poppins text-sm font-light px-8 pt-10">
          Take a no-compromise approach to customer experience in times where
          disruption is just around the corner and customer retention is
          everything. Ensure high availabi
        </p>
        <Form
          preventScrollReset
          method="post"
          encType="multipart/form-data"
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
                id="name"
                name="name"
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
                id="email"
                name="email"
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
                id="phonenumber"
                name="phonenumber"
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
                id="organization"
                name="organisation"
                required
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Organization
              </label>
            </div>
            <div className="w-full relative grid col-span-2">
              <label className="py-2 text-xs">Your Message</label>
              <textarea
                minLength={3}
                maxLength={250}
                id="message"
                name="message"
                cols={30}
                rows={5}
                required
                className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer"
              ></textarea>
            </div>
          </div>
          <Space
            direction="horizontal"
            size={12}
            className="grid-cols-1 flex justify-between"
          >
            <div className="flex">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!openc1);
                }}
              >
                <CalendarOutlined className="bg-[#AF99DD] rounded-full p-2 text-black" />
              </span>
              <DatePicker
                format="YYYY-MM-DD  HH:mm"
                disabledDate={disabledDate}
                disabledTime={(current) => disabledDateTime(current)}
                placeholder="Schedule a Meet"
                showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                suffixIcon={null}
                open={openc1}
                onOk={() => setOpen(false)}
              />
            </div>

    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <label htmlFor="attachment" style={{ cursor: "pointer" }}>
          <FileAddOutlined className="bg-[#AF99DD] rounded-full p-2 text-black mr-2" />
          Attach File:
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          id="attachment"
          name="attachment"
          onChange={handleFileChange}
        />
      </div>
      {selectedFileName && (
        <div className="file-info">
          <span>{`${selectedFileName}`}</span>
          <button onClick={handleClearFile}>
            
            <DeleteOutlined className="text-red-500 ml-2" />
          </button>
        </div>
      )}
    </div>

          </Space>

          <button
            type="submit"
            name="_action"
            value="contact"
            className="btn-purp-grad w-fit text-HeaderGray font-normal"
          >
            Send my message
          </button>
        </Form>
        <Form
        method="post"
        encType="multipart/form-data"
        preventScrollReset
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
                name="personname"
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
                name="email"
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
                name="phone_no"
                className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              ></input>
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                Phone Number
              </label>
            </div>
            <div className="w-56 relative group col-span-1">
              <select
                id="username"
                required
                name="area_of_expertise"
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Area of Expertise
                </option>
                <option value="option1">Front End coding</option>
                <option value="option2">Devops </option>
              </select>
            </div>
            <div className="w-56 relative group col-span-1">
              <select
                id="username"
                name="hiring_duration"
                required
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Hiring Duration
                </option>
                <option value="option1">10</option>
                <option value="option2">8</option>
              </select>
            </div>
            <div className="w-56 relative group col-span-1">
              <select
                id="username"
                name="choose_skill_set"
                required
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Choose skillset
                </option>
                <option value="option1">python</option>
                <option value="option2">java</option>
              </select>
            </div>
            <div className="w-full relative grid col-span-2">
              <label className="py-2 text-xs">Your Message</label>
              <textarea
                minLength={3}
                maxLength={250}
                id="username"
                cols={30}
                rows={3}
                name="messages"
                required
                className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer col-span-2"
              ></textarea>
            </div>
          </div>
          <Space
            direction="horizontal"
            size={12}
            className="grid-cols-1 flex justify-between"
          >
            <div className="flex">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!openc1);
                }}
              >
                <CalendarOutlined className="bg-[#AF99DD] rounded-full p-2 text-black" />
              </span>
              <DatePicker
                format="YYYY-MM-DD  HH:mm"
                disabledDate={disabledDate}
                disabledTime={(current) => disabledDateTime(current)}
                placeholder="Schedule a Meet"
                showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                suffixIcon={null}
                open={openc1}
                onOk={() => setOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <label htmlFor="attachment" style={{ cursor: "pointer" }}>
          <FileAddOutlined className="bg-[#AF99DD] rounded-full p-2 text-black mr-2" />
          Attach File :
        </label>
        <input
          style={{ display: "visible" }}
          type="file"
          id="attachment"
          name="file_attachment"
          onChange={handleFileChange}
        />
      </div>
      {selectedFileName && (
        <div className="file-info">
          <span>{`${selectedFileName}`}</span>
          <button onClick={handleClearFile}>
            
            <DeleteOutlined className="text-red-500 ml-2" />
          </button>
        </div>
      )}
    </div>

          </Space>
          <button
            type="submit"
            name="_action"
            value="hire"
            className="btn-purp-grad w-fit text-HeaderGray font-normal"
          >
            Send my message
          </button>
        </Form>
      </div>
    </section>
  );
};

export default ContactUs;
