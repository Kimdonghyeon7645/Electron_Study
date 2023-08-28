import React from "react";

const PushBtnA = ({
  width = "31",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 747 1018"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip0">
            <rect x="114" y="577" width="747" height="1018" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip0)" transform="translate(-114 -577)">
          <path
            d="M139.5 704.5C139.5 647.062 186.062 600.5 243.5 600.5 300.938 600.5 347.5 647.062 347.5 704.5 347.5 761.938 300.938 808.5 243.5 808.5 186.062 808.5 139.5 761.938 139.5 704.5Z"
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
            d="M137.5 1464.5C137.5 1407.06 184.062 1360.5 241.5 1360.5 298.938 1360.5 345.5 1407.06 345.5 1464.5 345.5 1521.94 298.938 1568.5 241.5 1568.5 184.062 1568.5 137.5 1521.94 137.5 1464.5Z"
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
            d="M512.5 617.5 512.5 1566.54"
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
            d="M499.5 1093.5 832.872 1093.5"
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
        viewBox="0 0 1015 744"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip100">
            <rect x="1485" y="120" width="1015" height="744" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip100)" transform="translate(-1485 -120)">
          <path
            d="M1609.5 841.5C1552.06 841.5 1505.5 794.938 1505.5 737.5 1505.5 680.062 1552.06 633.5 1609.5 633.5 1666.94 633.5 1713.5 680.062 1713.5 737.5 1713.5 794.938 1666.94 841.5 1609.5 841.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2369.5 843.5C2312.06 843.5 2265.5 796.938 2265.5 739.5 2265.5 682.062 2312.06 635.5 2369.5 635.5 2426.94 635.5 2473.5 682.062 2473.5 739.5 2473.5 796.938 2426.94 843.5 2369.5 843.5Z"
            stroke={fill}
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1522.5 467.5 2471.54 467.5"
            stroke={fill}
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1998.5 480.872 1998.5 147.5"
            stroke={fill}
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
        </g>
      </svg>
    );
};

export default PushBtnA;
