import React from "react";
import "./Logo.css";
import burgerlogo from "../../assets/images/burger-logo.png";

const logo = (props) => (
    <div className="Logo" >
        {/* <img src="../../assets/images/burger-logo.png" /> */}
        <img src={burgerlogo} alt="MyBurger" />
    </div>
);
export default logo;