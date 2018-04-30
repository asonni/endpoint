import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import { CircularProgress } from 'material-ui/Progress';

// material-ui-icons
import LockOutline from 'material-ui-icons/LockOutline';

// core components
import I18n from '../components/I18n/I18n';
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import LoginCard from '../components/Cards/LoginCard';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import Snackbar from '../components/Snackbar/Snackbar';

import { resetPassword } from '../actions/auth';
import loginStyle from '../assets/jss/views/loginStyle';

class ResetPassword extends Component {
  state = { alertPasswordMessage: false, showAlertPasswordReset: false };

  componentDidMount() {
    const { history, location: { search } } = this.props;
    const params = new URLSearchParams(search);
    console.log(params.get('hash'));
    if (!params.get('hash')) {
      history.push('/login');
    }
  }

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alertPasswordMessage: false });
  };

  onHideAlertPasswordReset = () => {
    this.setState({ showAlertPasswordReset: false });
    this.props.history.push('/login');
  };

  onResetPassword = ({ newPassword }) => {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    const hash = params.get('hash');
    this.setState({ alertPasswordMessage: false });
    this.props.resetPassword({ newPassword, hash }, callback => {
      if (callback) {
        // this.props.history.push('/login');
        this.setState({ showAlertPasswordReset: true });
      } else {
        this.setState({ alertPasswordMessage: true });
      }
    });
  };

  render() {
    const {
      lng,
      classes,
      pristine,
      submitting,
      handleSubmit,
      authMessage
    } = this.props;
    return (
      <div className={`${classes.content} animated fadeIn`}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              {this.state.showAlertPasswordReset && (
                <SweetAlert
                  success
                  style={{
                    display: 'block',
                    marginTop: '-100px',
                    fontSize: '10px'
                  }}
                  onConfirm={this.onHideAlertPasswordReset}
                  onCancel={this.onHideAlertPasswordReset}
                  confirmBtnText={I18n.t('ok.label', { lng })}
                  confirmBtnCssClass={`${classes.button} ${classes.info}`}
                  title={
                    <small>
                      {I18n.t('YouHaveSuccessfullyChangedYourPassword.label', {
                        lng
                      })}
                    </small>
                  }
                />
              )}
              <form onSubmit={handleSubmit(this.onResetPassword)}>
                <LoginCard
                  headerColor="rose"
                  cardTitle={I18n.t('passwordReset.label', { lng })}
                  customCardClass={classes.cardClasses}
                  footerAlign="center"
                  footer={
                    <div className={classes.buttonWrapper}>
                      <Button
                        wd
                        color="rose"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        {I18n.t('reset.label', { lng })}
                      </Button>
                      {submitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  }
                  content={
                    <Fragment>
                      <Field
                        lng={lng}
                        labelText=""
                        name="newPassword"
                        id="newPassword"
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
                          placeholder: I18n.t('newPassword.label', { lng })
                        }}
                      />
                      <Field
                        lng={lng}
                        labelText=""
                        name="confirmNewPassword"
                        id="confirmNewPassword"
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
                          placeholder: I18n.t('confirmNewPassword.label', {
                            lng
                          })
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
          open={this.state.alertPasswordMessage}
          message={I18n.t(`${authMessage}.label`, { lng })}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  // eslint-disable-next-line
  const rePass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const { newPassword, confirmNewPassword } = values;
  if (!newPassword) {
    errors.newPassword = 'newPassword.require';
  } else if (newPassword && newPassword.length < 8) {
    errors.newPassword = 'newPassword.length';
  } else if (newPassword && newPassword.length > 128) {
    errors.newPassword = 'newPassword.long';
  } else if (newPassword && !rePass.test(newPassword)) {
    errors.newPassword = 'newPassword.weak';
  }
  if (!confirmNewPassword) {
    errors.confirmNewPassword = 'confirmNewPassword.require';
  } else if (
    confirmNewPassword &&
    newPassword &&
    confirmNewPassword !== newPassword
  ) {
    errors.confirmNewPassword = 'confirmNewPassword.equal';
  }
  return errors;
};

const mapStateToProps = ({ authStore }) => {
  const { authMessage } = authStore;
  return { authMessage };
};

const ResetPasswordForm = reduxForm({ form: 'resetPasswordForm', validate })(
  withStyles(loginStyle)(withRouter(ResetPassword))
);

export default connect(mapStateToProps, {
  resetPassword
})(ResetPasswordForm);
