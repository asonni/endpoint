import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// core components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import pagesRoutes from '../routes/pages';

import pagesStyle from '../assets/jss/layouts/pagesStyle';

class Pages extends Component {
  state = { lng: 'en' };
  onLanguageChanged = () => {
    if (this.state.lng === 'en') {
      this.setState({ lng: 'ar' });
      document.body.classList.add('rtl');
    } else {
      this.setState({ lng: 'en' });
      document.body.classList.remove('rtl');
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Fragment>
        <Header black {...rest} lng={this.state.lng} />
        <div className={classes.wrapper} ref="wrapper">
          <Fragment>
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                }
                return (
                  <Route
                    exact
                    key={key}
                    path={prop.path}
                    render={() => <prop.component lng={this.state.lng} />}
                  />
                );
              })}
            </Switch>
            <Footer
              lng={this.state.lng}
              onLanguageChanged={this.onLanguageChanged}
            />
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(pagesStyle)(Pages);
