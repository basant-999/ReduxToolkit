
import { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { Addtodo ,deletetask} from "./AddTodoslice"


function App() {
const [val,setVal] = useState("")
const mytask = useSelector((state)=>state.mytodo.todolist)
const dispatch = useDispatch()
console.log(mytask)

const ans = mytask.map((key)=>{
         return(
          <>
          <tr>
            <td> {key.work}</td>
            <td><button onClick={()=>{dispatch(deletetask({id:key.id}))}}>delete</button></td>
          </tr>
          
          </>
         )
})
  return (
    <>
      <h1> toda app</h1>
      Enter Todo:<input type=" text " value={val} onChange={(e)=>{setVal(e.target.value)}} />
      <button onClick={()=>{dispatch(Addtodo({work:val,id:Date.now()}))}}>Add</button>
     {ans}

     </>
  )
}
export default App