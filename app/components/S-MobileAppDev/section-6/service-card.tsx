import { strapiUrl } from "~/utils/urls";
const ServiceCard = ({ blog }: { blog: any }) => {
    // Extract data from the blog object
    console.log(blog,"is the blog data passsedddd")
    const { Title, Content, DateOfBlog, BlogMedia } = blog.attributes;

    return(
       <div className="blog-card z-10  min-w-[200px] lg:h-[220px] gap-x-6 relative justify-around whitespace-nowrap">
            <img src={strapiUrl+BlogMedia.data[0]?.attributes.url}
            className="p-4 object-scale-down w-full justify-self-start"></img>
            <div className="px-4 text-white font-oxygen font-medium text-xl justify-start">
                <span className="no-wrap">{Title}</span>
              
            </div>
           
            <div className="flex text-white font-light font-montserrat text-xs w-full justify-between p-4">
                <span className="no-wrap service-card-summary">hvvghvhvvhvvhvv</span>
            </div>
            
       </div> 
    );
}
export default ServiceCard;