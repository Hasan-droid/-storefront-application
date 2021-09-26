import counter from "./votesT"
import { combineReducers , createStore } from "redux"


const reducers=combineReducers({counter});


const store=()=>{
    return(
        createStore(reducers)
    )
}

export default store();