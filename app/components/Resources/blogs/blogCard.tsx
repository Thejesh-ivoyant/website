import { Link } from "@remix-run/react";
import IBlogMedia from "~/interfaces/IBlogMedia";
const BlogCard = ({ blog,blogData }: { blog: IBlogMedia, blogData:any }) => {
    // Extract data from the blog object
    function trimWords(text:string) {
      return text.split(' ').slice(0, 30).join(' ') + (text.split(' ').length > 30 ? ' .....' : '');
    }
    return(
        <div className="lg:h-96 w-full lg:flex grid gap-4 sm-card-p">
          <img src={blog?.bannerImage.url} className="flex lg:h-full lg:w-fit w-full h-36 lg:aspect-square object-cover"/>
          <div className="flex-1 flex flex-col h-full lg:pb-3 lg:px-2 gap-3">
              <div className="text-blue-100 w-fit category-title italic font-medium justify-center font-montserrat items-stretch bg-gray-900 md:p-1 px-1">
                {blog.category.name}
              </div>
              <h1 className="line-clamp-2 lg:text-3xl sm:text-2xl text-lg self-stretch text-black  font-montserrat font-semibold">{blog.title}</h1>
              <p className="line-clamp-3 font-poppins text-base font-light lg:h-fit h-0">{blog.description1}</p>
              <Link className="lg:block hidden"
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="hue-btn-blue-light btn btn-small">Read Full Story</button>
              </Link>
              <div className="flex font-montserrat lg:gap-6 gap-2 mt-auto items-center">
                <img src={blog.author.avatar} className="flex lg:w-12 sm:w-10 w-7 aspect-square rounded-full object-contain bg-gray-600 my-auto" alt="author"/>
                <div className="grid lg:gap-2 gap-1 capitalize lg:text-base text-xs">
                  <span className="font-medium">{blog.author.name}</span>
                  <span>{blog.maxReadTime} min read</span>
                </div>
                <Link className="lg:hidden flex ml-auto"
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="hue-btn-blue-light btn-small">Read More</button>
                </Link>
              </div>
          </div>
        </div>
    );
}
export default BlogCard;

{/* <form className=" bg-[#ffffff] ">
        <div className="landing-resource-card  gap-1 w-full ">
          <div className="landing-resource-card-left  flex flex-col items-center   ">
            <header className="justify-between items-stretch shadow-sm flex grow flex-col w-full  max-md:max-w-full">
          <img className="h-full object-cover"
                src={blog?.bannerImage.url}   alt="AI Protection"
              />
            </header>
          </div>
          <div className="landing-resource-card-right items-start flex flex-col  max-md:w-full justify-between ">
              <div className="text-blue-100 w-fit category-title italic font-medium whitespace-nowrap justify-center font-montserrat items-stretch bg-gray-900 p-1">
              {blog.category.name}
              </div>
              <div className="line-clamp-2 mt-[0.75rem] blog-title self-stretch text-black  font-montserrat font-semibold ">
               {blog.title}
              </div>
              <div className="text-black description mt-[1.2rem] line-clamp-3 font-poppins font-normal ">
                {trimWords(blog.description1)} 
               </div>
               <div className="flex read-more-btn-container mt-[1rem]">
                <Link
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="hue-btn-blue-light btn btn-small"><p>Read Full Story</p></button>
              </Link>
                </div>
              <div className="flex flex-row justify-between items-end w-full  mt-[1rem]">
                <div className="author-details-container items-stretch flex justify-between ">
                  <img
                    alt="avatar"
                  src={blog.author.avatar} className=" object-center  overflow-hidden flex rounded-full h-[3.125rem] w-[3.125rem] object-contain"
                    />
                  <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-black  text-base font-medium whitespace-nowrap">
                  {blog.author.name}
                    </div>
                    <div className="text-black minutes text-sm whitespace-nowrap ">
          {blog.maxReadTime} Mins Read
                    </div>
                  </div>
                </div>
                <div className="flex read-more-btn-container-mobile  ">
                <Link
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="hue-btn-blue-light btn"><p>Read Full Story</p></button>
              </Link>
                </div>
              </div>
          </div>
        </div>
      </form> */}