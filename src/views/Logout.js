import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default connect(null, { logoutUser })(withRouter(Logout));
