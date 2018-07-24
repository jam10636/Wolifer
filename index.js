/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import In from './Element/mainpage'
import reducer from './Reducers/index'
const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><In /></Provider>,
  document.getElementById('root'));
