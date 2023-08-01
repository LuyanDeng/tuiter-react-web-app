import {Link} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SideBarItem = ({
                                   sidebar = {
                                       stack: false,
                                       iconMain: "fa-brands fa-twitter",
                                       iconSub: "",
                                       name: ""
                                   },
                                   active = ""
                               }) => {

    return (
        <Link to={`/tuiter/${!sidebar.name ? "home" : sidebar.name}`}
              className={`list-group-item ${sidebar.name && active === sidebar.name ? 'active' : ''}`}>
            <div className="row">
                <div className="col-xl-2">

                    {!sidebar.stack && <FontAwesomeIcon icon={sidebar.iconMain}/>}
                    {sidebar.stack }
                </div>
                <div className="d-none d-xl-inline col-xl-10">
                    {sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </Link>
    )
}
export default SideBarItem;