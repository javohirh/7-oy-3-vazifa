import React from "react";

function Profile({ color = "#A1A1A1" }) {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="2"
        width="8"
        height="8"
        rx="4"
        fill={color}
        stroke={color}
        stroke-width="2"
      />
      <mask id="path-2-inside-1_949_25976" fill="white">
        <rect x="3" y="14" width="18" height="9" rx="1" />
      </mask>
      <rect
        x="3"
        y="14"
        width="18"
        height="9"
        rx="1"
        fill={color}
        stroke={color}
        stroke-width="4"
        mask="url(#path-2-inside-1_949_25976)"
      />
    </svg>
  );
}
export default Profile;
