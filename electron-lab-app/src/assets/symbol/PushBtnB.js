import React from "react";

const PushBtnB = ({
  width = "17",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 381 1022"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip3">
            <rect x="2676" y="687" width="381" height="1022" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip3)" transform="translate(-2676 -687)">
          <path
            d="M2767.5 816.5C2767.5 759.062 2814.06 712.5 2871.5 712.5 2928.94 712.5 2975.5 759.062 2975.5 816.5 2975.5 873.938 2928.94 920.5 2871.5 920.5 2814.06 920.5 2767.5 873.938 2767.5 816.5Z"
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
            d="M2766.5 1576C2766.5 1518.84 2813.06 1472.5 2870.5 1472.5 2927.94 1472.5 2974.5 1518.84 2974.5 1576 2974.5 1633.16 2927.94 1679.5 2870.5 1679.5 2813.06 1679.5 2766.5 1633.16 2766.5 1576Z"
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
            d="M2706.5 728.5 2706.5 1677.54"
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
            d="M2693.5 1204.5 3026.87 1204.5"
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
        viewBox="0 0 1015 375"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip103">
            <rect x="1483" y="964" width="1015" height="375" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip103)" transform="translate(-1483 -964)">
          <path
            d="M1607.5 1250.5C1550.06 1250.5 1503.5 1204.16 1503.5 1147 1503.5 1089.84 1550.06 1043.5 1607.5 1043.5 1664.94 1043.5 1711.5 1089.84 1711.5 1147 1711.5 1204.16 1664.94 1250.5 1607.5 1250.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2367.5 1252.5C2310.06 1252.5 2263.5 1205.94 2263.5 1148.5 2263.5 1091.06 2310.06 1044.5 2367.5 1044.5 2424.94 1044.5 2471.5 1091.06 2471.5 1148.5 2471.5 1205.94 2424.94 1252.5 2367.5 1252.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1520.5 1311.5 2469.54 1311.5"
            stroke="#000000"
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1996.5 1324.87 1996.5 991.5"
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

export default PushBtnB;
