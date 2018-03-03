import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const BaseStyles = () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
  }
`;

export default BaseStyles;
