import { strapiUrl } from "~/utils/urls";
const ServiceCard = ({ service }: { service: any }) => {
    // Extract data from the blog object
    console.log(service,"is the blog data passsedddd")
  
    return(
       <div className="blog-card z-10  min-w-[200px] lg:h-[220px] gap-x-6 relative justify-around whitespace-nowrap">
            <div className="px-2  object-contain justify-start bg-blue-600">
                 <img src={service.s6_serviceCardImage} className="p-4 object-contain w-full"></img> 
            </div>
      
            <div className="px-4 text-white font-oxygen font-medium text-xl justify-start">
                <span className="no-wrap">{service.s6_serviceCardTitle}</span>
            </div>
           
            <div className="flex text-white font-light font-montserrat text-xs w-full justify-between p-4">
                <span className="no-wrap service-card-summary">{service.s6_serviceCardDescription}</span>
            </div>
            
       </div> 
    );
}
export default ServiceCard;