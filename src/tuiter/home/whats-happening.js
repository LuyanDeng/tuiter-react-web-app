import React, {useState} from "react";
import {AiOutlinePicture} from "react-icons/ai";
import {HiOutlineGif} from "react-icons/hi2";
import {MdFormatListBulleted} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarStats} from "react-icons/tb";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        //console.log(whatsHappening);
        const newTuit ={
            tuit:whatsHappening
        }
        dispatch(createTuit(newTuit));
        setWhatsHappening("");
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/nasa.png" width={60} alt="nasa"/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2 me-1 ">


                        <AiOutlinePicture className="me-1"/>
                        <HiOutlineGif className="me-1"/>
                        <MdFormatListBulleted className="me-1"/>
                        <BsEmojiSmile className="me-1"/>
                        <TbCalendarStats className="me-1"/>
                        <HiOutlineLocationMarker className=" me-1"/>
                        <BiBold className=" me-1 "/>
                        <BiItalic className="me-1"/>

                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;