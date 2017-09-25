import React from 'react';
import styled from 'styled-components';


const StyledCell = styled.div`
  background-color: ${pr => {
    if (pr.cell) {
      return behaviorColor[pr.cell.strategy];
    }
    return behaviorColor.empty;
  }};

  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .display {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .lifePoints {
    font-size: 0.8rem;
  }
`;

export default function Cell({ cell }) {
  return (
    <StyledCell cell={cell}>
      <div className='display'>
        {cell ? cell.display : null}
      </div>
      <div className='life-points'>
        {cell ? `life: ${cell.lifePoints}` : null}
      </div>
    </StyledCell>
  );
}

const behaviorColor = {
  chill: 'blue',
  evil: 'red',
  empty: 'brown'
};
