import React from "react";
//import Tuit from "./tuit";
import {useSelector} from "react-redux";
import TuitsItem from "./tuit-item";

function TuitList() {
    const {tuits} = useSelector(state => state.tuits)
    return (
        <div className="list-group">
            {
                tuits.map(tuit => {
                    return(<TuitsItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    );
}

export default TuitList;