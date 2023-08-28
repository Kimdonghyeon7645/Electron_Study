import React from "react";

const LimitSwitchB = ({
  width = "18.8",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
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
  else
    return (
      <svg
        width={height}
        height={width}
        viewBox="0 0 1011 451"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip109">
            <rect x="1481" y="1603" width="1011" height="451" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip109)" transform="translate(-1481 -1603)">
          <path
            d="M1605.5 1831.5C1548.06 1831.5 1501.5 1784.94 1501.5 1727.5 1501.5 1670.06 1548.06 1623.5 1605.5 1623.5 1662.94 1623.5 1709.5 1670.06 1709.5 1727.5 1709.5 1784.94 1662.94 1831.5 1605.5 1831.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2365.5 1832.5C2308.06 1832.5 2261.5 1785.94 2261.5 1728.5 2261.5 1671.06 2308.06 1624.5 2365.5 1624.5 2422.94 1624.5 2469.5 1671.06 2469.5 1728.5 2469.5 1785.94 2422.94 1832.5 2365.5 1832.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <rect
            x="1522"
            y="1888"
            width="947"
            height="143"
            stroke="#000000"
            strokeWidth="45.8333"
            strokeMiterlimit="8"
            fill="none"
          />
        </g>
      </svg>
    );
};

export default LimitSwitchB;
