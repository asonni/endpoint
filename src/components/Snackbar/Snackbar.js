import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Snack from 'material-ui/Snackbar';

// material-ui-icons
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import snackbarStyle from '../../assets/jss/components/snackbarStyle';

const Snackbar = ({ ...props }) => {
  const {
    classes,
    message,
    place,
    open,
    onClose,
    rtlActive,
    autoHideDuration
  } = props;
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal:
          place.indexOf('l') !== -1
            ? 'left'
            : place.indexOf('c') !== -1 ? 'center' : 'right'
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      SnackbarContentProps={{
        'aria-describedby': 'message-id',
        classes: {
          action: cx({ [classes.actionRTL]: rtlActive })
        }
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  place: PropTypes.oneOf(['tl', 'tr', 'tc', 'br', 'bl', 'bc']),
  open: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(snackbarStyle)(Snackbar);
