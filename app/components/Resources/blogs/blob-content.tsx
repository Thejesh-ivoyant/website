import { useLoaderData, useMatch } from "@remix-run/react";

const BlobContent = () => {
  const loaderData = useLoaderData() as any;
  const match = useMatch("/resources/whitepaper/:id");
  const isResourcesRoute = match !== null;

  const handleDownload = () => {
    console.warn("whute paper donluad")
    // const whitepaperURL = loaderData.whitepaper;
    // window.open(whitepaperURL, '_blank');
  };
    
    return (
        <div className="justify-center items-center self-stretch bg-[#F9F8FC] flex flex-col px-16 py-12 max-md:px-5">
        <div className="flex ml-0 justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className=" items-stretch flex  flex-col  max-md:max-w-full">
            <div className="text-black text-3xl font-semibold max-md:max-w-full">
             {loaderData.title}
            </div>
            <div className="text-black  leading-5 mt-4 max-md:max-w-full">
             
           {loaderData.description1}
            </div>
            {isResourcesRoute ? (
          <button className="btn hero-btn" onClick={handleDownload}>
            Download white Paper 
          </button>
        ) : (
          <div>

            <img
              loading="lazy"
              src={`${loaderData.descriptionImage1}`}  className="aspect-[2.33] object-contain object-center w-full overflow-hidden mt-4 max-md:max-w-full"
            />
            <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
             {loaderData.description2}
            </div>
           </div>
          )}
          </div>
          <div className="bg-gray-200 self-stretch flex w-px shrink-0 h-[1653px] flex-col" />
          <div className=" flex grow basis-[0%] flex-col items-stretch self-start">
            <div className="shadow-sm author-card flex flex-col px-7 pr-10 py-7  rounded-sm items-start max-md:px-5">
              <img
                loading="lazy"
                src={loaderData.avatar}   className="aspect-square object-contain object-center w-[84px] overflow-hidden max-w-full rounded-[50%]"
              />
              <div className="text-black text-xl font-medium self-stretch whitespace-nowrap mt-8 max-md:mr-1.5">
       {loaderData.authorName}
              </div>
              <div className="text-neutral-800 text-base leading-5 mt-5">
       {loaderData.authorSummary}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/083b40140470c1700a75afc412425e8262670b696f60aea263de690145e852f1?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-[6.92] object-contain object-center w-[173px] items-center overflow-hidden max-w-full mt-7"
              />
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-9 pr-16 pt-11 pb-5 max-md:px-5">
              <div className="text-black text-2xl font-medium leading-9">
                Related post
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-11 max-md:mt-10">
                <div className="flex basis-[0%] flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden mt-8"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden mt-8"
                  />
                </div>
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <div className="text-black text-base font-medium leading-6">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                  <div className="text-black text-base font-medium leading-6 mt-11 max-md:mt-10">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                  <div className="text-black text-base font-medium leading-6 mt-11 max-md:mt-10">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-7 pr-9 py-10 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Categories
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col mt-6" />
              <div className="flex items-stretch justify-between gap-5 mt-16 pr-3 max-md:mt-10">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                    Guide
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-8">
                    Inspiration
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    Latest News
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Revenue
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Start Up
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Technology
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch self-start max-md:hidden">
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                    (6)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    (4)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (7)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (3)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (3)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    (3)
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-7 pr-9 pt-11 pb-6 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Popular Tags
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col mt-6" />
              <div className="items-stretch flex gap-1 mt-6 pr-12 max-md:pr-5">
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.8717948717948718] px-2.5 py-2.5 border-[0.5px] border-solid">
                  Agency
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-2 py-2.5 border-[0.5px] border-solid">
                  Creative
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.2564102564102564] px-2 py-2.5 border-[0.5px] border-solid">
                  Data
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.4615384615384615] px-3.5 py-2.5 border-[0.5px] border-solid">
                  Idea
                </div>
              </div>
              <div className="items-stretch flex gap-1 pr-8 max-md:justify-center max-md:pr-5">
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-1.5 py-2.5 border-[0.5px] border-solid">
                  Technology
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-2.5 pr-1 py-2.5 border-[0.5px] border-solid">
                  Development
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow px-2.5 py-2.5 border-[0.5px] border-solid">
                  Generic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );  
};
export default BlobContent;