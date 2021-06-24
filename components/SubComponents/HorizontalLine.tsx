import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function HorizontalLine({ width = "12px" }) {
  return (
    <div className="my-4 flex flex-wrap content-center justify-center">
      <FontAwesomeIcon
        icon={faDotCircle}
        style={{ width: width, marginRight: "10px" }}
      />
      <FontAwesomeIcon
        icon={faDotCircle}
        style={{ width: width, marginRight: "10px" }}
      />
      <FontAwesomeIcon
        icon={faDotCircle}
        style={{ width: width, marginRight: "10px" }}
      />
    </div>
  );
}
