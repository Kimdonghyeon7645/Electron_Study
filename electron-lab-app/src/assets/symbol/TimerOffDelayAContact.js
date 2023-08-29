import React from "react";

const TimerOffDelayAContact = ({
  width = "17.8",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 426 1017"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip7">
            <rect x="137" y="1315" width="426" height="1017" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip7)" transform="translate(-137 -1315)">
          <path
            d="M161.5 1440.5C161.5 1383.06 208.062 1336.5 265.5 1336.5 322.938 1336.5 369.5 1383.06 369.5 1440.5 369.5 1497.94 322.938 1544.5 265.5 1544.5 208.062 1544.5 161.5 1497.94 161.5 1440.5Z"
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
            d="M159.5 2200.5C159.5 2143.06 206.062 2096.5 263.5 2096.5 320.938 2096.5 367.5 2143.06 367.5 2200.5 367.5 2257.94 320.938 2304.5 263.5 2304.5 206.062 2304.5 159.5 2257.94 159.5 2200.5Z"
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
            d="M535.5 1353.5 535.5 2302.54"
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
            d="M534.5 1960.5 335.5 1823.27 534.5 1695.5Z"
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
        viewBox="0 0 1015 423"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip107">
            <rect x="2831" y="1257" width="1015" height="423" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip107)" transform="translate(-2831 -1257)">
          <path
            d="M2955.5 1658.5C2898.06 1658.5 2851.5 1611.94 2851.5 1554.5 2851.5 1497.06 2898.06 1450.5 2955.5 1450.5 3012.94 1450.5 3059.5 1497.06 3059.5 1554.5 3059.5 1611.94 3012.94 1658.5 2955.5 1658.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3715.5 1659.5C3658.06 1659.5 3611.5 1613.16 3611.5 1556 3611.5 1498.84 3658.06 1452.5 3715.5 1452.5 3772.94 1452.5 3819.5 1498.84 3819.5 1556 3819.5 1613.16 3772.94 1659.5 3715.5 1659.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2868.5 1284.5 3817.54 1284.5"
            stroke="#000000"
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3475.5 1285.5 3338.27 1484.5 3210.5 1285.5Z"
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

export default TimerOffDelayAContact;
