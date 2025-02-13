import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask,taskdelete } from "./TodoSlice"




const App=()=> {
 const [val,setVal] = useState("")
 const mytask = useSelector((state)=>state.todo.task)
 const Dismethod = useDispatch()
//  console.log (mytask)
  
     let sno = 0
 const ans = mytask.map((key)=>{
     sno++
       return(
        <>
        <tr>
            <td>{sno}</td>
            <td>{key.work}</td>
            <td><button onClick={()=>{Dismethod(taskdelete({id:key.id}))}}>delete</button></td>
        </tr>
        </>
       )
 })
 
   
  
  return (
    <>
        <h1>todo list</h1>
        Enter todo: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={()=>{Dismethod(addTask({work:val,id:Date.now()}))}}>add</button>
        
        {ans}
  </>
  )
}

export default App
