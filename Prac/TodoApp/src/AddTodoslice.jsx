import {createSlice} from "@reduxjs/toolkit"

const AddtodoSlice = createSlice({
    name:"mytodo",
    initialState:{
        todolist:[]
    },
    reducers:{

    Addtodo:(state,actions)=>{
        console.log(actions.payload)
        state.todolist.push(actions.payload)
    },
    deletetask:(state,actions)=>{
        state.todolist=state.todolist.filter(itm=>itm.id!==actions.payload.id)
    }
}



})
export const {Addtodo,deletetask} = AddtodoSlice.actions
 export default AddtodoSlice.reducer