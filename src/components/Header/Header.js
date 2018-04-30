import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'recompose';
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
import Menu, { MenuItem } from 'material-ui/Menu';

// material-ui-icons
import MenuIcon from 'material-ui-icons/Menu';
import Add from 'material-ui-icons/Add';
import HomeIcon from 'material-ui-icons/Home';
import Person from 'material-ui-icons/Person';

import I18n from '../I18n/I18n';
import { pagesRoutes } from '../../routes/pages';

import headerStyle from '../../assets/jss/components/headerStyle';

class Header extends Component {
  state = { open: false, anchorEl: null };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onLogout = () => {
    this.setState({ anchorEl: null });
    this.props.history.push('/account');
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName =>
    this.props.location.pathname === routeName &&
    this.props.location.pathname.includes(routeName)
      ? true
      : false;

  renderList = (lng, classes, dropdownItem, authenticated) =>
    authenticated ? (
      <Fragment>
        <ListItem
          className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
        >
          <NavLink
            to="/"
            className={`${classes.navLink} ${cx({
              [classes.navLinkActive]: this.activeRoute('/')
            })}`}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={I18n.t(`home.label`, { lng })}
            />
          </NavLink>
        </ListItem>
        <ListItem
          className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
        >
          <Button
            aria-haspopup="true"
            className={classes.navLink}
            onClick={this.handleClick}
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Person />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={I18n.t(`myAccount.label`, { lng })}
            />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            {/* <MenuItem onClick={this.handleClose}>Profile</MenuItem> */}
            {/* <MenuItem onClick={this.handleClose}>My account</MenuItem> */}
            <MenuItem onClick={this.onLogout}>
              {I18n.t('logout.label', { lng })}
            </MenuItem>
          </Menu>
          {/* </div> */}
        </ListItem>
        <ListItem
          className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
        >
          <NavLink
            to="/addtrip"
            className={`${classes.navLink} ${cx({
              [classes.navLinkActive]: this.activeRoute('/addtrip')
            })}`}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Add />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={I18n.t(`addTrip.label`, { lng })}
            />
          </NavLink>
        </ListItem>
      </Fragment>
    ) : (
      <Fragment>
        {pagesRoutes.map((prop, key) => (
          <ListItem
            key={key}
            className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
          >
            <NavLink
              to={prop.path}
              className={`${classes.navLink} ${cx({
                [classes.navLinkActive]: this.activeRoute(prop.path)
              })}`}
            >
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
        ))}
        <ListItem
          className={lng === 'ar' ? classes.listItemRTL : classes.listItem}
        >
          <NavLink
            to="/addtrip"
            className={`${classes.navLink} ${cx({
              [classes.navLinkActive]: this.activeRoute('addtrip')
            })}`}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Add />
            </ListItemIcon>
            <ListItemText
              primary={I18n.t(`addTrip.label`, { lng })}
              disableTypography={true}
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
      </Fragment>
    );

  render() {
    const { lng, classes, color, authenticated } = this.props;
    const appBarClasses = cx({ [classes[color]]: color });
    const dropdownItem =
      classes.dropdownItem +
      ' ' +
      cx({
        [classes.dropdownItemRTL]: false
      });
    return (
      <AppBar
        position="static"
        className={`${classes.appBar} ${appBarClasses}`}
      >
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button className={classes.title}>Addabba</Button>
          </div>
          <Hidden smDown implementation="css">
            <List className={lng === 'ar' ? classes.listRTL : classes.list}>
              {this.renderList(lng, classes, dropdownItem, authenticated)}
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              className={classes.sidebarButton}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
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
                <List className={lng === 'ar' ? classes.listRTL : classes.list}>
                  {this.renderList(lng, classes, dropdownItem, authenticated)}
                </List>
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

let mapStateToProps = ({ authStore: { authenticated } }) => ({
  authenticated
});

export default compose(
  withStyles(headerStyle),
  withRouter,
  connect(mapStateToProps)
)(Header);
