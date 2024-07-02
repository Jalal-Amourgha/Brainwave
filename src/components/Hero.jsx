import { curve, heroBackground, robot, stars } from "../assets";

import Icons from "./HomeComponents/Icons";
import SearchBar from "./HomeComponents/SearchBar";
import Notification from "./HomeComponents/Notification";
import Logos from "./HomeComponents/Logos";

import Button from "./Button";
const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[500px] gradient"></div>
      <div className="mb-10 mt-20 text-center relative z-20">
        <h1 className="h1 py-2">
          Explore the Possibilities
          <br />
          of AI Chatting with{" "}
          <span className="relative ">
            Brainwave{" "}
            <img
              src={curve}
              className="absolute bottom-0 left-0 max-w-full"
              alt="curve icon"
            />
          </span>
        </h1>
        <p className="text-n-2 py-5">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with <br />
          Brainwave, the open AI chat app.
        </p>
        <Button title="get started" classes="px-4 py-2" />
      </div>
      <section className="max-w-[1200px] h-[1200px]  relative mx-auto text-center mt-[-300px]">
        <div
          className="h-[600px] w-full bg-no-repeat  bg-contain absolute top-0 left-0"
          style={{ backgroundImage: `url(${stars})` }}
        ></div>

        <div className="absolute top-[50px] left-0  z-[-1]  w-full h-[1300px]">
          <div
            className="bg-no-repeat bg-center bg-cover z-[-1] h-[1000px] w-full relative bg-opacity-5"
            style={{ backgroundImage: `url(${heroBackground})` }}
          >
            <div className="absolute left-0 top-[280px] w-full">
              <div className="max-w-[870px] h-[400px] relative rgb rgb__big z-10  mx-auto ">
                <div
                  className="w-full h-full mx-auto relative  z-10  bg-no-repeat bg-[0_-55px] md:bg-[0_-200px] lg:bg-[0_-315px] bg-cover  rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url(${robot})` }}
                ></div>
                {/* Home icons - Component */}
                <Icons />
                {/* Notification - Component */}
                <Notification />
                {/* Search - Component */}
                <div className="-mt-20 relative z-10">
                  <SearchBar />
                </div>
              </div>
              <p className="my-20 text-neutral-400 font-col uppercase text-sm">
                Helping people create beautiful content at
              </p>

              {/* Logos - Component */}
              <Logos />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
