import React from "react";

const Button = ({
  title,
  rgb = false,
  classes = "",
  onclikc = () => console.log(""),
}) => {
  return (
    <button
      className={`${
        rgb
          ? "bg-n-8  rgb rgb__small text-white font-medium"
          : "bg-n-1  text-black font-semibold"
      } ${classes} font-code uppercase relative  rounded-lg text-sm hover:text-color-1 duration-200`}
      onClick={onclikc}
    >
      {title}
    </button>
  );
};

export default Button;
