const snackbarStyle = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  actionRTL: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    paddingRight: '24px',
    marginLeft: '-8px',
    paddingLeft: '0px'
  }
});

export default snackbarStyle;
