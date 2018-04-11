import React from 'react';
import cx from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

import I18n from '../I18n/I18n';
import footerStyle from '../../assets/jss/components/footerStyle';

const footer = ({ ...props }) => {
  const { lng, classes, fluid, white } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={lng === 'ar' ? classes.rightRTL : classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={block}>
                {I18n.t('home.label', { lng })}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                className={block}
                href="javascript:void(0)"
                onClick={props.onLanguageChanged}
              >
                {I18n.t('language.label', { lng })}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={lng === 'ar' ? classes.leftRTL : classes.right}>
          &copy; {1900 + new Date().getYear()} Addabba
        </p>
      </div>
    </footer>
  );
};

export default withStyles(footerStyle)(footer);
