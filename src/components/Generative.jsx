import { useState } from "react";
import {
  arrow1,
  arrow2,
  brainwave,
  brainwaveWhiteSymbol,
  check,
  service1,
  service2,
  service3,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import SearchBar from "./HomeComponents/SearchBar";

const Generative = () => {
  const [hovered, setHovered] = useState(-1);
  return (
    <div className="md:px-5 lg:px-40">
      <h1 className="text-5xl font-medium text-center mb-4">
        Generative AI made for creators.
      </h1>
      <p className="text-n-4 text-center">
        Brainwave unlocks the potential of AI-powered applications
      </p>
      <div className="border-[1px] border-n-6 rounded-3xl lg:px-10 relative mt-20">
        <img src={service1} className="max-w-[700px]" alt="service img" />
        <div className="absolute top-[170px] right-0 md:right-10 px-3">
          <div className="h-full w-full flex items-center justify-center flex-col">
            <div className="flex flex-col">
              <h1 className="text-xl font-normal mb-4">Smartest AI</h1>
              <p className="text-n-4 mb-10">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              {brainwaveServices.map((item, index) => (
                <div className="flex flex-row gap-4 border-t-[1px] border-n-5 py-4">
                  <img src={check} alt="check icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-[600px] w-[800px] gradient"></div>

        <div className="absolute bottom-10 left-0 w-full">
          <SearchBar />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full h-[750px] mt-5">
        <div
          className="bg-no-repeat bg-cover   bg-right h-[full] w-full border-[1px] border-n-6 rounded-3xl overflow-hidden relative"
          style={{ backgroundImage: `url(${service2})` }}
        >
          <div className="absolute bottom-20 left-0 w-full z-10 flex justify-center">
            <div className="w-4/5">
              <h1 className="text-4xl font-medium mb-4">Photo editing</h1>
              <p className="text-n-3">
                Automatically enhance your photos using our AI app's photo
                editing feature. Try it now!
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-n-6 to-n-8 opacity-20"></div>
        </div>
        <div className="w-full h-full bg-n-7 p-2 rounded-3xl">
          <div className="p-7">
            <h1 className="text-4xl font-medium mt-10 mb-5">
              Video generation
            </h1>
            <p className="text-n-3">
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
            <div className="flex justify-between my-10">
              {brainwaveServicesIcons.map((img, index) => (
                <div
                  className={`h-14 w-14 rounded-md bg-n-6 flex justify-center items-center relative ${
                    hovered === index ? "rgb rgb__small" : ""
                  }`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(-1)}
                  key={index}
                >
                  <img src={img} alt="img" />
                </div>
              ))}
            </div>
          </div>

          <div
            className="w-full h-[450px] bg-cover bg-n-8 bg-no-repeat rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${service3})` }}
          >
            <div className="bg-n-6 px-5 pt-5 pb-8 w-72 rounded-lg relative mt-10 ml-10">
              Video generated!
              <img
                src={arrow2}
                className="absolute bottom-0 -left-7 overflow-hidden"
                height={40}
                width={40}
                alt="arrow img"
              />
              <div className="absolute -bottom-4 left-10 h-10 w-10 bg-color-1 flex justify-center items-center rounded-lg">
                <img
                  src={brainwaveWhiteSymbol}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </div>
              <p className="absolute bottom-3 right-3 text-sm text-n-4">
                Just Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generative;
