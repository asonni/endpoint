import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';

const style = {
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)'
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  }
};

const GridContainer = ({ ...props }) => {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
};

export default withStyles(style)(GridContainer);
