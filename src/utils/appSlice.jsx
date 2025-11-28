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
        closeMenu:(state)=>{
            state.menuIsOpen=false;
        }
    },  
});

export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;