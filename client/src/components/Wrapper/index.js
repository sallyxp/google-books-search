import React from "react";
import "./style.css";

function Wrapper(props) {
  const bgimage = {
    backgroundImage: `url(https://)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
  return <main className="wrapper" style={bgimage}>{props.children}</main>;
}

export default Wrapper;