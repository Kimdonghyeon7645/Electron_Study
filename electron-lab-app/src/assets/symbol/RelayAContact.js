import React from "react";

const RelayAContact = ({
  width = "17.5",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 426 1022"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip2">
            <rect x="591" y="215" width="426" height="1022" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip2)" transform="translate(-591 -215)">
          <path
            d="M614.5 342.5C614.5 285.062 661.062 238.5 718.5 238.5 775.938 238.5 822.5 285.062 822.5 342.5 822.5 399.938 775.938 446.5 718.5 446.5 661.062 446.5 614.5 399.938 614.5 342.5Z"
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
            d="M612.5 1102.5C612.5 1045.06 659.062 998.5 716.5 998.5 773.938 998.5 820.5 1045.06 820.5 1102.5 820.5 1159.94 773.938 1206.5 716.5 1206.5 659.062 1206.5 612.5 1159.94 612.5 1102.5Z"
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
            d="M987.5 255.5 987.5 1204.54"
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
        viewBox="0 0 1015 424"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip102">
            <rect x="160" y="440" width="1015" height="424" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip102)" transform="translate(-160 -440)">
          <path
            d="M284.5 841.5C227.062 841.5 180.5 794.938 180.5 737.5 180.5 680.062 227.062 633.5 284.5 633.5 341.938 633.5 388.5 680.062 388.5 737.5 388.5 794.938 341.938 841.5 284.5 841.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1044.5 843.5C987.062 843.5 940.5 796.938 940.5 739.5 940.5 682.062 987.062 635.5 1044.5 635.5 1101.94 635.5 1148.5 682.062 1148.5 739.5 1148.5 796.938 1101.94 843.5 1044.5 843.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M197.5 467.5 1146.54 467.5"
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

export default RelayAContact;
