import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';

const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer before progress');
  console.log('2. action.type: ' + action.type + ', store str : ' + store.getState().data.str);
  console.log('3. reducer after progress');
  console.log('4. action.type: ' + action.type + ', store str : ' + store.getState().data.str);
  return XPathResult;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware));

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp="react" />
    </Provider>,
    document.getElementById('root')
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
store.subscribe(listener);
listener();
