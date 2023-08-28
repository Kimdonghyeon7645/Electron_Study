import React from "react";

const LimitSwitchA = ({
  width = "23.3",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
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
};

export default LimitSwitchA;
