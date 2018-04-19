import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ReduxLogger from 'redux-logger';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

import Home from '../views/Home';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Register from '../views/Register';
import Pricing from '../views/Pricing';

// core components
import I18n from '../components/I18n/I18n';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { pagesRoutes, authPagesRoutes } from '../routes/pages';

import pagesStyle from '../assets/jss/layouts/pagesStyle';
import rootReducer from '../reducers';
import { AUTH_USER } from '../actions/auth/types';

let middleware;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.REACT_APP_ENV === 'development') {
  middleware = composeEnhancers(
    applyMiddleware(ReduxPromise, ReduxThunk, ReduxLogger)
  );
} else {
  middleware = composeEnhancers(applyMiddleware(ReduxPromise, ReduxThunk));
}
const store = createStore(rootReducer, middleware);

let token = localStorage.getItem('ad_token');

if (token) {
  store.dispatch({ type: AUTH_USER });
} else {
  token = false;
}

class Pages extends Component {
  state = { lng: localStorage.getItem('AddabbaLng') || 'en' };

  componentDidMount() {
    const { lng } = this.state;
    if (lng === 'ar') {
      document.body.classList.add('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'ar' })} ${I18n.t(
        'appName.label',
        { lng: 'ar' }
      )}`;
    } else {
      document.body.classList.remove('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'en' })} ${I18n.t(
        'appName.label',
        { lng: 'en' }
      )}`;
    }
  }

  componentDidUpdate() {
    const { lng } = this.state;
    localStorage.setItem('AddabbaLng', lng);
    if (lng === 'ar') {
      document.body.classList.add('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'ar' })} ${I18n.t(
        'appName.label',
        { lng: 'ar' }
      )}`;
    } else {
      document.body.classList.remove('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'en' })} ${I18n.t(
        'appName.label',
        { lng: 'en' }
      )}`;
    }
  }

  onLanguageChanged = () => {
    const { lng } = this.state;
    if (lng === 'en') {
      this.setState({ lng: 'ar' });
      document.body.classList.add('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'ar' })} ${I18n.t(
        'appName.label',
        { lng: 'ar' }
      )}`;
    } else {
      this.setState({ lng: 'en' });
      document.body.classList.remove('rtl');
      document.title = `${I18n.t('welcomeTo.label', { lng: 'en' })} ${I18n.t(
        'appName.label',
        { lng: 'en' }
      )}`;
    }
  };

  renderList = () => {
    if (token) {
      return authPagesRoutes.map((prop, key) => {
        if (prop.collapse) {
          return null;
        }
        if (prop.redirect) {
          return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
        }
        return (
          <Route
            exact
            key={key}
            path={prop.path}
            render={() => <prop.component lng={this.state.lng} />}
          />
        );
      });
    } else {
      return pagesRoutes.map((prop, key) => {
        if (prop.collapse) {
          return null;
        }
        if (prop.redirect) {
          return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
        }
        return (
          <Route
            exact
            key={key}
            path={prop.path}
            render={() => <prop.component lng={this.state.lng} />}
          />
        );
      });
    }
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header black {...rest} lng={this.state.lng} />
            <div className={classes.wrapper} ref="wrapper">
              <Fragment>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Home lng={this.state.lng} />}
                  />
                  <Route
                    exact
                    path="/login"
                    render={() => <Login lng={this.state.lng} />}
                  />
                  <Route exact path="/account" component={Logout} />
                  <Route
                    exact
                    path="/register"
                    render={() => <Register lng={this.state.lng} />}
                  />
                  <Route exact path="/pricing" component={Pricing} />
                </Switch>
                <Footer
                  lng={this.state.lng}
                  onLanguageChanged={this.onLanguageChanged}
                />
              </Fragment>
            </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(pagesStyle)(Pages);
