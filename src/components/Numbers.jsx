import React from "react";
export function Numbers({ day, date }) {
  return (
    <button className="w-14 h-14 flex flex-col items-center justify-center hover:border-main-red hover:border  bg-secondary-gray rounded-xl">
      <p>{day}</p>
      <p>{date}</p>
    </button>
  );
}
