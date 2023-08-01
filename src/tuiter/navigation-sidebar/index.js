import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./sidebar.css"
//import sidebars from "./sidebars.json";
//import SideBarItem from "./sidebar-item";

import {BsPerson, BsTwitter} from "react-icons/bs";
import {CiCircleMore, CiViewList} from "react-icons/ci";
import {PiBookmarkSimpleBold} from "react-icons/pi";
import {SlEnvolope} from "react-icons/sl";
import {AiOutlineBell} from "react-icons/ai";
import {BiHash, BiSolidHome} from "react-icons/bi";
import SidebarOption from "./sidebar-option";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
   const [ignore, tuiter, active] = pathname.split("/");
    //const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    //const [location] = React.useState(useLocation().pathname);
    //const [moreActive, setMoreActive] = React.useState(false);
    return (
        <div className="list-group ">

            {/*{sidebars.map((sidebar) =>{*/}
            {/*    return(*/}
            {/*    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>*/}
            {/*        {link}*/}
            {/*  </Link>*/}
            {/*<SideBarItem key={sidebar._id} sidebar={sidebar} active={active ? active : "home"}/>)*/}
            {/*})*/}

            {/*}*/}
            <div className="sidebar">

                    <BsTwitter className="twitter-icon"/>

                <Link to={"/tuiter/ "} className={`list-group-item
                ${active === "home" ? "active" : ""}`}>

                </Link>
                <Link to={"/tuiter/home "} className={`list-group-item
                ${active === "home" ? "active" : ""}`}>

                    <SidebarOption
                        text="Home"
                        Icon={BiSolidHome}
                    />
                </Link>

                <Link to={"/tuiter/explore "} className={`list-group-item
                ${active === "explore" ? "active" : ""}`}>
                    <SidebarOption
                        text="Explore"
                        Icon={BiHash}

                    />
                </Link>
                <Link to={"/tuiter/notifications "} className={`list-group-item
                ${active === "notifications" ? "active" : ""}`}>
                    <SidebarOption
                        text="Notifications"
                        Icon={AiOutlineBell}

                    />
                </Link>
                <Link to={"/tuiter/messages "} className={`list-group-item
                ${active === "messages" ? "active" : ""}`}>
                    <SidebarOption
                        text="Messages"
                        Icon={SlEnvolope}

                    />
                </Link>
                <Link to={"/tuiter/bookmarks "} className={`list-group-item
                ${active === "bookmarks" ? "active" : ""}`}>
                    <SidebarOption
                        text="Bookmarks"
                        Icon={PiBookmarkSimpleBold}

                    />
                </Link>
                <Link to={"/tuiter/lists "} className={`list-group-item
                ${active === "lists" ? "active" : ""}`}>
                    <SidebarOption
                        text="Lists"
                        Icon={CiViewList}
                    />
                </Link>
                <Link to={"/tuiter/profile "} className={`list-group-item
                ${active === "profile" ? "active" : ""}`}>
                    <SidebarOption
                        text="Profile"
                        Icon={BsPerson}

                    />
                </Link>
                <Link to={"/tuiter/more "} className={`list-group-item
                ${active === "more" ? "active" : ""}`}>
                    <SidebarOption text="More" Icon={CiCircleMore}/>
                </Link>

                <div className="d-grid mt-2">
                    <button className="btn btn-primary btn-block rounded-pill">Tuit</button>
                </div>
            </div>
        </div>
            );
            }
            export default NavigationSidebar;