import React from "react";
import {BsFillCheckCircleFill} from "react-icons/bs";
const TuitSummaryItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div><span className={"fw-bolder pe-1"}>{tuit.userName}</span>
                        <span><BsFillCheckCircleFill className="me-2 " style={{ color: "#1DA1F2" }}/></span>
                        <span className="text-secondary">{tuit.handle}{'\u00B7'} {tuit.time}</span>
                    </div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt="..."/>
                </div>
            </div>
        </li>
    );
};
export default TuitSummaryItem;