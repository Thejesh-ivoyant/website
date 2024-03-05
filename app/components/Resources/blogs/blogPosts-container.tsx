import BlogPostCard from "./blogPosts";
import { Link, useLoaderData, useMatch } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
const BlogPostsContainer = () => {
  const loaderData = useLoaderData() as any;
  const match = useMatch("/resources/whitepaper/:id");
  const isResourcesRoute = match !== null;
  return (
    <div className="w-full bg-[#F9F8FC] pb-8 h-fit"  style={{ backgroundImage: 'url("../assets/Ornament.png"), url("../assets/Ornament.png")', backgroundPosition: 'top 40px left 20px, bottom 40px right 20px', backgroundRepeat: 'no-repeat' }}>
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
      {isResourcesRoute ? (<span className="section-title">Whats new in our Whitepapers</span>
      ):
      (<span className="section-title">Whats new in our Blogs</span>)}
      </div>
      <div className="relative w-full h-fit p-8 flex flex-row justify-around">
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
          <button className="button-test btn">
           <span>Explore Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BlogPostsContainer;
