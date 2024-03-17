import WhitePaperPostCard from "./whitepaperPosts";
import { Link, useLoaderData } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
const WhitePaperPostsContainer = () => {
  const loaderData = useLoaderData() as any;
  return (
    <div className="w-full bg-white p-8 h-fit ">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
          {loaderData.s2_title}
        </span>
      </div>
      <div className="w-full h-fit p-2 relative flex flex-row justify-around">
        <img
          src="../assets/Ornament.png"
          className="absolute z-0 top-4 left-4"
          alt="ornament"
        />
        <div className="w-full h-full justify-center flex gap-x-6 p-6 z-10 px-40 mx-auto">
          {loaderData.blogData.map((blog: IBlogMedia) => (
            <Link to={`resources/blog/${blog.id}`} key={blog.id}>
              <WhitePaperPostCard key={blog.id} blog={blog} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
        <Link to={`../resources/whitepapers`} key="explore">
          {" "}
          <button className="button-test font-montserrat">
            {" "}
            <span className="font-thin">Explore Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default WhitePaperPostsContainer;
