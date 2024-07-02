import React from "react";
import { notification1 } from "../../assets";
import { notificationImages } from "../../constants";

const Notification = () => {
  return (
    <div className="hidden absolute -right-[100px] top-[100px] z-10 p-4 bg-n-9/40 border-[1px] border-n-1/10 rounded-xl lg:flex items-center gap-3">
      <div>
        <img
          src={notification1}
          className="rounded-lg"
          alt="icon"
          height={50}
          width={50}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Code generation</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-1">
            {notificationImages.map((img, index) => (
              <img
                src={img}
                alt="icon"
                width={20}
                height={20}
                className="rounded-full"
                key={index}
              />
            ))}
          </div>
          <p className="text-neutral-400 text-sm">1 m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
