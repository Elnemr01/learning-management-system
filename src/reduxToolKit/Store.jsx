import { configureStore } from "@reduxjs/toolkit";
import enrollmentsSlice from "./EnrollmenrsArrSlice";



export let Store=configureStore({
    reducer : {
        enrolledCourses : enrollmentsSlice,
    }
})