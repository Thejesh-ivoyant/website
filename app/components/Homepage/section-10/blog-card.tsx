import { strapiUrl } from "~/utils/urls";
const BlogCard = ({ blog }: { blog: any }) => {
    // Extract data from the blog object
    console.log(blog,"is the blog data passsedddd")
    const { Title, Content, DateOfBlog, BlogMedia } = blog.attributes;

    return(
       <div className="blog-card z-10  min-w-[380px] lg:h-[400px] gap-x-6 relative justify-around whitespace-nowrap">
            <img src={strapiUrl+BlogMedia.data[0]?.attributes.url}
            className="p-4 object-scale-down w-full justify-self-start"></img>
            <div className="px-4 text-white font-oxygen font-medium text-xl justify-start">
                <span className="no-wrap">{Title}</span>
            </div>
            <hr className="text-white relative block "></hr>
            <div className="flex text-white font-light font-montserrat text-xs w-full justify-between p-4">
                <span>By iVoyant</span>
                <span className="flex flex-row gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6194 4.50732L12.3728 13.5273C12.2128 14.2007 11.6128 14.6673 10.9194 14.6673H2.15944C1.15277 14.6673 0.432779 13.6806 0.732779 12.7139L3.53944 3.70068C3.73277 3.07402 4.31278 2.64062 4.96612 2.64062H13.1661C13.7994 2.64062 14.3261 3.02729 14.5461 3.56063C14.6728 3.84729 14.6994 4.17399 14.6194 4.50732Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M10.668 14.6667H13.8546C14.7146 14.6667 15.388 13.94 15.328 13.08L14.668 4" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.45312 4.25301L7.14646 1.37305" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9219 4.2605L11.5485 1.36719" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.13281 8H10.4661" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.46484 10.666H9.79818" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               {DateOfBlog}
                </span>
            </div>
            
       </div> 
    );
}
export default BlogCard;