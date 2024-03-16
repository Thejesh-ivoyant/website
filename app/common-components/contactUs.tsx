import { Form } from "@remix-run/react";
import line from "~/../public/assets/line.svg";
import ReactFlagsSelect from "react-flags-select";
import { useEffect, useRef, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import {
  CalendarOutlined,
  FileAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
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
const ContactUs = () => {
  const [personname, setPersonName] = useState('');
  const [nameerror, setNameError] = useState('');

  const [email, setEmail] =useState("");
  const [emailerror, setEmailError] = useState('');

  const [hirepersonname, sethirePersonName] = useState('');
  const [hirenameerror, sethireNameError] = useState('');

  const [hireemail, sethireEmail] =useState("");
  const [hireemailerror, sethireEmailError] = useState('');

  const [org, setOrg] =useState("");
  const [orgerror, setOrgError] = useState('');

  const [hirephoneNumber, sethirePhoneNumber] = useState("");
  const [hirephoneerror, sethirePhoneError] = useState('');

  const [hiremsg, sethireMsg] = useState("");
  const [hiremsgerror, sethireMsgError] = useState('');

  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneerror, setPhoneError] = useState('');

  const [msg, setMsg] = useState("");
  const [msgerror, setMsgError] = useState('');
 
  
  const [msgcount, setMsgCount] = useState("10");
  
  const [hiremsgcount, sethireMsgCount] = useState("10");

  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [selectedCode, setCountryCodeSelected] = useState("US");
  const [selectedDate, setDateSelected] = useState("");
  const ContactUsAPIData = `${strapiUrl}/api/contact-uses?populate=%2A`;
  const [contactImage, setcontactImage] = useState<string>("");
  const [hireImage, sethireImage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    formType: any
  ) => {
    try {
      event.preventDefault();
      setBtnLoading(true);
      if (formType === "contact") {
        const formData = new FormData(event.currentTarget);
        formData.append("action", "Contact");
        formData.forEach((value, key) => {});
        const response = await fetch(
          "https://forms.hubspot.com/uploads/form/v2/39872873/52d6bea6-d664-4d5c-a3e9-81a21ba79d3b",
          {
            method: "POST",
            body: formData,
          }
        );
        debugger;
        if (response.ok) {
          success(
            "Thank you for contacting us! We will get back to you soon.",
            3
          );
        } else {
          errorMessage("Error occured while submitting, Please retry", 3);
        }
      } else if (formType === "hireus") {
        const formData = new FormData(event.currentTarget);
        formData.append("action", "HireUs");
        formData.forEach((value, key) => {});
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
        } else {
          errorMessage("Error occured, please retry", 3);
        }
      }
    } catch (error) {
      errorMessage("Error occured, please retry", 3);
    }
    setBtnLoading(false);
  };
  const handleLabelClick = () => {
    // Trigger click on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDateSelected(dateString);
  };

  const hirehandlePhoneNumberChange = (e: any) => {
    const hirephone = e.target.value;
    sethirePhoneNumber(hirephone);
    sethirePhoneError("");
    const hirephoneRegex = /^(?:[0-9]{3})[-. ]*(?:[0-9]{3})[-. ]*(?:[0-9]{4})(?: *[x/#]{1}[0-9]+)?$/;
    if (!hirephone) {
        sethirePhoneError("Phone number is required");
    } else if (!hirephoneRegex.test(hirephone)) {
        sethirePhoneError("Invalid phone number format");
    }
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


const hirehandleNameChange = (e: any) => {
  const hirepersonName = e.target.value;
  sethirePersonName(hirepersonName);
  sethireNameError("");

  // Regular expression patterns for validation
  const noNumbersPattern = /\d/;
  const noSpecialCharsPattern = /[^\w\s]/;
  const noConsecutiveCharsPattern = /(\w)\1{3}/;

  if (!hirepersonName) {
    sethireNameError("Full name is required");
  } else if (hirepersonName.length < 3) {
    sethireNameError("Name must be at least 3 characters long");
  } else if (hirepersonName.length > 35) {
    sethireNameError("Name must be less than 36 characters");
  } else if (noNumbersPattern.test(hirepersonName)) {
    sethireNameError("Name cannot contain numbers");
  } else if (noSpecialCharsPattern.test(hirepersonName)) {
    sethireNameError("Name cannot contain special characters");
  } else if (noConsecutiveCharsPattern.test(hirepersonName)) {
    sethireNameError("Name cannot contain repeating consecutive characters four times");
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

const hirehandleEmailChange = (e: any) => {
  const hireemailValue = e.target.value;
  sethireEmail(hireemailValue);
  // Reset email error
  sethireEmailError("");
  // Validate email
  if (!hireemailValue.trim()) {
    sethireEmailError("Email is required");
} else if (!/^[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*@[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*(\.[a-z]{2,3})+$/.test(hireemailValue)) {
    sethireEmailError("Invalid email address");
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
  

  const handleOrgChange = (e: any) => {
    const org = e.target.value // Trim any leading/trailing spaces
    setOrg(e.target.value);
    setOrgError("");
    if (!org) {
      setOrgError("Company name is required");
    } else if (org.length > 35) {
      setOrgError(`Organisation name must be less than 36 characters`);
    } 
};


const hirehandleMessageChange = (e: any) => {
  const hiremsg=e.target.value;
  sethireMsg(e.target.value);
  sethireMsgError("");
 if (hiremsg.length > 1000) {
    sethireMsgError(`Message must be less than 1001 characters`);
  } 
  if (hiremsg.length <= 1000) {
    sethireMsgCount((1000-(hiremsg.length)).toString())
   }
};

  const handleMessageChange = (e: any) => {
    const msg=e.target.value;
    setMsg(e.target.value);
    setMsgError("");
   if (msg.length > 1000) {
      setMsgError(`Message must be less than 1001 characters`);
    }
     
   if (msg.length <= 1000) {
    setMsgCount((1000-(msg.length)).toString())
   }
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
      .catch((error) => {});
  }, []);
  const [toggleState, setToggleState] = useState(1);
  const [openc1, setOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [hireselectedFileName, sethireSelectedFileName] = useState<
    string | null
  >(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
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
    }
  };
  const handlehireClearFile = () => {
    sethireSelectedFileName(null);
    // Optionally, you can reset the file input value to allow selecting the same file again
    const fileInput = document.getElementById(
      "hire_attachment"
    ) as HTMLInputElement;
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
        className="w-full h-fit bg-cover bg-center flex md:flex-row flex-col-reverse  contact-container font-montserrat"
      >
        <div className="flex flex-col flex-1 w-full bg-haiti xl:p-10 ">
          <div className="flex flex-col w-fit xl:mx-auto lg:ml-auto xl:pr-0 lg:pr-16 md:pr-10 md:ml-auto md:mx-0 sm:mx-16 mx-10">
            <h1 className="lg:py-4 py-2">
              <span className="flex text-white xl:text-5xl text-3xl font-medium">
                Contact
              </span>
            </h1>
            <img
              className="flex aspect-square xl:h-[35rem] lg:h-[22rem] md:h-[19rem] justify-self-center mx-auto object-cover"
              src={toggleState === 1 ? contactImage : hireImage}
              alt="contactUs"
            />
          </div>
          <div className="mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 xl:max-w-xl lg:max-w-sm ml-auto w-fit lg:gap-4 gap-3 lg:p-4 p-3">
              <p className="text-HeaderGray w-full lg:text-2xl text-xl text-center font-semibold font-montserrat sm:col-span-2">
                Connect with us
              </p>
              <img src={line} className="w-full sm:col-span-2"></img>
              <div className="col-span-1 text-white items-left w-fit md:mx-0 mx-4">
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src="../assets/enquire.svg"
                    alt="enquire"
                  />
                  <span className="text-[0.7em]">Enquires</span>
                </div>
                <a className="text-[0.8em]" href="mailto:sales@ivoyant.com">
                  sales@ivoyant.com
                </a>
              </div>
              <div className="col-span-1 text-white items-left md:mx-0 mx-4">
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src="../assets/phone-outlined.svg"
                    alt="phone"
                  />
                  <span className="text-[0.7em]">Phone</span>
                </div>
                <a className="text-[0.8em]" href="tel:+91 987654121">
                  +91 987654121
                </a>
              </div>
              <div className="col-span-1 text-white items-left md:mx-0 mx-4">
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src="../assets/info.svg"
                    alt="info"
                  />
                  <span className="text-[0.7em]">Information</span>
                </div>
                <a className="text-[0.8em]" href="mailto:info@ivoyant.com">
                  info@ivoyant.com
                </a>
              </div>
              <div className="col-span-1 text-white items-left md:mx-0 mx-4">
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src="../assets/skype-outlined.svg"
                    alt="skype"
                  />
                  <span className="text-[0.7em]">Connect with us</span>
                </div>
                <a
                  className="text-[0.8em]"
                  href="mailto:ivoyantsales@outlook.com"
                >
                  ivoyantsales@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-white xl:p-10 md:p-0 p-4">
          <div className="flex flex-row xl:gap-x-10 md:gap-x-4 gap-x-3">
            <div>
              <span
                className={toggleState === 1 ? "tab" : "tab text-gray-600"}
                onClick={() => toggleTab(1)}
              >
                Let's Talk
              </span>
            </div>
            <div>
              <span
                className={toggleState === 2 ? "tab" : "tab text-gray-500"}
                onClick={() => toggleTab(2)}
              >
                Work Enquiry
              </span>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "glider xl:ml-[15rem] lg:ml-[11rem] md:ml-[11.5rem] ml-[5.5rem]"
                : "glider md:ml-5"
            }
          ></div>
          <Form
            onSubmit={(event) => handleSubmit(event, "contact")}
            method="post"
            encType="multipart/form-data"
            className={
              toggleState === 1
                ? "flex flex-col xl:gap-10 md:gap-8 gap-4 active-content xl:p-8 md:px-4 py-2"
                : "hidden"
            }
            autoComplete="off"
          >
            <div className="grid grid-cols-2 xl:gap-10 md:gap-6 gap-4">
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name*"
                  required
                  value={personname}
                  onChange={handleNameChange}
                  className="text-box  w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer   outline-none cursor-pointer"
                ></input>
                  {nameerror &&(
          <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{nameerror}</span>
          )}
              </div>
            

              
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="text-box  w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer  outline-none cursor-pointer"
                ></input>
                  {emailerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{emailerror}</span>
          )}
              </div>
              <div className="relative items-stretch  text-box  self-stretch flex xl:gap-2.5 gap-1  xl:h-10 h-8 xl:pr-4 pr-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                <div className="  items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                  <div className=" items-stretch flex  gap-1 ">
                    <ReactFlagsSelect
                      selected={selectedCode}
                      onSelect={(code) => setCountryCodeSelected(code)}
                      searchable
                      searchPlaceholder="Search countries"
                    />
                    <input
                      type="text"
                      placeholder=""
                      value={selectedCode}
                      required
                      className="hidden"
                      name="country_code"
                    />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  style={{borderBottom: '0rem'}}
                  className="outline-none text-box  border-b-[0px]  cursor-pointer overflow-hidden"
                  name="phonenumber"
                />
                  {phoneerror &&(
          <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{phoneerror}</span>
          )}
              </div>
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <input
                  type="text"
                  id="organization"
                  name="organisation"
                  value={org}
                  onChange={handleOrgChange}
                  placeholder="Organisation"
                  className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box  outline-none cursor-pointer"
                ></input>
                  {orgerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{orgerror}</span>
          )}
              </div>
              <div className="w-full relative grid col-span-2">
                <label className="py-2 text-xs text-gray-400">
                  Your Message
                </label>
                <textarea
                  minLength={3}
                  maxLength={250}
                  id="message"
                  name="message"
                  cols={30}
                  rows={5}
                  value={msg}
                  onChange={handleMessageChange}
                
                  className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer"
                ></textarea>
                {msgerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{msgerror}</span>
          )}
          {msgcount &&(
            <span className="mb-[-1rem] absolute text-gray-500 text-[0.6rem] error-msg bottom-0 right-2">{msgcount}/1000</span>
            )}
              </div>
            </div>
            <Space
              direction="horizontal"
              className="grid-cols-1 flex justify-between"
            >
              <div className="flex">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setOpen(!openc1);
                  }}
                >
                  <CalendarOutlined className="bg-[#D9C9FB] rounded-full w-7 h-7 p-2 text-black" />
                </span>
                <DatePicker
                inputReadOnly
                  size="middle"
                  placement="topRight"
                  format="YYYY-MM-DD  HH:mm"
                  className="text-xs"
                  disabledDate={disabledDate}
                  disabledTime={(current) => disabledDateTime(current)}
                  placeholder="Schedule a Meet"
                  showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                  suffixIcon={null}
                  open={openc1}
                  onOk={() => setOpen(false)}
                  onChange={onChange}
                />
                <input
                  type="text"
                  placeholder=""
                  value={selectedDate}
                  className="hidden"
                  name="date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col text-sm relative">
                  <label
                    htmlFor="attachment"
                    className="font-montserrat whitespace-nowrap"
                    style={{ cursor: "pointer" }}
                  >
                    <FileAddOutlined className="bg-[#D9C9FB] rounded-full p-2 text-[#] mr-2" />
                    Attach File
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
                  <div className="absolute text-xs text-gray-700 flex items-center max-w-[5rem] translate-y-8">
                    <span
                      title={`${selectedFileName}`}
                      className="text-ellipsis whitespace-nowrap max-w-[4rem] overflow-hidden"
                    >{`${selectedFileName}`}
                    </span>
                    <button
                      title={`Remove ${selectedFileName}`}
                      onClick={handleClearFile}
                      className="ml-2"
                    >
                      <DeleteOutlined className="text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            </Space>
            <button
              type="submit"
              name="_action"
              value="contact"
              className="hue-btn-primary btn capitalize md:w-fit text-HeaderGray font-normal mt-7"
              disabled={btnLoading ||  personname==='' || email==='' || phoneNumber==='' || !!phoneerror || !!emailerror || !!nameerror || !!orgerror || !!msgerror}
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
                ? "flex flex-col lg:gap-10 gap-6 active-content xl:p-8  sm:p-4 py-2"
                : "hidden"
            }
            autoComplete="off"
          >
            <div className="grid grid-cols-2 xl:gap-10 gap-6">
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={hirepersonname}
                  onChange={hirehandleNameChange}
                  placeholder="Full Name*"
                  required
                  className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
                {hirenameerror &&(
          <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{hirenameerror}</span>
          )}
              </div>
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={hireemail}
                  onChange={hirehandleEmailChange}
                  placeholder="Email*"
                  required
                  className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                ></input>
                 {hireemailerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{hireemailerror}</span>
          )}
              </div>
              <div className="items-stretch  border-b-[1px] border-form-gray self-stretch flex xl:gap-2.5 gap-1  xl:h-10 h-8 xl:pr-4 pr-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                  <div className="items-stretch flex  gap-1 ">
                    <ReactFlagsSelect
                      selected={selectedCode}
                      onSelect={(code) => setCountryCodeSelected(code)}
                      searchable
                      searchPlaceholder="Search countries"
                    />{" "}
                    <input
                      type="text"
                      placeholder=""
                      value={selectedCode}
                      required
                      className="hidden"
                      name="country_code"
                    />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={hirephoneNumber}
                  onChange={hirehandlePhoneNumberChange}
                  required
                  className="outline-none  cursor-pointer overflow-hidden"
                  name="phone_number"
                />
                  {hirephoneerror &&(
          <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{hirephoneerror}</span>
          )}
              </div>
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <select
                  id="username"
                  defaultValue=""
                 
                  name="area_of_expertise"
                  className="w-full xl:h-10 h-8 text-xs xl:text-sm peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                >
                  <option value="" style={{ color: '#fff' }} disabled hidden >
                    Area of Expertise
                  </option>
                  <option style={{ paddingTop: '20px' }}>Front End coding</option>
                  <option style={{ paddingTop: '20px' }}>Devops </option>
                </select>

              </div>
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <select
                  id="username"
                  name="hiring_duration"
                  defaultValue=""
                  className="w-full xl:h-10 h-8 xl:text-sm text-xs peer border-b-[1px] border-form-gray outline-none cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Hiring Duration
                  </option>
                  <option>10</option>
                  <option>8</option>
                </select>
              </div>
              <div className="w-full relative group sm:col-span-1 col-span-2">
                <select
                  id="username"
                  name="choose_skill_set"
                  defaultValue=""
                  className="w-full xl:h-10 h-8  xl:text-sm text-xs peer border-b-[1px] border-form-gray outline-none cursor-pointer capitalize"
                >
                  <option value="" disabled hidden>
                    Choose skillset
                  </option>
                  <option>python</option>
                  <option>java</option>
                </select>
              </div>
              <div className="w-full relative grid col-span-2">
                <label className="py-2 text-xs text-gray-400">
                  Your Message
                </label>
                <textarea
                  minLength={3}
                  maxLength={250}
                  id="message"
                  name="message_hire"
                  cols={30}
                  rows={5}
                  value={hiremsg}
                  onChange={hirehandleMessageChange}
                  className="p-4 text-sm peer border-[1px] border-black outline-none cursor-pointer"
                ></textarea>
                {hiremsgerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{hiremsgerror}</span>
          )}
           {hiremsgcount &&(
            <span className="mb-[-1rem] absolute text-gray-500 text-[0.6rem] error-msg bottom-0 right-2">{hiremsgcount}/1000</span>
            )}
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
                  <CalendarOutlined className="bg-[#D9C9FB] rounded-full p-2 w-7 h-7 text-black" />
                </span>
                <DatePicker
                inputReadOnly
                  size="middle"
                  placement="topRight"
                  format="YYYY-MM-DD  HH:mm"
                  className="text-xs"
                  disabledDate={disabledDate}
                  disabledTime={(current) => disabledDateTime(current)}
                  placeholder="Schedule a Meet"
                  showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                  suffixIcon={null}
                  open={openc1}
                  onOk={() => setOpen(false)}
                  onChange={onChange}
                />
                <input
                  type="text"
                  placeholder=""
                  value={selectedDate}
                  className="hidden"
                  name="date_hire"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="flex flex-col xl:text-sm text-xs">
                  <label
                    htmlFor="hire_attachment"
                    className="font-montserrat whitespace-nowrap"
                    style={{ cursor: "pointer" }}
                  >
                    <FileAddOutlined className="bg-[#D9C9FB] rounded-full p-2 text-black mr-2" />
                    Attach File
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
                  <div className="absolute text-xs text-gray-700 flex items-center max-w-[5rem] translate-y-8">
                    <span
                      title={`${hireselectedFileName}`}
                      className="text-ellipsis whitespace-nowrap  overflow-hidden"
                    >{`${hireselectedFileName}`}</span>
                    <button
                      title={`Remove ${hireselectedFileName}`}
                      onClick={handlehireClearFile}
                      className="ml-2"
                    >
                      <DeleteOutlined className="text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            </Space>
            <button
              type="submit"
              name="_action"
              value="hireus"
              className="hue-btn-primary btn capitalize md:w-fit text-HeaderGray font-normal mt-7"
              disabled={btnLoading ||  hirepersonname==='' || hireemail==='' || hirephoneNumber==='' || !!hirephoneerror || !!hireemailerror || !!hirenameerror || !!hiremsgerror}
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
