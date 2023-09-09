import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex">
      <label className="flex cursor-pointer">
        <div
          className={`relative w-16 h-8 
          ${isOn ? "bg-[#4C2884]" : "bg-[#A0A0A0]"} rounded-full`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={toggleSwitch}
            checked={isOn}
          />
          <div
            className={`toggle__dot absolute w-6 h-6 bg-white mt-1 rounded-full shadow ${
              isOn ? "right-0" : "left-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
