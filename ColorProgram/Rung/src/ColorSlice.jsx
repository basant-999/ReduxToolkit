import {createSlice} from "@reduxjs/toolkit"


const ColorSlice = createSlice({
    name: "myrung",
    initialState:{
        color:"red"
    },
    reducers:{
        changColor:(state,actions)=>{
            console.log(actions.payload)
            state.color = (actions.payload)
        }
    }
})
export default ColorSlice.reducer
export const {changColor} = ColorSlice.actions