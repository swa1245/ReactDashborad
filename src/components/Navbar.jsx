import React from "react";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-2xl   mx-auto px-5 py-5 sm:py-10 sm:px-10  flex text-white items-center justify-between  ">
        <div className="text-xl text-white">Logo</div>
        <span className="text-white sm:hidden">
          <TiThMenu />
        </span>
        <div className="links hidden sm:flex gap-10 ">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a className="text-sm font-light cursor-pointer">{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
