import { combineReducers , createStore } from "redux";
import catogries from './store';
import productsReducer from './products'
import cartReducer from './cart'

const reducers=combineReducers({catogries , productsReducer , cartReducer});

const store=()=>{
    return(
        createStore(reducers)
    )
}

export default store();