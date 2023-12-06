import { Form, useRouteLoaderData } from "@remix-run/react";
import { FormData, ActionFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { loader } from "~/routes/_index";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Button, DatePicker, Space, Upload, UploadProps, message } from "antd";
import { CalendarOutlined, FileAddOutlined} from "@ant-design/icons";

import type { RangePickerProps } from "antd/es/date-picker";
import { UploadOutlined } from "@ant-design/icons";
dayjs.extend(customParseFormat);

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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

export let action: ActionFunction = async ({ request }) => {
  let formdata: Formdata = await request.formData();
};
const ContactUs = () => {
  const loaderData = useRouteLoaderData<typeof loader>("routes/_index");
  const CONTACT_US = `${strapiUrl}/api/contact-uses?populate=%2A`;
  const [toggleState, setToggleState] = useState(1);
  const [openc1, setOpen] = useState(false);

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
            className="flex w-[300px] h-[300px] justify-self-center mx-auto object-cover"
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
          <div className="grid grid-cols-2 top-gradient border-t-iv-purple w-full items-center p-2 gap-3">
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/phone.svg"
                  alt="phoneImg"
                />
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/phone.svg"
                  alt="phoneImg"
                />
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/phone.svg"
                  alt="phoneImg"
                />
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
            </div>
            <div className="col-span-1 text-white items-center justify-self-center">
              <div className="flex text-iv-purple items-center gap-2">
                <img
                  className="w-4 h-4 inline"
                  src="../assets/phone.svg"
                  alt="phoneImg"
                />
                <span>Enquires</span>
              </div>
              <a className="block">9999999999</a>
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
            <div className="flex flex-row">
            <Upload {...props} className="font-poppins">
              <div className="flex flex-row items-center gap-2">
                <Button icon={<FileAddOutlined />} className="items-center flex justify-center bg-[#AF99DD] rounded-full p-2 text-black"></Button>
                <div className="flex text-base">Attach a File</div>
              </div>
            </Upload>
            </div>
          </Space>

          <button
            type="submit"
            className="btn-purp-grad w-fit text-HeaderGray font-normal"
          >
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
              <select
                id="username"
                required
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Area of Expertise
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="w-56 relative group col-span-1">
              <select
                id="username"
                required
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Hiring Duration
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="w-56 relative group col-span-1">
              <select
                id="username"
                required
                className="w-full h-10  text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Choose skillset
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
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

          <button
            type="submit"
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
