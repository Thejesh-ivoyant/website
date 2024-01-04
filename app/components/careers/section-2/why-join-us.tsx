import { useLoaderData } from "@remix-run/react";


const Why_Join_Us = () => {
  const loaderData = useLoaderData() as any;


  return (
    <div className="section-container">
      <section className="section-heading py-8 gradient-bottom">
        <h2>{loaderData.s2_title} </h2>
      </section>

      <div className="text-center text-violet-200 text-base font-normal font-poppins p-4 lg:mx-40">
        {loaderData.s2_description}
          </div>

      {loaderData.JoinUsCard.length > 0 && (
        <div>
          <section>
            <div className="flex flex-col space-y-4 py-8 ">
              {Array.from({
                length: Math.ceil(loaderData.JoinUsCard.length / 3),
              }).map((_, row) => (
                <div
                  key={row}
                  className="w-full gap-2 justify-evenly why-choose-us-Container"
                >
                  {loaderData.JoinUsCard
                    .slice(row * 3, (row + 1) * 3)
                    .map((item:any, index:any) => (
                      <div className=" flex flex-col Card-Container items-center justify-center gap-4">
                        <div className="flex card-image">
                                <img src={item.bgImage} alt="cardIcon" />
                        </div>
                        <div className="card-title flex   text-sm font-poppins font-normal">
                          {item.title}
                        </div>

                        <span className="card-line h-6"></span>
                        <div className="flex text-sm py-4 font-poppins font-normal card-description">
                          <div className="flex flex-row justify-between">
                         <div className="flex">
                           <img src={item.bgImage} alt="cardIcon" />
                          </div>
                          <div className="flex text-start text-sm font-poppins font-normal ml-2">
                                  {item.title}
                          </div>

                          </div>
                               
                         {item.description}

                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Why_Join_Us;
