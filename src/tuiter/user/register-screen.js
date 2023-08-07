import React, { useState } from "react";
import { useNavigate } from "react-router";  // to navigate to profile after login

import { useDispatch } from "react-redux";  // to invoke thunks
import { registerThunk } from "./auth-thunks";

function RegisterScreen(){
    const[username, setUsername] = useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async ()=>{
        try {
            await  dispatch(registerThunk({username, password}));
            navigate("/profile");
        }
        catch (e){
            alert(e);
        }
    };
    return(
        <div>
            <h1>Register</h1>
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2"
                    onClick={handleRegister}>
                Register
            </button>
        </div>


    );
}
export default RegisterScreen;
