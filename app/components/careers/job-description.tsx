import { useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

const JobDescription = () => {
    const [open, setOpen] = useState(false);
const { Option } = Select;
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="items-start flex flex-col mt-10 p-20">
          <div className="text-black text-4xl font-semibold self-stretch w-full max-md:max-w-full">
            Java Microservices Developer
          </div>
          <div className="text-black text-3xl font-semibold self-stretch w-full mt-6 max-md:max-w-full">
            Bengaluru
          </div>
          <div className="text-black text-xl font-medium self-stretch w-full mt-6 max-md:max-w-full">
            11-22-2022
          </div>
          <div className="text-black text-base font-medium self-stretch w-full mt-6 max-md:max-w-full">
            JO-2201-16004
          </div>
          <div className="text-black text-base leading-6 self-stretch w-full mt-6 max-md:max-w-full">
            ivoyant is an emerging digital platform engineering and development
            services company headquartered in Atlanta. At ivoyant, we are <br />
            helping our customers solve complex challenges, support their growth &
            transformation agenda, leveraging technology to make a difference.
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-6 self-start max-md:max-w-full">
            Responsibilities:
          </div>
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>Design, develop, test, deploy, maintain and improve software.</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Manage individual project priorities, deadlines and deliverables.
              </li>
            </ul>
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start max-md:max-w-full">
            Qualifications
          </div>
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>3+ years of practical experience in software development.</li>
            </ul>
          </div>
          <div className="text-black text-base mt-2.5 max-md:max-w-full">
            <ul>
              <li>
                BS or Masters degree in Computer Science, similar technical field of
                study or equivalent practical experience.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Software development experience in Java programming language
                (Java8+)
              </li>
            </ul>
          </div>
          <div className="text-black text-base mt-2.5 max-md:max-w-full">
            <ul>
              <li>
                Experience developing REST Microservices with Spring Boot and
                related technologies.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Working proficiency and communication skills in verbal and written
                English.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Working knowledge of Kafka, RabbitMQ, Cassandra, MongoDB preferred.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Experience in API Design, Database design and
                troubleshooting/debugging
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Must have hands-on and should be able to debug Code and provide{" "}
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>Experience with Devops, CI/CD a plus.</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>Experience with Kubernetes, Docker a plus</li>
            </ul>
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start">
            Perks & Benifits
          </div>
          <div className="text-black text-base whitespace-nowrap mt-5 self-start">
            <ul>
              <li>Competitive Salary</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Room for growth</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Flexible schedule</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>2 weeks PTO and general holidays</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Health, Dental, Vision, Life Insurance</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>401k</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Bonus Programs</li>
            </ul>
          </div>
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
        <div className="items-start bg-white flex flex-col px-8 py-6 max-md:px-5">
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
      <div className="text-black text-center text-lg font-semibold self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
        Personal Information
      </div>
      <div className="text-neutral-800 text-center text-xs self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
        Full name
      </div>
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="text-neutral-800 text-center text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
        Email
      </div>
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="text-neutral-800 text-center text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
        Phone number
      </div>
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="self-stretch bg-zinc-300 flex shrink-0 h-px flex-col mt-9 max-md:max-w-full" />
      <div className="justify-between items-center self-stretch flex w-full gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
        <div className="text-black text-lg font-semibold grow whitespace-nowrap my-auto">
          Education
        </div>
        <div className="items-stretch border border-[color:var(--gray-gray-10,#000)] self-stretch flex justify-between gap-2 pl-2.5 pr-5 py-1.5 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d89b8fff0a6d0d7fe5de20139f217f37ec8bccf476c1f3d6f4d9e33c35e12b61?"
            className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-sm font-semibold grow whitespace-nowrap self-start">
            Add
          </div>
        </div>
      </div>
      <div className="text-neutral-800 text-center text-xs self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
        Institution
      </div>
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="text-neutral-800 text-center text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
        Degree
      </div>
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="items-stretch self-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-center text-xs whitespace-nowrap">
            From
          </div>
          <div className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/730340517358333d70b3948cef575b94b81985ae098352755793f476790e1732?"
              className="aspect-square object-contain object-center w-5 overflow-hidden max-w-full"
            />
          </div>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-neutral-800 text-center text-xs whitespace-nowrap">
            To
          </div>
          <div className="border-[color:var(--gray-gray-7,#8C8C8C)] flex flex-col justify-center mt-1 pr-16 py-1.5 border-[0.5px] border-solid items-start max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6183a87b8e53685d03b299693c0ff59c1871344b386e28bb604aa2aac6d58a5?"
              className="aspect-square object-contain object-center w-5 overflow-hidden max-w-full"
            />
          </div>
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
      <div className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[163px] flex-col mt-8 border-[0.5px] border-solid max-md:max-w-full" />
      <div className="text-blue-50 text-xl font-medium tracking-wide capitalize whitespace-nowrap justify-center items-stretch mt-6 px-11 py-5 self-end max-md:px-5">
        Submit
      </div>
    </div>
      </Drawer>








        </div>
      );  
};
export default JobDescription;