import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk} from "./auth-thunks";
const initialState = {
    // users: [],
    // loading: false,
    // error: null,
    currentUser: null
};
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    // declaring a loginThunk to store the logged in user in the payload
    extraReducers:{
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
         },

        [loginThunk.fulfilled]:(state,{payload}) => {
            //in a state variable called currentUser
            state.currentUser = payload;
        },
    },
    });
export default authSlice.reducer;