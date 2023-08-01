import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../tuits/tuits-reducer";
import {BsFillCheckCircleFill} from "react-icons/bs";

const TuitItem = (
    {
        tuit = {
            _id: 798,
            topic: "Space",
            userName: "SpaceX",
            title: "Falcon Heavy launches SpaceX’s 250th successful mission overall!",
            time: "2h",
            image: "SpaceX.png",
            liked: true,
            replies: 3499,
            retuits: 3888,
            likes: 5000,
            handle: "@spacex",
            tuit: "The landmark mission was launched by SpaceX's Falcon Heavy rocket. The rocket, dubbed “scary” by Musk, launched the Hughes JUPITER 3 mission to a geosynchronous transfer orbit from Florida on Friday at 11:04 p.m. ET"
        },
    }
)=> {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={70} className="float-left rounded-circle " src={`/images/${tuit.image}`} alt="..."/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className={"fw-bolder pe-1"}>{tuit.userName}</span>
                        <span><BsFillCheckCircleFill className="me-2 " style={{ color: "#1DA1F2" }}/></span>
                        <span className="text-secondary">{tuit.handle}{'\u00B7'} {tuit.time}</span>
                    </div>
                    {/*<div className="fw-bolder">{tuit.topic}</div>*/}
                    {/*<div>{tuit.title}</div>*/}
                    <div className="mb-4">
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
                </div>


        </li>
    );
};
export default TuitItem;
