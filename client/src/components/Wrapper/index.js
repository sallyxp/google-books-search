import React from "react";
import "./style.css";



function Wrapper(props) {
  const bgimage = {
    //  backgroundImage: `url(https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)`,
      backgroundImage: `url(https://images.unsplash.com/photo-1432251407527-504a6b4174a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`,
  

     
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
  return <main className="wrapper" style={bgimage}>{props.children}</main>;
}

export default Wrapper;