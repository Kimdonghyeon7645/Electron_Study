import React from "react";

const LimitSwitchB = ({
  width = "18.8",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 453 1011"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip9">
          <rect x="926" y="1314" width="453" height="1011" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip9)" transform="translate(-926 -1314)">
        <path
          d="M1150.5 1438.5C1150.5 1381.06 1197.06 1334.5 1254.5 1334.5 1311.94 1334.5 1358.5 1381.06 1358.5 1438.5 1358.5 1495.94 1311.94 1542.5 1254.5 1542.5 1197.06 1542.5 1150.5 1495.94 1150.5 1438.5Z"
          stroke={fill}
          strokeWidth="41.25"
          strokeMiterlimit="8"
          fill="none"
          fillRule="evenodd"
        />
        <path
          d="M1148.5 2198.5C1148.5 2141.06 1195.06 2094.5 1252.5 2094.5 1309.94 2094.5 1356.5 2141.06 1356.5 2198.5 1356.5 2255.94 1309.94 2302.5 1252.5 2302.5 1195.06 2302.5 1148.5 2255.94 1148.5 2198.5Z"
          stroke={fill}
          strokeWidth="41.25"
          strokeMiterlimit="8"
          fill="none"
          fillRule="evenodd"
        />
        <rect
          x="949"
          y="1355"
          width="143"
          height="947"
          stroke={fill}
          strokeWidth="45.8333"
          strokeMiterlimit="8"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default LimitSwitchB;
