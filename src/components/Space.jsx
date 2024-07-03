import React from "react";
import { smallSphere, stars } from "../assets";

const Space = () => {
  return (
    <div
      className="py-[100px] mx-auto my-[100px] md:w-[calc(100%-160px)] h-[500px] bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${stars})` }}
    >
      <img src={smallSphere} width={260} height={260} alt="sphere" />
    </div>
  );
};

export default Space;
