import React from "react";

const Line = ({ width = "4", height = "40" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 1132"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>
        <clipPath id="clip1">
            <rect x="155" y="137" width="60" height="1132"/>
        </clipPath>
    </defs>
    <g clip-path="url(#clip1)" transform="translate(-155 -137)">
        <path d="M186.5 141.5 186.501 1238.15" stroke="#000000" stroke-width="55" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" stroke-opacity="1" fill="none" fill-rule="evenodd"/>
    </g>
    </svg>
  );
};

export default Line;
