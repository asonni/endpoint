import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';

import IconButton from 'material-ui/IconButton';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControl from 'material-ui/Form/FormControl';

// core components
import GridContainer from '../../components/Grid/GridContainer';
import ItemGrid from '../../components/Grid/ItemGrid';
import CustomInput2 from '../../components/CustomInput2/CustomInput2';
import I18n from '../../components/I18n/I18n';
import { classnames } from '../../utils/helpers';

const style = {
  times: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  timesRTL: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
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
  helpText: {
    color: '#f44336'
  },
  inputRTL: {
    textAlign: 'right'
  },
  labelDateTime: {
    color: '#AAAAAA',
    fontSize: '14px'
  },
  labelDateTimeRTL: {
    transformOrigin: 'top right',
    right: 0,
    left: 'auto',
    color: '#AAAAAA',
    fontSize: '14px'
  }
};

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        // backgroundColor: lightBlue.A200
      }
    }
  }
});

class Step3 extends Component {
  state = {
    loadingPlace: false,
    placeId: '',
    placeIdState: '',
    placeIdError: '',
    meetingPoint: '',
    meetingPointState: '',
    meetingPointError: '',
    meetingTime: null,
    meetingTimeState: '',
    meetingTimeError: '',
    phone: '',
    phoneState: '',
    phoneError: '',
    time: null,
    timeState: '',
    timeError: '',
    address: '',
    errorMessage: ''
  };

  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  change = (event, stateName, type, stateNameEqualTo) => {
    const { value } = event.target;

    switch (type) {
      case 'isNotEmpty':
        if (!value) {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.require`
          });
        } else {
          this.setState({
            [stateName + 'State']: 'success',
            [stateName + 'Error']: ''
          });
        }
        break;
      case 'phone':
        // eslint-disable-next-line
        const rePhone = /^[\s()+-]*([0-9][\s()+-]*){11,20}$/;
        if (!value) {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.require`
          });
        } else if (value && !rePhone.test(value)) {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.phone`
          });
        } else if (value && rePhone.test(value)) {
          this.setState({
            [stateName + 'State']: 'success',
            [stateName + 'Error']: ''
          });
        }
        break;
      case 'length':
        if (!value) {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.require`
          });
        } else if (
          value &&
          !this.verifyLength(event.target.value, stateNameEqualTo)
        ) {
          this.setState({
            [stateName + 'State']: 'error',
            [stateName + 'Error']: `${stateName}.length`
          });
        } else if (
          value &&
          this.verifyLength(event.target.value, stateNameEqualTo)
        ) {
          this.setState({
            [stateName + 'State']: 'success',
            [stateName + 'Error']: ''
          });
        }
        break;
      case 'noValidate':
        console.log(stateName);
        this.setState({
          [stateName + 'State']: 'success',
          [stateName + 'Error']: ''
        });
        break;
      default:
        break;
    }

    this.setState({ [stateName]: event.target.value });
    this.props.handelStartPointStateChange(stateName, event.target.value);
  };

  isValidated = () => {
    const {
      placeId,
      timeState,
      phoneState,
      placeIdState,
      meetingTimeState,
      meetingPointState
    } = this.state;

    if (
      placeIdState === 'success' &&
      meetingPointState === 'success' &&
      meetingTimeState === 'success' &&
      phoneState === 'success' &&
      timeState === 'success'
    ) {
      return true;
    } else {
      if (placeIdState !== 'success') {
        this.setState({
          placeIdState: 'error',
          placeIdError: 'placeId.require'
        });
      }
      if (meetingPointState !== 'success') {
        this.setState({
          meetingPointState: 'error',
          meetingPointError: 'meetingPoint.require'
        });
      }
      if (meetingTimeState !== 'success') {
        this.setState({
          meetingTimeState: 'error',
          meetingTimeError: 'meetingTime.require'
        });
      }
      if (timeState !== 'success') {
        this.setState({
          timeState: 'error',
          timeError: 'time.require'
        });
      }
      if (phoneState !== 'success') {
        this.setState({ phoneState: 'error', phoneError: 'phone.require' });
      }
      if (!placeId) {
        this.setState({
          placeIdState: 'error',
          placeIdError: 'placeId.require'
        });
      }
    }
    return false;
  };

  handleChange = address => {
    if (address) {
      this.setState({
        address,
        errorMessage: '',
        placeIdState: 'success'
      });
    } else {
      this.setState({
        address: '',
        placeIdState: 'error',
        placeIdError: 'placeId.require'
      });
    }
  };

  handleSelect = async selected => {
    const res = await geocodeByAddress(selected);
    this.setState({ placeId: res[0].place_id, placeIdState: 'success' });
    this.props.handelStartPointStateChange('placeId', res[0].place_id);
  };

  handleCloseClick = () => {
    this.setState({ address: '' });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  handleDateChange = (date, stateName) => {
    if (_.isDate(date)) {
      this.setState({
        [stateName + 'State']: 'success',
        [stateName + 'Error']: ''
      });
    } else {
      this.setState({
        [stateName + 'State']: 'error',
        [stateName + 'Error']: `${stateName}.date`
      });
    }
    this.setState({ [stateName]: date });
    this.props.handelStartPointStateChange(stateName, date);
  };

  render() {
    const { lng, classes } = this.props;
    const FormHelperTextRTL =
      classes.helpText + ' ' + cx({ [classes.inputRTL]: lng === 'ar' });
    return (
      <Fragment>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12}>
            <h4 className={classes.infoText}>
              {I18n.t('startPoint.label', { lng })}
            </h4>
          </ItemGrid>
          <ItemGrid xs={12} sm={8}>
            <PlacesAutocomplete
              onChange={this.handleChange}
              value={this.state.address}
              onSelect={this.handleSelect}
              onError={this.handleError}
              searchOptions={{ types: ['(cities)'] }}
              shouldFetchSuggestions={this.state.address.length > 2}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                return (
                  <div className="search-bar-container">
                    <div className="search-input-container">
                      <input
                        {...getInputProps({
                          placeholder: I18n.t('placeId.label', { lng }),
                          className: 'search-input'
                        })}
                      />
                      {this.state.address.length > 0 && (
                        <IconButton
                          className={
                            lng === 'ar' ? classes.timesRTL : classes.times
                          }
                          aria-label="Delete"
                          onClick={this.handleCloseClick}
                        >
                          <i className="far fa-times-circle" />
                        </IconButton>
                      )}
                    </div>
                    {suggestions.length > 0 && (
                      <div className="autocomplete-container">
                        {suggestions.map(suggestion => {
                          const className = classnames('suggestion-item', {
                            'suggestion-item--active': suggestion.active
                          });
                          console.log(suggestion);
                          return (
                            /* eslint-disable react/jsx-key */
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className
                              })}
                            >
                              <strong>
                                {suggestion.formattedSuggestion.mainText}
                              </strong>{' '}
                              <small>
                                {suggestion.formattedSuggestion.secondaryText}
                              </small>
                            </div>
                          );
                          /* eslint-enable react/jsx-key */
                        })}
                      </div>
                    )}
                  </div>
                );
              }}
            </PlacesAutocomplete>
            {this.state.errorMessage.length > 0 && (
              <div className="error-message">{this.state.errorMessage}</div>
            )}
            {this.state.placeIdState === 'error' ? (
              <FormHelperText className={FormHelperTextRTL}>
                {I18n.t(this.state.placeIdError, { lng })}
              </FormHelperText>
            ) : null}
          </ItemGrid>
        </GridContainer>
        <br />
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={4}>
            <CustomInput2
              lng={lng}
              labelText={I18n.t('meetingPoint.label', { lng })}
              id="meetingPoint"
              rtlActive={lng === 'ar'}
              success={this.state.meetingPointState === 'success'}
              error={this.state.meetingPointState === 'error'}
              helpText={this.state.meetingPointError}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                value: this.state.meetingPoint,
                onChange: event =>
                  this.change(event, 'meetingPoint', 'length', 5),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  >
                    <i
                      className={
                        'fas fa-map-marker ' +
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
          <ItemGrid xs={12} sm={4}>
            <CustomInput2
              lng={lng}
              labelText={I18n.t('phone.label', { lng })}
              id="phone"
              rtlActive={lng === 'ar'}
              success={this.state.phoneState === 'success'}
              error={this.state.phoneState === 'error'}
              helpText={this.state.phoneError}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                value: this.state.phone,
                onChange: event => this.change(event, 'phone', 'phone'),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  >
                    <i
                      className={
                        'fas fa-phone ' +
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
        <GridContainer justify="center">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={materialTheme}>
              <Fragment>
                <ItemGrid xs={12} sm={4}>
                  <FormControl fullWidth>
                    <DateTimePicker
                      clearable
                      disablePast
                      value={this.state.meetingTime}
                      onChange={date =>
                        this.handleDateChange(date, 'meetingTime')
                      }
                      label={
                        <span
                          className={
                            lng === 'ar'
                              ? classes.labelDateTimeRTL
                              : classes.labelDateTime
                          }
                        >
                          {I18n.t('meetingTime.label', { lng })}
                        </span>
                      }
                      helperText={
                        <span style={{ color: 'red' }}>
                          {I18n.t(this.state.meetingTimeError, { lng })}
                        </span>
                      }
                      leftArrowIcon={<i className="fas fa-arrow-left" />}
                      rightArrowIcon={<i className="fas fa-arrow-right" />}
                      dateRangeIcon={<i className="far fa-calendar-alt" />}
                      timeIcon={<i className="far fa-clock" />}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <i
                              style={{ paddingBottom: '8px' }}
                              className={
                                'fas fa-calendar-alt ' +
                                (lng === 'ar'
                                  ? classes.inputAdornmentIconRTL
                                  : classes.inputAdornmentIcon)
                              }
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </ItemGrid>
                <ItemGrid xs={12} sm={4}>
                  <FormControl fullWidth>
                    <DateTimePicker
                      clearable
                      disablePast
                      value={this.state.time}
                      onChange={date => this.handleDateChange(date, 'time')}
                      label={
                        <span
                          className={
                            lng === 'ar'
                              ? classes.labelDateTimeRTL
                              : classes.labelDateTime
                          }
                        >
                          {I18n.t('time.label', { lng })}
                        </span>
                      }
                      helperText={
                        <span style={{ color: 'red' }}>
                          {I18n.t(this.state.timeError, { lng })}
                        </span>
                      }
                      leftArrowIcon={<i className="fas fa-arrow-left" />}
                      rightArrowIcon={<i className="fas fa-arrow-right" />}
                      dateRangeIcon={<i className="far fa-calendar-alt" />}
                      timeIcon={<i className="far fa-clock" />}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <i
                              style={{ paddingBottom: '8px' }}
                              className={
                                'fas fa-calendar-alt ' +
                                (lng === 'ar'
                                  ? classes.inputAdornmentIconRTL
                                  : classes.inputAdornmentIcon)
                              }
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </ItemGrid>
              </Fragment>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </GridContainer>
      </Fragment>
    );
  }
}

export default withStyles(style)(Step3);
