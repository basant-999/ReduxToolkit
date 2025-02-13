import {configureStore} from "@reduxjs/toolkit"
import myReducer from "./ColorSlice"

 const store = configureStore({
    reducer:{
       myrung:myReducer
    }
 })
 export default store