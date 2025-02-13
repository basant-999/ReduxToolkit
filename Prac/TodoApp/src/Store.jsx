 import{configureStore} from "@reduxjs/toolkit"
import mybk from "./AddTodoslice"

 const Store = configureStore({
  reducer:{
    mytodo:mybk
  }
 })

 export default Store