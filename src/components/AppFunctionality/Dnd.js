let selectedPosition = [0, 0];
let observer = null;

const emitChange = () => {
  observer(selectedPosition);
};

const observe = (ob) => {
  if (observer) {
    throw new Error('Multiple observers not implemented');
  }

  observer = ob;
  emitChange();
};

const moveSelectedTime = (x, y) => {
  selectedPosition = [x, y];
  emitChange();
};

const canSelect = (newx, newy) => {
  const [x, y] = selectedPosition;
  return true;
};

export { observe, moveSelectedTime, canSelect };
