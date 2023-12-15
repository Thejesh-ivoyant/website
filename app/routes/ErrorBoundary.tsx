import { defer, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Hero from "~/common-components/Hero";
import Footer from "~/common-components/footer";
import ContactUs from "~/components/Homepage/contact-us/contactUs";
import AboutCardContainer from "~/components/Homepage/section-2/about-card-container";
import Section4 from "~/components/Homepage/section-4/clients";
import Testimonials from "~/components/Homepage/section-9/testimonials";
import MissionCard from "~/components/about-us/mission";
import Faq from "~/components/products/faq";
import { strapiUrl } from "~/utils/urls";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | About us" },
    {
      property: "og:title",
      content: "About Ivoyant",
    },
    {
      name: "description",
      content: "Your achievement reflects our performance",
    },
  ];
};

export default function Index() {


  return (
    <>
   <div className="bg-white flex mt-12 flex-col">
    
      <div className="self-center w-[913px] max-w-full mt-10 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-zinc-600 text-3xl font-bold leading-10">
                Oops....{" "}
              </div>
              <div className="text-zinc-600 text-2xl leading-8 whitespace-nowrap mt-3 self-start">
                Page not found{" "}
              </div>
              <div className="self-stretch text-zinc-600 text-base leading-6 tracking-wide whitespace-nowrap mt-4 max-md:max-w-full">
                This Page doesn't exist or was removed!
              </div>{" "}
      <Link to="/" prefetch="intent">
              <div className="justify-centeritems-center flex gap-1 mt-1 py-2 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54dd3a15d1dc9fdb24a826c2c16dbfff3da6835480960c7fa27e753cfed1031a?apiKey=9e16588387084fb2a9a51a1b99489136&"
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
                loading="lazy"
                src= '../assets/error.png' className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative flex flex-col items-stretch pt-5 pb-12 px-7 max-md:px-5">
            
                
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-slate-50 self-stretch flex w-full items-start justify-between gap-5 mt-10 pl-20 pr-20 pb-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-start self-center flex grow basis-[0%] flex-col my-auto">
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
        <div className="bg-gray-200 self-center flex w-px shrink-0 h-36 flex-col my-auto" />{" "}
        <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
          <div className="text-neutral-800 text-xl font-semibold leading-7">
            Download our latest Website accessibility Guide
          </div>{" "}
          <div className="text-zinc-600 text-sm leading-6 mt-3">
            We have curated a Web accessibility guide for you, prepared by our
            Accessibility experts.{" "}
          </div>{" "}
          <div className="text-white text-sm leading-6 tracking-wide capitalize justify-center items-stretch mt-3 px-3 py-1">
            Download Guide
          </div>
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a24d8c04cf5b64cbd44e50a22cf083e1f691c8058a8d4bd947e769a364b25b?apiKey=9e16588387084fb2a9a51a1b99489136&"
          className="aspect-[0.63] object-contain object-center w-[156px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>{" "}
     
    </div>
    </>
  );
}