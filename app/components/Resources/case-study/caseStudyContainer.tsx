import { List, Select, Skeleton, Space } from "antd";
import DropDownIcon from "./arrow";
import { useEffect, useState } from "react";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { case_study_paginated } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { Link } from "@remix-run/react";
import CustomDrawer from "~/utils/customDrawer";
import CaseCard from "./caseStudyCard";
export const Container = ({
  data,
  tags,
  categories,
  initLimit,
  initOffset,
}: {
  data: any;
  tags: any;
  categories: any;
  initLimit: number;
  initOffset: number;
}) => {
  const [listData, setListData] = useState(
    new Set(data.data?.caseStudies?.data)
  );
  const [searchValue, setSearchValue] = useState("");
  let [tag, setTag] = useState<string | null>(null)
  let [category, setCategory] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(initOffset);
  const [limit, setLimit] = useState<number>(initLimit);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [arrayData, setArrayData] = useState<any[]>([]);
  const [state, setState] = useState({ visible: false, placement: "bottom" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  const handleSelectedCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleSelectedTagChange = (value: string) => {
    setSelectedTag(value);
  };

  const resetFiter = () => {
    setSelectedCategory("");
    setSelectedTag("");
    setCategory("");
    setTag("");
  };

  const applyFilter = () => {
    setCategory(selectedCategory);
    setTag(selectedTag);
    onClose();
  };

  const onClose = async () => {
    return new Promise((resolve) => {
      setState((prevState) => ({
        ...prevState,
        visible: false,
      }));
    });
  };

  const showDrawer = () => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
    }));
  };
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
      "offset",
      "limit",
      "sort",
      "title",
      "tag",
      "category",
    ]);

    tag = tag !== null ? tag : "";
    category = category !== null ? category : "";
    const interpolatedQuery = dynamicQuery(
      0,
      limit,
      "createdAt:asc",
      searchValue,
      tag,
      category
    );
    const [lists] = await Promise.all([await fetchGraphQL(interpolatedQuery)]);
    setListData(new Set(lists.data?.caseStudies?.data));
    setLoading(false);
  };
  const simulateFormSubmit = async () => {
    const syntheticEvent = {
      preventDefault: () => {}, // Mock the preventDefault function
    } as React.FormEvent<HTMLFormElement>;
    await handleSubmit(syntheticEvent);
  };
  useEffect(() => {
    simulateFormSubmit();
  }, [category, tag]);
  useEffect(() => {
    setArrayData(Array.from(listData));
  }, [listData]);
 
  const handleViewMore = async () => {
    setLoading(true);
    setBtnLoading(true);
    const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
      "offset",
      "limit",
      "sort",
      "title",
      "tag",
      "category",
    ]);
    setOffset((prevOffset) => prevOffset + limit);
    tag = tag !== null ? tag : "";
    category = category !== null ? category : "";
    const interpolatedQuery = dynamicQuery(
      limit + offset,
      limit,
      "createdAt:asc",
      "",
      tag ?? "",
      category ?? ""
    );
    const [lists] = await Promise.all([await fetchGraphQL(interpolatedQuery)]);
    const newData = lists.data?.caseStudies?.data || [];
    setListData((prevListData: any) => new Set([...prevListData, ...newData]));
    setBtnLoading(false);
    setLoading(false);
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
          <>
            <button
              className="absolute -top-2 left-0 right-0 drawer-close-btn"
              onClick={onClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  stroke="#3D3D3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <label className="block text-haiti font-montserrat">
              Filter by:
            </label>
            <Space
              wrap
              direction="vertical"
              className="mx-auto gap-6 my-4 w-full"
            >
              <Select
                placeholder="All Categories"
                className="w-full rounded-none"
                suffixIcon={category == null ? <DropDownIcon /> : null}
                onChange={handleSelectedCategoryChange}
                allowClear
                value={selectedCategory}
                options={categories}
              />
              <Select
                placeholder="All Tags"
                className="w-full rounded-none"
                suffixIcon={tag == null ? <DropDownIcon /> : null}
                allowClear
                value={selectedTag}
                onChange={handleSelectedTagChange}
                options={tags}
              />
            </Space>
            <div className="flex justify-between">
              <button className="moving-hue-btn" onClick={applyFilter}>
                Apply filter
              </button>
              <button className="reset-form-btn" onClick={resetFiter}>
                Reset
              </button>
            </div>
          </>
        </CustomDrawer>
        <div className="w-full bg-white py-8 blog-card-container  min-h-[90vh]">
        <div className="filter flex w-full font-montserrat justify-center gap-2 h-12 mt-[2rem] mb-2 ">
          <div className="flex flex-col gap-1">
            <div className="flex">
              <label className="text-haiti font-normal">Filter by:</label>
            </div>
            {/* Category select */}
            
            <div className="flex flex-row gap-4">
              <Select
                placeholder="All Categories"
                className="w-full rounded-none category-dropdown"
                suffixIcon={category == null ? <DropDownIcon /> : null}
                onChange={(value) => setCategory(value)}
                value={category}
                allowClear
                options={categories}
                style={{
                  width: "190px",
                }}
              />

              <Select
                placeholder="All Tags"
                className="w-full rounded-none tags-dropdown"
                onChange={(value) => setTag(value)}
                allowClear
                value={tag}
                options={tags}
                style={{
                  width: "190px",
                }}
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
              <form onSubmit={handleSubmit}>
                <input
                  value={searchValue}
                  onChange={handleInputChange}
                  placeholder="Search"
                  className="border-haiti xl:w-96 lg:w-80 border-[1px] border-solid rounded-sm pl-10 py-2  focus:outline-none text-xs"
                ></input>
              </form>
            </div>
              {/* Search input */}
              


              <button
                onClick={showDrawer}
                className="filter-mobile flex justify-center cursor-pointer items-center px-3 py-2.5 border-solid border-[0.5px] border-indigo-950 max-w-[40px]"
              >
                <img
                  loading="lazy"
                  src="../assets/Filter.svg"
                  className="w-full bg-blend-multiply aspect-square fill-white"
                />
              </button>
            </div>
          </div>
          {/* Tag select */}
        </div>

             <div className="blog-main-box w-full h-fit relative  flex flex-row justify-around">

        {loading && (
          <List
            className="w-full blog-main-card z-10 h-full"
            itemLayout="vertical"
            size="large"
            dataSource={[1, 2, 3]} // Dummy data for skeleton
            renderItem={() => (
              <List.Item>
                <Skeleton active avatar paragraph={{ rows: 3 }} />
              </List.Item>
            )}
          />
        )}
        {!loading && (
            <>
              <div className="w-[76.7625rem] blog-main-card items-center z-10 h-full flex flex-col justify-center gap-y-4 overflow-y-scroll mt-8">
              {arrayData.map((caseItem: any) => ( // Renamed `case` to `caseItem` since `case` is a reserved keyword in TypeScript
                <CaseCard key={caseItem.id} caseItem={caseItem} /> // Changed `case` to `caseItem` for clarity
              ))}
             </div>
            </>
        )}
        </div>
        <div
          className="mx-auto mt-[2.5rem] w-fit flex justify-center items-center"
         
        >
        <button
          className="hue-btn-blue btn uppercase"
          onClick={handleViewMore}
          disabled={btnLoading}
        >
          <span>View More</span>
        </button>
        </div>
   
      </div>
    </>
  );
};


