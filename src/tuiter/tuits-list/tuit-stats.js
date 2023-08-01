

//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
    return(
        <div className="row">
            <div className="col">
            <a href="/#" className="col text-secondary text-decoration-none">
                <i className="bi bi-chat pe-1 pe-sm-2"></i><span>{tuit.replies}</span>
            </a>
            </div>
            <div className="col">
            <a href="/#" className="col text-secondary text-decoration-none">
                <i className="bi bi-arrow-repeat pe-1 pe-sm-2"></i>
                <span>{tuit.retuits}</span>
            </a>
            </div>
            <div className="col">
            <a href="/#" className="col text-secondary text-decoration-none">
                {tuit.liked &&<i className="bi bi-heart-fill pe-sm-2"> </i> }
                {!tuit.liked &&<i className="bi bi-heart pe-1 pe-sm-2"> </i>}
                <span>{tuit.likes}</span>
            </a>
            </div>
            <a href="/#" className="col text-secondary text-decoration-none">
                <i className="bi bi-arrow-bar-up pe-1 pe-sm-2"></i>
            </a>
        </div>


    );
}
export default TuitStats