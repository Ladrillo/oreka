import styled from 'styled-components';


export default styled.div`
  background-color: ${pr => {
    if (pr.cell) {
      return getColor(pr.cell.strategy, pr.cell.lifePoints);
    }
    return behaviorColor.empty;
  }};

  transition: all 0.18s ease-in-out;
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
