import React from "react";

const Slider = (props) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Slider;
