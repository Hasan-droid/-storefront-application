import { combineReducers , createStore } from "redux";
import counter from './votes'

let reducers=combineReducers({counter});

const store=()=>{
    return createStore(reducers);
}

export default store();