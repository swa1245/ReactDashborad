import React from "react";
import { FaPlus } from "react-icons/fa";

const Work = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10  text-black ">
        <div className="text-black text-xs flex gap-4  items-center">
          <FaPlus />
          <h1 className="capitalize">Featured</h1>
          
        </div>
        <h1 className="text-5xl mt-6">Work </h1>
      </div>
    </div>
  );
};

export default Work;
