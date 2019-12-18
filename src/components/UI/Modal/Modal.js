import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";


const modal = (props) => (
    <Aux> 
        <Backdrop show={props.show} cliked={props.modalClosed} >

        </Backdrop>
        <div className="Modal"
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh",
                    opacity: props.show ? "1" : "0"
                }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;