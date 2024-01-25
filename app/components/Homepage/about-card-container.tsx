import AboutCard from './about-card';
import SummaryCard from './summary-card';
import { Attributes } from '~/interfaces/Homepage';


const AboutCardContainer = ({attributes}:{attributes:Attributes}) => {
  return (
    <div className = "screen-height-section flex flex-col w-full lg:screen-height-section lg:flex-row CardDark">
      <AboutCard attributes={attributes} />
      <SummaryCard attributes={attributes}/>
      
    </div>
  );
};

export default AboutCardContainer;

