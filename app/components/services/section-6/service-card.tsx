const ServiceCard = ({ service }: { service: any }) => {
    
    return (
        <div className="blog-card flex flex-col w-full h-full overflow-hidden">
             <img
                    src={service.s6_serviceCardImage}
                    className="w-full h-[50%] object-cover"
                    alt={service.s6_serviceCardTitle}
                />
            <div className="text-white p-4 flex flex-col h-full w-full">
                <p className="card-title h-14 aspect[6/1] flex w-full ">{service.s6_serviceCardTitle}</p>
                <p className="card-desc">{service.s6_serviceCardDescription}</p>
            </div>
        </div>
    );
};
export default ServiceCard;