import IBlogMedia from "~/interfaces/IBlogMedia";

const BlogPostCard = ({ blog }: { blog: IBlogMedia }) => {
  return (
    <div className="blog-card  flex flex-col w-full h-full overflow-hidden pb-2 cursor-pointer" >
      <div className="w-full h-60">
        <img
        alt="blog-image"
          src={blog?.bannerImage.url}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="h-full w-full text-white flex-col p-4 flex justify-between ">
        <div className="flex font-montserrat text-xl font-medium" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {blog.title}
        </div>
        <div className="h-fit w-full flex flex-row justify-between  font-poppins font-light tracking-wide text-xs ">
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
                strokeWidth=".5"
                strokeMiterlimit="10"
              />
              <path
                d="M10.668 14.667h3.187c.86 0 1.533-.727 1.473-1.587L14.668 4m-8.215.255.693-2.88m3.776 2.885.627-2.893M5.133 8h5.333m-6.001 2.664h5.333"
                stroke="#fff"
                strokeWidth=".5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {blog.maxReadTime} Mins Read
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPostCard;
