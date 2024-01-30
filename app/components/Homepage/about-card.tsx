// src/components/Card.js
import { Link } from "@remix-run/react";
import { Attributes } from "~/interfaces/Homepage";

const AboutCard = ({attributes}:{attributes:Attributes}) => {
  const aboutUsTitle = attributes?.AboutUsTitle;
  const highlightString = 'iVoyant\'s'
  const indexOfHighlight = aboutUsTitle.indexOf(highlightString);

  return (
    <div className="flex lg:w-1/2 flex-1 bg-white flex-wrap w-full text-black font-medium justify-center items-center p-4">
      <div className="flex flex-col gap-7 w-[34rem]  h-fit">
      <div className="summary-about-us-title font-montserrat font-medium tracking-wider">
        {aboutUsTitle.substring(0, indexOfHighlight)}
        <span style={{ color: '#7534F1' }}>{highlightString}</span>
        {aboutUsTitle.substring( indexOfHighlight + highlightString?.length )}
      </div>
        <div className="text-md font-poppins font-light lg:leading-[28px] " id="about-desc">
        {attributes.AboutUs}
        </div>
          <Link to={"/company/about_us"} className="button-test relative py-4 lg:py-3 hover:text-white">
            {attributes.AboutUsBtnText}
          </Link>

      </div>
    </div>
  );
};

export default AboutCard;
