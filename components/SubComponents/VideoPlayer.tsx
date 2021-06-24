import React from "react";

export default function VideoPlayer({ link }) {
  return (
    <iframe
      className="mb-6"
      width="560"
      height="315"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    ></iframe>
  );
}
