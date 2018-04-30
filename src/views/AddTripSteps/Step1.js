import React, { Component } from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Radio from 'material-ui/Radio';

// core components
import GridContainer from '../../components/Grid/GridContainer';
import ItemGrid from '../../components/Grid/ItemGrid';
import Snackbar from '../../components/Snackbar/Snackbar';
import I18n from '../../components/I18n/I18n';

import customCheckboxRadioSwitch from '../../assets/jss/customCheckboxRadioSwitch';

const style = {
  infoText: {
    fontWeight: '300',
    margin: '10px 0 30px',
    textAlign: 'center'
  },
  inputAdornmentIcon: {
    color: '#555'
  },
  choiche: {
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '20px'
  },
  ...customCheckboxRadioSwitch
};

class Step1 extends Component {
  state = { alertMessage: false };

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alertMessage: false });
  };

  isValidated = () => {
    if (this.props.travelBy !== '') {
      return true;
    } else {
      this.setState({ alertMessage: true });
    }
    return false;
  };

  render() {
    const { lng, classes, travelBy, handleStateChange } = this.props;
    return (
      <div className="animated fadeIn">
        <h4 className={classes.infoText}>
          {I18n.t('travellingVia.label', { lng })}
        </h4>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={12} lg={10}>
            <GridContainer>
              <ItemGrid xs={12} sm={6}>
                <div className={classes.choiche}>
                  <Radio
                    tabIndex={-1}
                    name="travel-type"
                    checked={travelBy === 'air'}
                    onClick={() => handleStateChange('travelBy', 'air')}
                    checkedIcon={
                      <i
                        className={'fas fa-plane ' + classes.iconCheckboxIcon}
                      />
                    }
                    icon={
                      <i
                        className={'fas fa-plane ' + classes.iconCheckboxIcon}
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      default: classes.iconCheckbox
                    }}
                  />
                  <h6 style={{ textTransform: 'capitalize' }}>
                    {I18n.t('air.label', { lng })}
                  </h6>
                </div>
              </ItemGrid>
              <ItemGrid xs={12} sm={6}>
                <div className={classes.choiche}>
                  <Radio
                    tabIndex={-1}
                    name="travel-type"
                    checked={travelBy === 'land'}
                    onClick={() => handleStateChange('travelBy', 'land')}
                    checkedIcon={
                      <i className={'fas fa-car ' + classes.iconCheckboxIcon} />
                    }
                    icon={
                      <i className={'fas fa-car ' + classes.iconCheckboxIcon} />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      default: classes.iconCheckbox
                    }}
                  />
                  <h6 style={{ textTransform: 'capitalize' }}>
                    {I18n.t('land.label', { lng })}
                  </h6>
                </div>
              </ItemGrid>
            </GridContainer>
          </ItemGrid>
        </GridContainer>
        <Snackbar
          autoHideDuration={2000}
          rtlActive={lng === 'ar'}
          onClose={this.handleAlertClose}
          place={lng === 'ar' ? 'br' : 'bl'}
          open={this.state.alertMessage}
          message={I18n.t('travellingVia.require', { lng })}
        />
      </div>
    );
  }
}

export default withStyles(style)(Step1);
