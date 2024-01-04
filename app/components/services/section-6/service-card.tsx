const ServiceCard = ({ service }: { service: any }) => {
    
    return (
        <div className="blog-card flex flex-col w-full h-full overflow-hidden">
             <img
                    src={service.s6_serviceCardImage}
                    className="w-full h-[50%] object-cover"
                    alt={service.s6_serviceCardTitle}
                />
            <div className="text-white p-4 flex flex-col h-full w-full gap-y-4">
                <p className="h-14 aspect[6/1] flex w-full text-left mr-auto text-xl font-semibold leading-7 font-montserrat">{service.s6_serviceCardTitle}</p>
                <p className="flex font-thin text-xs font-poppins">{service.s6_serviceCardDescription}</p>
            </div>
        </div>
    );
};
export default ServiceCard;