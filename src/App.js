import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import { Grid, createStyles, Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import SelectTimes from './components/SelectTimes';
import './App.css';
import styled from 'styled-components';

import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    alignContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    alignContent: 'flex-start',
  },
  table: {
    height: '90%',
    padding: '5%',
    flex: '1 1 auto',
    // flexGrow: 1,
    // flexWrap: "wrap",
  },
});

const App = ({ selectedPosition }) => {
  console.log('selected', selectedPosition);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.container}>
        <Grid item className={classes.title}>
          <Header />
        </Grid>
        <Grid item container className={classes.table} direction="row">
          <Grid item xs={false} sm={1} lg={2} />
          <Grid item justify="center" xs={12} sm={10} lg={8} container>
            <SelectTimes selectedPosition={selectedPosition} />
          </Grid>
          <Grid item xs={false} sm={1} lg={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// const Container = styled(Box)`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Cell = styled.div`
//   height: 12.5%;
//   width: 12.5%;
// `;

// const App = () => {
//   const test = Array(64).fill(0);
//   return (
//     <Container>
//       {test.map(() => (
//         <Cell></Cell>
//       ))}
//     </Container>
//   );
// };

export default App;
