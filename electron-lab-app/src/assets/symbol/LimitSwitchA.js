import React from "react";

const LimitSwitchA = ({
  width = "23.3",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 559 1011"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip10">
            <rect x="139" y="1316" width="559" height="1011" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip10)" transform="translate(-139 -1316)">
          <path
            d="M161.5 1440.5C161.5 1383.06 208.062 1336.5 265.5 1336.5 322.938 1336.5 369.5 1383.06 369.5 1440.5 369.5 1497.94 322.938 1544.5 265.5 1544.5 208.062 1544.5 161.5 1497.94 161.5 1440.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M159.5 2200.5C159.5 2143.06 206.062 2096.5 263.5 2096.5 320.938 2096.5 367.5 2143.06 367.5 2200.5 367.5 2257.94 320.938 2304.5 263.5 2304.5 206.062 2304.5 159.5 2257.94 159.5 2200.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <rect
            x="532"
            y="1357"
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
        viewBox="0 0 1011 559"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip110">
            <rect x="143" y="1575" width="1011" height="559" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip110)" transform="translate(-143 -1575)">
          <path
            d="M267.5 2112.5C210.063 2112.5 163.5 2065.94 163.5 2008.5 163.5 1951.06 210.063 1904.5 267.5 1904.5 324.938 1904.5 371.5 1951.06 371.5 2008.5 371.5 2065.94 324.938 2112.5 267.5 2112.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1027.5 2113.5C970.062 2113.5 923.5 2067.16 923.5 2010 923.5 1952.84 970.062 1906.5 1027.5 1906.5 1084.94 1906.5 1131.5 1952.84 1131.5 2010 1131.5 2067.16 1084.94 2113.5 1027.5 2113.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <rect
            x="184"
            y="1598"
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

export default LimitSwitchA;
