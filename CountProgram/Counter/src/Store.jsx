import {configureStore} from "@reduxjs/toolkit"

import  myReducer from "./CounterSlice"

 const store = configureStore({
    reducer:{
       mycount:myReducer
    }
 })
 export default store
