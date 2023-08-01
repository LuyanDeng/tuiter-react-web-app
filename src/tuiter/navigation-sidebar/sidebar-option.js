import React from "react";
//import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
    return (
       // <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <div className="sidebarOption d-lg-flex align-items-center">
            <Icon className="col-xl-2 me-2"/>
            <span className="d-none d-xl-inline col-xl-10">{text}</span>
        </div>
    );
}

export default SidebarOption;