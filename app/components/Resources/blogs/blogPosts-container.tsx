import BlogPostCard from "./blogPosts";
import { Link, useLoaderData, useMatch } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
import line from "~/../public/assets/pur-line.svg";

const BlogPostsContainer = () => {
  const loaderData = useLoaderData() as any;
  const match = useMatch("/resources/whitepaper/:id");
  const isResourcesRoute = match !== null;
  return (
    <div
      className="w-full bg-[#F9F8FC] lg:py-12 md:py-6 py-4"
      style={{
        backgroundImage:
          'url("../assets/Ornament.png"), url("../assets/Ornament.png")',
        backgroundPosition: "top 40px left 20px, bottom 40px right 20px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-head-grape text-4xl  w-full justify-center flex h-fit mb-3">
        {isResourcesRoute ? (
          <span className="section-title xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wider">
            Whats new in our Whitepapers
          </span>
        ) : (
          <span className="section-title xl:text-3xl lg:text-2xl sm:text-xl text-lg tracking-wider">
            Whats new in our Blogs
          </span>
        )}
      </div>
      <img className="mx-auto my-3" src={line} />
      <div className="relative w-full h-fit px-8 flex flex-row justify-around py-3">
        <div className="container-card">
          {loaderData.blogData.map((blog: IBlogMedia) => (
            <Link to={`../resources/blog/${blog.id}`} key={blog.id}>
              <BlogPostCard key={blog.id} blog={blog} />
            </Link>
          ))}
        </div>
        {/* <img
    src="../assets/Ornament.png"
    className="absolute top-4 left-4 z-0"
    alt="ornament"
  /> */}
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
        <Link to={`../resources/blogs`} key="explore">
          {" "}
          <button className="button-test font-montserrat">
            {" "}
            <span className="uppercase">Explore</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BlogPostsContainer;
