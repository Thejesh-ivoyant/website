import { strapiUrl } from "~/utils/urls";
const JobCard = ({ service }: { service: any }) => {
    return (
        <div className="blog-card flex flex-col w-full h-full">
             <img
                    src={service.bgImage}
                    className="w-full h-[50%] object-cover"
                    alt={service.bgImage}
                />
            <div className="text-white p-4 flex flex-col h-full w-full">
                <p className="flex mt-4 w-full text-left text-xl font-semibold leading-7 font-montserrat">{service.title}</p>
                <p className="flex font-thin text-xs font-poppins my-auto">{service.description}</p>
            </div>
        </div>
           
           
          );
    
};
export default JobCard;