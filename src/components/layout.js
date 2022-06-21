import React, { Children } from "react";
import { MdNavigateBefore } from "react-icons/md";
import Sidebar from "./Sidebar/Sidebar";
import Navabr from "./Navabr/Navbar";

const layout = ({ Children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Navabr />
      </div>
      <main>{Children}</main>
    </>
  );
};

export default layout;
