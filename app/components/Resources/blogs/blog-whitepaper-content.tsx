import { useLoaderData, useLocation, useMatch } from "@remix-run/react";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { tagsQuery } from "~/graphql/queries";
import { errorMessage, success } from "~/utils/notifications";

const Blog_WhitepaperContent = () => {
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const tagsList = await fetchGraphQL(tagsQuery);
        const newTagsData = tagsList?.data?.topicTags?.data;
        setTagsData(newTagsData);
      } catch (error) {
        console.error("Error fetching tags:", error);
        // Handle the error as needed
      }
    };

    fetchTagsData();
  }, []); // Empty dependency array to ensure the effect runs only once

  const tags = tagsData.map((item:any) => ({
    value: item.attributes.name,
    label: item.attributes.name,
  }));

 
  const location = useLocation();
  const { blogData, whitePaperData } = location.state; 

  const Blogmatched = useMatch("/resources/blog/:id");
  const isBlogRoute = Blogmatched !== null;

  // Check the route type and use the corresponding data
  const LatestData = isBlogRoute ? blogData : whitePaperData;
  const loaderData = useLoaderData() as any;
  const match = useMatch("/resources/whitepaper/:id");
  const isResourcesRoute = match !== null;
  console.warn("..............rouet paased data",tags);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.warn("Whitepaper download form clicked ");
      const formData = new FormData(event.currentTarget);
      formData.append('action', 'whitepaper');
      formData.forEach((value, key) => {
        console.warn(`${key}: ${value}`);
      });
      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d', {
        method: 'POST',
        body: formData,
      });
      
  
      if (response.ok) {
        success("Thank you for showing interest in us!",2);
       
        handleDownload();
      } else {
        errorMessage('Error occured, please retry',2)
       
        
      }
 
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };
  
  

  const handleDownload = () => {
    console.warn("white paper donluad")
    const whitepaperURL = loaderData.whitepaper;
    setOpen(false);
    window.open(whitepaperURL, '_blank');
  };
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    console.warn("cancel clicked.................")
    setOpen(false);
  };

    return (
        <div className="justify-center items-center self-stretch bg-[#F9F8FC] flex flex-col px-16 py-12 max-md:px-5">
        <div className="flex ml-0 justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className=" items-stretch flex  flex-col w-[718px]">
            <div className="text-black text-3xl font-semibold max-md:max-w-full">
             {loaderData.title}
            </div>
            <div className="text-black  leading-5 mt-4 max-md:max-w-full">
             
           {loaderData.description1}
            </div>
            {isResourcesRoute ? (
          <button className="btn hero-btn" onClick={showModal}>
            Download white Paper 
          </button>
        ) : (
          <div>

            <img
           
              src={`${loaderData.descriptionImage1}`}  className="aspect-[2.33] object-contain object-center w-full overflow-hidden mt-4 max-md:max-w-full"
            />
            <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
             {loaderData.description2}
            </div>
       
        

           <img
             loading="lazy"
             src={`${loaderData.descriptionImage2}`}  className="aspect-[2.33] object-contain object-center w-full overflow-hidden mt-4 max-md:max-w-full"
           />
           <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
            {loaderData.description3}
           </div>
           <img
             loading="lazy"
             src={`${loaderData.descriptionImage3}`}  className="aspect-[2.33] object-contain object-center w-full overflow-hidden mt-4 max-md:max-w-full"
           />
          
          </div>
          )}
          </div>
          <div className="bg-gray-200 self-stretch flex w-px shrink-0 h-[1653px] flex-col" />
          <div className=" flex grow basis-[0%] flex-col items-stretch self-start">
            <div className="shadow-sm author-card flex flex-col px-7 pr-10 py-7  rounded-sm items-start max-md:px-5">
              <img
             
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
                src= '../../assets/socialdummyplaceholder.png'                 className="aspect-[6.92] object-contain object-center w-[173px] items-center overflow-hidden max-w-full mt-7"
              />
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-9 pr-16 pt-11 pb-5 max-md:px-5">
              <div className="text-black text-2xl font-medium leading-9">
                Related post
              </div>
              {LatestData.slice(0, 3).map((item:any, index:any) => (

              <div key={index} className="flex items-stretch justify-between gap-3.5 mt-11 max-md:mt-10">
                <div className="flex flex-col items-center">
                  <img
                  alt={`Related post ${index + 1}`}
                 
                    src={item.bannerImage.url} className="object-contain object-center w-[83px] aspect-[0.93] overflow-hidden"
                  />
                </div>

                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                
                  <div className="text-black text-base font-medium leading-6 line-clamp-2 overflow-hidden">
                    {item.title}
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src= '../../assets/calendericon.svg'                       className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                    {item.date}
                    </div>
                  </div>
                </div>

              </div>
              ))}
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
              <div className="items-stretch flex gap-1 mt-6">
              {tags.slice(0, 3).map((item:any, index:any) => ( 
              <div className="text-neutral-800 text-sm flex flex-row  justify-center w-full border-[color:var(--gray-gray-6,#BFBFBF)]  px-2.5 py-1.5 border-[0.5px] border-solid">
             {item.label}
                </div>
              ))}

              </div>
              <div className="items-stretch mt-2 flex gap-1  max-md:justify-center ">
               
              {tags.slice(3, 5).map((item:any, index:any) => (
                 <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-1.5 py-1.5 border-[0.5px] border-solid">
              {item.label}
                </div>))}
                
              </div>
            </div>
          </div>
        </div>
        <Modal
        open={open}
        title="Download Whitepaper"
        onCancel={handleCancel} 
      >
   <form className="form" onSubmit={handleSubmit}>
    <div className="items-stretch bg-white flex  flex-col py-2">

      <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
        Please provide required information to view the Whitepaper
      </div>
      
      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Full name
      </div>
      <input
        type="text"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="firstName"
        required
      />

      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Email
      </div>
      <input
        type="email"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="email"
        required
      />

      <div className="text-neutral-800  text-xs mt-4 max-md:max-w-full">
        Phone number
      </div>
      <input
        type="tel"
        className="border-[color:var(--Gray-gray-7,#8C8C8C)] flex shrink-0 h-[29px] flex-col mt-1 border-[0.5px] border-solid max-md:max-w-full"
        name="phoneNumber"
        required
      />

      <button type="submit" className="mt-4 btn w-full">
        Get the Copy
      </button>
    </div>
  </form>
      </Modal>
      </div>
      );  
};
export default Blog_WhitepaperContent;