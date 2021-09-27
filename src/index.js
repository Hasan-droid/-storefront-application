import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import App from './app'
import {Provider} from 'react-redux'
import store from './components/store/index'

function Main() {
  return (
      <Provider store={store}>
          <App/>
      </Provider>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'));