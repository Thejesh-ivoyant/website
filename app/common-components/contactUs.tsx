import { Form } from "@remix-run/react";

import { useEffect, useRef, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import { CalendarOutlined, FileAddOutlined, DeleteOutlined } from "@ant-design/icons";
import Country from "country-calling-code";

import type { RangePickerProps } from "antd/es/date-picker";
import { errorMessage, success } from "~/utils/notifications";
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
const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  formType: any
) => {
  try {
    event.preventDefault();
    if (formType === "contact") {
      console.warn("contact us submit download form clicked ");
      const formData = new FormData(event.currentTarget);
      formData.append("action", "Contact");
      formData.forEach((value, key) => {
        console.warn(`attribute is :  ${key}: ${value}`);
      });
      const response = await fetch(
        "https://forms.hubspot.com/uploads/form/v2/39872873/52d6bea6-d664-4d5c-a3e9-81a21ba79d3b",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.warn
        success(
          "Thank you for contacting us! We will get back to you soon.",
          3
        );
        console.warn("Form submitted successfully ");
      } else {
        errorMessage("Error occured while submitting, Please retry", 3);
        console.warn("Form submission failed");
      }
    } else if (formType === "hireus") {
      console.warn("hire us submit  form clicked ");
      const formData = new FormData(event.currentTarget);
      formData.append("action", "HireUs");

      formData.forEach((value, key) => {
        console.warn(`attribute is : ${key}: ${value}`);
      });
      const response = await fetch(
        "https://forms.hubspot.com/uploads/form/v2/39872873/28d8b167-abb4-44db-b4a3-19758d09a360",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        success(
          "Thank you for contacting us! We will get back to you soon.",
          3
        );
        console.warn("Form submitted successfully");
      } else {
        errorMessage("Error occured, please retry",3);
        console.warn("Form submission failed");
      }
    }
  } catch (error) {
    errorMessage("Error occured, please retry",3);
    console.error("An error occurred during form submission:", error);
  }
};

const ContactUs = () => {
  const ContactUsAPIData = `${strapiUrl}/api/contact-uses?populate=%2A`;
  const [contactImage, setcontactImage] = useState<string>("");
  const [hireImage, sethireImage] = useState<string>("");
  const [countryCodes, setCountryCodes] = useState<string[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleLabelClick = () => {
    // Trigger click on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  useEffect(() => {
    // Fetch all countries and their calling codes
    const codes = Object.values(Country).map(
      (country) => `+${country.countryCodes}`
    );

    // Extract calling codes from the country data

    setCountryCodes(codes);
    setSelectedCountryCode(codes[0]); // Set default value
  }, []);

  const handleCountryCodeChange = (e: any) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    fetch(ContactUsAPIData)
      .then((response) => response.json())
      .then((ContactUs_data) => {
        const { contactImage, hireImage } =
          ContactUs_data.data[0]?.attributes || "";
        setcontactImage(contactImage.data?.attributes?.url);
        sethireImage(hireImage.data?.attributes?.url);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const [toggleState, setToggleState] = useState(1);
  const [openc1, setOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [hireselectedFileName, sethireSelectedFileName] = useState<string | null>(null);
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
  const handlehireFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      sethireSelectedFileName(selectedFile.name);
      // Perform actions with the selected file
      console.warn("Selected File:", selectedFile);
    }
  };
  const handlehireClearFile = () => {
    sethireSelectedFileName(null);
    // Optionally, you can reset the file input value to allow selecting the same file again
    const fileInput = document.getElementById("hire_attachment") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <section
        id="contact-us"
        className="w-full h-fit bg-cover bg-center flex font-montserrat overflow-hidden"
      >
        <div className="flex flex-col flex-1 bg-haiti p-10">
          <div className="flex flex-col w-fit mx-auto">
            <h1 className="py-4">
              <span className="flex text-white text-4xl font-medium">
                Contact
              </span>
            </h1>
            <img
              className="flex aspect-square h-[35rem] justify-self-center mx-auto object-cover"
              src={toggleState === 1 ? contactImage : hireImage}
              alt="contactUs"
            />
          </div>
          <div className="w-full py-6">
            <p className="text-HeaderGray w-full text-2xl text-center p-1 font-semibold font-montserrat">
              Connect with us
            </p>
            <svg
              className="mx-auto"
              width="561"
              height="24"
              viewBox="0 0 561 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="rotate(-90 0 12)"
                fill="url(#a)"
                d="M0 12h.5v280.5H0z"
              />
              <path
                transform="rotate(90 561 11.5)"
                fill="url(#b)"
                d="M561 11.5h.5V292h-.5z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1=".75"
                  y1="290.41"
                  x2=".75"
                  y2="6.984"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AEBEFF" />
                  <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="561.75"
                  y1="289.91"
                  x2="561.75"
                  y2="6.484"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AEBEFF" />
                  <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="grid grid-cols-2 border-t-iv-purple max-w-xl mx-auto gap-x-4 gap-4 items-center p-4">
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
          <Form
          
            onSubmit={(event) => handleSubmit(event, "contact")}
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
                  placeholder="Name*"
                  required
                  className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
              </div>
              <div className="w-56 relative group col-span-1">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
              </div>
              <div className="items-stretch  border-b-[1px] border-form-gray self-stretch flex gap-2.5  h-10 py-3 ">
                <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center pr-3 border-r border-solid">
                  <div className="items-stretch flex  gap-1 ">
                    <select
                      value={selectedCountryCode}
                      onChange={handleCountryCodeChange}
                      className=" text-base h-10  font-medium leading-5 grow country-text outline-none cursor-pointer"
                      required
                      name="country_code"
                    >
                      {countryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  className="outline-none  cursor-pointer"
                  name="phonenumber"
                />
              </div>
              <div className="w-56 relative group col-span-1">
                <input
                  type="text"
                  id="organization"
                  name="organisation"
                  placeholder="Organisation"
                  className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
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
           onSubmit={(event) => handleSubmit(event, "hireus")}
            method="post"
            encType="multipart/form-data"
           
            className={
              toggleState === 2
                ? "flex flex-col gap-10 active-content px-10 py-4"
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
                  placeholder="Name*"
                  required
                  className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
              </div>
              <div className="w-56 relative group col-span-1">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full h-10 px-4 text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
              </div>
              <div className="items-stretch  border-b-[1px] border-form-gray self-stretch flex gap-2.5  h-10 py-3 ">
                <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center pr-3 border-r border-solid">
                  <div className="items-stretch flex  gap-1 ">
                    <select
                      value={selectedCountryCode}
                      onChange={handleCountryCodeChange}
                      className=" text-base h-10  font-medium leading-5 grow country-text outline-none cursor-pointer"
                      required
                      name="country_code"
                    >
                      {countryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  className="outline-none  cursor-pointer"
                  name="phone_number"
                />
              </div>
              <div className="w-56 relative group col-span-1">
                <select
                  id="username"
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
                  id="message"
                  name="message_hire"
                  cols={30}
                  rows={5}
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
                  <label htmlFor="hire_attachment" style={{ cursor: "pointer" }}>
                    <FileAddOutlined className="bg-[#AF99DD] rounded-full p-2 text-black mr-2" />
                    Attach File:
                  </label>
                  <input
                    name="hire_attachment"
                    style={{ display: "none" }}
                    type="file"
                    id="hire_attachment"
                    onChange={handlehireFileChange}
                  />
                </div>
                {hireselectedFileName && (
                  <div className="file-info">
                    <span>{`${hireselectedFileName}`}</span>
                    <button onClick={handlehireClearFile}>
                      <DeleteOutlined className="text-red-500 ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </Space>

            <button
              type="submit"
              name="_action"
              value="hireus"
              className="btn-purp-grad w-fit text-HeaderGray font-normal"
            >
              Send my message
            </button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
