import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Snack from 'material-ui/Snackbar/SnackbarContent';
import IconButton from 'material-ui/IconButton';

// material-ui-icons
import Close from 'material-ui-icons/Close';

import snackbarContentStyle from '../../assets/jss/components/snackbarContentStyle';

const SnackbarContent = ({ ...props }) => {
  let action = [];
  const { classes, message, color, close, icon, centerContent } = props;
  const messageClasses = cx({
    [classes.iconMessage]: icon !== undefined
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }
  const iconClasses = cx({
    [classes.icon]: classes.icon,
    [classes.infoIcon]: color === 'info',
    [classes.successIcon]: color === 'success',
    [classes.warningIcon]: color === 'warning',
    [classes.dangerIcon]: color === 'danger',
    [classes.primaryIcon]: color === 'primary',
    [classes.roseIcon]: color === 'rose'
  });
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: cx({
          [classes.root]: classes.root,
          [classes[color]]: classes[color],
          [classes.rootCenter]: centerContent
        }),
        message: classes.message
      }}
      action={action}
    />
  );
};

SnackbarContent.defaultProps = {
  color: 'info'
};

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'danger',
    'primary',
    'rose'
  ]),
  close: PropTypes.bool,
  icon: PropTypes.func,
  centerContent: PropTypes.bool
};

export default withStyles(snackbarContentStyle)(SnackbarContent);
