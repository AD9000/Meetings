import React from "react";
import { Grid } from "@material-ui/core";
import { TimeCell } from "./TimeCell";
import styled from "styled-components";

const Container = styled(Grid)`
  flex: 1;
`;

const SelectTimes = () => {
  const rend = Array(40).fill(0);
  return (
    <Container item container>
      {rend.map(() => (
        <TimeCell />
      ))}
    </Container>
  );
};

export default SelectTimes;
