module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-did-mount-set-state': [false],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'max-len': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
