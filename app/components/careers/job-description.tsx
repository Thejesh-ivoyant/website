import { useCallback, useState } from "react";
import { Button, DatePicker, Drawer, Select, Space } from 'antd';
import { useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { errorMessage, success } from "~/utils/notifications";
import { useDropzone } from 'react-dropzone';
import { FileAddOutlined, DeleteOutlined } from '@ant-design/icons';
import React from "react";
import dayjs from "dayjs";
const JobDescription = () => {
  const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<any | null>(null);
  const [fromDate, setFromDate] = useState()
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    debugger 
    setToDate(dateString);
  };
  const fromDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    debugger 
    setFromDate(dateString);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      debugger
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append('action', 'Internship');
        // Remove existing 'todate' entry if it exists
    // Check if the checkbox is checked and update the "To" date in the form data
    if (isCurrentlyAttend) {
      formData.delete('todate');
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      formData.append('todate', formattedDate);
      formData.append('fromDate', fromDate as string); // Assuming 'todate' is the field name for the "To" date
    }
      if (selectedFile) {
        formData.append('hire_attachment', selectedFile);
      }
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/b3a88f65-2b4f-4515-b186-2191b2c01494', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
      success("Thank you for showing interest in us!",2);
      } else {
        errorMessage("Error occured, please retry",3);        
      }
    } catch (error) {
      errorMessage("Error occured, please retry",3);
    }
  };
  const onDrop = useCallback((acceptedFiles:any) => {
    // Handle the dropped files
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
  setSelectedFile(file);
      setSelectedFileName(file.name);
      // Perform actions with the selected file
    }
  }, []);
  const handleClearFile = () => {
    // Clear the selected file and hide the file information
    setSelectedFileName(null);
  };
  const [toDate, setToDate] = useState<string>('');
  const [isCurrentlyAttend, setIsCurrentlyAttend] = useState(false);
  // const handleCheckboxChange = () => {
  //   setIsCurrentlyAttend((prev) => !prev); // Toggle the checkbox state
  //   if (!isCurrentlyAttend) {
  //     // If checkbox is checked, set "To" date to today's date
  //     const today = new Date();
  //     const formattedDate = today.toISOString().split('T')[0];
  //     setToDate(formattedDate);
  //   } else {
  //     // If checkbox is unchecked, clear the "To" date
  //     setToDate('');
  //   }
  // };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCurrentlyAttend(event.target.checked);
    setToDate(event.target.checked ? new Date().toISOString().slice(0, 10) : toDate );
  };
  const loaderData = useLoaderData() as any;
    const [open, setOpen] = useState(false);
const { Option } = Select;
    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
    return (
      <>
        <div className=" main-jd-content items-start flex flex-col mt-10 p-20">
          <div className="text-black text-4xl font-semibold self-stretch w-full max-md:max-w-full">
  {loaderData.title}
          </div>
          <div className="text-black text-3xl font-semibold self-stretch w-full mt-6 max-md:max-w-full">
   {loaderData.location}
          </div>
          <div className="text-black text-xl font-medium self-stretch w-full mt-6 max-md:max-w-full">
{loaderData.date}
          </div>
          <div className="text-black text-base font-medium self-stretch w-full mt-6 max-md:max-w-full">
 {loaderData.job_id}
          </div>
          <div className="text-black text-base leading-6 self-stretch w-full mt-6 max-md:max-w-full">
      {loaderData.summary}
          </div>
          <div className="text-black text-lg font-semibold  mt-6 self-start max-md:max-w-full">
     {loaderData.s1_title}
          </div>
          {loaderData.s1_points.map((item: any) => (
          <div className="text-black text-base mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}
          <div className="text-black text-lg font-semibold  mt-5 self-start max-md:max-w-full">
     {loaderData.s2_title}
          </div>
          {loaderData.s2_points.map((item: any) => (
          <div className="text-black text-base  mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}
          <div className="text-black text-lg font-semibold mt-5 self-start">
     {loaderData.s3_title}
          </div>
          {loaderData.s3_points.map((item: any) => (
          <div className="text-black text-base mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}
          <button className="hue-btn-primary btn mt-16" onClick={showDrawer}>
            Apply Now
          </button>
 <Drawer
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
 <Form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
  <div className="items-start bg-white flex flex-col py-8 px-2">
    <div className="justify-between self-stretch flex gap-5 items-start max-md:max-w-full max-md:flex-wrap">
      <div className="text-black text-3xl font-semibold grow ">
        Internship Application Form
      </div>
      <div className="items-center self-stretch flex aspect-square flex-col justify-center">
        <img
alt="close"
          srcSet="../../assets/closebtn.png"
          onClick={onClose}
          className="pointer aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
        />
      </div>
    </div>
    <div className="text-black text-lg font-semibold self-stretch  mt-11 max-md:max-w-full max-md:mt-10">
      Personal Information
    </div>
    <div className="text-neutral-800 text-xs self-stretch  mt-8 max-md:max-w-full">
      Name
    </div>
    <input
      type="text"
      name="firstname"
      required
      className="intern-input"
    />
    <div className="text-neutral-800 text-xs self-stretch  mt-4 max-md:max-w-full">
      Email
    </div>
    <input
      type="email"
      name="email"
      required
      className="intern-input"
    />
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
      Phone number
    </div>
    <input
      type="tel"
      name="phone number"
      className="intern-input"
    />
    <div className="self-stretch bg-zinc-300 flex shrink-0 h-px flex-col mt-9 max-md:max-w-full" />
    <div className="justify-between items-center self-stretch flex w-full gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
      <div className="text-black text-lg font-semibold grow whitespace-nowrap my-auto">
        Education
      </div>
    </div>
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
      Institution
    </div>
    <input
      type="text"
      name="institution"
      className="intern-input"    
    />
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
      Degree
    </div>
    <input
      type="text"
      name="degree"
      className="intern-input"
    />
  <div className="items-stretch self-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-xs whitespace-nowrap">
            From
          </div>
          {/* <input
          name="FromDate"
            type="date"
            id="fromdate"
            className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
          /> */}
          <DatePicker onChange={fromDateChange}/>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-xs whitespace-nowrap">
            To
          </div>
          <DatePicker value={toDate ? dayjs(toDate, 'YYYY-MM-DD') : null} disabled={isCurrentlyAttend}  onChange = {onChange}/>
          {/* <input
            type="date"
            name="todate"
            id="toDate"
            value={toDate}
            className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
            disabled={isCurrentlyAttend}
          /> */}
        </div>
      </div>
<div className="items-center flex gap-3 mt-5 self-start">
  <input
    type="checkbox"
    id="currentlyAttendCheckbox"
    onChange={handleCheckboxChange}
  />
  <div className="text-neutral-800 text-center text-xs self-stretch grow capitalize font-montserrat">
    I Currently Attend
  </div>
</div>
    <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
      Resume
    </div>
    <div
      {...getRootProps()}
      className={`flex flex-col gap-1 text-black text-sm text-centery-gray-7 drop-zone self-stretch items-center mt-8 py-16 border-[0.5px] border-dashed max-md:max-w-full max-md:px-5`}
    >
      <label htmlFor="hire_attachment" style={{ cursor: "pointer" }}>
        <span className="font-semibold">Upload Resume</span> or just drop it here
      </label>
      <input {...getInputProps()} type="file" name="hire_attachment" style={{ display: "none" }} />
      {selectedFileName && (
        <div className="file-info">
          <span>{`${selectedFileName}`}</span>
          <button onClick={handleClearFile}>
            <DeleteOutlined className="text-red-500 ml-2" />
          </button>
        </div>
      )}
    </div>
    <div className="text-black text-lg font-semibold mt-8 self-start">
      Message to Hiring Manager
    </div>
    <div className="text-zinc-600 text-sm mt-2 self-start">
      Let the Company know your interest working there
    </div>
    <textarea
    name="message"
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[163px] flex-col mt-8 border-[0.5px] border-solid px-4 py-2"
    ></textarea>
    <button
      type="submit"
      className="hue-btn-primary btn mt-16"
    >
      Submit
    </button>
  </div>
</Form>
      </Drawer>
        </div>
        </>
      );  
};
export default JobDescription;