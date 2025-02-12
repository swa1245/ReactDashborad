import React from "react";

const Landing = () => {
  return (
    <div className=" relative w-full h-[150vh] sm:h-[250vh] ">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0 ">
        <div className="max-w-screen-2xl text-white text-xl   h-full mx-auto px-5  sm:px-10">
          <div className="mt-72 text-white text-xl  ">
            <p className="sm:text-2xl">Lorem ipsum dolor sit amet.</p>
            <p className="sm:text-2xl">Lorem ipsum dolor sit amet.</p>
            <p className="sm:text-2xl">Lorem ipsum dolor sit amet.</p>
            <p className="sm:text-2xl">Lorem, ipsum dolor.</p>
          </div>
          <div className="mt-6 sm:mt-12">
            <h1 className="sm:text-9xl text-5xl tracking-tight leading-none text-white font-black">
              Digital
            </h1>
            <h1 className="sm:text-9xl text-5xl tracking-tight leading-none text-white font-black">
              Design
            </h1>
            <h1 className="sm:text-9xl text-5xl tracking-tight leading-none text-white font-black">
              Experince
            </h1>
          </div>
          <div className="mt-20  sm:w-1/3 text-white text-xl ">
            <p className="sm:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos maxime cum, consectetur repellendus est quae sed unde
              sit totam ullam.
            </p>
          </div>
          <a
            className="border-b-2 sm:text-2xl border-zinc-200 mt-10 inline-block pb-1"
            href="#"
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
