import { Select, Space } from "antd";
import DropDownIcon from "./arrow";
import { useEffect, useState } from "react";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { case_study_paginated } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { Link } from "@remix-run/react";
import CustomDrawer from "~/utils/customDrawer";
import { success } from "~/utils/notifications";


export const Container = ({ data, tags, categories, initLimit, initOffset }: { data: any, tags:any, categories: any, initLimit:number, initOffset:number }) => {
  const [listData, setListData] = useState(new Set(data.data?.caseStudies?.data));
  const [searchValue, setSearchValue] = useState("");
  let [tag, setTag] = useState<string|null>(null)
  let [category, setCategory] = useState<string|null>(null)
  const [offset,setOffset] = useState<number>(initOffset);
  const [limit,setLimit] = useState<number>(initLimit);
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [arrayData, setArrayData] = useState<any[]>([]);
  const [state, setState] = useState({ visible: false, placement: 'bottom' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };
  const onClose = async () => {
    return new Promise(resolve => {
        setState(prevState => ({
            ...prevState,
            visible: false,
        }));
    });
};
  const showDrawer = () => {
    setState(prevState => ({
      ...prevState,
      visible: true,
    }));
  };
  const applyFilter = async () => {
    onClose().then(() => {
      simulateFormSubmit();
  });
  };
  const resetFiter = () => {
    setTag(null)
    setCategory(null)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
      "offset",
      "limit",
      "sort",
      "title",
      "tag",
      "category"
    ]);
    tag = tag !== null ? tag : '';
    category = category !== null ? category : ''
    const interpolatedQuery = dynamicQuery(0, limit, "createdAt:asc", searchValue, tag, category);
    const [lists] = await Promise.all([
      await fetchGraphQL(interpolatedQuery),
    ]);
    setListData(new Set(lists.data?.caseStudies?.data));
  };

  const simulateFormSubmit = async ( ) => {

    const syntheticEvent = {
      preventDefault: () => {}, // Mock the preventDefault function
    } as React.FormEvent<HTMLFormElement>;
    
    await handleSubmit(syntheticEvent)
  };
  useEffect(() => {
    simulateFormSubmit();
  }, [category,tag]); 
  useEffect(() => {
    setArrayData(Array.from(listData));
  }, [listData]);
  const handleCategoryChange = (value:string) => {
    setCategory(value);
  };

  const handleTagChange = (value:string) => {
    setTag(value)
  };
  const handleViewMore = async () =>{
    setBtnLoading(true)
    const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
      "offset",
      "limit",
      "sort",
      "title",
      "tag",
      "category"
    ]);
    setOffset((prevOffset) => prevOffset + limit);
    tag = tag !== null ? tag : '';
    category = category !== null ? category : ''
    const interpolatedQuery = dynamicQuery(limit+offset, limit, "createdAt:asc", "", tag ?? "", category ?? "");
    const [lists] = await Promise.all([
      await fetchGraphQL(interpolatedQuery),
    ]);
    const newData = lists.data?.caseStudies?.data || [];
  setListData((prevListData: any) => new Set([...prevListData, ...newData]));
  setBtnLoading(false)

  
  }
  return (
    <>
      <div className="h-fit xl:py-12 lg:py-8 md:py-6 md:px-12 px-4 py-6 grid place-items-center lg:gap-10 gap-6">
        <div className="w-fit md:flex hidden flex-col gap-4 font-montserrat">
            <label className=" text-haiti font-normal">Filter by:</label>
        <Space wrap className="lg:gap-10 gap-6">
          <Select
            placeholder="All Categories"
            className="xl:w-48 lg:w-44 md:w-36"
            suffixIcon={category != '' ? null:  <DropDownIcon /> }
            onChange={handleCategoryChange}
            allowClear
            value = {category}
            options= {categories}
          />
          <Select
            placeholder = "All Tags"
            className="xl:w-48 lg:w-44 md:w-36"
            suffixIcon={tag != '' ? null:  <DropDownIcon /> }
            allowClear
            value={tag}
            onChange={handleTagChange}
            options={tags}
          />
          <div className="relative">
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
            <form  onSubmit={handleSubmit}>
            <input
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search"
                className="border-haiti xl:w-96 lg:w-80 border-[1px] border-solid rounded-sm pl-10 py-2  focus:outline-none text-xs"></input>
            </form>
          </div>
        </Space>
        </div>
        <div className="md:hidden flex gap-4 w-full">
          <div className="relative w-full">
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
            <form  onSubmit={handleSubmit}>
            <input
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search"
                className="border-haiti  h-10 border-[1px] w-full border-solid font-montserrat  pl-6 py-2  focus:outline-none text-xs"></input>
            </form>
          </div>
          <button className="filter-btn-mob" onClick={showDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <rect width="16" height="16" fill="white" style={{ mixBlendMode: 'multiply' }} />
              <path d="M9 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V9.205L2.295 5.5C2.10721 5.31332 2.00112 5.05979 2 4.795V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4.795C13.9989 5.05979 13.8928 5.31332 13.705 5.5L10 9.205V13C10 13.2652 9.89464 13.5196 9.70711 13.7071C9.51957 13.8946 9.26522 14 9 14ZM3 3V4.795L7 8.795V13H9V8.795L13 4.795V3H3Z" fill="#161616" />
            </svg>
          </button>
          
        </div>


        
        {arrayData &&
          arrayData?.map((item: any, index:number) => (
            <Link key={index} prefetch="intent" to={`../resources/case-study/${item?.id}`} className="xl:h-96 lg:h-72 md:h-56  aspect-[241/78] md:flex hidden">
              <img
                key={item?.id}
                src={
                  item?.attributes?.heroBgImage?.data?.attributes?.formats?.medium
                    .url
                }
                className="aspect-square h-full bg-gray-200 object-cover"
                alt={`hero image`}
              ></img>
              <div className="bg-white h-full flex-grow pl-4 flex flex-col xl:gap-4 justify-between w-full">
                <p className="font-montserrat italic bg-haiti w-fit text-white xl:text-base lg:text-sm md:text-xs p-1">
                  {item?.attributes?.category.data.attributes?.name}
                </p>
                <h1 className="font-montserrat font-semibold xl:leading-[3rem] lg:leading-10 xl:text-4xl lg:text-3xl md:text-2xl">
                  {item?.attributes?.heroTitle &&
                    (item.attributes?.heroTitle.length > 60
                      ? item.attributes?.heroTitle.substring(0, 60) + "..."
                      : item.attributes?.heroTitle)}
                </h1>
                <p className="font-poppins lg:text-base md:text-sm  font-normal leading-6">
                {item?.attributes?.heroDescription &&
                    (item.attributes?.heroDescription.length > 250
                      ? item.attributes?.heroDescription.substring(0, 250) + "..."
                      : item.attributes?.heroDescription)}
                </p>
                <div className="flex gap-4">
                  <img
                     alt="Avatar"
                    src={
                      item?.attributes?.author?.data?.attributes?.avatar.data?.attributes?.formats?.thumbnail?.url
                    }
                    className="flex rounded-full lg:h-12 lg:w-12 md:h-8 w-8 my-auto object-cover"
                  ></img>
                  <div className="flex flex-col justify-start items-start">
                    <p>{item?.attributes?.author?.data?.attributes?.name}</p>
                    <p className="text-xs"> 2 min read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {
            arrayData &&
              arrayData?.map((item:any, index:number)=>(
                <div key={index} className="md:hidden grid gap-4 mob-card-cs">
                  <img
                      key={item?.id} 
                      src={ item?.attributes?.heroBgImage?.data?.attributes?.formats?.medium.url }
                      className="aspect-video w-full max-w-sm bg-gray-200 object-cover">
                  </img>
                  <small className="font-montserrat italic bg-haiti w-fit text-white text-[0.625rem] px-1">
                    {item?.attributes?.category.data.attributes?.name}
                  </small>
                  <h1 className="font-montserrat font-semibold text-xl line-clamp-3 max-w-sm" title={item?.attributes?.heroTitle }>
                    { item?.attributes?.heroTitle }
                  </h1>
                  <div className="flex">
                    <img
                        alt="Avatar"
                        src={
                          item?.attributes?.author?.data?.attributes?.avatar.data?.attributes?.formats?.thumbnail?.url
                        }
                        className="flex rounded-full h-7 w-7 my-auto object-cover"
                      ></img>
                    <div className="grid ml-2">
                      <p>{item?.attributes?.author?.data?.attributes?.name}</p>
                      <p className="text-xs"> 2 min read</p>
                    </div>
                    <Link to={`../resources/case-study/${item?.id}`} className="read-more-cs-mob ml-auto">
                      Read Full Story
                    </Link>
                  </div>
                </div>
              ))
          }

        <button className="hue-btn-blue" onClick={handleViewMore} disabled = {btnLoading}>
          <span>View More</span>
        </button>
        <CustomDrawer
          title="Basic Drawer"
          placement="bottom"
          closable={false}
          onClose={onClose}
          visible={state.visible}>
            <>
            <button className="absolute -top-2 left-0 right-0 drawer-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <label className="block text-haiti font-montserrat">Filter by:</label>
              <Space wrap direction="vertical" className="mx-auto gap-6 my-4 w-full">
                <Select
                  placeholder="All Categories"
                  className="w-full rounded-none"
                  suffixIcon={ (category==null)?  <DropDownIcon /> : null }
                  onChange={handleCategoryChange}
                  allowClear
                  value={category}
                  options= {categories}
                />
                <Select
                  placeholder = "All Tags"
                  className="w-full rounded-none"
                  suffixIcon={(tag==null)?  <DropDownIcon /> : null }
                  allowClear
                  value={tag}
                  onChange={handleTagChange}
                  options={tags}
                />
              </Space>
              <div className="flex justify-between">
                <button className="moving-hue-btn" onClick={applyFilter}>Apply filter</button>
                <button className="reset-form-btn" onClick={resetFiter}>Reset</button>
              </div>
            </>   
        </CustomDrawer>
      </div>
    </>
  );
};
