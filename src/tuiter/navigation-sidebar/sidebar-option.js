import React from "react";
//import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
    return (
       // <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <div className="sidebarOption d-flex align-items-center">
            <Icon className="me-2"/>
            <span className="d-none d-lg-inline">{text}</span>
        </div>
    );
}

export default SidebarOption;