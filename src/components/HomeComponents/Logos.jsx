import { companyLogos } from "../../constants";

const Logos = () => {
  return (
    <div className="hidden w-full lg:flex justify-between">
      {companyLogos.map((img, index) => (
        <img src={img} className="max-w-[150px]" alt="icon" key={index} />
      ))}
    </div>
  );
};

export default Logos;
