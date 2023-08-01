import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits-list";
import React from "react";

const HomeScreen= () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeScreen;