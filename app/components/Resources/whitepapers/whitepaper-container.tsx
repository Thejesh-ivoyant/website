
import { Link, useLoaderData } from "@remix-run/react";

import WhitePaperCard from "./whitepaper";
import IWhitePaper from "~/interfaces/IWhitePaper";
import { useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getWhitepaperBasedonLimit } from "~/graphql/queries";
const WhitePaperCardContainer = () => {
  const loaderData = useLoaderData() as any;
  const [whitePaperData, setWhitePaperData] = useState(loaderData.whitePaperData || []);
  const [limit, setLimit] = useState(6); // Initial limit

  const fetchMoreData = async () => {
    const updatedQuery = getWhitepaperBasedonLimit(limit + 3);
    const newWhitepaperData = await fetchGraphQL(updatedQuery);

    // Map and update the state with the new data
    setWhitePaperData(() => [
      ...newWhitepaperData.data.whitePapers.data.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        description1: item.attributes.description1,
        date: item.attributes.date,
        maxReadTime: item.attributes.maxReadTime,
        bannerImage: {
          name: item.attributes.bannerImage.data?.attributes.name ?? "",
          url: item.attributes.bannerImage.data?.attributes.url ?? "",
        },
        author: {
          name: item.attributes.author.data?.attributes.name,
          avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
        },
      }))
    ]);

    // Increment the limit for the next fetch
    setLimit(limit + 3);
  };


  
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
  
      <div className="grid grid-cols-3 gap-12 p-6 z-10 mx-auto">
  {whitePaperData.map((paper: IWhitePaper) => (
    <Link to={`../resources/whitepaper/${paper.id}`} key={paper.id} state={{ whitePaperData: whitePaperData }}>
      <WhitePaperCard key={paper.id} paper={paper} />
    </Link>
  ))}
</div>


        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
    <button className="button-test font-montserrat font-thin"> <span className="font-thin">Explore Now</span></button>
      </div>
    </div>
  );
};

export default WhitePaperCardContainer;
