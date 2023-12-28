
import { Link, useLoaderData } from "@remix-run/react";

import WhitePaperCard from "./whitepaper";
import IWhitePaper from "~/interfaces/IWhitePaper";
const WhitePaperCardContainer = () => {
  const loaderData = useLoaderData() as any;
  
  return (
    <div className="w-full bg-white p-8 min-h-[90vh]">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="h-fit whitespace-nowrap font-montserrat font-bold">
        {loaderData.s2_title}
        </span>

      </div>
      
      <div className="w-full h-fit p-2 relative flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute z-0 top-4 left-4" alt="ornament" />
      <div className="w-full h-full justify-center flex gap-x-6 p-6 z-10 px-40 mx-auto">
  
        {loaderData.whitePaperData.map((paper:IWhitePaper) => (
           <Link to={`../resources/whitepaper/${paper.id}`} key={paper.id}>
            <WhitePaperCard key={paper.id} paper={paper} />
            </Link>
        ))}

        </div>
      </div>
      <button className="mx-40 button-test te"> <span>Learn more</span></button>
    </div>
  );
};

export default WhitePaperCardContainer;
