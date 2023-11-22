import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { loader } from "~/routes/Industries.Healthcare";
import { strapiUrl } from "~/utils/urls";
const Phases = () => {
  const loaderData = useLoaderData() as any;
  const defaultDesc = "Lorem ipsum dolor sit amet consectetur adipiscing elit molestie, curabitur posuere ultricies habitant tempor convallis"
  return (
  <div className="bg-haiti py-5">
    <h1 className="text-HeaderGray flex items-center justify-center text-5xl font-montserrat p-6">
{loaderData.s5_title} 
    </h1>
  <div className="w-full h-[500px] flex justify-around flex-row text-white p-10 top-gradient">
      {loaderData.PhasesList.map((item: any, index: number) => (
        <div key={item.id} className="flex items-center px-4 h-[400px]">
          <img src={`../assets/${index + 1}.svg`} alt={`SVG ${index + 1}`} className="w-fit h-full p-1"  />
          <div className="flex flex-col ml-4 items-start justify-center p-3 gap-6">
            <strong className="text-base font-bold tracking-wide font-montserrat text-TinBlue ">{item.s5_phasesTitle}</strong>
            <div className="font-poppins text-xs font-normal text-left leading-5">{defaultDesc}</div>
                  <img src={item.s5_phasesImage} className="w-10 h-10 mx-auto" alt="phasesicons" />
          </div>
        </div>
      ))}
              <img src="../assets/0.svg" className="h-[400px]" alt="vector" />
    </div>
  </div>

    
  );
};

export default Phases;
{/* <div>Description: {item.description}</div> */}




// import React, { useEffect, useState } from "react";
// import { strapiUrl } from "~/utils/urls";
// const Phases = () => {
//   const SECTION3_API_URL = `${strapiUrl}/api/section3s?populate=%2A`;
//   const [serviceDescr, setServiceDescr] = useState<string>("");
//   const [servicesList, setServicesList] = useState<
//     { [key: string]: string } | undefined
//   >();
//   const [selectedService, setSelectedService] = useState<string | null>(null);
//   const [description, setDescription] = useState<string>("");
//   const [currentSelectedService, setCurrentService] = useState<string>("");
//   const [serviceImage, setServiceImage] = useState("");

//   useEffect(() => {
//     // Fetch data from the API endpoint
//     fetch(SECTION3_API_URL)
//       .then((response) => response.json())
//       .then((section3_data) => {
//         const { ServiceDescription, servicesList, serviceImage } =
//           section3_data.data[0].attributes;
//         setServiceDescr(ServiceDescription);
//         setServicesList(servicesList);
//         setServiceImage(strapiUrl + serviceImage.data[0].attributes.url);
//         setDescription(
//           servicesList
//             ? servicesList[Object.keys(servicesList)[0]]
//             : "defaultDescription"
//         ); //default desc
//         setCurrentService(Object.keys(servicesList)[0]); //setting default service
//       })
//       .catch((error) => {
//         console.error("Error fetching data from API:", error);
//       });
//   }, []);

//   const handleServiceClick = (service: string) => {
//     setSelectedService(service);
//     setDescription(servicesList ? servicesList[service] : "");
//     setCurrentService(service);
//   };
//   return (
//     <div id="industries" className="phases-container">
//       <section className="section-heading gradient-bottom">
//         <h2>Our software development process </h2>
//       </section>

//       <section className=" mt-10  px-16 py-8">
//         <div className="w-full flex flex-row justify-evenly gap-2">
          



//         <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Number1.svg" className=""></img>
//              </div>
//              <div className="flex flex-col gap-6 mt-6 w-3/4">
//                 <div className="flex phases-title" style={{fontSize:"8px"}}>
//                 Discovery & Requirements   
//                 </div>
//                 <div className="flex phases-desc" style={{fontSize:"8px"}}>
//                 We understand your business goals, target audience, and app requirements. Define the scope and features of the app.   
//                 </div>
//                 <div className="flex items-center justify-center">
//                 <img src="../assets/Chats.svg" className=""></img>      
//                 </div>
//              </div>


//           <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Number2.svg" className=""></img>
//              </div>
//              <div className="flex flex-col gap-6 mt-6  w-3/4">
//              <div className="flex phases-title" style={{fontSize:"8px"}}>
//                 Discovery & Requirements   
//                 </div>
//                 <div className="flex phases-desc" style={{fontSize:"8px"}}>
//                 We understand your business goals, target audience, and app requirements. Define the scope and features of the app.   
//                 </div>
//                 <div className="flex items-center justify-center">
//                 <img src="../assets/Chats.svg" className=""></img>      
//                 </div>
//              </div>

//              <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Number3.svg" className=""></img>
//              </div>
//              <div className="flex flex-col gap-6 mt-6  w-3/4">
//              <div className="flex phases-title" style={{fontSize:"8px"}}>
//                 Discovery & Requirements   
//                 </div>
//                 <div className="flex phases-desc" style={{fontSize:"8px"}}>
//                 We understand your business goals, target audience, and app requirements. Define the scope and features of the app.   
//                 </div>
//                 <div className="flex items-center justify-center">
//                 <img src="../assets/Chats.svg" className=""></img>      
//                 </div>
//              </div>


//              <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Number4.svg" className=""></img>
//              </div>
//              <div className="flex flex-col gap-6 mt-6  w-3/4">
//              <div className="flex phases-title" style={{fontSize:"8px"}}>
//                 Discovery & Requirements   
//                 </div>
//                 <div className="flex phases-desc" style={{fontSize:"8px"}}>
//                 We understand your business goals, target audience, and app requirements. Define the scope and features of the app.   
//                 </div>
//                 <div className="flex items-center justify-center">
//                 <img src="../assets/Chats.svg" className=""></img>      
//                 </div>
//              </div>


//              <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Number5.svg" className=""></img>
//              </div>
//              <div className="flex flex-col gap-6 mt-6  w-3/4">
//              <div className="flex phases-title" style={{fontSize:"8px"}}>
//                 Discovery & Requirements   
//                 </div>
//                 <div className="flex phases-desc" style={{fontSize:"8px"}}>
//                 We understand your business goals, target audience, and app requirements. Define the scope and features of the app.   
//                 </div>
//                 <div className="flex items-center justify-center">
//                 <img src="../assets/Chats.svg" className=""></img>     
//                 </div>
//              </div>

//              <div className="flex w-1/4 justify-center items-center">
//                     <img src="../assets/Group 108658.svg" className=""></img>
//              </div>
            
         
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Phases;

