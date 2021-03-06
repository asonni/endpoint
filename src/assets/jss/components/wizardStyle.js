// ##############################
// // // Wizard component styles
// #############################

import {
  primaryColor,
  dangerColor,
  successColor,
  roseColor,
  infoColor,
  warningColor,
  skyBlueColor
} from '../main';

const wizardStyle = theme => ({
  wizardContainer: {},
  card: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    margin: '25px 0',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    transition: 'all 300ms linear',
    minHeight: '410px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  wizardHeader: {
    textAlign: 'center',
    padding: '25px 0 35px'
  },
  title: {
    margin: '0',
    color: '#004871'
  },
  subtitle: {
    margin: '5px 0 0',
    color: '#004871'
  },
  wizardNavigation: {
    position: 'relative'
  },
  nav: {
    marginTop: '20px',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    '&:after,&:before': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  navRTL: {
    marginTop: '20px',
    paddingRight: '0',
    marginBottom: '0',
    listStyle: 'none',
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    '&:after,&:before': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      boxSizing: 'border-box'
    }
  },
  steps: {
    marginLeft: '0',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block'
  },
  stepsRTL: {
    marginRight: '0',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block'
  },
  stepsAnchor: {
    cursor: 'pointer',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    transition: 'all .3s',
    border: '0 !important',
    borderRadius: '30px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '100px',
    textAlign: 'center',
    color: '#555555 !important'
  },
  content: {
    marginTop: '20px',
    minHeight: '340px',
    padding: '20px 15px'
  },
  stepContent: {
    display: 'none'
  },
  stepContentActive: {
    display: 'block'
  },
  movingTab: {
    position: 'absolute',
    textAlign: 'center',
    padding: '12px',
    fontSize: '12px',
    textTransform: 'uppercase',
    WebkitFontSmoothing: 'subpixel-antialiased',
    top: '-4px',
    left: '0px',
    borderRadius: '4px',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: '500'
  },
  movingTabRTL: {
    position: 'absolute',
    textAlign: 'center',
    padding: '12px',
    fontSize: '12px',
    textTransform: 'uppercase',
    WebkitFontSmoothing: 'subpixel-antialiased',
    top: '-4px',
    right: '0px',
    borderRadius: '4px',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: '500'
  },
  primary: {
    backgroundColor: primaryColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)'
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)'
  },
  danger: {
    backgroundColor: dangerColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)'
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)'
  },
  info: {
    backgroundColor: infoColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)'
  },
  rose: {
    backgroundColor: roseColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)'
  },
  skyBlue: {
    backgroundColor: skyBlueColor,
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)'
  },
  footer: {
    padding: '0 15px'
  },
  left: {
    float: 'left!important'
  },
  right: {
    float: 'right!important'
  },
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "'
    },
    clear: 'both'
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

export default wizardStyle;
