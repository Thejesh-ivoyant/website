import { Link, useLoaderData } from "@remix-run/react";
import WhitePaperCard from "./whitepaper";
import IWhitePaper from "~/interfaces/IWhitePaper";
import { useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getWhitepaperBasedonLimit } from "~/graphql/queries";

import { message } from "antd";
const WhitePaperCardContainer = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const loaderData = useLoaderData() as any;
  const [whitePaperData, setWhitePaperData] = useState(loaderData.whitePaperData || []);
  const [limit, setLimit] = useState(6); // Initial limit
  const [loading, setLoading] = useState(false);

  //  const Success= async()=>{
  //   await messageApi.info('No more white papers available');
  //  }
  const fetchMoreData = async () => {
    setLoading(true);
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
    setLoading(false);
    
    if (whitePaperData.length <= limit) {
    messageApi.info('No more white papers available here');
    }
   
  };

  return (
    <>
    {contextHolder}
    <div className="w-full bg-white pb-8 h-fit">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="section-title">
        {loaderData.s2_title}
        </span>
      </div>
      <div className="whitepaper-grid-container mt-[1rem] w-full h-fit   flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4 -z-20" alt="ornament" />
  <div className="whitepaper-container-property" >
  {whitePaperData.map((paper: IWhitePaper) => (
        <Link to={`../resources/whitepaper/${paper.id}`} key={paper.id} state={{ whitePaperData: whitePaperData }}>
          <WhitePaperCard key={paper.id} paper={paper} isLoading={loading} />       
            </Link>
        ))}
        </div>
      </div>
     

      <div
          className="mx-auto mt-[2.5rem] w-fit flex justify-center items-center"
         
        >
          <button
          className="hue-btn-blue btn uppercase"
          onClick={fetchMoreData}
          disabled={loading}
        >
          <span>Explore More</span>
        </button>
        </div>
    </div>
    </>
  );
};
export default WhitePaperCardContainer;
