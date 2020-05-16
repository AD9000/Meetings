import { ActionTypes } from './ActionTypes';

export const boardDimensions = (newSize) => {
  console.log('newsize: ', newSize);
  if (
    newSize?.x > 0 &&
    newSize?.y > 0 &&
    Object.keys(newSize).length === 2
  ) {
    return {
      type: ActionTypes.RESIZE_BOARD,
      payload: {
        ...newSize,
      },
    };
  }
};

export const staticToggle = (x, y) => (dispatch, getState) => {
  console.log('in selected thunk: ', x, y);
  if (checkSelected(x, y)) {
    console.log('is valid');
    const state = getState();
    console.log('state: ', state);
    const index = x * state.boardDimensions.y + y;
    const newSelected = [...state.selected];
    newSelected[index] = !newSelected[index];
    console.log('new seleted ', newSelected);
    dispatch({
      type: ActionTypes.CHANGE_SELECTED,
      payload: newSelected,
    });
  }
};

const checkSelected = (x, y) => true;

export const selected = (x, y) => (dispatch, getState) => {
  console.log('in selected thunk: ', x, y);
  if (checkSelected(x, y)) {
    console.log('is valid');
    const state = getState();
    console.log('state: ', state);
    const prevIndex =
      state.dragging.x * state.boardDimensions.y + state.dragging.y;
    const index = x * state.boardDimensions.y + y;
    const newSelected = [...state.selected];
    newSelected[index] = true;
    newSelected[prevIndex] = false;
    console.log('new seleted ', newSelected);
    dispatch({
      type: ActionTypes.CHANGE_SELECTED,
      payload: newSelected,
    });
  }
};

export const dragging = (newDrag) => (dispatch) => {
  console.log('newDrag: ', newDrag);
  console.log('check: ', newDrag === null);
  if (
    (newDrag?.x >= 0 &&
      newDrag?.y >= 0 &&
      Object.keys(newDrag).length === 2) ||
    newDrag === null
  ) {
    console.log('dispatching...');
    dispatch({
      type: ActionTypes.UPDATE_DRAGGING,
      payload: newDrag,
    });
  }
};
