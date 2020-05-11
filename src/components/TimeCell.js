import React from "react";
import { SelectedTime } from "./SelectedTime";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const Cell = styled(Box)`
  border: 1px solid black;
  width: 18%;
  height: 12.5%;
  flex-grow: 1;
`;

const TimeCell = () => {
  return (
    <Cell>
      <SelectedTime />
    </Cell>
  );
};

export { TimeCell };
