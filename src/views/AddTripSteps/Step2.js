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
    marginLeft: '10px'
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
    passengerPriceState: '',
    firstHalfPrice: '',
    firstHalfPriceState: '',
    vehicleDescription: '',
    vehicleDescriptionState: '',
    additionalHalfPrice: '',
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
      passengerPriceState: '',
      firstHalfPrice: '',
      firstHalfPriceState: '',
      vehicleDescription: '',
      vehicleDescriptionState: '',
      additionalHalfPrice: '',
      additionalHalfPriceState: ' '
    });
  };

  change = (event, stateName) => {
    const { value } = event.target;
    if (!value && stateName === 'passengerPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else if (value && !Number(value) && stateName === 'passengerPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else {
      this.setState({ [stateName + 'State']: 'success' });
    }

    if (!value && stateName === 'firstHalfPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else if (value && !Number(value) && stateName === 'firstHalfPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else {
      this.setState({ [stateName + 'State']: 'success' });
    }

    if (!value && stateName === 'additionalHalfPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else if (value && !Number(value) && stateName === 'additionalHalfPrice') {
      this.setState({ [stateName + 'State']: 'error' });
    } else {
      this.setState({ [stateName + 'State']: 'success' });
    }

    this.setState({ [stateName]: event.target.value });
    this.props.handleStateChange(stateName, event.target.value);
  };

  isValidated = () => {
    const { service } = this.props;
    const {
      passengerPriceState,
      firstHalfPriceState,
      additionalHalfPriceState
    } = this.state;

    if (service === '') {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
      if (
        service === 'packageDelivery' &&
        firstHalfPriceState === 'success' &&
        additionalHalfPriceState === 'success'
      ) {
        return true;
      } else {
        if (firstHalfPriceState !== 'success') {
          this.setState({ firstHalfPriceState: 'error' });
        }
        if (additionalHalfPriceState !== 'success') {
          this.setState({ additionalHalfPriceState: 'error' });
        }
      }

      if (service === 'carPool' && passengerPriceState === 'success') {
        return true;
      } else {
        if (passengerPriceState !== 'success') {
          this.setState({ passengerPriceState: 'error' });
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
          this.setState({ passengerPriceState: 'error' });
        }
        if (firstHalfPriceState !== 'success') {
          this.setState({ firstHalfPriceState: 'error' });
        }
        if (additionalHalfPriceState !== 'success') {
          this.setState({ additionalHalfPriceState: 'error' });
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
                  justify={
                    service === 'packageDelivery' ? 'center' : 'space-between'
                  }
                >
                  {(service === 'carPool' || service === 'both') && (
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput2
                        labelText=""
                        id="passengerPrice"
                        success={this.state.passengerPriceState === 'success'}
                        error={this.state.passengerPriceState === 'error'}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          value: this.state.passengerPrice,
                          onChange: event =>
                            this.change(event, 'passengerPrice'),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={
                                lng === 'ar'
                                  ? classes.inputAdornmentRTL
                                  : classes.inputAdornment
                              }
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
                          type: 'text',
                          placeholder: I18n.t('passengerPrice.label', { lng })
                        }}
                      />
                    </ItemGrid>
                  )}
                  {(service === 'packageDelivery' || service === 'both') && (
                    <Fragment>
                      <ItemGrid xs={12} sm={12} md={4}>
                        <CustomInput2
                          labelText=""
                          id="firstHalfPrice"
                          success={this.state.firstHalfPriceState === 'success'}
                          error={this.state.firstHalfPriceState === 'error'}
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            value: this.state.firstHalfPrice,
                            onChange: event =>
                              this.change(event, 'firstHalfPrice'),
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={
                                  lng === 'ar'
                                    ? classes.inputAdornmentRTL
                                    : classes.inputAdornment
                                }
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
                            type: 'text',
                            placeholder: I18n.t('firstHalfPrice.label', { lng })
                          }}
                        />
                      </ItemGrid>
                      <ItemGrid xs={12} sm={12} md={4}>
                        <CustomInput2
                          labelText=""
                          id="additionalHalfPrice"
                          success={
                            this.state.additionalHalfPriceState === 'success'
                          }
                          error={
                            this.state.additionalHalfPriceState === 'error'
                          }
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            value: this.state.additionalHalfPrice,
                            onChange: event =>
                              this.change(
                                event,
                                'additionalHalfPrice',
                                'length',
                                1
                              ),
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={
                                  lng === 'ar'
                                    ? classes.inputAdornmentRTL
                                    : classes.inputAdornment
                                }
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
                            type: 'text',
                            placeholder: I18n.t('additionalHalfPrice.label', {
                              lng
                            })
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
                        labelText=""
                        id="vehicleDescription"
                        success={
                          this.state.vehicleDescriptionState === 'success'
                        }
                        error={this.state.vehicleDescriptionState === 'error'}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          value: this.state.vehicleDescription,
                          onChange: event =>
                            this.change(event, 'vehicleDescription'),
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={
                                lng === 'ar'
                                  ? classes.inputAdornmentRTL
                                  : classes.inputAdornment
                              }
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
                          type: 'text',
                          placeholder: I18n.t('vehicleDescription.label', {
                            lng
                          })
                        }}
                      />
                    </ItemGrid>
                  )}
                </GridContainer>
                <CustomInput2
                  id="notes"
                  labelText=""
                  success={this.state.notesState === 'success'}
                  error={this.state.notesState === 'error'}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    value: this.state.notesState,
                    onChange: event => this.change(event, 'notes'),
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className={
                          lng === 'ar'
                            ? classes.inputAdornmentRTL
                            : classes.inputAdornment
                        }
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
                    type: 'text',
                    placeholder: I18n.t('notes.label', { lng })
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
                      checked={service === 'packageDelivery'}
                      onClick={() =>
                        handleStateChange('service', 'packageDelivery')
                      }
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
                  labelText=""
                  id="firstHalfPrice"
                  success={this.state.firstHalfPriceState === 'success'}
                  error={this.state.firstHalfPriceState === 'error'}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    onChange: event => this.change(event, 'firstHalfPrice'),
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className={
                          lng === 'ar'
                            ? classes.inputAdornmentRTL
                            : classes.inputAdornment
                        }
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
                    type: 'text',
                    placeholder: I18n.t('firstHalfPrice.label', { lng })
                  }}
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <CustomInput2
                  labelText=""
                  id="additionalHalfPrice"
                  success={this.state.additionalHalfPriceState === 'success'}
                  error={this.state.additionalHalfPriceState === 'error'}
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    onChange: event =>
                      this.change(event, 'additionalHalfPrice', 'length', 1),
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className={
                          lng === 'ar'
                            ? classes.inputAdornmentRTL
                            : classes.inputAdornment
                        }
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
                    type: 'text',
                    placeholder: I18n.t('additionalHalfPrice.label', {
                      lng
                    })
                  }}
                />
              </ItemGrid>
            </GridContainer>
            <CustomInput2
              id="notes"
              labelText=""
              success={this.state.notesState === 'success'}
              error={this.state.notesState === 'error'}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange: event => this.change(event, 'notes'),
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className={
                      lng === 'ar'
                        ? classes.inputAdornmentRTL
                        : classes.inputAdornment
                    }
                  >
                    <i
                      className={
                        'fas fa-info ' +
                        (lng === 'ar'
                          ? classes.inputAdornmentIconRTL
                          : classes.inputAdornmentIcon)
                      }
                    />
                  </InputAdornment>
                ),
                type: 'text',
                placeholder: I18n.t('notes.label', { lng })
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
