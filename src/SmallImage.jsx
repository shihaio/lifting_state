import React from "react";

function SmallImage(props) {
  console.log("props from SmallImage: ", props);
  return (
    <img
      className="thumb"
      id={props.city}
      src={props.src}
      alt={props.city}
      key={index}
      onClick={() => props.handleClick(props.img)}
    />
  );
}

export default SmallImage;
