import React from "react";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Button from "./Button";

const Roadmap = () => {
  return (
    <div className="px-2 md:px-10 lg:px-20 mt-[150px]" id="roadmap">
      <h1 className="text-5xl text-center ">What we’re working on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {roadmap.map((item, index) => (
          <div
            className={`p-10 rounded-xl border-[1px] border-n-6  even:md:translate-y-[7rem] relative bg-n-8 ${
              item.rgb ? "rgb rgb__big" : ""
            }`}
            key={index}
          >
            <div className="a">
              <div className="absolute top-0 left-0 max-w-full">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-n-3">[ {item.date} ]</p>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white text-black">
                  {item.status === "done" ? (
                    <img src={check2} width={20} height={20} alt="" />
                  ) : (
                    <img src={loading1} width={20} height={20} alt="" />
                  )}
                  <p>{item.status}</p>
                </div>
              </div>
              <div className="mb-10">
                <img
                  className="w-full"
                  src={item.imageUrl}
                  width={628}
                  height={426}
                  alt={item.title}
                />
              </div>
              <h4 className="text-3xl mb-4">{item.title}</h4>
              <p className="text-lg text-n-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-[200px] text-center">
        <Button title="our roadmap" rgb classes="py-3 px-6 " />
      </div>
    </div>
  );
};

export default Roadmap;
