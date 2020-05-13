import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SelectTimes from './components/SelectTimes';
import { observe } from './components/AppFunctionality/Dnd';

observe((selectedPosition) =>
  ReactDOM.render(
    <App selectedPosition={selectedPosition} />,
    document.getElementById('root')
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
