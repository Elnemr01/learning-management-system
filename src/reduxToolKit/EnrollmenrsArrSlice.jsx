import { createSlice } from "@reduxjs/toolkit";

export let enrollmentsSlice=createSlice({
    initialState :[],
    name: "enrollmentsSlice",
    reducers: {
        addCourse: (state,action)=> {
            
        }
    }
})



export let {}=enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;