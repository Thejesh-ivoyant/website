import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import JobDescription from "../job-description";
const JobCards = () => {
  const loaderData = useLoaderData() as any;

  const SECTION12_API_URL = `${strapiUrl}/api/section12s?populate=%2A`
 

  const [faqList, setFaqList] = useState<{ [key: string]: string } | undefined>();
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  const [faqAddState, setFaqAddState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch(SECTION12_API_URL)
      .then((response) => response.json())
      .then((section12_data) => {
        const { FaqList } = section12_data.data[0].attributes;
        setFaqList(FaqList);
        console.warn("faq list is ",loaderData.JobDesc[1].Title)

      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const GetJobDescription=(index:string)=>{
  console.warn("index is ",index)
  }
  const handleFaqClick = (faq: string) => {
    setFaqAddState((prevState) => ({
      ...prevState,
      [faq]: !prevState[faq],
    }));
    setSelectedFaq(selectedFaq === faq ? null : faq);
  };

  return (
    <div className="technology-section py-16">



      <section className="heading gradient-bottom">
        <h2>{loaderData.s3_title}</h2>
      </section>

      <div className="items-stretch flex justify-between gap-5 max-md:flex-wrap max-md:justify-center">
      <div className="items-stretch flex grow basis-[0%] flex-col px-5">
        <div className="text-indigo-950 text-sm capitalize whitespace-nowrap">
          Filter By:
        </div>
        <input className="flex w-full flex-col justify-center items-stretch mt-3.5 pl-2.5 pr-7 py-2.5 rounded-sm border-[0.5px] border-solid border-indigo-950 max-md:pr-5" />
      </div>
      <div className="flex items-center justify-between gap-5 mt-7 pl-2.5 pr-5 py-2.5 rounded-sm border-[0.5px] border-solid border-indigo-950 self-end max-md:pr-5">
        <option className="text-indigo-950 text-sm capitalize grow whitespace-nowrap my-auto">
          All Locations
          <select>
            BANGALORRE
          </select>
        </option>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a5f692b70847249b98b81aedffe4ab14a102823ce4fe79a064ae7a04425aac1?apiKey=9e16588387084fb2a9a51a1b99489136&"
          className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
      <div className="flex grow basis-[0%] flex-col justify-center items-stretch mt-7 py-1.5 rounded-sm border-[0.5px] border-solid border-indigo-950 self-end">
        <div className="items-stretch flex justify-between gap-2 px-5 py-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bbc1d7bb2a2b3ac5861b4c4ca7b4a9638fa8a76522cc5e929d51ef2add28240?apiKey=9e16588387084fb2a9a51a1b99489136&"
            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-indigo-950 text-sm capitalize grow whitespace-nowrap self-start">
            Search
          </div>
        </div>
      </div>
    </div>


      <section className="px-4 py-8 ">
        <div className="flex flex-col space-y-4 py-4 relative">
                  <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="icons" />
         
              {loaderData.JobDesc.map((jobs:any) => (
              <div className="flex flex-col px-28 relative ">
                <div className="faq-card  flex flex-col " onClick={() => GetJobDescription(jobs.job_id)}> 
                  <div className="flex flex-row w-full">
                    <div className="flex w-1/2">
                      <div
                        className="item"
                        style={{ fontSize: "1.4rem", cursor: "pointer" }}
                      >
                        {jobs.Title}
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-end" onClick={() => handleFaqClick(faq)}>
                      <div className="ellipse-container">

                        <img
                          src="../assets/Ellipse.svg"
                          alt="Ellipse"
                          className="ellipse-image"
                        />

                          <img
                            src="../assets/redirect.svg"
                            alt="Minus"
                            className="minus-image"
                          />


                      </div>
                    </div>
                  </div>
              
                 
                </div>
              </div>
               ))}
            
        </div>
      </section>
    </div>
  );
};

export default JobCards;
