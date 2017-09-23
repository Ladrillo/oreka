import React from 'react';
import styled from 'styled-components';


const StyledCell = styled.div`
  background-color: ${pr => pr.display === 'A' ? 'yellow' : 'green'};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export default function Cell({ x, y, item }) {
  return (
    <StyledCell display={item.display}>
      {item.display}
    </StyledCell>
  );
}
