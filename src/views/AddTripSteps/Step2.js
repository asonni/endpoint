import React, { Component, Fragment } from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import Radio from 'material-ui/Radio';

// core components
import GridContainer from '../../components/Grid/GridContainer';
import ItemGrid from '../../components/Grid/ItemGrid';
import CustomInput2 from '../../components/CustomInput2/CustomInput2';
import Snackbar from '../../components/Snackbar/Snackbar';
import Button from '../../components/CustomButtons/Button';
import I18n from '../../components/I18n/I18n';

import customCheckboxRadioSwitch from '../../assets/jss/customCheckboxRadioSwitch';

const style = {
  infoText: {
    fontWeight: '300',
    margin: '10px 0 30px',
    textAlign: 'center'
  },
  inputAdornment: {
    marginRight: '8px'
  },
  inputAdornmentRTL: {
    marginLeft: '0px',
    marginRight: '0px'
  },
  inputAdornmentIcon: {
    color: '#555'
  },
  inputAdornmentIconRTL: {
    color: '#555',
    marginLeft: '-8px'
  },
  choiche: {
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '20px'
  },
  ...customCheckboxRadioSwitch
};

class Step2 extends Component {
  state = {
    notes: '',
    open: false,
    notesState: '',
    passengerPrice: '',
    passengerPriceError: '',
    passengerPriceState: '',
    firstHalfPrice: '',
    firstHalfPriceError: '',
    firstHalfPriceState: '',
    vehicleDescription: '',
    vehicleDescriptionState: '',
    additionalHalfPrice: '',
    additionalHalfPriceError: '',
    additionalHalfPriceState: ''
  };

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  resetState = () => {
    this.setState({
      notes: '',
      notesState: '',
      passengerPrice: '',
      passengerPriceError: '',
      passengerPriceState: '',
      firstHalfPrice: '',
      firstHalfPriceError: '',
      firstHalfPriceState: '',
      vehicleDescription: '',
      vehicleDescriptionState: '',
      additionalHalfPrice: '',
      additionalHalfPriceError: '',
      additionalHalfPriceState: ' '
    });
  };

  change = (event, stateName, type) => {
    const { value } = event.target;

    switch (type) {
      case 'number':
        if (Number(value)) {
          this.setState({
            [stateName + 'State']: 'success',
            [stateName + 'Error']: ''
          });
        } else {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.number`
          });
        }
        break;
      case 'noValidate':
        this.setState({ [stateName + 'State']: 'success' });
        break;
      default:
        break;
    }

    this.setState({ [stateName]: event.target.value });
    this.props.handleStateChange(stateName, event.target.value);
  };

  isValidated = () => {
    const { service, travelBy } = this.props;
    const {
      passengerPriceState,
      firstHalfPriceState,
      additionalHalfPriceState
    } = this.state;

    if (
      travelBy === 'air' &&
      firstHalfPriceState === 'success' &&
      additionalHalfPriceState === 'success'
    ) {
      return true;
    } else {
      if (firstHalfPriceState !== 'success') {
        this.setState({
          firstHalfPriceState: 'error',
          firstHalfPriceError: 'firstHalfPrice.require'
        });
      }
      if (additionalHalfPriceState !== 'success') {
        this.setState({
          additionalHalfPriceState: 'error',
          additionalHalfPriceError: 'additionalHalfPrice.require'
        });
      }
    }

    if (service === '' && travelBy !== 'air') {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
      if (
        service === 'package' &&
        firstHalfPriceState === 'success' &&
        additionalHalfPriceState === 'success'
      ) {
        return true;
      } else {
        if (firstHalfPriceState !== 'success') {
          this.setState({
            firstHalfPriceState: 'error',
            firstHalfPriceError: 'firstHalfPrice.require'
          });
        }
        if (additionalHalfPriceState !== 'success') {
          this.setState({
            additionalHalfPriceState: 'error',
            additionalHalfPriceError: 'additionalHalfPrice.require'
          });
        }
      }

      if (service === 'carPool' && passengerPriceState === 'success') {
        return true;
      } else {
        if (passengerPriceState !== 'success') {
          this.setState({
            passengerPriceState: 'error',
            passengerPriceError: 'passengerPrice.require'
          });
        }
      }

      if (
        service === 'both' &&
        passengerPriceState === 'success' &&
        firstHalfPriceState === 'success' &&
        additionalHalfPriceState === 'success'
      ) {
        return true;
      } else {
        if (passengerPriceState !== 'success') {
          this.setState({
            passengerPriceState: 'error',
            passengerPriceError: 'passengerPrice.require'
          });
        }
        if (firstHalfPriceState !== 'success') {
          this.setState({
            firstHalfPriceState: 'error',
            firstHalfPriceError: 'firstHalfPrice.require'
          });
        }
        if (additionalHalfPriceState !== 'success') {
          this.setState({
            additionalHalfPriceState: 'error',
            additionalHalfPriceError: 'additionalHalfPrice.require'
          });
        }
      }
    }

    return false;
  };

  render() {
    const { open } = this.state;
    const { lng, classes, travelBy, service, handleStateChange } = this.props;
    return (
      <Fragment>
        {travelBy === 'land' ? (
          <Fragment>
            <GridContainer justify="space-between">
              <ItemGrid xs={6} sm={6} md={4}>
                {service && (
                  <Button
                    wd
                    color="primaryNoBackground"
                    onClick={() => {
                      this.resetState();
                      this.props.backToProvidedServices();
                    }}
                    customClass={`${classes.buttonLink} animated fadeIn`}
                    style={{ textTransform: 'capitalize', marginTop: '3px' }}
                  >
                    {I18n.t('backToProvidedServices.label', { lng })}
                  </Button>
                )}
              </ItemGrid>
              <ItemGrid xs={service ? 6 : 12} sm={service ? 6 : 12} md={4}>
                {service ? (
                  <h4 className={`${classes.infoText} animated fadeIn`}>
                    {I18n.t('tripInformation.label', { lng })}
                  </h4>
                ) : (
                  <h4 className={`${classes.infoText} animated fadeIn`}>
                    {I18n.t('providedServices.label', { lng })}
                  </h4>
                )}
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4} />
            </GridContainer>
            {service ? (
              <Fragment>
                <GridContainer
                  justify={service === 'package' ? 'center' : 'space-between'}
                >
                  {(service === 'carPool' || service === 'both') && (
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput2
                        lng={lng}
                        labelText={I18n.t('passengerPrice.label', { lng })}
                        id="passengerPrice"
                        rtlActive={lng === 'ar'}
                        success={this.state.passengerPriceState === 'success'}
                        error={this.state.passengerPriceState === 'error'}
                        helpText={this.state.passengerPriceError}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          value: this.state.passengerPrice,
                          onChange: event =>
                            this.change(event, 'passengerPrice', 'number'),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <i
                                className={
                                  'fas fa-user ' +
                                  (lng === 'ar'
                                    ? classes.inputAdornmentIconRTL
                                    : classes.inputAdornmentIcon)
                                }
                              />
                            </InputAdornment>
                          ),
                          type: 'text'
                        }}
                      />
                    </ItemGrid>
                  )}
                  {(service === 'package' || service === 'both') && (
                    <Fragment>
                      <ItemGrid xs={12} sm={12} md={4}>
                        <CustomInput2
                          lng={lng}
                          labelText={I18n.t('firstHalfPrice.label', { lng })}
                          id="firstHalfPrice"
                          rtlActive={lng === 'ar'}
                          success={this.state.firstHalfPriceState === 'success'}
                          error={this.state.firstHalfPriceState === 'error'}
                          helpText={this.state.firstHalfPriceError}
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            value: this.state.firstHalfPrice,
                            onChange: event =>
                              this.change(event, 'firstHalfPrice', 'number'),
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                className={classes.inputAdornment}
                              >
                                <i
                                  className={
                                    'fas fa-weight ' +
                                    (lng === 'ar'
                                      ? classes.inputAdornmentIconRTL
                                      : classes.inputAdornmentIcon)
                                  }
                                />
                              </InputAdornment>
                            ),
                            type: 'text'
                          }}
                        />
                      </ItemGrid>
                      <ItemGrid xs={12} sm={12} md={4}>
                        <CustomInput2
                          lng={lng}
                          labelText={I18n.t('additionalHalfPrice.label', {
                            lng
                          })}
                          id="additionalHalfPrice"
                          rtlActive={lng === 'ar'}
                          success={
                            this.state.additionalHalfPriceState === 'success'
                          }
                          error={
                            this.state.additionalHalfPriceState === 'error'
                          }
                          helpText={this.state.additionalHalfPriceError}
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            value: this.state.additionalHalfPrice,
                            onChange: event =>
                              this.change(
                                event,
                                'additionalHalfPrice',
                                'number'
                              ),
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                className={classes.inputAdornment}
                              >
                                <i
                                  className={
                                    'fas fa-weight ' +
                                    (lng === 'ar'
                                      ? classes.inputAdornmentIconRTL
                                      : classes.inputAdornmentIcon)
                                  }
                                />
                              </InputAdornment>
                            ),
                            type: 'text'
                          }}
                        />
                      </ItemGrid>
                    </Fragment>
                  )}
                  {(service === 'carPool' || service === 'both') && (
                    <ItemGrid
                      xs={12}
                      sm={12}
                      md={service === 'carPool' ? 8 : 12}
                    >
                      <CustomInput2
                        lng={lng}
                        labelText={I18n.t('vehicleDescription.label', {
                          lng
                        })}
                        id="vehicleDescription"
                        rtlActive={lng === 'ar'}
                        success={
                          this.state.vehicleDescriptionState === 'success'
                        }
                        error={this.state.vehicleDescriptionState === 'error'}
                        helpText=""
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          value: this.state.vehicleDescription,
                          onChange: event =>
                            this.change(
                              event,
                              'vehicleDescription',
                              'noValidate'
                            ),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={classes.inputAdornment}
                            >
                              <i
                                className={
                                  'fas fa-weight ' +
                                  (lng === 'ar'
                                    ? classes.inputAdornmentIconRTL
                                    : classes.inputAdornmentIcon)
                                }
                              />
                            </InputAdornment>
                          ),
                          type: 'text'
                        }}
                      />
                    </ItemGrid>
                  )}
                </GridContainer>
                <CustomInput2
                  lng={lng}
                  id="notes"
                  labelText={I18n.t('notes.label', { lng })}
                  rtlActive={lng === 'ar'}
                  success={this.state.notesState === 'success'}
                  error={this.state.notesState === 'error'}
                  helpText=""
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    value: this.state.notes,
                    onChange: event => this.change(event, 'notes'),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.inputAdornment}
                      >
                        <i
                          className={
                            'fas fa-weight ' +
                            (lng === 'ar'
                              ? classes.inputAdornmentIconRTL
                              : classes.inputAdornmentIcon)
                          }
                        />
                      </InputAdornment>
                    ),
                    type: 'text'
                  }}
                />
              </Fragment>
            ) : (
              <GridContainer justify="center" className="animated fadeIn">
                <ItemGrid xs={12} sm={4}>
                  <div className={classes.choiche}>
                    <Radio
                      tabIndex={-1}
                      name="travel-type"
                      checked={service === 'package'}
                      onClick={() => handleStateChange('service', 'package')}
                      checkedIcon={
                        <i
                          className={`fas fa-box ${classes.iconCheckboxIcon}`}
                        />
                      }
                      icon={
                        <i
                          className={`fas fa-box ${classes.iconCheckboxIcon}`}
                        />
                      }
                      classes={{
                        checked: classes.iconCheckboxChecked,
                        default: classes.iconCheckbox
                      }}
                    />
                    <h6 style={{ textTransform: 'capitalize' }}>
                      {I18n.t('packageDelivery.label', { lng })}
                    </h6>
                  </div>
                </ItemGrid>
                <ItemGrid xs={12} sm={4}>
                  <div className={classes.choiche}>
                    <Radio
                      tabIndex={-1}
                      name="travel-type"
                      checked={service === 'carPool'}
                      onClick={() => handleStateChange('service', 'carPool')}
                      checkedIcon={
                        <i
                          className={`fas fa-users ${classes.iconCheckboxIcon}`}
                        />
                      }
                      icon={
                        <i
                          className={`fas fa-users ${classes.iconCheckboxIcon}`}
                        />
                      }
                      classes={{
                        checked: classes.iconCheckboxChecked,
                        default: classes.iconCheckbox
                      }}
                    />
                    <h6 style={{ textTransform: 'capitalize' }}>
                      {I18n.t('carPool.label', { lng })}
                    </h6>
                  </div>
                </ItemGrid>
                <ItemGrid xs={12} sm={4}>
                  <div className={classes.choiche}>
                    <Radio
                      tabIndex={-1}
                      name="travel-type"
                      checked={service === 'both'}
                      onClick={() => handleStateChange('service', 'both')}
                      checkedIcon={
                        <Fragment>
                          <i
                            className={`fas fa-box ${
                              classes.iconCheckboxIconBoth
                            }`}
                          />{' '}
                          +{' '}
                          <i
                            className={`fas fa-users ${
                              classes.iconCheckboxIconBoth
                            }`}
                          />
                        </Fragment>
                      }
                      icon={
                        <Fragment>
                          <i
                            className={`fas fa-box ${
                              classes.iconCheckboxIconBoth
                            }`}
                          />{' '}
                          +{' '}
                          <i
                            className={`fas fa-users ${
                              classes.iconCheckboxIconBoth
                            }`}
                          />
                        </Fragment>
                      }
                      classes={{
                        checked: classes.iconCheckboxChecked,
                        default: classes.iconCheckbox
                      }}
                    />
                    <h6 style={{ textTransform: 'capitalize' }}>
                      {I18n.t('both.label', { lng })}
                    </h6>
                  </div>
                </ItemGrid>
              </GridContainer>
            )}
          </Fragment>
        ) : (
          <div className="animated fadeIn">
            <GridContainer justify="center">
              <ItemGrid xs={12} sm={12} md={12}>
                <h4 className={classes.infoText}>
                  {I18n.t('tripInformation.label', { lng })}
                </h4>
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <CustomInput2
                  lng={lng}
                  labelText={I18n.t('firstHalfPrice.label', { lng })}
                  id="firstHalfPrice"
                  rtlActive={lng === 'ar'}
                  success={this.state.firstHalfPriceState === 'success'}
                  error={this.state.firstHalfPriceState === 'error'}
                  helpText={this.state.firstHalfPriceError}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    onChange: event =>
                      this.change(event, 'firstHalfPrice', 'number'),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.inputAdornment}
                      >
                        <i
                          className={
                            'fas fa-weight ' +
                            (lng === 'ar'
                              ? classes.inputAdornmentIconRTL
                              : classes.inputAdornmentIcon)
                          }
                        />
                      </InputAdornment>
                    ),
                    type: 'text'
                  }}
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <CustomInput2
                  lng={lng}
                  labelText={I18n.t('additionalHalfPrice.label', {
                    lng
                  })}
                  rtlActive={lng === 'ar'}
                  id="additionalHalfPrice"
                  success={this.state.additionalHalfPriceState === 'success'}
                  error={this.state.additionalHalfPriceState === 'error'}
                  helpText={this.state.additionalHalfPriceError}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    onChange: event =>
                      this.change(event, 'additionalHalfPrice', 'number'),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.inputAdornment}
                      >
                        <i
                          className={
                            'fas fa-weight ' +
                            (lng === 'ar'
                              ? classes.inputAdornmentIconRTL
                              : classes.inputAdornmentIcon)
                          }
                        />
                      </InputAdornment>
                    ),
                    type: 'text'
                  }}
                />
              </ItemGrid>
            </GridContainer>
            <CustomInput2
              lng={lng}
              id="notes"
              labelText={I18n.t('notes.label', { lng })}
              rtlActive={lng === 'ar'}
              success={this.state.notesState === 'success'}
              error={this.state.notesState === 'error'}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                value: this.state.notes,
                onChange: event => this.change(event, 'notes'),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  >
                    <i
                      className={
                        'fas fa-weight ' +
                        (lng === 'ar'
                          ? classes.inputAdornmentIconRTL
                          : classes.inputAdornmentIcon)
                      }
                    />
                  </InputAdornment>
                ),
                type: 'text'
              }}
            />
          </div>
        )}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          rtlActive={lng === 'ar'}
          onClose={this.handleAlertClose}
          place={lng === 'ar' ? 'br' : 'bl'}
          message={I18n.t('providedServices.require', { lng })}
        />
      </Fragment>
    );
  }
}

export default withStyles(style)(Step2);
