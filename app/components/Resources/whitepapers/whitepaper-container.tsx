
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
  
      <div className="grid grid-cols-3 gap-6 p-6 z-10 mx-auto">
  {loaderData.whitePaperData.map((paper: IWhitePaper) => (
    <Link to={`../resources/whitepaper/${paper.id}`} key={paper.id}>
      <WhitePaperCard key={paper.id} paper={paper} />
    </Link>
  ))}
</div>


        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
      <Link to={`../resources/whitepapers`} key="explore"> <button className="button-test font-montserrat font-thin"> <span className="font-thin">Explore Now</span></button></Link>
      </div>
    </div>
  );
};

export default WhitePaperCardContainer;
