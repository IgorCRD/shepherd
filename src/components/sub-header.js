import styled from 'styled-components';

const SubHeader = styled.p`
  color: ${props => props.theme.fonts.secondary.color};
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
  font-weight: ${props => props.theme.fonts.secondary.fontWeight};
`;

export default SubHeader;
