import React from 'react';
import SummaryCard from '../Homepage/summary-card';
import { Client } from '~/DTO/clients';


const Clients = ({ clients , title  } : { clients: Client[], title:string }) => {
  return (
    <>
      <div className='min-h-96 w-full h-fit flex justify-center flex-col items-center p-6'>
        <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape text-5xl font-semibold'>{title}</div>
        <svg className='w-full mx-auto mt-2' width="1280" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>        
        <div className='flex flex-wrap  flex-row w-full justify-center'>
          {clients?.map((client, index) => (
            <img title={client.text} key={index} className='p-12 cursor-pointer flex grayscale hover:grayscale-0 transition-all aspect-video object-contain' src={client.pic.data.attributes.url} alt ={client.text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;

// {clients.map((client, index) => (
//   <li key={index}>
//     <p>{client.text}</p>
//     <img src={client.pic.data.attributes.url} alt={client.text} />
//   </li>
// ))}