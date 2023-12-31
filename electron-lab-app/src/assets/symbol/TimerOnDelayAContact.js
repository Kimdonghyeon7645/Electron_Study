import React from "react";

const TimerOnDelayAContact = ({
  width = "26.8",
  height = "42",
  fill = "#000000",
  isVertical = true,
}) => {
  if (isVertical)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 651 1022"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip5">
            <rect x="137" y="114" width="651" height="1022" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip5)" transform="translate(-137 -114)">
          <path
            d="M163.5 242.5C163.5 185.062 209.839 138.5 267 138.5 324.162 138.5 370.5 185.062 370.5 242.5 370.5 299.938 324.162 346.5 267 346.5 209.839 346.5 163.5 299.938 163.5 242.5Z"
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
            d="M161.5 1002.5C161.5 945.062 208.062 898.5 265.5 898.5 322.938 898.5 369.5 945.062 369.5 1002.5 369.5 1059.94 322.938 1106.5 265.5 1106.5 208.062 1106.5 161.5 1059.94 161.5 1002.5Z"
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
            d="M536.5 155.5 536.5 1104.54"
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
            d="M538.5 497.5 737.5 634.733 538.5 762.5Z"
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
        viewBox="0 0 1014 646"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        <defs>
          <clipPath id="clip105">
            <rect x="2827" y="73" width="1014" height="646" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip105)" transform="translate(-2827 -73)">
          <path
            d="M2951 697.5C2893.84 697.5 2847.5 650.937 2847.5 593.5 2847.5 536.062 2893.84 489.5 2951 489.5 3008.16 489.5 3054.5 536.062 3054.5 593.5 3054.5 650.937 3008.16 697.5 2951 697.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3710.5 698.5C3653.06 698.5 3606.5 651.938 3606.5 594.5 3606.5 537.062 3653.06 490.5 3710.5 490.5 3767.94 490.5 3814.5 537.062 3814.5 594.5 3814.5 651.938 3767.94 698.5 3710.5 698.5Z"
            stroke="#000000"
            strokeWidth="41.25"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M2863.5 323.5 3812.54 323.5"
            stroke="#000000"
            strokeWidth="55"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M3205.5 322.5 3342.73 123.5 3470.5 322.5Z"
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

export default TimerOnDelayAContact;
