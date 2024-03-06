import { Client } from "~/DTO/clients";
const Clients = ({ clients, title }: { clients: Client[]; title: string }) => {
  return (
    <>
      <div className="min-h-96 w-full h-fit flex justify-center flex-col items-center section-p-y gap-3 overflow-hidden">
        <div className="flex w-fit font-montserrat  h-fit mx-auto text-head-grape section-heading font-semibold">
          {title}
        </div>
        <svg
          width="100%"
          height="13"
          viewBox="0 0 1160 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="0.5"
            height="579.5"
            transform="rotate(-90 0.5 1)"
            fill="url(#paint0_linear_1220_65092)"
          />
          <rect
            x="1159.5"
            y="0.5"
            width="0.5"
            height="579.5"
            transform="rotate(90 1159.5 0.5)"
            fill="url(#paint1_linear_1220_65092)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1220_65092"
              x1="1.25"
              y1="576.182"
              x2="1.24999"
              y2="-9.36364"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D3493" />
              <stop offset="1" stop-color="#2F54EB" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1220_65092"
              x1="1160.25"
              y1="575.682"
              x2="1160.25"
              y2="-9.86364"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D3493" />
              <stop offset="1" stop-color="#2F54EB" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="lg:flex hidden flex-wrap  flex-row w-full justify-around">
          {clients?.map((client, index) => (
            <img
              title={client.text}
              key={index}
              className="p-12 flex grayscale hover:grayscale-0 transition-all aspect-video object-contain"
              src={client.pic.data.attributes.url}
              alt={client.text}
            />
          ))}
        </div>
        <div className="client-logos">
          <div className="client-logos-slide whitespace-nowrap">
            {clients?.map((client, index: number) => (
              <img
                src={`${client.pic.data.attributes.url}`}
                alt="Client Logo"
                key={index}
                className="gradient-left grayscale hover:grayscale-0"
              />
            ))}
            {clients?.map((client, index: number) => (
              <img
                src={`${client.pic.data.attributes.url}`}
                alt="Client Logo"
                key={index}
                className="gradient-left grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Clients;
