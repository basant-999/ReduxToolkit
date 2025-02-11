import { decrement,increment } from './CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const myval=useSelector((state)=>state.mycount.count)
  const dispatch = useDispatch()
  return (
    <>
       <center>
         <h1> my counter App</h1>

         <button onClick={()=>{dispatch(increment())}}>increment</button>
           <h1>{myval}</h1>
           <button onClick={()=>{dispatch(decrement())}}>Dicrement</button>
       </center>
    </>
  )
}

export default App
