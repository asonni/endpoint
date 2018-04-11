import React, { Component, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';

// material-ui-icons
import Email from 'material-ui-icons/Email';
import LockOutline from 'material-ui-icons/LockOutline';

// core components
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import LoginCard from '../components/Cards/LoginCard';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';

import loginStyle from '../assets/jss/views/loginStyle';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

class Login extends Component {
  // we use this to make the card to appear after the page has been rendered
  state = {
    googleLoading: false,
    facebookLoading: false,
    cardAnimaton: 'cardHidden'
  };
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      100
    );
  }
  onLoginWithFacebook = response => {
    console.log(response);
  };
  onLoginWithGoogle = response => {
    console.log(response);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.content} animated fadeIn`}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={6} md={4}>
              <LoginCard
                headerColor="rose"
                cardTitle="Login"
                cardSubtitle="Or Be Classical"
                customCardClass={classes.cardClasses}
                footerAlign="center"
                footer={
                  <Button color="rose" wd>
                    Let's Go
                  </Button>
                }
                socials={
                  <Fragment>
                    <FacebookLogin
                      appId={appId}
                      fields="name,email,picture"
                      callback={this.onLoginWithFacebook}
                      render={renderProps => (
                        <Button
                          justIcon
                          color="simple"
                          onClick={renderProps.onClick}
                          customClass={classes.customButtonClass}
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                      )}
                    />
                    <GoogleLogin
                      style={{}}
                      tag="span"
                      clientId={clientId}
                      onSuccess={this.onLoginWithGoogle}
                      onFailure={this.onLoginWithGoogle}
                    >
                      <Button
                        justIcon
                        color="simple"
                        customClass={classes.customButtonClass}
                      >
                        <i className="fab fa-google" />
                      </Button>
                    </GoogleLogin>
                  </Fragment>
                }
                content={
                  <Fragment>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutline
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Fragment>
                }
              />
            </ItemGrid>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(Login);