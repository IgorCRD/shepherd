import React from 'react';
import PropTypes from 'prop-types';

const Commit = ({
  author, message, link, date, key,
}) => (
  <li key={key}>{`${author} ${message} ${link} ${date}`}</li>
);

Commit.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  key: PropTypes.string,
};

Commit.defaultProps = {
  author: '',
  message: '',
  link: '',
  date: '',
  key: '',
};

export default Commit;
