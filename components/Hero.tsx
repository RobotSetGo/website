import React from "react";

export default function Hero({
  title,
  subtitle,
  bgImage = null,
  minHeight = "90vh",
  customImage = null,
}) {
  return (
    <div
      id="hero"
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: minHeight,
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("${bgImage}")`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-2 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">{title}</h1>
              <p className="mt-4 text-lg text-gray-300">{subtitle}</p>
              {customImage ? (
                <img className="block mx-auto mt-6" src={customImage} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
