
import IWhitePaper from "~/interfaces/IWhitePaper";
const WhitePaperCard = ({ paper }: { paper: IWhitePaper }) => {
    // Extract data from the blog object
 
      return (
        <div className="blog-card w-auto h-96 z-10 pb-2 cursor-pointer">
          <div className="w-full h-60">
            <img
            alt="blog-image"
              src={paper?.bannerImage.url}
              className="w-full h-full object-cover"
            ></img>
          </div>
          <div className="h-fit w-full text-white flex-col p-4 flex justify-between gap-y-6">
            <div className="line-clamp-2 overflow-hidden flex font-montserrat text-xl font-medium" >
              {paper.title}
            </div>
            <div className="h-fit w-full flex flex-row justify-between mt-auto font-poppins font-light tracking-wide text-xs">
              <div className="flex capitalize">By {paper?.author.name}</div>
              <div className="flex gap-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.62 4.507-2.247 9.02c-.16.674-.76 1.14-1.454 1.14H2.16c-1.006 0-1.726-.986-1.426-1.953L3.539 3.7a1.5 1.5 0 0 1 1.427-1.06h8.2c.633 0 1.16.386 1.38.92.127.286.153.613.073.946Z"
                    stroke="#fff"
                    stroke-width=".5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M10.668 14.667h3.187c.86 0 1.533-.727 1.473-1.587L14.668 4m-8.215.255.693-2.88m3.776 2.885.627-2.893M5.133 8h5.333m-6.001 2.664h5.333"
                    stroke="#fff"
                    stroke-width=".5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {paper.maxReadTime} Mins Read
              </div>
            </div>
          </div>
        </div>
      );
}
export default WhitePaperCard;