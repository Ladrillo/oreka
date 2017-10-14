import styled from 'styled-components';
import { lighten, darken } from 'polished';


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

function getColor(strategy, lifePoints) {
  const colors = behaviorColor[strategy];

  if (lifePoints < 5) {
    return colors.light3;
  }
  else if (lifePoints < 8) {
    return colors.light2;
  }
  if (lifePoints < 15) {
    return colors.light1;
  }
  else if (lifePoints < 25) {
    return colors.base;
  }
  if (lifePoints < 50) {
    return colors.dark1;
  }
  else if (lifePoints < 100) {
    return colors.dark2;
  }
  else if (lifePoints < 200) {
    return colors.dark3;
  }
  else if (lifePoints <= 300) {
    return colors.dark4;
  }
  else if (lifePoints > 300) {
    return colors.dark5;
  }
}

const behaviorColor = {
  chill: {
    dark5: darken(0.3, '#797CFF'),
    dark4: darken(0.2, '#797CFF'),
    dark3: darken(0.15, '#797CFF'),
    dark2: darken(0.1, '#797CFF'),
    dark1: darken(0.05, '#797CFF'),

    light1: lighten(0.05, '#797CFF'),
    light2: lighten(0.1, '#797CFF'),
    light3: lighten(0.15, '#797CFF'),

    base: '#797CFF',
  },
  evil: {
    dark5: darken(0.3, '#FF6D6D'),
    dark4: darken(0.2, '#FF6D6D'),
    dark3: darken(0.15, '#FF6D6D'),
    dark2: darken(0.1, '#FF6D6D'),
    dark1: darken(0.05, '#FF6D6D'),

    light1: lighten(0.05, '#FF6D6D'),
    light2: lighten(0.1, '#FF6D6D'),
    light3: lighten(0.15, '#FF6D6D'),
    
    base: '#FF6D6D',
  },
  grudge: {
    dark5: darken(0.3, '#65A151'),
    dark4: darken(0.2, '#65A151'),
    dark3: darken(0.15, '#65A151'),
    dark2: darken(0.1, '#65A151'),
    dark1: darken(0.05, '#65A151'),

    light1: lighten(0.05, '#65A151'),
    light2: lighten(0.1, '#65A151'),
    light3: lighten(0.15, '#65A151'),
    
    base: '#65A151',
  },
  empty: '#322424'
};
