import styled from 'styled-components';
import media from 'styles/media';

const BigHeader = styled.h1`
  color: ${props => props.theme.fonts.primary.color};
  font-family: ${props => props.theme.fonts.primary.fontFamily};
  font-weight: ${props => props.theme.fonts.primary.fontWeight};
  margin-bottom: 0em;

  ${media.desktop`font-size: 4.8rem`};
  ${media.tablet`font-size: calc(2.2rem + (41.599999999999994 * (100vw - 400px) / 624))`};
  ${media.phone`font-size: 2.2rem`};

  :after {
    content: '';
    margin-top: 0.4em;
    display: block;
    width: 1em;
    height: 2px;
    background-color: ${props => props.theme.colors.detail};
  }
`;

export default BigHeader;
