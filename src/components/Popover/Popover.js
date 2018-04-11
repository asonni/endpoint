import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

import popoverStyle from '../../assets/jss/components/popoverStyle';

const Popover = ({ ...props }) => {
  const { classes, children, open, anchorEl, handlePopoverClose } = props;
  return (
    <Popover
      className={classes.popover}
      classes={{
        paper: classes.paper
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      {children}
    </Popover>
  );
};

export default withStyles(popoverStyle)(Popover);
