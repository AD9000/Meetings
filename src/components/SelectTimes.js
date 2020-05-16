import React from 'react';
import { Grid } from '@material-ui/core';
import { TimeCell } from './TimeCell';
import styled from 'styled-components';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
const Container = styled(Grid)`
  flex: 1;
`;

const SelectTimes = ({ selectedPosition, onDrop }) => {
  console.log(selectedPosition);
  const rend = Array(40).fill(0);
  // const sx = parseInt(selectedPosition / 5);
  // const sy = selectedPosition % 5;
  const { x, y } = selectedPosition;
  const timeCells = rend.map((_, index) => {
    const nx = parseInt(index / 5);
    const ny = index % 5;
    return (
      <TimeCell
        onDrop={onDrop}
        x={nx}
        y={ny}
        selected={nx === x && ny === y}
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
