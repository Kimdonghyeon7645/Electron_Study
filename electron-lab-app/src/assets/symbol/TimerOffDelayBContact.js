import React from "react";

const TimerOffDelayBContact = ({
  width = "22.5",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 545 1022"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip8">
            <rect x="834" y="1310" width="545" height="1022" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip8)" transform="translate(-834 -1310)">
          <path
            d="M1150.5 1438.5C1150.5 1381.06 1197.06 1334.5 1254.5 1334.5 1311.94 1334.5 1358.5 1381.06 1358.5 1438.5 1358.5 1495.94 1311.94 1542.5 1254.5 1542.5 1197.06 1542.5 1150.5 1495.94 1150.5 1438.5Z"
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
            d="M1148.5 2198.5C1148.5 2141.06 1195.06 2094.5 1252.5 2094.5 1309.94 2094.5 1356.5 2141.06 1356.5 2198.5 1356.5 2255.94 1309.94 2302.5 1252.5 2302.5 1195.06 2302.5 1148.5 2255.94 1148.5 2198.5Z"
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
            d="M1089.5 1351.5 1089.5 2300.54"
            stroke={fill}
            strokeWidth="55"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
            strokeOpacity="1"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1084.5 1958.5 885.5 1821.27 1084.5 1693.5Z"
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
        viewBox="0 0 1015 544"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip108">
            <rect x="2833" y="1775" width="1015" height="544" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip108)" transform="translate(-2833 -1775)">
          <path
            d="M2957.5 2003.5C2900.06 2003.5 2853.5 1956.94 2853.5 1899.5 2853.5 1842.06 2900.06 1795.5 2957.5 1795.5 3014.94 1795.5 3061.5 1842.06 3061.5 1899.5 3061.5 1956.94 3014.94 2003.5 2957.5 2003.5Z"
            stroke="#000000"
            stroke-width="41.25"
            stroke-miterlimit="8"
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M3717.5 2004.5C3660.06 2004.5 3613.5 1958.16 3613.5 1901 3613.5 1843.84 3660.06 1797.5 3717.5 1797.5 3774.94 1797.5 3821.5 1843.84 3821.5 1901 3821.5 1958.16 3774.94 2004.5 3717.5 2004.5Z"
            stroke="#000000"
            stroke-width="41.25"
            stroke-miterlimit="8"
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M2870.5 2064.5 3819.54 2064.5"
            stroke="#000000"
            stroke-width="55"
            stroke-miterlimit="8"
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M3477.5 2069.5 3340.27 2268.5 3212.5 2069.5Z"
            stroke="#000000"
            stroke-width="55"
            stroke-miterlimit="8"
            fill="none"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    );
};

export default TimerOffDelayBContact;
