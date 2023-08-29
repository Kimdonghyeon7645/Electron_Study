import React from "react";

const RelayBContact = ({
  width = "19",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 321 1017"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip4">
            <rect x="1503" y="229" width="321" height="1017" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip4)" transform="translate(-1503 -229)">
          <path
            d="M1594.5 354.5C1594.5 297.062 1641.06 250.5 1698.5 250.5 1755.94 250.5 1802.5 297.062 1802.5 354.5 1802.5 411.938 1755.94 458.5 1698.5 458.5 1641.06 458.5 1594.5 411.938 1594.5 354.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
            strokeOpacity="1"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1592.5 1114.5C1592.5 1057.06 1639.06 1010.5 1696.5 1010.5 1753.94 1010.5 1800.5 1057.06 1800.5 1114.5 1800.5 1171.94 1753.94 1218.5 1696.5 1218.5 1639.06 1218.5 1592.5 1171.94 1592.5 1114.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
            strokeOpacity="1"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1533.5 267.5 1533.5 1216.54"
            stroke={fill}
            strokeWidth="55"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
            strokeOpacity="1"
            fill="none"
            fillRule="evenodd"
          />
        </g>
      </svg>
    );
  else
    return (
      <svg
        width={height}
        height={width}
        viewBox="0 0 1015 317"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip104">
            <rect x="145" y="1005" width="1015" height="317" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip104)" transform="translate(-145 -1005)">
          <path
            d="M269.5 1233.5C212.062 1233.5 165.5 1186.94 165.5 1129.5 165.5 1072.06 212.062 1025.5 269.5 1025.5 326.938 1025.5 373.5 1072.06 373.5 1129.5 373.5 1186.94 326.938 1233.5 269.5 1233.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1029.5 1234.5C972.062 1234.5 925.5 1188.16 925.5 1131 925.5 1073.84 972.062 1027.5 1029.5 1027.5 1086.94 1027.5 1133.5 1073.84 1133.5 1131 1133.5 1188.16 1086.94 1234.5 1029.5 1234.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M182.5 1294.5 1131.54 1294.5"
            stroke="#000000"
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
        </g>
      </svg>
    );
};

export default RelayBContact;
