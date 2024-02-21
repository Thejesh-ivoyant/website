import { Partners } from "~/interfaces/Homepage";
import line from '../../../public/assets/pur-line.svg'
const Section6 = ({partners}:{partners:Partners | undefined}) => {
  return (
    <>
      <div className="text-PurpBlue font-montserrat font-medium md:text-3xl sm:text-2xl lg:text-4xl text-center md:p-8 sm:p-6 p-5 lg:p-10 tracking-wider">
        <h1>Trusted Partners</h1>
      </div>
      <img className= "mx-auto" src = {line}/>
      <div className="logos">
        <div className="logos-slide whitespace-nowrap">
          {partners?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo"      key={index}  className="gradient-left grayscale hover:grayscale-0 hover:shadow-xl" />
          ))}
        </div>
        <div className="logos-slide whitespace-nowrap">
          {partners?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo"      key={index}  className="gradient-left grayscale hover:grayscale-0 hover:shadow-xl" />
          ))}
        </div>
        <div className="logos-slide whitespace-nowrap">
          {partners?.data.map((logo, index: number) => (
            <img src={`${logo.attributes.url}`} alt="Client Logo"      key={index}  className="gradient-left grayscale hover:grayscale-0 hover:shadow-xl" />
          ))}
        </div>
      </div>
    </>
  );
};
export default Section6;
