import React from 'react';
import styled from 'styled-components';


const StyledCell = styled.div`
  background-color: ${pr => {
    if (pr.cell) return behaviorColor[pr.cell.strategy];
    return behaviorColor.empty;
  }};

  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export default function Cell({ cell }) {
  return (
    <StyledCell cell={cell}>
      {cell ? cell.display : null}
    </StyledCell>
  );
}

const behaviorColor = {
  chill: 'blue',
  evil: 'red',
  empty: 'brown'
};
