import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import  NavigationItems from "../NavigationItems/NavigationItems";

const toolbar =(props) => (
    <header className="Toolbar" >
        <div>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>
            <Logo/>
        <nav>
            <NavigationItems/>
        </nav>    
    </header>
);
export default toolbar;