
import { useDispatch,useSelector } from "react-redux"
import { colorChange } from "./ColorSlice"
import { useState } from "react"
function App() {
  const myclr = useSelector((state)=>state.mycolor.color)
 const dispatch = useDispatch();
 const [val,setVal] = useState("")
  return (
    <>
     <h1>color change mathod</h1>
     enter color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
     <button onClick={()=>{dispatch(colorChange(val))}}>click here</button>
     <hr />

     <div style={{width:"200px",height:"200px",backgroundColor:myclr}}>

     </div>

    </>
  )
}

export default App
