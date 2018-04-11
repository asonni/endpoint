import React, { Component } from 'react';
import cx from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';

// material-ui-icons
import Menu from 'material-ui-icons/Menu';

import I18n from '../I18n/I18n';
import pagesRoutes from '../../routes/pages';

import headerStyle from '../../assets/jss/components/headerStyle';

class Header extends Component {
  state = { open: false };
  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName =>
    this.props.location.pathname === routeName &&
    this.props.location.pathname.includes(routeName)
      ? true
      : false;

  render() {
    const { lng, classes, color } = this.props;
    const appBarClasses = cx({ [' ' + classes[color]]: color });
    const list = (
      <List className={lng === 'ar' ? classes.listRTL : classes.list}>
        {pagesRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          const navLink =
            classes.navLink +
            cx({ [' ' + classes.navLinkActive]: this.activeRoute(prop.path) });
          return (
            <ListItem
              key={key}
              className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
            >
              <NavLink to={prop.path} className={navLink}>
                <ListItemIcon className={classes.listItemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={I18n.t(`${prop.short}.label`, { lng })}
                  disableTypography={true}
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="#" className={classes.title}>
              Addabba
            </Button>
          </div>
          <Hidden smDown implementation="css">
            {list}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.sidebarButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Hidden mdUp implementation="css">
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={'right'}
                open={this.state.open}
                classes={{ paper: classes.drawerPaper }}
                onClose={this.handleDrawerToggle}
                ModalProps={{ keepMounted: true }} // Better open performance on mobile.
              >
                {list}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyle)(withRouter(Header));
