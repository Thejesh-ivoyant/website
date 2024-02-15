import { List, Skeleton } from 'antd';
import React from 'react';
import IWhitePaper from "~/interfaces/IWhitePaper";

const WhitePaperCard = ({ paper, isLoading }: { paper: IWhitePaper, isLoading: boolean }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col  h-[24.375rem] whitepaper-card-skeleton max-w-[24rem]">
       
       <List
      
      itemLayout="vertical"
      size="large"
      dataSource={[1, 2]} // Dummy data for skeleton
      renderItem={() => (
        <List.Item>
          <Skeleton active  paragraph={{ rows: 3 }} />
        </List.Item>
      )}
    />
      </div>
      
    );
  }

  return (
    <div className="whitepaper-card-box  blog-card">
      <img src={paper?.bannerImage.url} alt="Image description"/>
      <div className="content flex flex-col justify-between h-full w-full text-white p-4">
        <div className="flex card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {paper.title}
        </div>
        <div className="h-fit w-full flex flex-row justify-between font-poppins font-light tracking-wide text-xs">
          <div className="flex capitalize">By {paper?.author.name}</div>
          <div className="flex gap-x-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths */}
            </svg>
            {paper.maxReadTime} Mins Read
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperCard;
