import { Clients } from "~/interfaces/Homepage";
import line from '../../../public/assets/pur-line.svg'

const Section4 = ({ clients }: { clients: Clients | undefined }) => {
  return (
    <>
      <div className="text-PurpBlue font-montserrat font-medium text-4xl text-center p-10 tracking-wider">
        <h1>Satisfied clients</h1>
      </div>
      <img className= "mx-auto" src = {line}/>
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {clients?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo" className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>

        <div className="logos-slide">
          {clients?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo" className="gradient-left grayscale hover:grayscale-0" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section4;