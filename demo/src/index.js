import  ReactDOM  from "react-dom";
import App from './app'
import {Provider} from 'react-redux'
import store from "./store/indexT";

function Main(){
    return(
         <Provider store={store}>
             <App/>
         </Provider>
    )
}

ReactDOM.render(<Main/> , document.getElementById('root'))