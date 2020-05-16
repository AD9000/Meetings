import React from 'react';
import { SelectedTime } from './SelectedTime';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../Constants';

const Cell = styled(Box)`
  border: 1px solid black;
  width: 18%;
  height: 5%;
  flex-grow: 1;
`;

const TimeCell = ({ x, y, selected, onDrop, canSelect }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.SELECTED,
    drop: () => onDrop(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Cell
      ref={drop}
      style={{ position: 'relative', width: '18%', height: '18%' }}
    >
      {selected && <SelectedTime />}
    </Cell>
  );
};

export { TimeCell };
