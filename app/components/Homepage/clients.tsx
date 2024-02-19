import { Clients } from "~/interfaces/Homepage";
import line from '../../../public/assets/pur-line.svg'
const Section4 = ({ clients }: { clients: Clients | undefined }) => {
  return (
    <div className="my-4">
      <div className="text-PurpBlue font-montserrat font-medium md:text-3xl sm:text-2xl lg:text-4xl text-center md:p-8 sm:p-6 p-5 lg:p-10 tracking-wider">
        <h1>Satisfied clients</h1>
      </div>
      <img className= "mx-auto" src = {line}/>
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {clients?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo" key={index} className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo"  key={index}  className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>
        <div className="logos-slide">
          {clients?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo"  key={index}  className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section4;