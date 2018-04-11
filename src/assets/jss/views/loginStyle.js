// ##############################
// // // LoginPage view styles
// #############################

import { container } from '../main';

const loginStyle = {
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
    marginRight: '18px'
  },
  inputAdornmentIcon: {
    color: '#555'
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
  }
};

export default loginStyle;