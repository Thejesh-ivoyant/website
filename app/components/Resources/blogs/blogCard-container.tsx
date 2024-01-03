import { Link, useLoaderData } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
import BlogCard from "./blogCard";
import { useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getBlogsBasedonLimit } from "~/graphql/queries";
const BlogCardContainer = () => {
  const loaderData = useLoaderData() as any;
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [blogData, setBlogData] = useState(loaderData.blogData || []);
  const [limit, setLimit] = useState(3); // Initial limit

  const fetchMoreData = async () => {
    const updatedQuery = getBlogsBasedonLimit(limit + 3);
    const newBlogData = await fetchGraphQL(updatedQuery);

    // Map and update the state with the new data
    setBlogData(() => [
      ...newBlogData.data?.blogs.data?.map((item: any) => ({
        id: item.id,
      title: item.attributes.title,
      description1: item.attributes.description1,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? "",
        url: item.attributes.bannerImage.data?.attributes.url ?? "",
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar:
          item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
      }))
    ]);

    // Increment the limit for the next fetch
    setLimit(limit + 3);
  };
  // Mock data for categories and tags
  const categories = ["Category1", "Category2", "Category3"];
  const tags = ["Tag1", "Tag2", "Tag3"];

  // Event handler for input change
  const handleInputChange = (value: any) => {
    setSearchValue(value);
    console.warn("search is", searchValue)
    const filteredBlogs = loaderData.blogData.filter((blog: IBlogMedia) =>
    blog.title.toLowerCase().includes(value.toLowerCase())
  );
  setBlogData(filteredBlogs);

  };

  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
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

      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
          {loaderData.s2_title}
        </span>
      </div>

      <div className="w-full h-fit relative p-2 flex flex-row justify-around">
        <img
          src="../assets/Ornament.png"
          className="absolute top-4 left-4"
          alt="ornament"
        />
        <div className="w-[1100px] z-10 h-full flex flex-col justify-center gap-y-6 p-6  px-20 overflow-y-scroll  ">
          {blogData.map((blog: IBlogMedia) => (
            <Link to={`../resources/blog/${blog.id}`} key={blog.id}>
              <BlogCard key={blog.id} blog={blog} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
    <button className="button-test font-montserrat font-thin"> <span className="font-thin">Show More</span></button>
      </div>
    </div>
  );
};

export default BlogCardContainer;
