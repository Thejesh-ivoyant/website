import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getJDBasedonLimit } from "~/graphql/queries";
const JobCards = () => {
  const loaderData = useLoaderData() as any;
  const [JobDesc, setJobDescData] = useState(loaderData.JobDesc || []);
  const [FilteredJobDesc, setFilteredJobDescData] = useState([]);
  const [loc, setLoc] = useState("");
  const [exp, setExp] = useState("");
  const [dep, setDep] = useState("");
  const [role, setRole] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [limit, setLimit] = useState(5); // Initial limit

  const handleRolesDropChange = (value: any) => {
    setRole(value);
    const filteredBlogs = JobDesc.filter((blog: any) => {
      const tagMatches = !value || blog.topic_tags?.includes(value);
      return tagMatches
    });
    setJobDescData(filteredBlogs);
  }

  const handleDepDropChange = (value: any) => {
    setDep(value);
    const filteredBlogs = JobDesc.filter((blog: any) => {
      const tagMatches = !value || blog.topic_tags?.includes(value);
      return tagMatches
    });
    setJobDescData(filteredBlogs);
  }

  const handleLocDropChange = (value: any) => {
    setLoc(value);
    const filteredBlogs = JobDesc.filter((blog: any) => {
      const tagMatches = !value || blog.topic_tags?.includes(value);
      return tagMatches
    });
    setJobDescData(filteredBlogs);
  }

  const handleExpDropChange = (value: any) => {
    setExp(value);
    const filteredBlogs = JobDesc.filter((blog: any) => {
      const tagMatches = !value || blog.topic_tags?.includes(value);
      return tagMatches
    });
    setJobDescData(filteredBlogs);
  }


  const handleInputChange = (value: any) => {
    setSearchValue(value);
    // Filter the data progressively based on the search input
    const filteredJobs = loaderData.JobDesc.filter((job: any) => {
      const titleLowerCase = job.Title.toLowerCase();
      const valueLowerCase = value.toLowerCase();
  
      // Check if the title starts with or includes the current search value
      return titleLowerCase.startsWith(valueLowerCase) || titleLowerCase.includes(valueLowerCase);
    });
  
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
          MinExperience: item.attributes.MinExperience,
          MaxExperience: item.attributes.MaxExperience,
          DepartmentName:
            item.attributes.department.data.attributes.DepartmentName,
        })
      ),
    ]);

    // Increment the limit for the next fetch
    setLimit(limit + 3);
  };
  const categoriesList = [
    { value: '1', label: 'Category 1' },
    { value: '2', label: 'Category 2' },
    { value: '3', label: 'Category 3' },
    // Add more categories as needed
  ];
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
        
        {/* {loaderData.categoriesList.map((category: any) => ( */}
            <select
              style={{
                width: "190px",
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setRole(e.target.value);
                handleRolesDropChange(e.target.value); // Trigger filtering when category changes
              }}
            >
              <option value="" selected>
                All Roles
              </option>
         
              {categoriesList.map((category: any) => (
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
                handleDepDropChange(e.target.value); // Trigger filtering when category changes
              }}
            >
              <option value="" selected>
                All Departments
              </option>
              {categoriesList.map((category: any) => (
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
                handleLocDropChange(e.target.value); // Trigger filtering when category changes
              }}
            >
              <option value="" selected>
                All Locations
              </option>
              {categoriesList.map((category: any) => (
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
                handleExpDropChange(e.target.value);
              }}
            >
              <option value="" selected>
                All Experience
              </option>
              {categoriesList.map((category: any) => (
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
                  handleInputChange(e.target.value); // Trigger filtering when category changes
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
                          src="../assets/experience.svg"
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
                      src="../assets/Arrow.png"
                      className="aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="mx-auto w-full flex justify-center items-center"
          onClick={fetchMoreData}
        >
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
