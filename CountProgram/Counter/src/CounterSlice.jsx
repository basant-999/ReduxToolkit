import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"mycount",
    initialState:{
        count:0
},
    reducers:{
        increment:(state)=>{
            state.count=state.count+1  //state.count++
        },
        decrement:(state)=>{
            state.count=state.count-1  //state.count++
        },

    }
    
})
export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer