import { createSlice } from "@reduxjs/toolkit";
import whoArray from "./data/who.json";
// initialize the reducer's state
const whoSlice=createSlice(
    {
        name: "who",
        initialState: whoArray
    }
);
// export reducer
export default whoSlice.reducer;