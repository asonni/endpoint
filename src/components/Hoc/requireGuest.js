import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireGuest = (WeappedComponent, lng) => {
  class Guest extends Component {
    componentDidMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        nextProps.history.push('/');
      }
    }

    render() {
      return <WeappedComponent {...this.props} lng={lng} />;
    }
  }

  const mapStateToProps = ({ authStore: { authenticated } }) => {
    return { authenticated };
  };

  return connect(mapStateToProps)(Guest);
};

export { requireGuest };
