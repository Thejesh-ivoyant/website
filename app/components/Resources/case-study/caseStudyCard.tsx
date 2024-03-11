import { Link } from "@remix-run/react";
import IBlogMedia from "~/interfaces/IBlogMedia";
const CaseCard = ({ caseItem}: { caseItem: any}) => {
    // Extract data from the blog object
    function trimWords(text:string) {
      return text.split(' ').slice(0, 30).join(' ') + (text.split(' ').length > 30 ? ' .....' : '');
    }
    return(
        <form className=" bg-[#ffffff] ">
        <div className="landing-resource-card  gap-1 w-full ">
          <div className="landing-resource-card-left  flex flex-col items-center   ">
            <header className="justify-between items-stretch shadow-sm flex grow flex-col w-full  max-md:max-w-full">
          <img className="h-full"
                src={caseItem?.attributes?.heroBgImage?.data?.attributes?.formats?.medium.url}   alt="AI Protection"
              />
            </header>
          </div>
          <div className="landing-resource-card-right items-start flex flex-col  max-md:w-full justify-between ">
              <div className="text-blue-100 w-fit category-title italic font-medium whitespace-nowrap font-montserrat justify-center items-stretch bg-gray-900 p-1">
              {caseItem.attributes?.category.data.attributes?.name}
              </div>
              <div className="line-clamp-2 blog-title self-stretch mt-[0.75rem] text-black  font-montserrat font-semibold ">
               {caseItem?.attributes?.heroTitle}
              </div>
              <div className="text-black description mt-[1.2rem] line-clamp-3 font-poppins font-normal ">
                {trimWords(caseItem?.attributes?.heroDescription)} 
               </div>
               <div className="flex read-more-btn-container mt-[1rem]">
                <Link
                   to={`../resources/case-study/${caseItem.id}`}  key={caseItem.id}
                   >
                    <button className="hue-btn-blue-light btn btn-small"><p>Read Full Story</p></button>
              </Link>
                </div>
              <div className="flex flex-row justify-between items-end w-full  mt-[1rem]">
                <div className="author-details-container items-stretch flex justify-between ">
                  <img
                    alt="avatar"
                  src={caseItem?.attributes?.author?.data?.attributes?.avatar.data
                    ?.attributes?.formats?.thumbnail?.url} className=" object-center  overflow-hidden flex rounded-full h-[3.125rem] w-[3.125rem] object-contain"
                    />
                  <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-black  text-base font-medium whitespace-nowrap">
                  {caseItem?.attributes?.author?.data?.attributes?.name}
                    </div>
                    <div className="text-black minutes text-sm whitespace-nowrap ">
          23 Mins Read
                    </div>
                  </div>
                </div>
                <div className="flex read-more-btn-container-mobile ">
                <Link
                   to={`../resources/case-study/${caseItem.id}`}  key={caseItem.id}
                   >
                    <button className="hue-btn-blue-light btn"><p>Read Full Story</p></button>
              </Link>
                </div>
              </div>
          </div>
        </div>
      </form>
    );
}
export default CaseCard;
