import styled from 'styled-components';

const Nav = styled.nav` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 3rem;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    .MuiAutocomplete-root {
      order: 3;
    }
  }

  svg {
    font-size: 1.5rem;
  }
`;

export default Nav; 
