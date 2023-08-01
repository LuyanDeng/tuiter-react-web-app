import React from "react";
import { Link, useLocation } from "react-router-dom";
import sidebars from "./sidebars.json";
import SideBarItem from "./sidebar-item";
const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    //const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    return (
        <div className="list-group">

            {sidebars.map((sidebar) =>{
                return(
             //   <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
              //      {link}
              //  </Link>
                <SideBarItem key={sidebar._id} sidebar={sidebar} active={active ? active : "home"}/>)
            })

            }
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill">Tuit</button>
            </div>

        </div>
    );
};
export default NavigationSidebar;