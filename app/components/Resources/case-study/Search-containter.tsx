import { Select, Space } from "antd";
import DropDownIcon from "./arrow";
import { useState } from "react";
import { generateDynamicQuery } from "~/utils/parameterized-gql";
import { case_study_paginated } from "~/graphql/queries";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { Link } from "@remix-run/react";


export const Container = ({ data, tags, categories }: { data: any, tags:any, categories: any }) => {
  const [listData, setListData] = useState(data.data?.caseStudies?.data);
  const [searchValue, setSearchValue] = useState("");
  const [tag, setTag] = useState('')
  const [category, setCategory] = useState('')
  
  
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    const dynamicQuery = await generateDynamicQuery(case_study_paginated, [
        "limit",
        "sort",
        "title",
        "tag",
        "category"
      ]);
      const interpolatedQuery = dynamicQuery(10, "createdAt:asc",searchValue,tag,category);

      const [lists] = await Promise.all([
        await fetchGraphQL(interpolatedQuery),
      ]);
      setListData(lists.data?.caseStudies?.data)
  };

  return (
    <>
      <div className="h-fit p-12 grid place-items-center gap-10">
        <div className="w-fit flex flex-col gap-4 font-montserrat">
            <label className=" text-haiti font-normal">Filter by:</label>
        <Space wrap className="gap-10">
          <Select
            placeholder="All Categories"
            style={{ width: 190 }}
            suffixIcon={<DropDownIcon />}
            onChange={setCategory}
            options= {categories}
          />
          <Select
            placeholder = "All Tags"
            style={{ width: 190 }}
            suffixIcon={<DropDownIcon />}
            onChange={setTag}
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
            <input
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search"
                className="h-34 border-haiti w-96 border-[1px] border-solid rounded-sm pl-10 py-2  focus:outline-none text-xs"></input>
          </div>
        </Space>
        </div>
        {listData &&
          listData.map((item: any) => (
            <Link prefetch="intent" to={`../resources/case-study/${item?.id}`} className="h-96  aspect-[241/78] flex ">
              <img
                key={item.id}
                src={
                  item.attributes.heroBgImage?.data?.attributes.formats?.medium
                    .url
                }
                className="aspect-square h-full bg-red-400  object-cover"
                alt={`author-name-{}`}
              ></img>
              <div className="bg-white h-full flex-grow px-4 flex flex-col gap-4 w-full">
                <p className="font-montserrat italic bg-haiti w-fit text-white p-1">
                  {item.attributes.category.data.attributes.name}
                </p>
                <h1 className="text-5xl font-montserrat font-semibold leading-[3.75rem]">
                  {item.attributes.heroTitle &&
                    (item.attributes.heroTitle.length > 60
                      ? item.attributes.heroTitle.substring(0, 60) + "..."
                      : item.attributes.heroTitle)}
                </h1>
                <p className="font-poppins text-base font-normal leading-6">
                {item.attributes.heroDescription &&
                    (item.attributes.heroDescription.length > 250
                      ? item.attributes.heroDescription.substring(0, 250) + "..."
                      : item.attributes.heroDescription)}
                </p>
                <div className="flex gap-4">
                  <img
                    src={
                      item.attributes.author.data.attributes.avatar.data
                        .attributes.formats.thumbnail.url
                    }
                    className="flex rounded-full h-12 w-12 object-cover"
                  ></img>
                  <div className="flex flex-col justify-start items-start">
                    <p>{item.attributes.author.data.attributes.name}</p>
                    <p> 2 min read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        <button className="hue-btn-blue">
          <span>View More</span>
        </button>
      </div>
    </>
  );
};
