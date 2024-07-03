import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const Pricing = () => {
  return (
    <div className="px-2 md:px-10 lg:px-20" id="pricing">
      <h1 className="text-5xl font-medium text-center">
        Pay once, use forever
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-20">
        {pricing.map((item, index) => (
          <div
            className="px-3 py-7 md:px-5 md:py-10 border-[1px] border-n-6 rounded-3xl text-color "
            key={index}
          >
            <h1 className={`text-4xl ${item.color} mb-5`}>{item.title}</h1>
            <p className="text-n-4">{item.description}</p>
            <div className="my-16 flex items-center gap-2 text-white font-bold">
              <span className="text-4xl">$</span>{" "}
              <h1 className="text-[80px]">{item.price}</h1>
            </div>
            <Button title="get started" classes="w-full py-3" />
            <div className="flex flex-col gap-5 mt-10">
              {item.features.map((feature, index) => (
                <div
                  className="flex items-center gap-4 py-5 border-t-[1px] border-n-6"
                  key={index}
                >
                  <img src={check} alt="check icon" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="font-code underline font-bold text-center uppercase mt-5">
        See the full details
      </p>
    </div>
  );
};

export default Pricing;
