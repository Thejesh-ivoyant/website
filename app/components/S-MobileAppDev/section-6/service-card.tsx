import { strapiUrl } from "~/utils/urls";
const ServiceCard = ({ service }: { service: any }) => {
    
    return (
        <div className="blog-card absolute justify-around">
            <div className=" " style={{ flexBasis: '40%', height: '140px' }}>
                <img
                    src={service.s6_serviceCardImage}
                    className="p-4"
                    alt={service.s6_serviceCardTitle}
                />
            </div>

            <div className=" px-4 text-white font-oxygen font-medium text-xl justify-start">
                <span className="">{service.s6_serviceCardTitle}</span>
            </div>

            <div className="py-4 text-white font-light font-montserrat text-xs w-full justify-between p-4">
                <span className="service-card-summary">{service.s6_serviceCardDescription}</span>
            </div>
        </div>
    );
};
export default ServiceCard;