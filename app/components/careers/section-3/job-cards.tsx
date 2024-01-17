import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { SearchJobs } from "~/graphql/queries";
const JobCards = () => {
  const loaderData = useLoaderData() as any;
  const [JobDesc, setJobDescData] = useState(loaderData.JobDesc || []);
  const [FilteredJobDesc, setFilteredJobDescData] = useState([]);
  const [loc, setLoc] = useState("");
  const [exp, setExp] = useState("");
  const [dep, setDep] = useState("");
  const [role, setRole] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    // This effect will run whenever role, dep, loc, or exp changes
    handleFilterAndSearchDown();
  }, [role, dep, loc, exp, searchValue]);

 
const handleFilterAndSearchDown = async () =>{

  const updatedJobsQuery = SearchJobs(dep || "", exp || "", role || "", loc || "",searchValue || "", limit);
    const newJobsData = await fetchGraphQL(updatedJobsQuery);
    setJobDescData(() => [
      ...newJobsData.data?.career?.data?.attributes?.job_descriptions?.data?.map(
        (item: any) => ({
          id: item.id, // Add this line to capture the job ID
          job_id: item.attributes.job_id,
          Title: item.attributes.Title,
          location: item.attributes.location.data.attributes.location,
          Role: item.attributes.job_role.data.attributes.role,
          ExperienceRange: item.attributes.experience.data.attributes.experienceRange,
          DepartmentName: item.attributes.department.data.attributes.DepartmentName,
        })
      ),
    ]);
}
  const fetchMoreData = async () => {

    const updatedQuery = SearchJobs(dep || "", exp || "", role || "", loc || "",searchValue || "", limit+3);
    const newJobDescData = await fetchGraphQL(updatedQuery);
 
    setJobDescData(() => [
      ...newJobDescData.data?.career?.data?.attributes?.job_descriptions?.data?.map(
        (item: any) => ({
          id: item.id, // Add this line to capture the job ID
          job_id: item.attributes.job_id,
          Title: item.attributes.Title,
          location: item.attributes.location.data.attributes.location,
        Role: item.attributes.job_role.data.attributes.role,
        ExperienceRange: item.attributes.experience.data.attributes.experienceRange,
        DepartmentName: item.attributes.department.data.attributes.DepartmentName,

        })
      ),
    ]);
    setLimit(limit + 3); 
  
 
  };
 
  return (
    <div className="technology-section py-16">
      <section className="heading gradient-bottom">
        <h2>{loaderData.s3_title}</h2>
      </section>
      <div className="flex w-full font-montserrat justify-center gap-2 h-12 mt-2 mb-2 px-[140px]">
        <div className="flex flex-col gap-1 ">
          <div className="flex">
            <label className="text-haiti font-normal">Filter by:</label>
          </div>
          {/* Category select */}
          <div className="flex flex-row gap-4 ">
        
            <select
              style={{
                width: "190px",
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setRole(e.target.value);
            
              }}
            >
              <option value="" selected>
                All Roles
              </option>
         
              {loaderData.RolesList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            
            <select
              style={{
                width: "190px",
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setDep(e.target.value);
              // Trigger filtering when category changes
              }}
            >
              <option value="" selected>
                All Departments
              </option>
              {loaderData.DepartmentList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>


            <select
              style={{
                width: "190px",
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setLoc(e.target.value);
              // Trigger filtering when category changes
              }}
            >
              <option value="" selected>
                All Locations
              </option>
              {loaderData.LocList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>


            <select
              style={{
                width: "190px",
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setExp(e.target.value);
            
              }}
            >
              <option value="" selected>
                All Experience
              </option>
              {loaderData.ExpList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
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
                onChange={(e) => {
                  setSearchValue(e.target.value);
                 // Trigger filtering when category changes
                }}
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
          {/* <img
            src="../assets/Ornament.png"
            className="absolute top-4 left-4"
            alt="icons"
          /> */}

          {JobDesc.map((jobs: any) => (
            <div className="flex flex-col px-28 relative">
              <Link to={`/job-description/${jobs.id}`} key={jobs.id}>
                <div className="justify-between w-full bg-white p-[24px] items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full justify-start">
                    <div className="text-slate-950 text-xl font-medium max-md:max-w-full">
                      {jobs.Title}
                    </div>
                    <div className="items-stretch flex justify-between gap-10 mt-4 self-start max-md:max-w-full max-md:flex-wrap">
                      <div className="items-stretch flex justify-between gap-2">
                        <img
                          alt="locationicon"
                          loading="lazy"
                          src="../assets/location.svg"
                          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                          {jobs.location}
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2">
                        <img
                          loading="lazy"
                          alt="locationicon"
                          src="../assets/department.svg"
                          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                          {jobs.DepartmentName}
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2">
                        <img
                          loading="lazy"
                          alt="locationicon"
                          src="../assets/experience.svg"
                          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-slate-950 text-opacity-70 text-right text-base font-medium grow whitespace-nowrap">
                          {jobs.ExperienceRange} Yrs
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center self-center flex aspect-square flex-col justify-center my-auto">
                    <img
                      loading="lazy"
                      alt="locationicon"
                      src="../assets/Arrow.png"
                      className="aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
        
          <button className="button-test font-montserrat font-thin">
            {" "}
            <span className="font-thin">Show More</span>
          </button>

        </div>

      </section>
    </div>
  );
};

export default JobCards;
