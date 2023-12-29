import { useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Input, Row, Select, Space } from 'antd';
import { useLoaderData, useLocation, useParams } from "@remix-run/react";
import { loader } from "~/root";
import { Form, Link, useRouteLoaderData } from "@remix-run/react";
import { errorMessage, success } from "~/utils/notifications";
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  try {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append('action', 'Internship');
    formData.forEach((value, key) => {
      console.warn(`${key}: ${value}`);
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
const JobDescription = () => {
  const loaderData = useLoaderData() as any;

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
    const [open, setOpen] = useState(false);
const { Option } = Select;
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
 
    return (
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
          loading="lazy"
          srcSet="..."
          className="aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
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
      name="name"
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
      {/* Date fields can be added here if needed */}
      <div className="items-stretch flex grow basis-[0%] flex-col">
        <div className="text-neutral-800 text-xs whitespace-nowrap">
          From
        </div>
        <input
          type="date"
          className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
        />
      </div>
      <div className="items-stretch flex grow basis-[0%] flex-col">
        <div className="text-neutral-800 text-xs whitespace-nowrap">
          To
        </div>
        <input
          type="date"
          className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5"
        />
      </div>

   
    </div>
    <div className="items-center flex gap-3 mt-5 self-start">
      <div className="flex w-3 shrink-0 h-3 flex-col my-auto border-[0.5px] border-solid border-zinc-300" />
      <div className="text-neutral-800 text-center text-xs self-stretch grow whitespace-nowrap">
        I Currently Attend
      </div>
    </div>
    <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
      Resume
    </div>
    <div className="text-black text-sm border-[color:var(--gray-gray-7,#8C8C8C)] bg-violet-700 bg-opacity-0 self-stretch items-center mt-8 pt-6 pb-1 px-16 border-[0.5px] border-dashed max-md:max-w-full max-md:px-5">
      <span className="font-semibold">Upload resume</span>
      <span className=""> or just drop it here</span>
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
      );  
};
export default JobDescription;