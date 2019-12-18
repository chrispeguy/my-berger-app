import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component{
    constructor(props){
        super(props);
        this.state ={
            showSidedrawer:false
        }
    }

    sidedrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer}
        });
    }

    SidedrawerClosedHandler =() =>{
        this.setState({showSidedrawer:false});
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleHandler} />
                <Sidedrawer 
                    open={this.state.showSidedrawer} 
                    closed={this.SidedrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>   
            </Aux>
        )
    } 
};

export default Layout;