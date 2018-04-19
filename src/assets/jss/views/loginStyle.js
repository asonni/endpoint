// ##############################
// // // LoginPage view styles
// #############################
import { container } from '../main';

const loginStyle = theme => ({
  content: {
    paddingTop: '18vh',
    minHeight: 'calc(100vh - 80px)',
    position: 'relative',
    zIndex: '4'
  },
  container,
  cardClasses: {
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  customButtonClass: {
    '&,&:focus,&:hover': {
      color: '#FFFFFF'
    },
    marginLeft: '5px',
    marginRight: '5px'
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
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  },
  socialButtonsIcons: {
    fontSize: '18px',
    marginTop: '-2px',
    position: 'relative'
  },
  marginRight: {
    marginRight: '5px'
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
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

export default loginStyle;
