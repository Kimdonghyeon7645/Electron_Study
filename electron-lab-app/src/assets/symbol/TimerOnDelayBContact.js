import React from "react";

const TimerOnDelayBContact = ({
  width = "13.5",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 326 1018"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip6">
            <rect x="1058" y="114" width="326" height="1018" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip6)" transform="translate(-1058 -114)">
          <path
            d="M1152.5 240.5C1152.5 183.062 1198.84 136.5 1256 136.5 1313.16 136.5 1359.5 183.062 1359.5 240.5 1359.5 297.938 1313.16 344.5 1256 344.5 1198.84 344.5 1152.5 297.938 1152.5 240.5Z"
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
            d="M1150.5 1000.5C1150.5 943.062 1197.06 896.5 1254.5 896.5 1311.94 896.5 1358.5 943.062 1358.5 1000.5 1358.5 1057.94 1311.94 1104.5 1254.5 1104.5 1197.06 1104.5 1150.5 1057.94 1150.5 1000.5Z"
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
            d="M1090.5 153.5 1090.5 1102.54"
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
            d="M1092.5 495.5 1291.5 632.733 1092.5 760.5Z"
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
        viewBox="0 0 1014 317"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip106">
            <rect x="2829" y="792" width="1014" height="317" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip106)" transform="translate(-2829 -792)">
          <path
            d="M2953.5 1020.5C2896.06 1020.5 2849.5 973.938 2849.5 916.5 2849.5 859.063 2896.06 812.5 2953.5 812.5 3010.94 812.5 3057.5 859.063 3057.5 916.5 3057.5 973.938 3010.94 1020.5 2953.5 1020.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3713 1021.5C3655.84 1021.5 3609.5 975.161 3609.5 918 3609.5 860.838 3655.84 814.5 3713 814.5 3770.16 814.5 3816.5 860.838 3816.5 918 3816.5 975.161 3770.16 1021.5 3713 1021.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2865.5 1081.5 3814.54 1081.5"
            stroke="#000000"
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3207.5 1079.5 3345.25 880.5 3473.5 1079.5Z"
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

export default TimerOnDelayBContact;
