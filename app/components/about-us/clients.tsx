import { Client } from '~/DTO/clients';


const Clients = ({ clients , title  } : { clients: Client[], title:string }) => {
  return (
    <>
      <div className='min-h-96 w-full h-fit flex justify-center flex-col items-center lg:p-6 p-4 overflow-hidden'>
        <div className='flex w-fit font-montserrat  h-fit mx-auto text-head-grape lg:text-5xl md:text-3xl sm:text-2xl font-semibold'>{title}</div>
        <svg className='w-full mx-auto' width="100%" height="1.5rem" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>        
        <div className='lg:flex hidden flex-wrap  flex-row w-full justify-around'>
          {clients?.map((client, index) => (
            <img title={client.text} key={index} className='p-12 cursor-pointer flex grayscale hover:grayscale-0 transition-all aspect-video object-contain' src={client.pic.data.attributes.url} alt ={client.text} />
          ))}
        </div>
        <div className="client-logos">
          <div className="client-logos-slide whitespace-nowrap">
            {clients?.map((client, index: number) => (
              <img src={`${client.pic.data.attributes.url}`} alt="Client Logo" key={index} className="gradient-left grayscale hover:grayscale-0" />
            ))}
            {clients?.map((client, index: number) => (
              <img src={`${client.pic.data.attributes.url}`} alt="Client Logo" key={index} className="gradient-left grayscale hover:grayscale-0" />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-PurpBlue font-montserrat font-medium md:text-3xl sm:text-2xl lg:text-4xl text-center md:p-8 sm:p-6 p-5 lg:p-10 tracking-wider">
        <h1>Satisfied clients</h1>
      </div>
      <svg className='w-full mx-auto mt-2' width="100%" height="24" viewBox="0 0 1280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-90 60.5 12.25)" fill="url(#a)" d="M60.5 12.25h.5v579.5h-.5z"/><path transform="rotate(90 1219.5 11.75)" fill="url(#b)" d="M1219.5 11.75h.5v579.5h-.5z"/><defs><linearGradient id="a" x1="61.25" y1="587.432" x2="61.25" y2="1.886" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="1220.25" y1="586.932" x2="1220.25" y2="1.386" gradientUnits="userSpaceOnUse"><stop stopColor="#1D3493"/><stop offset="1" stopColor="#2F54EB" stopOpacity="0"/></linearGradient></defs></svg>        
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {clients?.map((client, index: number) => (
            <img src={`${client.pic.data.attributes.url}`} alt="Client Logo" key={index} className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>

        <div className="logos-slide">
          {clients?.map((client, index: number) => (
            <img src={`${client.pic.data.attributes.url}`} alt="Client Logo"  key={index}  className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>

        <div className="logos-slide">
          {clients?.map((client, index: number) => (
            <img src={`${client.pic.data.attributes.url}`} alt="Client Logo"  key={index}  className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Clients;
