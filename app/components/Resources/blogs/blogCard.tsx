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
          <div className="landing-resource-card-right items-start flex flex-col  w-[60%] pb-3 px-5 max-md:w-full justify-between">
              <div className="text-blue-100 w-fit  text-base italic font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 p-1">
              {blog.category.name}
              </div>
              <div className="line-clamp-2 blog-title self-stretch text-black  font-montserrat font-semibold ">
               {blog.title}
              </div>
              <div className="text-black blog-description line-clamp-3 font-poppins font-normal ">
                {trimWords(blog.description1)} 
               </div>
               <div className="flex read-more-btn-container mt-2">
                <Link
                   to={`../resources/blog/${blog.id}`}  key={blog.id}
                   state={{ blogData: blogData }}>
                    <button className="read-more-btn"><p>Read Full Story</p></button>
              </Link>
                </div>
              <div className="flex flex-row justify-between items-end w-full">
                <div className="items-stretch flex justify-between gap-5  mt-5  max-md:mt-10">
                  <img
                    alt="avatar"
                  src={blog.author.avatar} className=" object-center  overflow-hidden flex rounded-full h-[3.125rem] w-[3.125rem] object-cover"
                    />
                  <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-black text-base font-medium whitespace-nowrap">
                  {blog.author.name}
                    </div>
                    <div className="text-black text-sm whitespace-nowrap mt-2.5">
          {blog.maxReadTime} Mins Read
                    </div>
                  </div>
                </div>
                <div className="flex read-more-btn-container-mobile ">
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