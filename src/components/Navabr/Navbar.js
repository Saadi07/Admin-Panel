import React from "react";

import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";

let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

function Header() {
  return (
    <div className="items-center justify-between w-full space-x-4 pb-2 pt-2 px-3">
      {/* logo */}

      {/* navlinks */}

      {/* login */}
      <div className="border-b  border-gray-900 pb-6 hidden md:flex items-center justify-end px-3 space-x-6 w-[100%]">
        <div>
          <FiSearch />
        </div>
        <div className="icon">
          <GrNotification />
        </div>
        <img
          src={userImg}
          className="w-8 h-8 rounded-full object-center object-cover "
          alt="userimg"
        />
      </div>
    </div>
  );
}

export default Header;
