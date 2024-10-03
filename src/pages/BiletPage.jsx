import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Bilet from "../components/Bilet";

function BiletPage() {
  const [tab, setTab] = useState(1);
  return (
    <div className="max-w-[1200px] mx-auto">
      <button className="w-[380px] rounded-xl flex items-center m-auto my-12 bg-secondary-gray">
        <button
          onClick={() => setTab(1)}
          className={` ${
            tab === 1 ? "bg-main-gray text-main-red" : ""
          } w-1/2 rounded-xl text-center py-4 `}
        >
          Активные
        </button>
        <button
          onClick={() => setTab(2)}
          className={` ${
            tab === 2 ? "bg-main-gray text-main-red" : ""
          } w-1/2 rounded-xl text-center py-4 `}
        >
          История
        </button>
      </button>
      {tab == 1 && (
        <>
          <Bilet />
          <Bilet />
          <Bilet />
          <Bilet />
        </>
      )}

      {tab == 2 && (
        <>
          <Bilet tab={tab} />
          <Bilet tab={tab} />
          <Bilet tab={tab} />
        </>
      )}
      <Outlet />
    </div>
  );
}

export default BiletPage;
