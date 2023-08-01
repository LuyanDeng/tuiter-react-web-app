//import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import HomeScreen from "./home";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducer/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Home from "./home";

const store =
    configureStore({
    reducer:{who:whoReducer,tuits:tuitsReducer}
});

function Tuiter(){

    return(
        <Provider store={store}>
        <div>
            {/*<Link to="/labs/a3">A3</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <Nav/>
            <div className="row">
                <div className="col-3 col-sm-3 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-9 col-sm-9 col-md-10 col-lg-7 col-xl-7">

                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                        </Routes>


                </div>
                <div className="d-none d-sm-none d-md-none d-lg-inline-block col-lg-4 col-xl-3">

                    <WhoToFollowList/>

                </div>
            </div>
        </div>
        </Provider>
    );
}
export default Tuiter;