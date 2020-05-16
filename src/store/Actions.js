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

export const selected = (newCoords) => {
  if (
    newCoords?.x >= 0 &&
    newCoords?.y >= 0 &&
    Object.keys(newCoords).length === 2
  ) {
    return {
      type: ActionTypes.MOVE_SELECTED,
      payload: { ...newCoords },
    };
  }
};
