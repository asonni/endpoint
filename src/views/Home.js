import React, { Component, Fragment } from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// material-ui-icons
import FormControl from 'material-ui/Form/FormControl';
import InputLabel from 'material-ui/Input/InputLabel';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import CardTravel from 'material-ui-icons/CardTravel';
import Tooltip from 'material-ui/Tooltip';
import LocalShipping from 'material-ui-icons/LocalShipping';
import LocalAirport from 'material-ui-icons/LocalAirport';
import LocalTaxi from 'material-ui-icons/LocalTaxi';
import DirectionsCar from 'material-ui-icons/DirectionsCar';

// core components
import I18n from '../components/I18n/I18n';
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import RegularCard from '../components/Cards/RegularCard';
import Button from '../components/CustomButtons/Button';
import Table from '../components/Table/Table';
import IconCard from '../components/Cards/IconCard';
import StatsCard from '../components/Cards/StatsCard';
// import Popover from '../components/Popover/Popover';

import homeStyle from '../assets/jss/views/homeStyle';

import avatar from '../assets/img/faces/marc.jpg';
import us_flag from '../assets/img/flags/US.PNG';
import de_flag from '../assets/img/flags/DE.PNG';
import au_flag from '../assets/img/flags/AU.PNG';
import gb_flag from '../assets/img/flags/GB.PNG';
import ro_flag from '../assets/img/flags/RO.PNG';
import br_flag from '../assets/img/flags/BR.PNG';
import br2_flag from '../assets/img/flags/BR.PNG';
import la_flag from '../assets/img/flags/LY.PNG';

class Home extends Component {
  state = {
    checked: [],
    anchorEl: null,
    simpleSelect: ''
  };
  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };
  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };
  render() {
    const { lng, classes } = this.props;
    // const { anchorEl } = this.state;
    // const open = !!anchorEl;
    return (
      <div className={`${classes.container} animated fadeIn`}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle={I18n.t('findTrip.label', { lng })}
              cardSubtitle={I18n.t('whereWouldYouLikeToShip.label', { lng })}
              titleAlign="center"
              subtitleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <GridContainer justify="space-between">
                  <ItemGrid xs={12} sm={12} md={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        {I18n.t('chooseTripType.label', { lng })}
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: 'simpleSelect',
                          id: 'simple-select'
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          {I18n.t('chooseTripType.label', { lng })}
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          All
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Land
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Flight
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        {I18n.t('tripFrom.label', { lng })}
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: 'simpleSelect',
                          id: 'simple-select'
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          {I18n.t('tripFrom.label', { lng })}
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          All
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Land
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Flight
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        {I18n.t('to.label', { lng })}
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: 'simpleSelect',
                          id: 'simple-select'
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          {I18n.t('to.label', { lng })}
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          All
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Land
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Flight
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </ItemGrid>
                  <GridContainer justify="center">
                    <ItemGrid xs={12} sm={12} md={4}>
                      <div className={classes.customButtonClass}>
                        <Button fullWidth color="rose">
                          <i className="material-icons">search</i>{' '}
                          {I18n.t('search.label', { lng })}
                        </Button>
                      </div>
                    </ItemGrid>
                  </GridContainer>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
        <GridContainer>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={LocalShipping}
              iconColor="rose"
              title={I18n.t('inboundTrips.label', { lng })}
              description="20"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={LocalAirport}
              iconColor="rose"
              title={I18n.t('outboundTrips.label', { lng })}
              description="10"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={LocalTaxi}
              iconColor="rose"
              title={I18n.t('localTrips.label', { lng })}
              description="200"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={LocalAirport}
              iconColor="rose"
              title={I18n.t('internationalTrips.label', { lng })}
              description="150"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={LocalAirport}
              iconColor="rose"
              title={I18n.t('tripsByAir.label', { lng })}
              description="12"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={4}>
            <StatsCard
              icon={DirectionsCar}
              iconColor="rose"
              title={I18n.t('tripsByLand.label', { lng })}
              description="9"
              rtlActive={lng === 'ar'}
              small={lng === 'ar' ? 'الف' : 'K'}
            />
          </ItemGrid>
        </GridContainer>
        <GridContainer>
          <ItemGrid xs={12}>
            <IconCard
              iconColor="rose"
              icon={CardTravel}
              rtlActive={lng === 'ar'}
              title={I18n.t('latestTrips.label', { lng })}
              content={
                <GridContainer justify="space-between">
                  <ItemGrid xs={12} sm={12} md={12}>
                    <Table
                      customCellClasses={
                        lng === 'ar'
                          ? [
                              classes.right,
                              classes.right,
                              classes.center,
                              classes.center,
                              classes.center
                            ]
                          : [classes.center, classes.center, classes.center]
                      }
                      customClassesForCells={
                        lng === 'ar' ? [0, 1, 2, 3, 4] : [2, 3, 4]
                      }
                      customHeadCellClasses={
                        lng === 'ar'
                          ? [
                              classes.right,
                              classes.right,
                              classes.center,
                              classes.center,
                              classes.center
                            ]
                          : [classes.center, classes.center, classes.center]
                      }
                      customHeadClassesForCells={
                        lng === 'ar' ? [0, 1, 2, 3, 4] : [2, 3, 4]
                      }
                      tableHead={[
                        I18n.t('tripFrom.label', { lng }),
                        I18n.t('to.label', { lng }),
                        I18n.t('profilePicture.label', { lng }),
                        I18n.t('rating.label', { lng }),
                        I18n.t('sendRequest.label', { lng })
                      ]}
                      tableData={[
                        [
                          <Fragment>
                            <img
                              src={us_flag}
                              alt="us_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            USA, New York
                          </Fragment>,
                          <Fragment>
                            <img
                              src={de_flag}
                              alt="de_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Germany, Berlin
                          </Fragment>,
                          <div className={classes.avatar}>
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_half</i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ],
                        [
                          <Fragment>
                            <img
                              src={de_flag}
                              alt="de_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Germany, Berlin
                          </Fragment>,
                          <Fragment>
                            <img
                              src={au_flag}
                              alt="au_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Australia, Canberra
                          </Fragment>,
                          <div
                            className={classes.avatar}
                            // onMouseOver={this.handlePopoverOpen}
                            // onMouseOut={this.handlePopoverClose}
                          >
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                              {/* <Popover
                              open={open}
                              anchorEl={anchorEl}
                              handlePopoverClose={this.handlePopoverClose}
                            >
                              Jone Doe
                            </Popover> */}
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ],
                        [
                          <Fragment>
                            <img
                              src={au_flag}
                              alt="au_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Australia, Canberra
                          </Fragment>,
                          <Fragment>
                            <img
                              src={gb_flag}
                              alt="gb_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            United Kingdom, London
                          </Fragment>,
                          <div className={classes.avatar}>
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_half</i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ],
                        [
                          <Fragment>
                            <img
                              src={gb_flag}
                              alt="gb_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            United Kingdom, London
                          </Fragment>,
                          <Fragment>
                            <img
                              src={ro_flag}
                              alt="ro_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Romania, Bucharest
                          </Fragment>,
                          <div className={classes.avatar}>
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ],
                        [
                          <Fragment>
                            <img
                              src={ro_flag}
                              alt="ro_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Romania, Bucharest
                          </Fragment>,
                          <Fragment>
                            <img
                              src={br_flag}
                              alt="br_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Brasil, Brasília
                          </Fragment>,
                          <div className={classes.avatar}>
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_half</i>
                            <i
                              className="material-icons"
                              style={{ marginRight: '-24px' }}
                            >
                              star_borderd
                            </i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ],
                        [
                          <Fragment>
                            <img
                              src={br2_flag}
                              alt="br_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Brasil, Brasília
                          </Fragment>,
                          <Fragment>
                            <img
                              src={la_flag}
                              alt="la_flag"
                              style={{ marginBottom: '2px' }}
                            />{' '}
                            Libya, Tripoli
                          </Fragment>,
                          <div className={classes.avatar}>
                            <Tooltip title="Jone Doe" placement="right">
                              <img
                                src={avatar}
                                alt="..."
                                className={classes.img}
                              />
                            </Tooltip>
                          </div>,
                          <div className="ltr">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_half</i>
                          </div>,
                          <Tooltip title="Send Request" placement="top">
                            <Button
                              color="rose"
                              customClass={classes.actionButton}
                            >
                              <i className="material-icons">send</i>
                            </Button>
                          </Tooltip>
                        ]
                      ]}
                    />
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(homeStyle)(Home);
