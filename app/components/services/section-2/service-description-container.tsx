import Description from './service-description';
import ServiceKeypoints from './service-keypoints';


const ServiceContainer = () => {
  return (
    <div className = "service-points-container">
      <Description />
      <ServiceKeypoints />
    </div>
  );
};

export default  ServiceContainer;

