import React from 'react';
import { useDrag } from 'react-dnd';
import { Button } from '@material-ui/core';
import { ItemTypes } from '../Constants';

const SelectedTime = ({ x, y, updateDragging }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SELECTED },
    begin: (monitor) => {
      updateDragging({ x, y });
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
};

export { SelectedTime };
