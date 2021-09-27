import { combineReducers , createStore } from "redux";
import catogries from './store';
import productsReducer from './products'

const reducers=combineReducers({catogries , productsReducer});

const store=()=>{
    return(
        createStore(reducers)
    )
}

export default store();