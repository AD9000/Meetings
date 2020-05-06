import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { Grid, createStyles } from "@material-ui/core";
import Header from "./components/Header";
import SelectTimes from "./components/SelectTimes";

const useStyles = () =>
  createStyles({
    content: {
      flex: 1,
    },
  });

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container className={classes.content}>
          <Grid item xs={false} sm={1} lg={2} />
          <Grid item xs={12} sm={10} lg={8}>
            <SelectTimes />
          </Grid>
          <Grid item xs={false} sm={1} lg={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
