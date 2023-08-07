import React, {useEffect}from "react";
//import Tuit from "./tuit";
import {useDispatch,useSelector} from "react-redux";
import TuitsItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";
const TuitList= () => {
    //grab tuits and loading flag from reducer on component load
    const {tuits,loading} = useSelector(state => state.tuits)

    const dispatch = useDispatch();
    //invoke find tuits thunk to fetch tuits and put them in the reducer's store
    //so we can extract them with useSelector() and render the tuits here
    useEffect(() => {
        dispatch(findTuitsThunk())

    }, [dispatch]); //not sure here

    return (
        <div className="list-group">
            {
                // if loading flag is true, then show a loading message
                // while data is still  coming back from the server
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return(<TuitsItem key={tuit._id} tuit={tuit}/>)
                }
                )
            }
        </div>
    );
}

export default TuitList;