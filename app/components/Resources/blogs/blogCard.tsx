import { Link } from "@remix-run/react";
import IBlogMedia from "~/interfaces/IBlogMedia";
const BlogCard = ({ blog,blogData }: { blog: IBlogMedia, blogData:any }) => {
    // Extract data from the blog object
    function trimWords(text:string) {
      return text.split(' ').slice(0, 30).join(' ') + (text.split(' ').length > 30 ? ' .....' : '');
    }
    return(
        <form className=" bg-[#ffffff] ">
        <div className="landing-resource-card  gap-1 w-full ">
          <div className="landing-resource-card-left  flex flex-col items-center   ">
            <header className="justify-between items-stretch shadow-sm flex grow flex-col w-full  max-md:max-w-full">
          <img className="h-full"
                src={blog?.bannerImage.url}   alt="AI Protection"
              />
            </header>
          </div>
          <div className="landing-resource-card-right items-start flex flex-col  max-md:w-full justify-between ">
              <div className="text-blue-100 w-fit category-title italic font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 p-1">
              {blog.category.name}
              </div>
              <div className="line-clamp-2 mt-[1rem] blog-title self-stretch text-black  font-montserrat font-semibold ">
               {blog.title}
              </div>
              <div className="text-black description mt-[1.56rem] line-clamp-3 font-poppins font-normal ">
                {trimWords(blog.description1)} 
               </div>
               <div className="flex read-more-btn-container mt-[1rem]">
                <Link
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="read-more-btn"><p>Read Full Story</p></button>
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
                    <button className="read-more-btn"><p>Read Full Story</p></button>
              </Link>
                </div>
              </div>
          </div>
        </div>
      </form>
    );
}
export default BlogCard;