import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask,taskdelete,completeTask,incompleteTask,editSave } from "./TodoSlice"
import Button from 'react-bootstrap/Button';




const App=()=> {
 const [val,setVal] = useState("")
 const [btnstatus,setbtnstatus] = useState(true)
 const [edit,setEdit] = useState("")
 const mytask = useSelector((state)=>state.todo.task)
 const Dismethod = useDispatch()
//  console.log (mytask)

const mycomplete=(id)=>{
  Dismethod(completeTask({id:id}))
}
const incomple=(id)=>{
  Dismethod(incompleteTask({id:id}))
}

const Edittask=(id,work)=>{
        setVal(work)
        setEdit(id)
        setbtnstatus(false)
}
  
const save=()=>{
 Dismethod(editSave({id:edit,data:val}))
 setbtnstatus(true)
 console.log(btnstatus)
}
     let sno = 0
 const ans = mytask.map((key)=>{
     sno++
       return(
        <>


        <tr>
            <td>{sno}</td>
            <td>{(key.compoStatus)?(
              <> <span style={{color:"red", textDecoration:"line-through"}}> {key.work}  </span> </>
              ):(
              <>{key.work}</>
            )}</td>


            <td>
              <Button variant="danger" onClick={()=>{Dismethod(taskdelete({id:key.id}))}} >Danger</Button>
             </td>

             <td>
              {(key.compoStatus)?(<>
                <Button variant="success" onClick={()=>{incomple(key.id)}}>InComplete</Button></>
              ):(
              <>
              <Button variant="success" onClick={()=>{mycomplete(key.id)}}>Complete</Button>
             
              </>)}
             </td>

             <td><Button variant="primary" onClick={()=>{Edittask(key.id,key.work)}}>Edit</Button></td>
             
        </tr>
        
        </>
       )
 })
 
   
  
  return (
    <>
        <h1>todo list</h1>
        Enter todo: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
         {btnstatus?(<>
        <button onClick={()=>{Dismethod(addTask({work:val,id:Date.now(),compoStatus:false}))}}>add</button>
         </>):(<>
        <button onClick={save}>save</button>
         </>)}
        <table>
          <thead>
            <tr>
              <th>sno</th>
              <th>work</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
  </>
  )
}

export default App
