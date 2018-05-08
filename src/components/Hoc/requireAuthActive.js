import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuthActive = (WeappedComponent, lng) => {
  class AuthenticatedActivated extends Component {
    componentDidMount() {
      const {
        history,
        authenticated,
        location: { pathname },
        currentUser: { status }
      } = this.props;
      if (!authenticated) {
        history.push({
          pathname: '/login',
          search: `?next=${pathname}`
        });
      }
      if (authenticated && status === 'inactive') {
        history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      const {
        history,
        authenticated,
        location: { pathname },
        currentUser: { status }
      } = nextProps;
      if (!authenticated) {
        history.push({
          pathname: '/login',
          search: `?next=${pathname}`
        });
      }
      if (authenticated && status === 'inactive') {
        history.push('/');
      }
    }

    render() {
      return <WeappedComponent {...this.props} lng={lng} />;
    }
  }

  const mapStateToProps = ({ authStore, userStore }) => {
    return {
      authenticated: authStore.authenticated,
      currentUser: userStore.currentUser
    };
  };

  return connect(mapStateToProps)(AuthenticatedActivated);
};

export { requireAuthActive };
