"use client";

import React from "react";

function Tooltip({ text }) {
  return (
    <div className="absolute z-10 bg-gray-900 text-white py-1 px-3 rounded-md shadow-lg ">
      {text}
    </div>
  );
}

export default Tooltip;
