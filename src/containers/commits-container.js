import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShepherdApi from 'api/shepherd-api';

class CommitsContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;
    ShepherdApi.getAllCommits(id).then();
  }

  render() {
    return <h1>Commits</h1>;
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(CommitsContainer);
