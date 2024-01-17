import { useCallback, useState } from "react";
import { Button, Drawer, Select, Space } from 'antd';
import { useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { errorMessage, success } from "~/utils/notifications";
import { useDropzone } from 'react-dropzone';
import { FileAddOutlined, DeleteOutlined } from '@ant-design/icons';

import React from "react";

const JobDescription = () => {

  const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<any | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      formData.append('action', 'Internship');
      if (selectedFile) {
        formData.append('hire_attachment', selectedFile);
      }
      formData.forEach((value, key) => {
        console.warn(">>>>>>>>>>>>>>>>>>>>>>>");
        console.warn(`attribute is ${key}: ${value}`);
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/b3a88f65-2b4f-4515-b186-2191b2c01494', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
            
      success("Thank you for showing interest in us!",2);
        console.warn('Form submitted successfully');
        
      } else {
        errorMessage("Error occured, please retry",3);
        console.warn('Form submission failed');
        
      }
  
    } catch (error) {
      errorMessage("Error occured, please retry",3);
      console.error('An error occurred during form submission:', error);
    }
  };
  const onDrop = useCallback((acceptedFiles:any) => {
    // Handle the dropped files
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
  setSelectedFile(file);
      setSelectedFileName(file.name);
      // Perform actions with the selected file
      console.warn("Selected File:", file.size);
    }
  }, []);

  const handleClearFile = () => {
    // Clear the selected file and hide the file information
    setSelectedFileName(null);
  };


  const [toDate, setToDate] = useState('');
  const [isCurrentlyAttend, setIsCurrentlyAttend] = useState(false);

  const handleCheckboxChange = () => {
    setIsCurrentlyAttend((prev) => !prev); // Toggle the checkbox state

    if (!isCurrentlyAttend) {
      // If checkbox is checked, set "To" date to today's date
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setToDate(formattedDate);
    } else {
      // If checkbox is unchecked, clear the "To" date
      setToDate('');
    }
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
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-6 self-start max-md:max-w-full">
     {loaderData.s1_title}
          </div>
          {loaderData.s1_points.map((item: any) => (
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}
          
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start max-md:max-w-full">
     {loaderData.s2_title}
          </div>
         
          
          {loaderData.s2_points.map((item: any) => (
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}

          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start">
     {loaderData.s3_title}
          </div>
          {loaderData.s3_points.map((item: any) => (
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
          ))}
          <button className="btn hero-btn" onClick={showDrawer}>
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
      <div className="text-black text-3xl font-semibold grow whitespace-nowrap">
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
    <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
      Personal Information
    </div>
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
      Name
    </div>
    <input
      type="text"
      name="firstname"
      required
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
    />
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
      Email
    </div>
    <input
      type="email"
      name="email"
      required
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
    />
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
      Phone number
    </div>
    <input
      type="tel"
      name="phone number"
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
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
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
    />
    <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
      Degree
    </div>
    <input
      type="text"
      name="degree"
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
    />
  <div className="items-stretch self-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-xs whitespace-nowrap">
            From
          </div>
          <input
          name="FromDate"
            type="date"
            id="fromdate"
            className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
          />
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-xs whitespace-nowrap">
            To
          </div>
          <input
            type="date"
            name="todate"
            id="toDate"
            value={toDate}
            className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
            disabled={isCurrentlyAttend}
          />
        </div>
      </div>

     
    

<div className="items-center flex gap-3 mt-5 self-start">
  <input
    type="checkbox"
    id="currentlyAttendCheckbox"
    onChange={handleCheckboxChange}
  />
  <div className="text-neutral-800 text-center text-xs self-stretch grow whitespace-nowrap">
    I Currently Attend
  </div>
  
</div>

    <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
      Resume
    </div>
    <div
      {...getRootProps()}
      className={`flex flex-col gap-1 text-black text-sm text-center border-[color:var(--gray-gray-7,#8C8C8C)] bg-violet-700 bg-opacity-10 self-stretch items-center mt-8 pt-6 pb-1 px-16 border-[0.5px] border-dashed max-md:max-w-full max-md:px-5`}
    >
      <label htmlFor="hire_attachment" style={{ cursor: "pointer" }}>
        <FileAddOutlined className="bg-[#AF99DD] rounded-full p-2 text-black mr-2" />
        Upload resume
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
    <div className="text-black text-lg font-semibold whitespace-nowrap mt-8 self-start">
      Message to Hiring Manager
    </div>
    <div className="text-zinc-600 text-sm whitespace-nowrap mt-2 self-start">
      Let the Company know your interest working there
    </div>
    <textarea
    name="message"
      className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[163px] flex-col mt-8 border-[0.5px] border-solid max-md:max-w-full"
    ></textarea>
    <button
      type="submit"
      className="btn mt-4 justify-end right-0"
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