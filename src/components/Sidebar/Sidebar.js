import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { MdPlumbing } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
//import logo from "./assets/logo.png";

function Sidebar({ children }) {
  const [open, setOpen] = useState(true);

  const route = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/taskers",
      name: "Taskers",
      icon: <MdPlumbing />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <BsCartCheck />,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <BiCog />,
      gap: true,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <AiOutlineLogout />,
    },
  ];
  let userImg =
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="icon" onClick={() => setOpen(!open)}></div>
        <div
          className={`bg-white text-dark-purple text-3xl absolute -right-3 top-8 rounded-full border border-dark-purple cursor-pointer  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <BsArrowRightShort />
        </div>
        <div className="flex gap-x-4 items-center w-6 h-6 rounded-full object-center object-cover">
          <img
            src={userImg}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-10">
          {route.map((route, index) => (
            <li>
              <NavLink
                to={route.path}
                key={route.name}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${route.gap ? "mt-9" : "mt-2"} `}
              >
                <div className="icon">{route.icon}</div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {route.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
