import {configureStore} from "@reduxjs/toolkit"
import myRec from "./TodoSlice"
const store = configureStore({
    reducer:{
     todo:myRec
    }
})
 export default store
