import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import SweetAlert from 'react-bootstrap-sweetalert';

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
import { forgotPassword } from '../actions/user';
import loginStyle from '../assets/jss/views/loginStyle';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

class Login extends Component {
  state = {
    loading: false,
    recoverEmail: '',
    alertAuthMessage: false,
    showForgotPasswordAlert: false,
    showForgotPasswordNextAlert: false
  };

  onShowForgotPasswordAlert = () => {
    this.setState({
      showForgotPasswordAlert: true
    });
  };

  onHideForgotPasswordAlert = () => {
    this.setState({
      showForgotPasswordAlert: false,
      showForgotPasswordNextAlert: false
    });
  };

  onForgotPassword = async recoverEmail => {
    this.setState({ recoverEmail });
    await this.props.forgotPassword(recoverEmail);
    // setTimeout(this.onConfirmResendEmail, 200);
    this.onConfirmForgotPassword();
  };

  onConfirmForgotPassword = () => {
    this.setState({
      showForgotPasswordAlert: false,
      showForgotPasswordNextAlert: true
    });
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
    const { loginUser, history, location: { search } } = this.props;
    this.setState({ loading: true, alertAuthMessage: false });
    loginUser(response, callback => {
      if (callback) {
        if (search) {
          const params = new URLSearchParams(search);
          history.push(params.get('next'));
        } else {
          history.push('/');
        }
      } else {
        this.setState({ loading: false, alertAuthMessage: true });
      }
    });
  };

  onLoginByFacebook = response => {
    const { loginUserByFacebook, history, location: { search } } = this.props;
    if (response.accessToken) {
      loginUserByFacebook(response.accessToken, callback => {
        if (callback) {
          if (search) {
            const params = new URLSearchParams(search);
            history.push(params.get('next'));
          } else {
            history.push('/');
          }
        } else {
          this.setState({ loading: false });
        }
      });
    } else {
      this.setState({ loading: false });
    }
  };

  onLoginByGoogle = response => {
    const { loginUserByGoogle, history, location: { search } } = this.props;
    if (response.tokenId) {
      loginUserByGoogle(response.tokenId, callback => {
        if (callback) {
          if (search) {
            const params = new URLSearchParams(search);
            history.push(params.get('next'));
          } else {
            history.push('/');
          }
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
    const {
      lng,
      classes,
      handleSubmit,
      authMessage,
      forgotPasswordError,
      forgotPasswordIsLoading
    } = this.props;
    const validationMsg = (
      <span className={lng === 'ar' ? classes.marginRight : ''}>
        {I18n.t('email.valid', { lng })}
      </span>
    );
    return (
      <div className={`${classes.content} animated fadeIn`}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              {this.state.showForgotPasswordAlert && (
                <SweetAlert
                  input
                  showCancel
                  inputType="email"
                  disabled={forgotPasswordIsLoading}
                  closeOnClickOutside={false}
                  style={{
                    display: 'block',
                    marginTop: '-100px',
                    fontSize: '10px'
                  }}
                  title={I18n.t('enterYourEmail.label', { lng })}
                  onConfirm={e => this.onForgotPassword(e)}
                  onCancel={this.onHideForgotPasswordAlert}
                  confirmBtnCssClass={`${classes.button} ${classes.info}`}
                  cancelBtnCssClass={`${classes.button} ${classes.danger}`}
                  confirmBtnText={
                    forgotPasswordIsLoading
                      ? I18n.t('recovering.label', { lng })
                      : I18n.t('recover.label', { lng })
                  }
                  cancelBtnText={I18n.t('cancel.label', { lng })}
                  placeholder={I18n.t('email.label', { lng })}
                  validationMsg={validationMsg}
                />
              )}
              {this.state.showForgotPasswordNextAlert && (
                <SweetAlert
                  error={forgotPasswordError}
                  success={!forgotPasswordError}
                  style={{
                    display: 'block',
                    marginTop: '-100px',
                    fontSize: '10px'
                  }}
                  onConfirm={this.onHideForgotPasswordAlert}
                  onCancel={this.onHideForgotPasswordAlert}
                  confirmBtnText={I18n.t('ok.label', { lng })}
                  confirmBtnCssClass={`${classes.button} ${classes.info}`}
                  title={
                    forgotPasswordError ? (
                      <small>
                        {I18n.t(`${forgotPasswordError}.label`, { lng })}
                      </small>
                    ) : (
                      <small>
                        {I18n.t('WeHaveSentPasswordResetLinkTo.label', { lng })}:{' '}
                        <b>{this.state.recoverEmail}</b>
                      </small>
                    )
                  }
                />
              )}
              <form onSubmit={handleSubmit(this.onLoginByEmailAndPassword)}>
                <LoginCard
                  headerColor="skyBlue"
                  cardTitle={I18n.t('login.label', { lng })}
                  cardSubtitle={I18n.t('orBeClassical.label', { lng })}
                  customCardClass={classes.cardClasses}
                  footerAlign="center"
                  footer={
                    <Fragment>
                      <div className={classes.buttonWrapper}>
                        <Button
                          wd
                          color="skyBlue"
                          type="submit"
                          disabled={loading}
                        >
                          {I18n.t('letsGo.label', { lng })}
                        </Button>
                        {loading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      <Button
                        wd
                        color="primaryNoBackground"
                        customClass={classes.buttonLink}
                        onClick={this.onShowForgotPasswordAlert}
                      >
                        {I18n.t('forgotPassword.label', { lng })}
                      </Button>
                    </Fragment>
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
          autoHideDuration={2000}
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

const mapStateToProps = ({ authStore, userStore }) => {
  const { authMessage } = authStore;
  const { forgotPasswordError, forgotPasswordIsLoading } = userStore;
  return { authMessage, forgotPasswordError, forgotPasswordIsLoading };
};

const LgoinForm = reduxForm({ form: 'loginForm' })(
  withStyles(loginStyle)(withRouter(Login))
);

export default connect(mapStateToProps, {
  loginUser,
  forgotPassword,
  loginUserByGoogle,
  loginUserByFacebook
})(LgoinForm);
