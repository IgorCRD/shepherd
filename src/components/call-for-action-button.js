import styled from 'styled-components';

const CallForActionButton = styled.button`
  border-radius: 5px;
  border: 0;
  background-color: ${props => props.theme.colors.success};
  padding: 0.8em;
  margin-right: 0.5em;
  width: 30%;
  color: white;
  font-family: ${props => props.theme.fonts.secondary.fontFamily};
`;

export default CallForActionButton;
