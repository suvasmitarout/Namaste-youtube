import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        menuIsOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.menuIsOpen=!state.menuIsOpen;
        },
    },  
});

export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;