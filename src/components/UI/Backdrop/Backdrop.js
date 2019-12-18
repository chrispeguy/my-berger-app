import React from "react";
import "./backdrop.css";
const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.cliked}> 

                 </div>: null
); 
export default backdrop;