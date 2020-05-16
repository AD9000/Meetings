import { combineReducers } from 'redux';
import { ActionTypes } from './ActionTypes';

const checkValidSize = (x, y) => x && x > 0 && y && y > 0;

export const boardDimensions = (state = { x: 8, y: 5 }, action) => {
  console.log('board dimensions called');
  const newValue = action.payload;
  console.log(action.type, ActionTypes.RESIZE_BOARD);
  if (action.type === ActionTypes.RESIZE_BOARD) {
    return checkValidSize(newValue.x, newValue.y) ? newValue : state;
  } else {
    return state;
  }
};

const checkValidMove = (x, y) => x >= 0 && y >= 0;

export const selected = (state = { x: 0, y: 0 }, action) => {
  console.log('called selected method');
  console.log('action type is: ', action.type);
  const newValue = action.payload;
  if (action.type === ActionTypes.MOVE_SELECTED) {
    console.log('updating to...', action.payload);
    console.log('valid', checkValidMove(newValue.x, newValue.y));
    // This means there was an error in the application if false
    return checkValidMove(newValue.x, newValue.y) ? newValue : state;
  } else {
    // Same as above
    return state;
  }
  // return true;
};

// export { boardDimensions, selected };

export default combineReducers({
  selected,
  boardDimensions,
});
