import React, { useState } from "react";
import { benefits } from "../constants";
import { IoIosArrowForward } from "react-icons/io";

const Benefits = () => {
  const [hovered, setHovered] = useState(-1);
  return (
    <div className="px-2 md:px-10 lg:px-20" id="features">
      <h1 className="text-5xl font-medium text-white text-center">
        Chat Smarter, Not Harder <br />
        with Brainwave
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-3 lg:gap-5 xl:gap-10 mt-20">
        {benefits.map((item, index) => (
          <div
            className={`bg-n-7 p-5 md:p-3 lg:p-5  xl:p-10 rounded-xl relative w-[calc(100%-20px)] mx-auto md:w-full ${
              hovered === index ? "rgb rgb__big" : ""
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(-1)}
            key={index}
          >
            <div
              className={`${
                hovered === index ? " opacity-20 " : "opacity-0"
              } absolute left-0 top-0 w-full h-full z-1  bg-cover duration-300`}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>

            <div className="relative z-10">
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-n-3  mt-5">{item.text}</p>
              <div className="flex justify-between items-center mt-28">
                <img src={item.iconUrl} alt="icon" />
                <div className="flex items-center gap-1">
                  <p className="uppercase font-col text-sm ">Explore More</p>
                  <IoIosArrowForward size={20} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
