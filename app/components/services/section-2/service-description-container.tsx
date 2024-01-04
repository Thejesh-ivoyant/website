import Description from './service-description';
import ServiceKeypoints from './service-keypoints';


const ServiceContainer = () => {
  return (
    <div className = "flex flex-col gap-28 w-full lg:flex-row bg-[#F9F8FC]">
      <Description />
      <ServiceKeypoints />
    </div>
  );
};

export default  ServiceContainer;

