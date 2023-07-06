"use client";

import React, { useContext } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { ThemeContext } from "../../../context/ThemeContext";

const Theme = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <>
      <div
        className="flex flex-row justify-center items-center relative"
        onClick={toggle}
      >
        <div>
          <BsFillMoonFill className="text-white mr-2 " />
        </div>
        <div>
          <BsFillBrightnessHighFill className="text-white " />
        </div>
        <div
          className="absolute bg-green-500 rounded-full w-5 h-5 mr-6"
          style={mode === "light" ? { left: "0px" } : { right: "-25px" }}
        />
      </div>
    </>
  );
};

export default Theme;
