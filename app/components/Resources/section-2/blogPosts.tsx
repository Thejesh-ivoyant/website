import IBlogMedia from "~/interfaces/IBlogMedia";
import { strapiUrl } from "~/utils/urls";
const BlogPostCard = ({ blog }: { blog: IBlogMedia }) => {
    // Extract data from the blog object
    console.log(blog,"is the blog data passsedddd")


    return(
        <form className="self-stretch">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
            <header className="justify-between items-stretch shadow-sm bg-[linear-gradient(180deg,#360E81_0%,#20084D_100%)] flex grow flex-col w-full pb-2 max-md:max-w-full max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c250c861f6fcfd1ce19f02f9f128cec933cd97a63ba877b4c8d9daabd625542?apiKey=9e16588387084fb2a9a51a1b99489136&"className="aspect-[1.22] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                alt="AI Protection"
              />
            </header>
          </div>
          <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stretch flex grow flex-col pb-3 px-5 items-start max-md:max-w-full max-md:mt-6">
              <div className="text-blue-100 text-base italic font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 p-1">
                Artificial Intelligence
              </div>
              <div className="self-stretch text-black text-4xl font-semibold mt-3 max-md:max-w-full">
               {blog.title}th
              </div>
              <div className="text-black text-base leading-5 self-stretch mt-6 max-md:max-w-full">
                Artificial intelligence (AI) allows machines to learn directly from their experiences and problem-solve. Combine this with the rapid rise of robotics in the workplace, and both the business world and society in general are potentially facing problems.
              </div>
              <div className="items-stretch flex justify-between gap-5 mt-28 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae4e2dca8a7c0c6ca02aef60748ab20e047f111c8e12c4c5402ef3abaa400997?apiKey=9e16588387084fb2a9a51a1b99489136&"className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  alt="Amada Smith"
                />
                <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                  <div className="text-black text-base font-medium whitespace-nowrap">
                    Amada Smith
                  </div>
                  <div className="text-black text-sm whitespace-nowrap mt-2.5">
                    8 Min Read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
}
export default BlogPostCard;