import { css } from 'styled-components';

const sizes = {
  desktop: 2000,
  tablet: 768,
  phone: 376,
};

/* eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["accumulator"] }] */
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
