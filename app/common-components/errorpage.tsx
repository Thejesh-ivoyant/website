// import PropTypes from "prop-types";
// import React from "react";
// import { Errors } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { Fallout } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { Hexagons } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { MenuHouse } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&"
// import { MenuIcon } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { Notifications } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { RetryPolicy } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";
// import { Workspace } from "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&";

// interface Props {
//   lightMenuiconSmall: string;
//   img: string;
//   menuIcon: JSX.Element;
//   menuIconProperty1: string;
//   override: JSX.Element;
//   menuIcon1: JSX.Element;
//   menuIcon2: JSX.Element;
//   menuIcon3: JSX.Element;
//   menuIcon4: JSX.Element;
// }

// export const ErrorBoundaryPage = ({
//   lightMenuiconSmall = "small.svg",
//   img = "image.svg",
//   menuIcon = <Hexagons className="icon-instance-node" color="#6C707E" />,
//   menuIconProperty1 = "one",
//   override = <Fallout className="icon-instance-node" />,
//   menuIcon1 = <RetryPolicy className="icon-instance-node" color="#6C707E" />,
//   menuIcon2 = <Notifications className="icon-instance-node" />,
//   menuIcon3 = <Errors className="icon-instance-node" />,
//   menuIcon4 = <Workspace className="icon-instance-node" color="#6C707E" />,
// }: Props): JSX.Element => {
//   return (
//     <div className="left-menu">
//       <div className="bottom">
//         <img className="light-menuicon-small" alt="Light menuicon small" src={lightMenuiconSmall} />
//         <img className="light-menuicon-small" alt="Light menuicon small" src={img} />
//       </div>
//       <div className="top">
//         <MenuIcon override={<MenuHouse className="design-component-instance-node" />} property1="one" />
//         <MenuIcon override={menuIcon} property1={menuIconProperty1} />
//         <MenuIcon override={override} property1="one" />
//         <MenuIcon override={menuIcon1} property1="one" />
//         <MenuIcon override={menuIcon2} property1="one" />
//         <MenuIcon override={menuIcon3} property1="one" />
//         <MenuIcon override={menuIcon4} property1="one" />
//       </div>
//     </div>
//   );
// };

// ErrorBoundaryPage.propTypes = {
//   lightMenuiconSmall: PropTypes.string,
//   img: PropTypes.string,
//   menuIconProperty1: PropTypes.string,
// };

import { Link, Outlet, useLoaderData } from "@remix-run/react";

const ErrorBoundaryPage = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the first image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f309ea2af52e3502aab34cae156d26b44b1047221f5864aa33d0824addab1e86?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the second image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c661d5abed90db8b6cbdde4fcaf06ffc3251ec799fbc6aebfc6aa90d08727ba?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the third image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/07345eb57f0482934ae815652c4b4a0a61393fee84b79495de08c4c71a4208e4?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the fourth image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18fe4c67b310eb15b3d86b9a728055d576cde47ba8264c2000307f78baf9e66d?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the fifth image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/23c306a8fd005c07529c6d6f15ca25fe4d4717700a3e216bd15474bedf7c5312?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt: "Descriptive alt text for the sixth image",
    },
    {
      src:"https://cdn.builder.io/api/v1/image/assets/TEMP/f33d8eb014227f4c2ba9e2b1dbde5efca3a790483aca62f16c6bb3479cf277c0?apiKey=9e16588387084fb2a9a51a1b99489136&",
      alt:"Icon indicating a specific feature",
    },
  ];

  return (
    <><div className="flex flex-row w-full h-full">
<div className="flex w-[30%] mt-[4rem] h-fit">
<section className="flex flex-col items-center px-2 py-3 max-w-[480px]">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className={`mt-${index !== 0 ? '6' : '0'} w-full aspect-[1.33] hover:bg-blue-600 cursor-pointer`}
        />
      ))}
     
    </section>
</div>
<div className="flex w-full h-full ">

</div>
    </div>
     
    </>
    //   <div className="bg-white flex flex-col">

    //   <div className="self-center w-[913px] max-w-full mt-10 max-md:mt-10">
    //     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    //       <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
    //         <div className="error-left-container  flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
    //           <div className="text-zinc-600 text-3xl font-bold leading-10">
    //             Oops....{" "}
    //           </div>
    //           <div className="text-zinc-600 text-2xl leading-8  mt-3 ">
    //             Page not found{" "}
    //           </div>
    //           <div className=" text-zinc-600 text-base leading-6 tracking-wide  mt-4 max-md:max-w-full">
    //             This Page doesn't exist or was removed!
    //           </div>{" "}
    //           <Link to="/">
    //           <div className="justify-centeritems-center flex gap-1 mt-1 py-2 self-start">
    //             <img
    //               loading="lazy"
    //               src= '../assets/backarrow.svg'
    //               alt='error'
    //               className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
    //             />{" "}
    //             <div className="text-blue-600 text-base self-stretch grow whitespace-nowrap">
    //               Go back
    //             </div>
    //           </div>
    //       </Link>
    //         </div>
    //       </div>{" "}
    //       <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
    //         <div className="flex-col overflow-hidden relative flex aspect-square justify-center items-stretch max-md:mt-10 ">
    //             <img
    //             alt='error'
    //             loading="lazy"
    //             src= '../assets/error.png' className="absolute h-full w-full object-contain object-center inset-0"
    //           />{" "}
    //           <div className="relative flex flex-col items-stretch pt-5 pb-12 px-7 max-md:px-5">

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>{" "}
    //   <div className="bg-[#F9F8FC] self-stretch flex w-full items-start justify-between gap-5 pl-20 pr-20 pb-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
    //     <div className="items-start  flex grow flex-col mt-4">
    //       <div className="text-neutral-800 text-base leading-8 self-stretch whitespace-nowrap">
    //         Here are some helpful links instead
    //       </div>{" "}
    //       <div className="text-blue-600 text-sm whitespace-nowrap mt-2.5 self-start">
    //         Home
    //       </div>{" "}
    //       <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
    //         Home
    //       </div>{" "}
    //       <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
    //         Home
    //       </div>{" "}
    //       <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
    //         Home
    //       </div>{" "}
    //       <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">
    //         Home
    //       </div>
    //     </div>{" "}
    //     <div className="bg-gray-200  flex w-px shrink-0 h-36 flex-col mt-4" />{" "}
    //     <div className="items-stretch flex grow mt-4 flex-col ">
    //       <div className="text-neutral-800 text-xl font-semibold leading-7">
    //         Download our latest Website accessibility Guide
    //       </div>{" "}
    //       <div className="text-zinc-600 text-sm leading-6 mt-3">
    //         We have curated a Web accessibility guide for you, prepared by our
    //         Accessibility experts.{" "}
    //       </div>{" "}
    //       <div className=" hero-btn error-btn btn text-white text-sm leading-6 tracking-wide capitalize justify-center items-stretch mt-3 px-3 py-1">
    //         Download Guide
    //       </div>
    //     </div>{" "}
    //     <img
    //     alt='error'
    //       loading="lazy"
    // src='../assets/error-mobile.png'
    //     className="mt-4  h-[16rem] object-contain object-center w-[166px] overflow-y-scroll self-stretch shrink-0 max-w-full"
    //     />
    //   </div>{" "}

    // </div>
  );
};

export default ErrorBoundaryPage;
