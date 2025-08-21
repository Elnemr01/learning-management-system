import { createSlice } from "@reduxjs/toolkit";

export let enrollmentsSlice=createSlice({
    initialState :[],
    name: "enrollmentsSlice",
    reducers: {
        addCourse: (state,action)=> {
            state.push(action.payload);
            return state;
        }
    }
})



export let {addCourse}=enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;