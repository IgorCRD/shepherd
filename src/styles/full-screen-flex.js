import styled from 'styled-components';
import Flex from 'styled-flex-component';

const FullScreenFlex = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export default FullScreenFlex;
