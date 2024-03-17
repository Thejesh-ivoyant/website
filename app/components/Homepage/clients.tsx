import { Clients } from "~/interfaces/Homepage";
import line from "../../../public/assets/pur-line.svg";
const Section4 = ({ clients }: { clients: Clients | undefined }) => {
  return (
    <div className="grid lg:gap-5 md:gap-4 gap-3 section-p-y">
      <div
        className="text-PurpBlue font-montserrat font-medium xl:text-3xl lg:text-2xl sm:text-xl text-lg text-center tracking-wider"
      >
        <h1>Satisfied clients</h1>
      </div>
      <img className="mx-auto w-96" src={line} />
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {clients?.data.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data.map((logo, index: number) => (
            <img
              src={`${logo.attributes.url}`}
              alt="Client Logo"
              key={index}
              className="gradient-left grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section4;
