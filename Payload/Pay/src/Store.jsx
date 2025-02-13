import {configureStore} from "@reduxjs/toolkit"
import myAns from "./ColorSlice"


const store=configureStore({
    reducer:{
        mycolor:myAns
    }
})
export default store