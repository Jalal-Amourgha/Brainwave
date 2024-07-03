import React from "react";
import { collabApps, collabContent } from "../constants";
import { brainwaveSymbol, check, curve1, curve2 } from "../assets";
import Button from "./Button";

const Collaboration = () => {
  return (
    <div className="px-2 md:px-10 lg:px-20 my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 relative">
      <div>
        <h1 className="text-5xl font-medium font-col leading-[120%]">
          AI Chat App for
          <br />
          seamless
          <br />
          collaboration
        </h1>
        <div className="flex flex-col gap-7 my-10">
          {collabContent.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row gap-4">
                <img src={check} alt="check icon" />
                <p>{item.title}</p>
              </div>
              <p className="text-n-4  w-full md:w-2/3 lg:w-1/3 mt-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <Button title="try it now" rgb classes="py-2 px-6" />
      </div>
      <div>
        <p className="text-n-4 w-full md:w-2/3 mx-auto">
          With smart automation and top-notch security, it's the perfect
          solution for teams looking to work smarter.
        </p>
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-10 lg:mt-40">
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={brainwaveSymbol}
                  width={48}
                  height={48}
                  alt="brainwave"
                />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden xl:block absolute bottom-4 left-[300px]">
        <img src={curve1} className="max-w-full" alt="curve img" />
      </div>
      <div className="hidden xl:block absolute bottom-28 right-4">
        <img src={curve2} className="max-w-full" alt="curve img" />
      </div>
    </div>
  );
};

export default Collaboration;
