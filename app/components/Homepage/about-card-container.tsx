import React from 'react';
import AboutCard from './about-card';
import SummaryCard from './summary-card';


const AboutCardContainer = () => {
  return (
    <div className = "flex flex-col w-full lg:flex-row">
      <AboutCard />
      <SummaryCard />
    </div>
  );
};

export default AboutCardContainer;

