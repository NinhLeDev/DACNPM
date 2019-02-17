import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount() {
  }

  onDeleteClick(e) {
  }

  render() {
    return (
      <div>
        Dashboard1
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps )(
  Dashboard
);
