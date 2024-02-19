import { Link, useLoaderData } from "@remix-run/react";
import { List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { SearchJobs } from "~/graphql/queries";
import CustomDrawer from "~/utils/customDrawer";
import { success } from "~/utils/notifications";
const JobCards = () => {
  const [state, setState] = useState({ visible: false, placement: 'bottom' });
  const [selectedLoc, setSelectedLoc] = useState('');
  const [selectedExp, setSelectedExp] = useState('');
  const [selectedDep, setSelectedDep] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const handleApplyFilters = () => {
    setLoc(selectedLoc);
    setExp(selectedExp);
    setDep(selectedDep);
    setRole(selectedRole);
    onClose();
  };
  const handleResetFilters = () => {
    setSelectedRole('');
    setSelectedDep('');
    setSelectedExp('');
    setSelectedLoc('');
    setLoc('');
    setExp('');
    setDep('');
    setRole('');
  };
  const showDrawer = () => {
    setState(prevState => ({
      ...prevState,
      visible: true,
    }));
  };
  const onClose = () => {
    setState(prevState => ({
      ...prevState,
      visible: false,
    }));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      placement: e.target.value,
    }));
  };
  const [loading, setLoading] = useState(true);
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
    // No need to update selected values here; already handled by state variables
  }, []);
  useEffect(() => {
    // This effect will run whenever role, dep, loc, or exp changes
    handleFilterAndSearchDown();
  }, [role, dep, loc, exp, searchValue]);
const handleFilterAndSearchDown = async () =>{
setLoading(true);
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
    setLoading(false);
}
  const fetchMoreData = async () => {
setLoading(true);
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
 setLoading(false);
 if (JobDesc.length <= limit) {
  success("No more Jobs available", 3);
}
  };
  return (
    <>
<CustomDrawer
  title="Basic Drawer"
  placement="bottom"
  closable={false}
  onClose={onClose}
  visible={state.visible}
      >
        <button className="absolute -top-2 left-0 right-0 drawer-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
         </button>
         <label className="block text-haiti font-montserrat">Filter by:</label>
   <div className="flex flex-col gap-4 ">
        <select
        className="roles-dropdown-mobile"
          style={{
            borderRadius: "2px",
            border: "0.5px solid #1B0740",
          }}
          onChange={(e) => {
            setSelectedRole(e.target.value);
          }}
          value={selectedRole}
        >
          <option value="" >
            All Roles
          </option>
          {loaderData.RolesList.map((category: any) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <select
        className="dep-dropdown-mobile"
          style={{
            borderRadius: "2px",
            border: "0.5px solid #1B0740",
          }}
          onChange={(e) => {
            setSelectedDep(e.target.value);
          // Trigger filtering when category changes
          }}
          value={selectedDep} 
        >
          <option value="" >
            All Departments
          </option>
          {loaderData.DepartmentList.map((category: any) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <select
        className="loc-dropdown-mobile"
          style={{
            borderRadius: "2px",
            border: "0.5px solid #1B0740",
          }}
          onChange={(e) => {
            setSelectedLoc(e.target.value);
          // Trigger filtering when category changes
          }}
          value={selectedLoc}
        >
          <option value="" >
            All Locations
          </option>
          {loaderData.LocList.map((category: any) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <select
        className="exp-dropdown-mobile"
          style={{
            borderRadius: "2px",
            border: "0.5px solid #1B0740",
          }}
          onChange={(e) => {
            setSelectedExp(e.target.value);
          }}
          value={selectedExp}
        >
          <option value="">
            All Experience
          </option>
          {loaderData.ExpList.map((category: any) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <div className="flex flex-row justify-between gap-4 items-center">
            <button
            className="hue-btn-primary  hero-btn "
            onClick={() => handleApplyFilters()}
          >
          Apply Filters
          </button>
          <button
            className="reset-btn  hero-btn "
            onClick={handleResetFilters}
          >
         Reset
          </button>
            </div>
      </div>
</CustomDrawer>
    <div className="technology-section py-16">
      <section className="heading gradient-bottom">
        <h2>{loaderData.s3_title}</h2>
        <p className="sub-details">"Email your resume/CV with the job code mentioned above to jobs@ivoyant.com and let us help you discover a great career"!</p>
      </section>
      <div className="filter flex w-full font-montserrat justify-center gap-2 h-12 mt-2 mb-2 px-28">
        <div className="flex flex-col gap-1 ">
          <div className="flex">
            <label className="text-haiti font-normal">Filter by:</label>
          </div>
          {/* Category select */}
          <div className="flex flex-row gap-4 ">
            <select
            className="roles-dropdown"
              style={{
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              defaultValue="" 
            >
              <option value="" >
                All Roles
              </option>
              {loaderData.RolesList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
            className="dep-dropdown"
              style={{
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setDep(e.target.value);
              // Trigger filtering when category changes
              }}
              defaultValue="" 
            >
              <option value="" >
                All Departments
              </option>
              {loaderData.DepartmentList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
            className="loc-dropdown"
              style={{
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setLoc(e.target.value);
              // Trigger filtering when category changes
              }}
              defaultValue="" 
            >
              <option value="" >
                All Locations
              </option>
              {loaderData.LocList.map((category: any) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
            className="exp-dropdown"
              style={{
                borderRadius: "2px",
                border: "0.5px solid #1B0740",
              }}
              onChange={(e) => {
                setExp(e.target.value);
              }}
              defaultValue="" 
            >
              <option value="">
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
                className="h-34 border-haiti w-full border-[1px] border-solid rounded-sm pl-10 py-2 focus:outline-none text-xs"
              />
            </div>
            <button onClick={showDrawer} className="filter-mobile flex justify-center cursor-pointer items-center px-3 py-2.5 border-solid border-[0.5px] border-indigo-950 max-w-[40px]">
              <img
                loading="lazy"
                src="../assets/Filter.svg"   className="w-full bg-blend-multiply aspect-square fill-white"
              />
            </button>
          </div>
        </div>
        {/* Tag select */}
      </div>
      <section className=" py-8 ">
        <div className="flex flex-col space-y-4 py-4 relative">
          {/* <img
            src="../assets/Ornament.png"
            className="absolute top-4 left-4"
            alt="icons"
          /> */}
{loading &&  
          <List
            className="w-full job-card-container z-10 h-full"
            itemLayout="vertical"
            size="large"
            dataSource={[1, 2, 3]} 
            renderItem={() => (
              <List.Item>
                <Skeleton active avatar paragraph={{ rows: 3 }} />
              </List.Item>
            )}
          />}
          {!loading && (
            <>
          {JobDesc.map((jobs: any) => (
            <div className="flex flex-col job-card-container relative">
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
          ))}</>)}
        </div>
        <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
          <button className="button-test font-montserrat font-thin">
            {" "}
            <span className="font-thin">Show More</span>
          </button>
        </div>
      </section>
    </div>
    </>
  );
};
export default JobCards;
