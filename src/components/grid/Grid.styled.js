import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;

  }
`;

export default Grid;
