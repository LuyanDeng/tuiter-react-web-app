import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
//initial state has no tuits and loading flag to display spinner
const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    //initialState: { tuits: tuits },
    initialState, //an object
    //// define asynchronous reducers
    extraReducers:{
        // if request is not yet fulfilled, set loading true so UI can display spinner empty tuits since we are
        // still fetching them
        [findTuitsThunk.pending]:
            (state)=>{
            state.loading = true
                state.tuits = []},
        // when we get response, request is fulfilled
        // we extract/destruct payload from action object
        // turn off loading flag since we have the data
        // payload has tuits from server and update redux state

        [findTuitsThunk.fulfilled]:
            (state,{payload})=> {
            state.loading = false
                state.tuits = payload},
        // if request times out, or responds with error  reset loading flag
        // report error
        [findTuitsThunk.rejected]:
            (state,action)=>{
                state.loading = false
                state.error = action.error
        },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                //state.tuits.unshift(payload)
                state.tuits.push(payload);
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
            }



    },
    reducers: {
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});
export const {createTuit,deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;