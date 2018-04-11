import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

import infoStyle from '../../assets/jss/components/infoStyle';

const InfoArea = ({ ...props }) => {
  const { classes, title, description, iconColor } = props;
  return (
    <div className={classes.infoArea}>
      <div className={classes.iconWrapper + ' ' + classes[iconColor]}>
        <props.icon className={classes.icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

InfoArea.defaultProps = {
  iconColor: 'gray'
};

export default withStyles(infoStyle)(InfoArea);
