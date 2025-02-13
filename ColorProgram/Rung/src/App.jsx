
import { useState } from "react"
import { changColor } from "./ColorSlice"
import{useSelector,useDispatch } from "react-redux"

function App() {
  const ans = useSelector((state)=>state.myrung.color)
  const dismeth = useDispatch()
   const [col,Setcol] = useState("")

  return (
    <>
      enter color: <input type="text" value={col} onChange={(e)=>{Setcol(e.target.value)}}/>
       <button onClick={()=>{dismeth(changColor(col))}}>click</button>
       <div style={{height:"150px",width:"300px", backgroundColor:ans}}></div>
      
    </>
  )
}

export default App
