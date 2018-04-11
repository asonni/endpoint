import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import Checkbox from 'material-ui/Checkbox';
import FormControlLabel from 'material-ui/Form/FormControlLabel';

// material-ui-icons
import Face from 'material-ui-icons/Face';
import Email from 'material-ui-icons/Email';
import LockOutline from 'material-ui-icons/LockOutline';
import Check from 'material-ui-icons/Check';

// core components
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import RegularCard from '../components/Cards/RegularCard';
import Button from '../components/CustomButtons/Button';
import IconButton from '../components/CustomButtons/IconButton';
import CustomInput from '../components/CustomInput/CustomInput';

import registerStyle from '../assets/jss/views/registerStyle';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

class Register extends Component {
  state = { checked: [] };
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
  onLoginWithFacebook = response => {
    console.log(response);
  };
  onLoginWithGoogle = response => {
    console.log(response);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.container} animated fadeIn`}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={5}>
            <RegularCard
              cardTitle="Register"
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
                        callback={this.onLoginWithFacebook}
                        render={renderProps => (
                          <IconButton
                            color="facebook"
                            onClick={renderProps.onClick}
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
                        onSuccess={this.onLoginWithGoogle}
                        onFailure={this.onLoginWithGoogle}
                      >
                        <IconButton color="google">
                          <i className="fab fa-google" />
                        </IconButton>
                      </GoogleLogin>{' '}
                      <h4 className={classes.socialTitle}>Or Be Classical</h4>
                    </div>
                    <form className={classes.form}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'Full Name...'
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'Email...'
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: 'Password...'
                        }}
                      />
                      <FormControlLabel
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
                            I agree to the{' '}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button color="rose">Get started</Button>
                      </div>
                    </form>
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(registerStyle)(Register);
