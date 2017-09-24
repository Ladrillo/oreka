import React from 'react';
import styled from 'styled-components';


const StyledCell = styled.div`
  background-color: ${pr => {
    if (pr.strategy === 'evil') return 'red';
    if (pr.strategy === 'chill') return 'blue';
    if (!pr.strategy) return 'brown';
  }};

  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export default function Cell({ coords, cell }) {
  return (
    <StyledCell strategy={cell.strategy}>
      {cell.display}
    </StyledCell>
  );
}
