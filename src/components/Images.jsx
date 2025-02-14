import React from "react";

const Images = () => {
  return (
    <div className="w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] h-1/2 relative ">
        <div className="w-20 h-32 bg-amber-800 -right-1/3 top-6 absolute">
          <img
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-32 aspect-video bg-amber-800 -left-2/3 top-1/3 absolute">
          <video
            muted
            autoPlay
            loop
            src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1739545850~exp=1739560250~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=520ddda9e3dc818fdf9bf6b38dca8196503c750fdc773f9342298e0c66c47e56&r=dXMtY2VudHJhbDE%3D"
            className="w-full h-full scale-110 "
          ></video>
        </div>
        <div className="w-36 aspect-video bg-amber-800 -left-[65%] -bottom-10 absolute">
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-40 aspect-video bg-amber-800 -right-[70%] -bottom-14 absolute">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full  object-cover"
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <img
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
