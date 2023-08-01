import React from "react";
//import whoArray from './who.json';
import "./index.css";

const WhoToFollowItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {

    return (

        <li className="list-group-item ">
            <div className="row align-items-center">
                <div className=" col-xxl-2 col-xl-3 col-lg-4">
                    <img className="rounded-circle" height={46} src={`/images/${who.avatarIcon}`} alt={'logo'}/>
                </div>
                <div className="col-xxl-8  col-xl-7 col-lg-4 text-nowrap">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>

                <div className="col-lg-2 col-xl-2 col-xxl-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowItem;
