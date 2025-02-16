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
    },
    cmp:(state,actions)=>{
        for(let i=0;i<state.todolist.length;i++){
            if(state.todolist[i].id==actions.payload.id){
                state.todolist[i].cmpstatus=false
            }
        }
    },
    inc :(state,actions)=>{
        for(let i=0;i<state.todolist.length;i++){
            if(state.todolist[i].id==actions.payload.id){
                state.todolist[i].cmpstatus=true
            }
        }
    },
    taskeditSave:(state,actions)=>{
        for(let i=0;i<state.todolist.length;i++){
            if(state.todolist[i].id==actions.payload.id){
                state.todolist[i].work=actions.payload.data
            }
        }
    }
}



})
export const {Addtodo,deletetask,cmp,inc,taskeditSave} = AddtodoSlice.actions
 export default AddtodoSlice.reducer