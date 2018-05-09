import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
// import Checkbox from 'material-ui/Checkbox';
// import FormControlLabel from 'material-ui/Form/FormControlLabel';
import { CircularProgress } from 'material-ui/Progress';

// material-ui-icons
import Face from 'material-ui-icons/Face';
import Email from 'material-ui-icons/Email';
import LockOutline from 'material-ui-icons/LockOutline';
// import Check from 'material-ui-icons/Check';

// core components
import I18n from '../components/I18n/I18n';
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import RegularCard from '../components/Cards/RegularCard';
import Button from '../components/CustomButtons/Button';
import IconButton from '../components/CustomButtons/IconButton';
import CustomInput from '../components/CustomInput/CustomInput';
import Snackbar from '../components/Snackbar/Snackbar';

import {
  registerUser,
  loginUserByGoogle,
  loginUserByFacebook
} from '../actions/auth';
import registerStyle from '../assets/jss/views/registerStyle';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

class Register extends Component {
  state = { checked: [], loading: false, alertAuthMessage: false };

  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
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

  onRegisterWithFacebook = response => {
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

  onRegisterWithGoogle = response => {
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

  onRegisterByEmailAndPassword = response => {
    console.log(response);
    response.locale = this.props.lng;
    this.setState({ loading: true, alertAuthMessage: false });
    this.props.registerUser(response, callback => {
      if (callback) {
        this.props.history.push('/');
      } else {
        this.setState({ loading: false, alertAuthMessage: true });
      }
    });
  };

  render() {
    const { loading } = this.state;
    const {
      lng,
      classes,
      pristine,
      submitting,
      authMessage,
      handleSubmit
    } = this.props;
    return (
      <div className={`${classes.container} animated fadeIn`}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={5}>
            <form
              className={classes.form}
              onSubmit={handleSubmit(this.onRegisterByEmailAndPassword)}
            >
              <RegularCard
                cardTitle={I18n.t('register.label', { lng })}
                titleAlign="center"
                customCardTitleClasses={classes.cardTitle}
                customCardClasses={classes.cardClasses}
                content={
                  <GridContainer justify="center">
                    <ItemGrid xs={12} sm={12} md={12}>
                      <div className={classes.center}>
                        <FacebookLogin
                          appId={appId}
                          fields="name,email,picture"
                          callback={this.onRegisterWithFacebook}
                          render={renderProps => (
                            <IconButton
                              color="facebook"
                              disabled={loading}
                              onClick={() =>
                                this.onFacebookLoading(renderProps)
                              }
                            >
                              <i className="fab fa-facebook-f" />
                            </IconButton>
                          )}
                        />
                        {` `}
                        <GoogleLogin
                          style={{}}
                          tag="span"
                          clientId={clientId}
                          onSuccess={this.onRegisterWithGoogle}
                          onFailure={this.onRegisterWithGoogle}
                        >
                          <IconButton
                            color="google"
                            disabled={loading}
                            onClick={this.onGoogleLoding}
                          >
                            <i className="fab fa-google" />
                          </IconButton>
                        </GoogleLogin>{' '}
                        <h4 className={classes.socialTitle}>
                          {I18n.t('orBeClassical.label', { lng })}
                        </h4>
                      </div>
                      <GridContainer justify="space-between">
                        <ItemGrid xs={12} sm={12} md={6}>
                          <Field
                            lng={lng}
                            name="fname"
                            labelText=""
                            id="fname"
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
                                  <Face
                                    className={
                                      lng === 'ar'
                                        ? classes.inputAdornmentIconRTL
                                        : classes.inputAdornmentIcon
                                    }
                                  />
                                </InputAdornment>
                              ),
                              type: 'text',
                              placeholder: I18n.t('firstName.label', { lng })
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={6}>
                          <Field
                            lng={lng}
                            name="lname"
                            labelText=""
                            id="lname"
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
                                  <Face
                                    className={
                                      lng === 'ar'
                                        ? classes.inputAdornmentIconRTL
                                        : classes.inputAdornmentIcon
                                    }
                                  />
                                </InputAdornment>
                              ),
                              type: 'text',
                              placeholder: I18n.t('lastName.label', { lng })
                            }}
                          />
                        </ItemGrid>
                      </GridContainer>
                      <Field
                        lng={lng}
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
                        lng={lng}
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
                      {/* <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked
                            }}
                          />
                        }
                        label={
                          <span>
                            {I18n.t('iAgreeToThe.label', { lng })}{' '}
                            <a href="#0">
                              {I18n.t('termsAndConditions.label', { lng })}
                            </a>.
                          </span>
                        }
                      /> */}
                      <div
                        className={`${classes.center} ${classes.buttonWrapper}`}
                      >
                        <Button
                          color="skyBlue"
                          type="submit"
                          disabled={pristine || submitting || loading}
                        >
                          {I18n.t('getStarted.label', { lng })}
                        </Button>
                        {(submitting || loading) && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </ItemGrid>
                  </GridContainer>
                }
              />
            </form>
          </ItemGrid>
        </GridContainer>
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

const validate = values => {
  const errors = {};
  // eslint-disable-next-line
  const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const { fname, lname, email, password } = values;
  if (!fname) {
    errors.fname = 'firstName.require';
  } else if (fname.length < 3) {
    errors.fname = 'firstName.length';
  }
  if (!lname) {
    errors.lname = 'lastName.require';
  } else if (lname.length < 3) {
    errors.lname = 'lastName.length';
  }
  if (!email) {
    errors.email = 'email.require';
  } else if (email && !reEmail.test(email)) {
    errors.email = 'email.valid';
  }
  if (!password) {
    errors.password = 'password.require';
  } else if (password && password.length < 8) {
    errors.password = 'password.length';
  } else if (password && password.length > 128) {
    errors.password = 'password.long';
  } else if (password && !rePass.test(password)) {
    errors.password = 'password.weak';
  }
  return errors;
};

const mapStateToProps = ({ authStore: { authMessage } }) => ({
  authMessage
});

const RegisterForm = reduxForm({ form: 'registerForm', validate })(
  withStyles(registerStyle)(withRouter(Register))
);

export default connect(mapStateToProps, {
  registerUser,
  loginUserByGoogle,
  loginUserByFacebook
})(RegisterForm);
