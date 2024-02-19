import { Link } from "@remix-run/react";

const ErrorBoundaryPage = () => {


    return (
        <div className="bg-white flex flex-col">
    
        <div className="self-center w-[913px] max-w-full mt-10 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
              <div className="error-left-container  flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-zinc-600 text-3xl font-bold leading-10">
                  Oops....{" "}
                </div>
                <div className="text-zinc-600 text-2xl leading-8  mt-3 ">
                  Page not found{" "}
                </div>
                <div className=" text-zinc-600 text-base leading-6 tracking-wide  mt-4 max-md:max-w-full">
                  This Page doesn't exist or was removed!
                </div>{" "}
                <Link to="/">
                <div className="justify-centeritems-center flex gap-1 mt-1 py-2 self-start">
                  <img
                    loading="lazy"
                    src= '../assets/backarrow.svg'
                    alt='error'
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />{" "}
                  <div className="text-blue-600 text-base self-stretch grow whitespace-nowrap">
                    Go back
                  </div>
                </div>
            </Link>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col overflow-hidden relative flex aspect-square justify-center items-stretch max-md:mt-10 ">
                  <img
                  alt='error'
                  loading="lazy"
                  src= '../assets/error.png' className="absolute h-full w-full object-contain object-center inset-0"
                />{" "}
                <div className="relative flex flex-col items-stretch pt-5 pb-12 px-7 max-md:px-5">
              
                  
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="bg-[#F9F8FC] self-stretch flex w-full items-start justify-between gap-5 pl-20 pr-20 pb-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-start  flex grow flex-col mt-4">
            <div className="text-neutral-800 text-base leading-8 self-stretch whitespace-nowrap">
              Here are some helpful links instead
            </div>{" "}
            <div className="text-blue-600 text-sm whitespace-nowrap mt-2.5 self-start">
              Home
            </div>{" "}
            <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
              Home
            </div>{" "}
            <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
              Home
            </div>{" "}
            <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
              Home
            </div>{" "}
            <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
              Home
            </div>
          </div>{" "}
          <div className="bg-gray-200  flex w-px shrink-0 h-36 flex-col mt-4" />{" "}
          <div className="items-stretch flex grow mt-4 flex-col ">
            <div className="text-neutral-800 text-xl font-semibold leading-7">
              Download our latest Website accessibility Guide
            </div>{" "}
            <div className="text-zinc-600 text-sm leading-6 mt-3">
              We have curated a Web accessibility guide for you, prepared by our
              Accessibility experts.{" "}
            </div>{" "}
            <div className=" hero-btn error-btn btn text-white text-sm leading-6 tracking-wide capitalize justify-center items-stretch mt-3 px-3 py-1">
              Download Guide
            </div>
          </div>{" "}
          <img
          alt='error'
            loading="lazy"
      src='../assets/error-mobile.png'  
          className="mt-4  h-[16rem] object-contain object-center w-[166px] overflow-y-scroll self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
       
      </div>
      
  );
};

export default ErrorBoundaryPage;
