import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import { CircularProgress } from 'material-ui/Progress';

// material-ui-icons
import Email from 'material-ui-icons/Email';
import LockOutline from 'material-ui-icons/LockOutline';

// core components
import I18n from '../components/I18n/I18n';
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import LoginCard from '../components/Cards/LoginCard';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import Snackbar from '../components/Snackbar/Snackbar';

import {
  loginUser,
  loginUserByGoogle,
  loginUserByFacebook
} from '../actions/auth';
import loginStyle from '../assets/jss/views/loginStyle';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

class Login extends Component {
  state = {
    loading: false,
    alertAuthMessage: false
  };

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alertAuthMessage: false });
  };

  onFacebookLoading = renderProps => {
    renderProps.onClick();
    this.setState({ loading: true });
  };

  onGoogleLoding = () => {
    this.setState({ loading: true });
  };

  onLoginByEmailAndPassword = response => {
    this.setState({ loading: true, alertAuthMessage: false });
    this.props.loginUser(response, callback => {
      if (callback) {
        this.props.history.push('/');
      } else {
        this.setState({ loading: false, alertAuthMessage: true });
      }
    });
  };

  onLoginByFacebook = response => {
    if (response.accessToken) {
      this.props.loginUserByFacebook(response.accessToken, callback => {
        if (callback) {
          this.props.history.push('/');
        } else {
          this.setState({ loading: false });
        }
      });
    } else {
      this.setState({ loading: false });
    }
  };

  onLoginByGoogle = response => {
    if (response.tokenId) {
      this.props.loginUserByGoogle(response.tokenId, callback => {
        if (callback) {
          console.log(callback);
          this.props.history.push('/');
        } else {
          this.setState({ loading: false });
        }
      });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;
    const { lng, classes, handleSubmit, authMessage } = this.props;
    return (
      <div className={`${classes.content} animated fadeIn`}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              <form onSubmit={handleSubmit(this.onLoginByEmailAndPassword)}>
                <LoginCard
                  headerColor="rose"
                  cardTitle={I18n.t('login.label', { lng })}
                  cardSubtitle={I18n.t('orBeClassical.label', { lng })}
                  customCardClass={classes.cardClasses}
                  footerAlign="center"
                  footer={
                    <div className={classes.buttonWrapper}>
                      <Button wd color="rose" type="submit" disabled={loading}>
                        {I18n.t('letsGo.label', { lng })}
                      </Button>
                      {loading && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  }
                  socials={
                    <Fragment>
                      <FacebookLogin
                        appId={appId}
                        fields="name,email,picture"
                        callback={this.onLoginByFacebook}
                        render={renderProps => (
                          <Button
                            justIcon
                            color="simple"
                            onClick={() => this.onFacebookLoading(renderProps)}
                            customClass={classes.customButtonClass}
                            disabled={loading}
                          >
                            <i className="fab fa-facebook-square" />
                          </Button>
                        )}
                      />
                      <GoogleLogin
                        style={{}}
                        tag="span"
                        clientId={clientId}
                        onSuccess={this.onLoginByGoogle}
                        onFailure={this.onLoginByGoogle}
                      >
                        <Button
                          justIcon
                          color="simple"
                          customClass={classes.customButtonClass}
                          disabled={loading}
                          onClick={this.onGoogleLoding}
                        >
                          <i className="fab fa-google" />
                        </Button>
                      </GoogleLogin>
                    </Fragment>
                  }
                  content={
                    <Fragment>
                      <Field
                        name="email"
                        labelText=""
                        id="email"
                        component={CustomInput}
                        rtlActive={lng === 'ar'}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={
                                lng === 'ar'
                                  ? classes.inputAdornmentRTL
                                  : classes.inputAdornment
                              }
                            >
                              <Email
                                className={
                                  lng === 'ar'
                                    ? classes.inputAdornmentIconRTL
                                    : classes.inputAdornmentIcon
                                }
                              />
                            </InputAdornment>
                          ),
                          type: 'email',
                          placeholder: I18n.t('email.label', { lng })
                        }}
                      />
                      <Field
                        name="password"
                        labelText=""
                        id="password"
                        component={CustomInput}
                        rtlActive={lng === 'ar'}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={
                                lng === 'ar'
                                  ? classes.inputAdornmentRTL
                                  : classes.inputAdornment
                              }
                            >
                              <LockOutline
                                className={
                                  lng === 'ar'
                                    ? classes.inputAdornmentIconRTL
                                    : classes.inputAdornmentIcon
                                }
                              />
                            </InputAdornment>
                          ),
                          type: 'password',
                          placeholder: I18n.t('password.label', { lng })
                        }}
                      />
                    </Fragment>
                  }
                />
              </form>
            </ItemGrid>
          </GridContainer>
        </div>
        <Snackbar
          autoHideDuration={1500}
          rtlActive={lng === 'ar'}
          onClose={this.handleAlertClose}
          place={lng === 'ar' ? 'br' : 'bl'}
          open={this.state.alertAuthMessage}
          message={I18n.t(`${authMessage}.label`, { lng })}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authStore: { authMessage } }) => ({
  authMessage
});

const LgoinForm = reduxForm({ form: 'loginForm' })(
  withStyles(loginStyle)(withRouter(Login))
);

export default connect(mapStateToProps, {
  loginUser,
  loginUserByGoogle,
  loginUserByFacebook
})(LgoinForm);
