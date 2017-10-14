import styled from 'styled-components';
import { formatLine } from '../../services/cssHelpers';


export default styled.div`
  display: grid;

  grid-template-columns: ${pr => {
    const { columns, width } = pr.boardConfig;
    return formatLine(columns, width);
  }};

  grid-template-rows: ${pr => {
    const { rows, height } = pr.boardConfig;
    return formatLine(rows, height);
  }};
`;
