// ##############################
// // // Pages Header styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  skyBlueColor,
  boxShadow,
  drawerWidth,
  transition
} from '../main';

const headerStyle = theme => ({
  appBar: {
    borderBottom: '0',
    marginBottom: '0',
    position: 'absolute',
    width: '100%',
    paddingTop: '10px',
    zIndex: '1029',
    // color: '#555555',
    color: '#004871',
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block',
    backgroundColor: '#ffffff'
  },
  container: {
    ...container,
    minHeight: '50px'
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    padding: 0,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    // color: 'rgba(0, 0, 0, 0.54)',
    color: '#004871',
    '&:hover,&:focus': {
      background: 'transparent',
      color: '#000'
    }
  },
  appResponsive: {
    top: '8px'
  },
  primary: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  skyBlue: {
    backgroundColor: skyBlueColor,
    color: '#FFFFFF',
    ...defaultBoxShadow
  },
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    marginRight: '-15px',
    paddingLeft: '0',
    listStyle: 'none',
    color: '#FFFFFF',
    paddingTop: '0',
    paddingBottom: '0'
  },
  listRTL: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    marginLeft: '-15px',
    paddingRight: '0',
    listStyle: 'none',
    color: '#FFFFFF',
    paddingTop: '0',
    paddingBottom: '0'
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      zIndex: '999',
      width: '100%',
      paddingRight: '15px'
    }
  },
  listItemRTL: {
    float: 'right',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      zIndex: '999',
      width: '100%',
      paddingLeft: '15px'
    }
  },
  navLink: {
    // color: 'rgba(0, 0, 0, 0.54)',
    color: '#004871',
    margin: '0 5px',
    paddingTop: '15px',
    paddingBottom: '15px',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    '&:hover,&:focus': {
      // color: '#FFFFFF',
      // color: 'rgba(0, 0, 0, 0.54)',
      color: '#004871',
      background: 'rgba(200, 200, 200, 0.2)'
    }
  },
  listItemIcon: {
    marginTop: '-3px',
    top: '0px',
    position: 'relative',
    marginRight: '3px',
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
    color: 'inherit',
    display: 'inline-block'
  },
  listItemText: {
    flex: 'none',
    padding: '0',
    minWidth: '0',
    margin: 0,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  navLinkActive: {
    // backgroundColor: 'rgba(255, 255, 255, 0.1)'
    backgroundColor: 'rgba(200, 200, 200, 0.2)'
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...boxShadow,
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: '0'
    },
    '&:after': {
      background: '#eeeeee',
      opacity: '.8'
    }
  },
  sidebarButton: {
    color: 'rgba(0, 0, 0, 0.54)',
    top: '8px'
  }
});

export default headerStyle;
