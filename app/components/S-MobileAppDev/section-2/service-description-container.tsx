import React from 'react';
import Description from './service-description';
import ServiceKeypoints from './service-keypoints';


const ServiceContainer = () => {
  return (
    <div className = "flex flex-col gap-28 w-full lg:flex-row">
      <Description />
      <ServiceKeypoints />
    </div>
  );
};

export default  ServiceContainer;

