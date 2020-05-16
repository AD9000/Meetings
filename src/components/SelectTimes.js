import React from 'react';
import { Grid } from '@material-ui/core';
import { TimeCell } from './TimeCell';
import styled from 'styled-components';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
const Container = styled(Grid)`
  flex: 1;
`;

const SelectTimes = ({
  selectedPosition,
  onDrop,
  toggleSelected,
  updateDragging,
  toggleStatic,
}) => {
  console.log('in selected times...', selectedPosition);
  // const sx = parseInt(selectedPosition / 5);
  // const sy = selectedPosition % 5;
  console.log('rendering...', selectedPosition);
  const timeCells = selectedPosition.map((isSelected, index) => {
    const nx = parseInt(index / 5);
    const ny = index % 5;
    return (
      <TimeCell
        staticToggle={toggleStatic}
        updateDragging={updateDragging}
        toggleSelected={toggleSelected}
        onDrop={onDrop}
        x={nx}
        y={ny}
        selected={isSelected}
        key={index}
      />
    );
  });
  return (
    <DndProvider backend={Backend}>
      <Container item container>
        {timeCells}
      </Container>
    </DndProvider>
  );
};

export default SelectTimes;
