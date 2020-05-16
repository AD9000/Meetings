import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SelectTimes from './components/SelectTimes';
import { observe } from './components/AppFunctionality/Dnd';

import { Provider } from 'react-redux';
import storeFactory from './store';
import { selected, boardDimensions } from './store/Actions';

const initialState = {
  boardDimensions: {
    x: 8,
    y: 5,
  },
  selected: {
    x: 5,
    y: 0,
  },
};

const store = storeFactory(initialState);
window.store = store;
window.boardDimensions = boardDimensions;
window.selected = selected;

store.subscribe(() => {
  const state = store.getState();
  console.log('current state', state);
});

// store.dispatch(boardDimensions({ x: 5, y: 5 }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// observe((selectedPosition) =>
//   ReactDOM.render(
//     <App selectedPosition={selectedPosition} />,
//     document.getElementById('root')
//   )
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
