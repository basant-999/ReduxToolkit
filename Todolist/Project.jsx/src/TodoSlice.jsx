import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name:"todo",
    initialState:{
       task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console .log(actions.payload)
            state.task.push(actions.payload)
        }
        ,
        taskdelete:(state,actions)=>{
            // console.log(actions.payload)
            state.task=state.task.filter(item=>item.id!=actions.payload.id)
        }
        ,
        completeTask:(state,actions)=>{
           for(let i=0;i<state.task.length;i++){
             if(state.task[i].id==actions.payload.id){
                state.task[i].compoStatus=true
                }
           }
           console.log(actions.payload.id)

        }
        ,
        incompleteTask:(state,actions)=>{
            for(let i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].compoStatus=false
                }
            }
            console.log(actions.payload.id)
        },
        editSave:(state,actions)=>{
            for(let i=0;i<state.task.length;i++){
                if(state.task[i]==actions.payload.id){
                    state.task[i].work==actions.payload.data;

                }
            }
        }


    }
    
})
export const  {addTask,taskdelete,completeTask,incompleteTask,editSave} = todoSlice.actions
export default todoSlice.reducer