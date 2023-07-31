import React from "react";
import {Provider} from "react-redux";

import {configureStore, createStore} from "@reduxjs/toolkit";
import hello from "./reducers/hello";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component"
//const store = createStore(hello);
const store = configureStore({reducer:{hello, todos}})
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            {/*Provider delivers the content of the store to all its child components.*/}

        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};

export default ReduxExamples;