import { Outlet, useLoaderData } from "@remix-run/react";

const BlogHero = () => {
  const loaderData = useLoaderData() as any;
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${loaderData.bannerImage}) lightgray 50% / cover no-repeat`,
  };
  return (
    <section className="py-20 h-1/2 text-white flex" style={gradientStyle}>
       
       <div className=" flex flex-col gap-4 px-16" >
        <h1 className="font-semibold font-montserrat text-2xl">{loaderData.title}</h1>
        <div className="top-gradient pt-6 flex flex-row gap-4">
<div className="flex">
<img
                loading="lazy"
                src={loaderData.avatar} className="aspect-square object-contain object-center w-[84px] overflow-hidden max-w-full rounded-[50%]"
              />
</div>
           <div className="flex items-center"> 
     
                    {loaderData.authorName}
         
                <br/>
                {loaderData.maxReadTime} Min Read
                </div>
        </div>
      
      </div>

    </section>
  );
};

export default BlogHero;
