
import { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { Addtodo ,deletetask,cmp,inc,taskeditSave} from "./AddTodoslice"


function App() {
const [val,setVal] = useState("")
const [editbtn,setEditbtn] = useState(true)
const [workId,Setworkid] = useState("")
const mytask = useSelector((state)=>state.mytodo.todolist)
const dispatch = useDispatch()
console.log(mytask)

const myEdit=(id,work)=>{
    setVal(work)
    Setworkid(id)
    setEditbtn(false)
    // console.log(val)
}

const myeditSave=()=>{
   dispatch(taskeditSave({id:workId,data:val}))
   setEditbtn(true)
}

const ans = mytask.map((key)=>{
         return(
          <>
          <tr>
            <td> {(key.cmpstatus)?(<>
              <div style={{textDecoration:"line-through",color:"red"}}>{key.work}</div>
            </>):(<>
                {key.work}
            </>)}</td>

            <td><button onClick={()=>{dispatch(deletetask({id:key.id}))}}>delete</button></td>

          <td>{(key.cmpstatus)?(<>
            <button onClick={()=>{dispatch(inc({id:key.id}))}} >Incomplete</button>
          </>):(<>
            <button onClick={()=>{dispatch(cmp({id:key.id}))}}>Complete</button>
          </>)}</td>

        <td> <buttonm onClick={()=>{myEdit(key.id,key.work)}}>edit</buttonm></td> 
          </tr>
          
          </>
         )
})
  return (
    <>
      <h1> toda app</h1>
      Enter Todo:<input type=" text " value={val} onChange={(e)=>{setVal(e.target.value)}} />
      

      {editbtn?(
        <>
           <button onClick={()=>{dispatch(Addtodo({work:val,id:Date.now(),cmpstatus:false}))}}>Add</button>
      </>
    ):(
    <>
      <button onClick={myeditSave}>Save</button>

    </>
  )}
     {ans}

     </>
  )
}
export default App