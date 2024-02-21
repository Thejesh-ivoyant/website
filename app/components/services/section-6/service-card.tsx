const ServiceCard = ({ service }: { service: any }) => {
    return (
        <div className="common-card-box blog-card overflow-hidden">
            <div className="content">
            <img
                    src={service.s6_serviceCardImage}
                    className="w-full"
                    alt={service.s6_serviceCardTitle}
                />
            <div className="text-white p-4 flex flex-col h-full w-full">
                <p className="card-title h-14 aspect[6/1] flex w-full ">{service.s6_serviceCardTitle}</p>
                <p className="card-desc">{service.s6_serviceCardDescription}</p>
            </div>
            </div>
        </div>
    );
};
export default ServiceCard;