import React from "react";

export default function ImageCard({
  image,
  description = null,
  customCss = "",
  imageCss = "",
}) {
  function getImageClass() {
    if (description) {
      return "w-full " + imageCss;
    }

    return "w-full h-full " + imageCss;
  }

  return (
    <div className={"max-w-sm rounded overflow-hidden shadow-lg " + customCss}>
      <img src={image} alt="" className={getImageClass()} />
      {description ? (
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-blue-400">{description}</div>
        </div>
      ) : null}
    </div>
  );
}
