//wrap an asynchronous HTTP function so that it can interact
// with a Redux reducer to store data from a remote server into
// a local redux store
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";  // import all exported functions as service

//wraps the findTuits HTTP service function
export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits",
    async () => await service.findTuits()
);
//Returned data goes in redux action's payload
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) =>{
       //  wraps service method

        await service.deleteTuit(tuitId);
        return tuitId; //return tuit ID so we can remove tuit from reducer's store

    }
);
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await  service.createTuit(tuit);
        return newTuit;
    }
);
export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

