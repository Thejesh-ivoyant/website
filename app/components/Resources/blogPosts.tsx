import IBlogMedia from "~/interfaces/IBlogMedia";
import { strapiUrl } from "~/utils/urls";

const BlogPostCard = ({ blog }: { blog: IBlogMedia }) => {
  return (
    <div className="blog-card w-96 h-96 z-10 pb-2 cursor-pointer">
      <div className="w-full h-60">
        <img
          src={blog?.bannerImage.url}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="h-fit w-full text-white flex-col p-4 flex justify-between gap-y-6">
        <div className="flex font-montserrat text-xl font-medium" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {blog.title}
        </div>
        <div className="h-fit w-full flex flex-row justify-between mt-auto font-poppins font-light tracking-wide text-xs">
          <div className="flex capitalize">By {blog?.author.name}</div>
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
            {blog.maxReadTime}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPostCard;

{
  /* <img src={blog?.bannerImage.url}
                className="p-4 object-scale-down w-60 h-24 justify-self-start" alt="blogimage"></img>
            <div className="px-4 text-white font-montserrat font-medium text-xl justify-start">
                <span className="no-wrap">{blog.title}</span>
            </div>
            <hr className="text-white relative block "></hr>
            <div className="flex text-white font-light font-montserrat text-xs w-full justify-between p-4">
                <span>By {blog.author.name}</span>
                <span className="flex flex-row gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6194 4.50732L12.3728 13.5273C12.2128 14.2007 11.6128 14.6673 10.9194 14.6673H2.15944C1.15277 14.6673 0.432779 13.6806 0.732779 12.7139L3.53944 3.70068C3.73277 3.07402 4.31278 2.64062 4.96612 2.64062H13.1661C13.7994 2.64062 14.3261 3.02729 14.5461 3.56063C14.6728 3.84729 14.6994 4.17399 14.6194 4.50732Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M10.668 14.6667H13.8546C14.7146 14.6667 15.388 13.94 15.328 13.08L14.668 4" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.45312 4.25301L7.14646 1.37305" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9219 4.2605L11.5485 1.36719" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.13281 8H10.4661" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.46484 10.666H9.79818" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           {blog?.date}
            
             
            
                </span>
            </div> */
}
