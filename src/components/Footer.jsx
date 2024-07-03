import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="px-2 md:px-10 lg:px-20 py-20 mt-[100px] flex justify-between flex-wrap gap-10 items-center border-t-[1px] border-n-6 text-n-4">
      <p>&#169; 2024. All rights reserved.</p>
      <div className="flex flex-row items-center gap-4">
        {socials.map((item) => (
          <div
            className="h-10 w-10 bg-n-7 flex justify-center items-center rounded-full"
            key={item.id}
          >
            <img src={item.iconUrl} alt="icon" />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
