import { heroIcons } from "../../constants";

const Icons = () => {
  return (
    <div className="hidden absolute -left-[100px] top-[230px] z-10 p-4 bg-n-9/40 border-[1px] border-n-1/10 rounded-xl lg:flex items-center gap-7">
      {heroIcons.map((img, index) => (
        <img src={img} height={20} width={20} alt="icon" key={index} />
      ))}
    </div>
  );
};

export default Icons;
