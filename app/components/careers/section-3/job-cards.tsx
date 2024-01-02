import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";
import JobDescription from "../job-description";
import { redirect } from "@remix-run/node";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getJDBasedonLimit } from "~/graphql/queries";
const JobCards = () => {
  const loaderData = useLoaderData() as any;
  const [JobDesc, setJobDescData] = useState(loaderData.JobDesc || []);
  const [limit, setLimit] = useState(0); // Initial limit

  const fetchMoreData = async () => {
    const updatedQuery = getJDBasedonLimit(limit + 3);
    const newJobDescData = await fetchGraphQL(updatedQuery);

    // Map and update the state with the new data
    setJobDescData(() => [
      ...newJobDescData.data?.career?.data?.attributes?.job_descriptions?.data?.map(
        (item: any) => ({
          id: item.id, // Add this line to capture the job ID
          job_id: item.attributes.job_id,
          Title: item.attributes.Title,
          location: item.attributes.location,
          role: item.attributes.Role,
          MinExperience:item.attributes.MinExperience,
          MaxExperience:item.attributes.MaxExperience,
          DepartmentName: item.attributes.department.data.attributes.DepartmentName,
  
        })
      )
    ]);

    // Increment the limit for the next fetch
    setLimit(limit + 3);
  };


  return (
    <div className="technology-section py-16">
      <section className="heading gradient-bottom">
        <h2>{loaderData.s3_title}</h2>
      </section>

      <div className="px-10 flex justify-between gap-3 max-md:flex-wrap max-md:justify-center">
        <div className="items-stretch flex grow basis-[0%] flex-col px-5">
          <div className="text-indigo-950 text-sm capitalize whitespace-nowrap">
            Filter By:
          </div>
          <input className="flex w-full flex-col justify-center items-stretch mt-3.5 pl-2.5 pr-7 py-2.5 rounded-sm border-[0.5px] border-solid border-indigo-950 max-md:pr-5" />
        </div>
        <div className="flex items-center justify-between gap-5 mt-7 pl-2.5 pr-5 py-2.5 rounded-sm border-[0.5px] border-solid border-indigo-950 self-end max-md:pr-5">
          <option className="text-indigo-950 text-sm capitalize grow whitespace-nowrap my-auto">
            All Locations
            <select>BANGALORRE</select>
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
          <img
            src="../assets/Ornament.png"
            className="absolute top-4 left-4"
            alt="icons"
          />

          {JobDesc.map((jobs: any) => (
            <div className="flex flex-col px-28 relative ">

              <Link to={`/job-description/${jobs.id}`} key={jobs.id}>
      <div className="justify-between w-full bg-white p-[24px] items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full justify-start">
          <div className="text-slate-950 text-xl font-medium max-md:max-w-full">
          {jobs.Title} 
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-4 self-start max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0fa60c633333391413dc49d4cbbecc1b715e364633fc9ed765efd57d14797ba?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                {jobs.location}
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42b017cf12fcc2856cf0c4d41f6f8a613c2e68434873f108fdf8732dc2c3d2f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
               {jobs.DepartmentName}
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e66b251440c5db437608ec74109248d634bcc16bc7755ab311a072948321c8f?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                {jobs.MinExperience}-{jobs.MaxExperience} Yrs
              </div>
            </div>
          </div>
        </div>
        <div className="items-center self-center flex aspect-square flex-col justify-center my-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/187c2b18-0e40-489f-893e-597c71799169?apiKey=9e16588387084fb2a9a51a1b99489136&"
            className="aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
          />
     
      </div>
    </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
    <button className="button-test font-montserrat font-thin"> <span className="font-thin">Show More</span></button>
      </div>
      </section>
    </div>
  );
};

export default JobCards;
