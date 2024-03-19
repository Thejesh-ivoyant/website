import { Link, useLoaderData } from "@remix-run/react";
import { List, Select, Skeleton } from "antd";
import { useEffect, useState } from "react";
import DropDownIcon from "~/components/Resources/case-study/arrow";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { SearchJobs } from "~/graphql/queries";
import CustomDrawer from "~/utils/customDrawer";
import { success } from "~/utils/notifications";
const JobCards = () => {
  const [state, setState] = useState({ visible: false, placement: 'bottom' });
  const [selectedLoc, setSelectedLoc] = useState<string|null>(null)
  const [selectedExp, setSelectedExp] = useState<string|null>(null)
  const [selectedDep, setSelectedDep] = useState<string|null>(null)
  const [selectedRole, setSelectedRole] = useState<string|null>(null)
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
  const [loc, setLoc] = useState<string|null>(null)
  const [exp, setExp] = useState<string|null>(null)
  const [dep, setDep] = useState<string|null>(null)
  const [role, setRole] = useState<string|null>(null);
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
       
   <Select
                placeholder="All Roles"
                className="w-full rounded-none "
                onChange={(value) => setSelectedRole(value)}
                allowClear
                value={selectedRole}
                options={loaderData.RolesList}
                // style={{
                //   width: "190px",
                // }}
              />
              
              <Select
                placeholder="All Departments"
                className="w-full rounded-none "
                onChange={(value) => setSelectedDep(value)}
                allowClear
                value={selectedDep}
                options={loaderData.DepartmentList}
                // style={{
                //   width: "190px",
                // }}
              />
    
    <Select
                placeholder="All Locations"
                className="w-full rounded-none "
                onChange={(value) => setSelectedLoc(value)}
                allowClear
                value={selectedLoc}
                options={loaderData.LocList}
                // style={{
                //   width: "190px",
                // }}
              />
      
      <Select
                placeholder="All Experiences"
                className="w-full rounded-none "
                onChange={(value) => setSelectedExp(value)}
                allowClear
                value={selectedExp}
                options={loaderData.ExpList}
                // style={{
                //   width: "190px",
                // }}
              />
        
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
    <div className="technology-section gap-3 section-p-y">
      <section className="heading gradient-bottom grid gap-3">
        <h2>{loaderData.s3_title}</h2>
        <p className="sub-details">"Email your resume/CV with the job code mentioned above to jobs@ivoyant.com and let us help you discover a great career"!</p>
      </section>
      <div className="filter flex w-full font-montserrat justify-center gap-2">
        <div className="flex flex-col gap-1 w-full lg:px-28 px-4">
          {/* Category select */}
          
          <div className="grid gap-4 mx-auto">
           
              <label className="text-haiti font-normal w-full">Filter by:</label>
      <div className="flex gap-4">
        <Select
        dropdownMatchSelectWidth
            popupMatchSelectWidth={false}
                placeholder="All Roles"
                className="rounded-none roles-dropdown"
                onChange={(value) => setRole(value)}
                allowClear
                value={role}
                options={loaderData.RolesList}
                // style={{
                //   width: "190px",
                // }}
              />
            <Select
            dropdownMatchSelectWidth
            popupMatchSelectWidth={false}
                placeholder="All Departments"
                className=" rounded-none dep-dropdown"
                onChange={(value) => setDep(value)}
                allowClear
                value={dep}
                options={loaderData.DepartmentList}
                // style={{
                //   width: "190px",
                // }}
              />
          

          <Select
          dropdownMatchSelectWidth
            popupMatchSelectWidth={false}
                placeholder="All Locations"
                className="w-full rounded-none loc-dropdown "
                onChange={(value) => setLoc(value)}
                allowClear
                value={loc}
                options={loaderData.LocList}
                // style={{
                //   width: "190px",
                // }}
              />
           
           <Select
           dropdownMatchSelectWidth
            popupMatchSelectWidth={false}
                placeholder="All Experiences"
                className="w-full rounded-none exp-dropdown"
                onChange={(value) => setExp(value)}
                allowClear
                value={exp}
                options={loaderData.ExpList}
                // style={{
                //   width: "190px",
                // }}
              />
           
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
                className="border-haiti h-[1.875rem] xl:w-60 lg:w-52 border-[1px] border-solid rounded-sm pl-10 py-2 focus:outline-none text-xs"
              />
            </div>
            <button onClick={showDrawer} className="filter-mobile flex justify-center cursor-pointer items-center px-3 py-2 border-solid border-[0.5px] border-indigo-950 max-w-[40px]">
              <img
                loading="lazy"
                src="../assets/Filter.svg"   className="w-full bg-blend-multiply aspect-square fill-white"
              />
            </button>
      </div>    
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
            <div className="flex flex-col job-card-container relative font-montserrat">
              <Link to={`/job-description/${jobs.id}`} key={jobs.id}>
                <div className="justify-between w-full bg-white p-6 items-stretch flex gap-4  max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full justify-start">
                    <div className="text-xl font-medium max-md:max-w-full font-montserrat capitalize">
                      {jobs.Title}
                    </div>
                    <div className="items-stretch flex md:flex-row flex-col justify-between gap-10 mt-4 self-start sm:text-base text-sm">
                      <div className="items-stretch flex justify-between gap-2">
                        <img
                          alt="locationicon"
                          loading="lazy"
                          src="../assets/location.svg"
                          className="aspect-square object-contain object-center w-5 overflow-hidden"
                        />
                        <div className="text-opacity-70 font-medium grow ">
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
                        <div className="text-opacity-70 font-medium grow ">
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
                        <div className="text-opacity-70 font-medium grow">
                          {jobs.ExperienceRange} Yrs
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center self-center flex aspect-square flex-col justify-center my-auto">
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20.5" r="20" transform="rotate(90 20 20.5)" fill="#824BEA"/><path d="M24.5 20.5 17 28l-1.05-1.05 6.45-6.45-6.45-6.45L17 13z" fill="#F0F5FF"/></svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}</>)}
        </div>
        <div className="mx-auto w-full flex justify-center items-center lg:mt-16 mt-12" onClick={fetchMoreData}>
          <button className="hue-btn-primary btn max-w-fit">
            {" "}
            <span >Show More</span>
          </button>
        </div>
      </section>
    </div>
    </>
  );
};
export default JobCards;
