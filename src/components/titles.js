import styled from 'styled-components';

const Titles = styled.h1`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  font-weight: ${props => props.theme.fonts.primary.fontWeight};
  margin: 0;
`;

export default Titles;
