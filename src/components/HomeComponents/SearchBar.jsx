import { loading } from "../../assets";

const SearchBar = () => {
  return (
    <div className="w-full z-10">
      <div className="max-w-[400px] bg-n-8/80 border-[1px] rounded-full border-n-1/10  p-3 flex items-center gap-3 mx-auto">
        <img src={loading} height={20} width={20} alt="loading icon" />
        <p>AI is generating</p>
      </div>
    </div>
  );
};

export default SearchBar;
