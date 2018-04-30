// ##############################
// // // RegisterPage view styles
// #############################

import { container } from '../main';

import customCheckboxRadioSwitch from '../customCheckboxRadioSwitch';

const registerPageStyle = theme => ({
  container: {
    ...container,
    position: 'relative',
    zIndex: '3',
    paddingTop: '14vh'
  },
  cardClasses: {
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: '100px',
    padding: '40px 0px'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  left: {
    textAlign: 'left'
  },
  form: {
    padding: '0 20px',
    position: 'relative'
  },
  socialTitle: {
    fontSize: '18px'
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
  customFormControlClasses: {
    margin: '0 12px'
  },
  checkboxLabelControl: {
    margin: '0'
  },
  checkboxLabel: {
    marginLeft: '6px',
    color: 'rgba(0, 0, 0, 0.26)'
  },
  checkboxLabelRTL: {
    marginRight: '6px',
    color: 'rgba(0, 0, 0, 0.26)'
  },
  ...customCheckboxRadioSwitch,
  cardTitle: {
    fontSize: '2.6em'
  },
  buttonWrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonProgress: {
    color: '#F9FBE7',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

export default registerPageStyle;
