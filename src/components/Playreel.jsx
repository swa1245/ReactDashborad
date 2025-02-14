import React from "react";
import { FaDotCircle } from "react-icons/fa";
const Playreel = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-zinc-900">
      <div className="w-32 sm:w-96 aspect-video overflow-hidden  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full scale-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1739422660~exp=1739437060~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=5d2c6d26e1e17bc9a09a80f7aaeb54ab4729a7fa6279beffbdd689c2d22c7b8e&r=dXMtY2VudHJhbDE%3D"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full   py-20  text-white flex flex-col justify-between">
        <div className=" w-full flex items-center gap-5 justify-center ">
          <FaDotCircle className="w-4 text-white  " />
          <h2 className="text-sm text-white  ">Work In Motion</h2>
        </div>
        <h1 className="w-full flex justify-center gap-20 sm:gap-96">
          <div className="text-4xl sm:8xl font-light">Play</div>
          <div className="text-4xl sm:8xl font-light">Reel</div>
        </h1>
        <p className="text-center px-10 text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          molestiae.
        </p>
      </div>
    </div>
  );
};

export default Playreel;
