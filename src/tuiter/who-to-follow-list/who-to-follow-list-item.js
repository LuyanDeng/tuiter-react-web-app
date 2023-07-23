import React from "react";
//import whoArray from './who.json';


const WhoToFollowItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="d-block col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt={'logo'}/>
                </div>
                <div className="d-block col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-3 col-md-2 text-wrap">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowItem;
