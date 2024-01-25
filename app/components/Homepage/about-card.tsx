// src/components/Card.js
import { Link } from "@remix-run/react";
import { Attributes } from "~/interfaces/Homepage";

const AboutCard = ({attributes}:{attributes:Attributes}) => {
  

  return (
    <div className="flex lg:w-1/2 flex-1 bg-white flex-wrap w-full text-black font-medium justify-center items-center">
      <div className="flex flex-col gap-7 w-[34rem] h-fit">
        <div className=" text-[2.25rem] font-montserrat leading-[2.875rem] font-medium tracking-wider ">
          {attributes.AboutUsTitle}
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
