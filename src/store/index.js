import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './Reducers';

const defaultState = {
  boardDimensions: {
    x: 8,
    y: 5,
  },
  selected: {
    x: 0,
    y: 0,
  },
};

export default (initialState = defaultState) =>
  applyMiddleware(thunk)(createStore)(appReducer, initialState);
