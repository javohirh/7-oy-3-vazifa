import React from "react";

function Seans({ color = "#A1A1A1" }) {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4V20H18V4H6ZM5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2Z"
        fill={color}
      />
      <path
        d="M2.75 6L2.75 5.25L1.25 5.25L1.25 6L2.75 6ZM1.25 6L1.25 18L2.75 18L2.75 6L1.25 6Z"
        fill={color}
      />
      <path
        d="M22.75 6L22.75 5.25L21.25 5.25L21.25 6L22.75 6ZM21.25 6L21.25 18L22.75 18L22.75 6L21.25 6Z"
        fill={color}
      />
    </svg>
  );
}
export default Seans;
