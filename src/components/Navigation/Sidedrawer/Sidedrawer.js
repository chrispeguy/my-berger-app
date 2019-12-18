import React from "react";
import Logo from "../../Logo/Logo";
import "./Sidedrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import NavigationItems from "../NavigationItems/NavigationItems";

const sidedrawer = (props) =>{
 

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className="Sidedrawer">
                <Logo/>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
        </Aux>
    )
};

export default sidedrawer;