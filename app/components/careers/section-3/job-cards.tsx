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

  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [limit, setLimit] = useState(5); // Initial limit
  const categories = ["Category1", "Category2", "Category3"];
  const tags = ["Tag1", "Tag2", "Tag3"];
  const handleInputChange = (value: any) => {
    setSearchValue(value);
    console.warn("search is", searchValue)
    const filteredJobs = loaderData.JobDesc.filter((job: any) =>
    job.Title.toLowerCase().includes(value.toLowerCase())
  );
  setJobDescData(filteredJobs);

  };

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
      <div className="flex w-full font-montserrat justify-center gap-2 h-12 ">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <label className="text-haiti font-normal">Filter by:</label>
          </div>
          {/* Category select */}
          <div className="flex flex-row gap-4">
            <select
           style={{ width: "190px", borderRadius: "2px", border: "0.5px solid #1B0740" }}

              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected>
                All Categories
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
       style={{ width: "190px", borderRadius: "2px", border: "0.5px solid #1B0740" }}

          onChange={(e) => setTag(e.target.value)}
        >
          <option value="" selected>
            All Tags
          </option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {/* Search input */}
        <div className="relative flex items-center">
          <svg
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 10.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm5.25.5-1-1"
              stroke="#1B0740"
              strokeWidth=".75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Search input */}
          <input
            value={searchValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Search"
            className="h-34 border-haiti w-96 border-[1px] border-solid rounded-sm pl-10 py-2 focus:outline-none text-xs"
          />
        </div>
          </div>
        </div>

        {/* Tag select */}
      
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
          <div className="items-stretch flex justify-between gap-10 mt-4 self-start max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src= '../assets/location.svg'                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                {jobs.location}
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src= '../assets/department.svg'                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
               {jobs.DepartmentName}
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src= '../assets/experience.svg'                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
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
            src= '../assets/Arrow.png'            className="aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
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
