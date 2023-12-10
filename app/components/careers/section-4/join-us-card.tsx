import { strapiUrl } from "~/utils/urls";
const JobCard = ({ service }: { service: any }) => {
    
    return (
        // <div className="blog-card flex flex-col w-full h-full">
        //      <img
        //             src={service.s6_serviceCardImage}
        //             className="w-full h-[50%] object-cover"
        //             alt={service.s6_serviceCardTitle}
        //         />
        //     <div className="text-white p-4 flex flex-col h-full w-full">
        //         <p className="flex mt-4 w-full text-left text-xl font-semibold leading-7 font-montserrat">{service.s6_serviceCardTitle}</p>
        //         <p className="flex font-thin text-xs font-poppins my-auto">{service.s6_serviceCardDescription}</p>
        //     </div>
        // </div>
            <div className="bg-indigo-950 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
              <div className="w-full max-w-[1096px] mt-12 mb-12 max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col w-full pb-3 max-md:max-w-full max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.67] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                      />
                      <div className="text-white text-2xl font-semibold self-center whitespace-nowrap mt-6 max-md:max-w-full">
                        Explore Life At iVoyant
                      </div>
                      <div className="text-white text-base leading-6 mt-3 max-md:max-w-full">
                        This is a special place, full of talented individuals with a
                        unique perspective to share. Take a peek at what makes us tick
                        and learn what it takes to build a career.
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col w-full pb-3 max-md:max-w-full max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.68] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                      />
                      <div className="items-stretch flex flex-col mt-6 pl-3 pr-9 max-md:max-w-full max-md:pr-5">
                        <div className="text-white text-2xl font-semibold whitespace-nowrap max-md:max-w-full">
                          Bring your whole self to work{" "}
                        </div>
                        <div className="text-white text-base leading-6 mt-3 max-md:max-w-full">
                          This is a special place, full of talented individuals with a
                          unique perspective to share. Take a peek at what makes us tick
                          and learn what it takes to build a career.
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    
};
export default JobCard;