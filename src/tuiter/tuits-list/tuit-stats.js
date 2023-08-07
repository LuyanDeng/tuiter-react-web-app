import {useDispatch} from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {FaHeart} from "react-icons/fa";
import {BiDislike, BiSolidDislike} from "react-icons/bi";

const TuitStats =(
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
    // <FaHeart
    //     className="text-danger"
    //     onClick={() =>
    //         dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
    //     }
    // />
    //     <span className="ms-2">{tuit.likes}</span>
    const clickLikeHeartHandler = () => {
        const updatedTuit = {
            ...tuit,
            likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked : !tuit.liked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

    const clickDislikeThumbHandler = () => {
        const updatedTuit = {
            ...tuit,
            dislikes : tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked : !tuit.disliked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

    return(
        <div className="row justify-content-evenly">

            <button className="col text-secondary border-0 bg-transparent text-start">
                <i className="bi bi-chat pe-1 pe-sm-2"></i><span>{tuit.replies}</span>
            </button>

            <button className="col text-secondary border-0 bg-transparent text-start">
                <i className="bi bi-arrow-repeat pe-1 pe-sm-2"></i>
                <span>{tuit.retuits}</span>
            </button>
            <button className="col text-secondary border-0 bg-transparent text-start"  onClick={clickLikeHeartHandler}>
                {tuit.liked &&<i className="bi bi-heart-fill pe-sm-2"> </i> }
                {!tuit.liked &&<i className="bi bi-heart pe-1 pe-sm-2"> </i>}
                <span>{tuit.likes}</span>
        </button>
            <button className="col text-secondary border-0 bg-transparent text-start" onClick={clickDislikeThumbHandler}>
                {tuit.disliked &&<BiSolidDislike color={ 'gray' }/>}
                {!tuit.disliked && <BiDislike/>}
                <span>{tuit.dislikes}</span>
            </button>
            <button className="col text-secondary border-0 bg-transparent text-start">
                <i className="bi bi-arrow-bar-up pe-1 pe-sm-2"></i>
            </button>
        </div>


    );
}
export default TuitStats