import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardHeader from 'material-ui/Card/CardHeader';
import Typography from 'material-ui/Typography';

import statsCardStyle from '../../assets/jss/components/statsCardStyle';

const StatsCard = ({ ...props }) => {
  const { classes, title, description, small, iconColor, rtlActive } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: `${rtlActive ? classes.cardHeaderRTL : classes.cardHeader} ${
            classes[iconColor + 'CardHeader']
          }`,
          avatar: classes.cardAvatar
        }}
        avatar={<props.icon className={classes.cardIcon} />}
      />
      <CardContent
        className={rtlActive ? classes.cardContentRTL : classes.cardContent}
      >
        <Typography component="p" className={classes.cardCategory}>
          {title}
        </Typography>
        <Typography
          variant="headline"
          component="h2"
          className={classes.cardTitle}
        >
          {description}{' '}
          {small !== undefined ? (
            <small className={classes.cardTitleSmall}>{small}</small>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

StatsCard.defaultProps = {
  iconColor: 'purple',
  statIconColor: 'gray'
};

StatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.oneOf([
    'orange',
    'green',
    'red',
    'blue',
    'purple',
    'rose'
  ]),
  title: PropTypes.node,
  description: PropTypes.node,
  small: PropTypes.node,
  // statIcon: PropTypes.func.isRequired,
  statIconColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  statLink: PropTypes.object,
  statText: PropTypes.node
};

export default withStyles(statsCardStyle)(StatsCard);
