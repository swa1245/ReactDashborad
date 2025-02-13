import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "pixel flxes",
      sunheading: "Lorem ipsum dolor sit amet.",
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1739368342~exp=1739382742~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=bf2ae8b320a656bc2280370bb69010ad51a8d802203ebbf9fbe9a0ec580ea714&r=dXMtd2VzdDE%3D",
    },
    {
      heading: "fast flxes",
      sunheading: "Lorem ipsum dolor sit amet.",
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1739368342~exp=1739382742~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=bf2ae8b320a656bc2280370bb69010ad51a8d802203ebbf9fbe9a0ec580ea714&r=dXMtd2VzdDE%3D",
    },
    {
      heading: "digital flxes",
      sunheading: "Lorem ipsum dolor sit amet.",
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)",
      video:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1739368342~exp=1739382742~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=bf2ae8b320a656bc2280370bb69010ad51a8d802203ebbf9fbe9a0ec580ea714&r=dXMtd2VzdDE%3D",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10  text-black ">
        <div className="text-black text-xs flex gap-4  items-center">
          <FaPlus />
          <h1 className="capitalize">Featured</h1>
        </div>
        <h1 className="text-5xl mt-6">Work </h1>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dolore incidunt mollitia accusamus doloribus voluptatibus!
        </p>
        <div className="elems sm:flex sm:gap-9 sm:flex-wrap mt-10">
          {elems.map((item, index) => {
            return (
              <div className="elem w-full sm:w-[48%]   mt-10">
                <div className="video w-full h-[104vw] sm:gap-9 sm:h-[50vw] relative overflow-hidden ">
                  <img
                    className="w-full hidden sm:block h-full object-cover"
                    src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/2400x2990/filters:quality(80)"
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block sm:hidden w-full scale-125 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{item.heading}</h3>
                  <p className="capitalize opacity-65">
                    {item.sunheading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
