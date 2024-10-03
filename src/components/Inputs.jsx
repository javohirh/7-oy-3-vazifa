import React from "react";

function Inputs({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="py-5 px-4 rounded-xl bg-secondary-gray mb-6 hover:cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Inputs;
