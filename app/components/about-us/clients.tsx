import React from 'react';
import SummaryCard from '../Homepage/section-2/summary-card';
import { Client } from '~/DTO/clients';


const Clients = ({ clients , title  } : { clients: Client[], title:string }) => {
  return (
    <>
      <div className='min-h-96 w-full h-fit flex justify-center flex-col items-center p-4'>
        <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape text-5xl font-semibold'>{title}</div>
        <svg className='w-full mx-auto' width="1300" height="30" viewBox="0 0 1300 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 70.5 76)" fill="url(#a)" d="M70.5 76h.5v579.5h-.5z"/><path transform="rotate(90 1229.5 75.5)" fill="url(#b)" d="M1229.5 75.5h.5V655h-.5z"/><defs><linearGradient id="a" x1="71.25" y1="651.182" x2="71.25" y2="65.636" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1230.25" y1="650.682" x2="1230.25" y2="65.136" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>
        <div className='flex flex-wrap  flex-row w-full justify-center'>
          {clients.map((client, index) => (
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