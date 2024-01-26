import BlogPostCard from "./blogPosts";
import { Link, useLoaderData } from "@remix-run/react";
import IBlogMedia from "../../../interfaces/IBlogMedia";
const BlogPostsContainer = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="w-full bg-white pb-8 h-fit">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="section-title">
        Whats new in our blogs
        </span>
      </div>
      
      <div className="w-full h-fit p-2  flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4 -z-20" alt="ornament" />
  <div className="blog-container-property" >
  
        {loaderData.blogData.map((blog:IBlogMedia) => (
           <Link to={`../resources/blog/${blog.id}`} key={blog.id}>
            <div className="custom-service-grid ">
            <BlogPostCard key={blog.id} blog={blog} />
            </div>
           
            </Link>
        ))}

        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
      <Link to={`../resources/blogs`} key="explore"> <button className="button-test font-montserrat font-thin"> <span className="font-thin">Explore Now</span></button></Link>
      </div>
      
    </div>
  );
};

export default BlogPostsContainer;
