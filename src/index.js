import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './redux/reducers/root_reducer.js';
import getSteps from './redux/actions/get_steps.js';

const logger = createLogger();
const store = createStore(rootReducer,{},applyMiddleware(thunk,logger));
// store.dispatch({type: 'GET_STEPS_REQUESTED'}); // yes
// store.dispatch({type:'GET_STEPS_FULFILLED', steps: {"color":"blue"}}); //yes
console.log(store.getState());
// const DataGroups = [
// 	  { process_group: "Initiating",
// 	  knowledge_area: "Project Integration Management",
// 	  data : "Develop Project Charter"},
// 	  { process_group: "Planning",
// 	  knowledge_area: "Project Integration Management",
// 	  data : "Develop Project Management Plan"},
// ];

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

