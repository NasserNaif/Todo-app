import React from "react";
import photo from "../Nothing.png";

function NoElement() {
  return (
    <div>
      <img src={photo} alt="man Sitting" />
      <h2 className="nothing">Nothing to do</h2>
    </div>
  );
}

export default NoElement;
