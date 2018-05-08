import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card';

// core components
import Button from '../CustomButtons/Button';
import I18n from '../I18n/I18n';

import wizardStyle from '../../assets/jss/components/wizardStyle';

class Wizard extends Component {
  constructor(props) {
    super(props);
    let width;
    if (props.steps.length === 1) {
      width = '100%';
    } else {
      if (window.innerWidth < 600) {
        if (props.steps.length !== 3) {
          width = '50%';
        } else {
          width = 100 / 3 + '%';
        }
      } else {
        if (props.steps.length === 2) {
          width = '50%';
        } else {
          width = 100 / 3 + '%';
        }
      }
    }
    this.state = {
      width,
      currentStep: 0,
      color: props.color,
      nextButton: props.steps.length > 1 ? true : false,
      previousButton: false,
      finishButton: props.steps.length === 1 ? true : false,
      movingTabStyle: {
        transition: 'transform 0s'
      }
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.refreshAnimation(this.state.currentStep);
    if (this.props.travelBy !== nextProps.travelBy) {
      this.setState({
        currentStep: 1,
        nextButton: true,
        previousButton: true,
        finishButton: false
      });
      this.refreshAnimation(1);
    }
  }
  componentDidMount() {
    this.refreshAnimation(0);
    window.addEventListener('resize', this.updateWidth());
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth(), true);
  }
  updateWidth = () => {
    this.refreshAnimation(this.state.currentStep);
  };
  navigationStepChange = key => {
    if (this.props.steps) {
      let validationState = true;
      if (key > this.state.currentStep) {
        for (let i = this.state.currentStep; i < key; i++) {
          if (
            this[this.props.steps[i].stepId].isValidated !== undefined &&
            this[this.props.steps[i].stepId].isValidated() === false
          ) {
            validationState = false;
            break;
          }
        }
      }
      if (validationState) {
        this.setState({
          currentStep: key,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false
        });
        this.refreshAnimation(key);
      }
    }
  };
  nextButtonClick = () => {
    if (
      (this.props.validate &&
        ((this[this.props.steps[this.state.currentStep].stepId].isValidated !==
          undefined &&
          this[
            this.props.steps[this.state.currentStep].stepId
          ].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated ===
            undefined)) ||
      this.props.validate === undefined
    ) {
      const key = this.state.currentStep + 1;
      this.setState({
        currentStep: key,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false
      });
      this.refreshAnimation(key);
    }
  };
  previousButtonClick = () => {
    const key = this.state.currentStep - 1;
    if (key >= 0) {
      this.setState({
        currentStep: key,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false
      });
      this.refreshAnimation(key);
      this[this.props.steps[1].stepId].resetState();
      // this.props.backToProvidedServices();
    }
  };
  finishButtonClick = () => {
    if (
      this.props.validate &&
      ((this[this.props.steps[this.state.currentStep].stepId].isValidated !==
        undefined &&
        this[this.props.steps[this.state.currentStep].stepId].isValidated()) ||
        this[this.props.steps[this.state.currentStep].stepId].isValidated ===
          undefined) &&
      this.props.finishButtonClick !== undefined
    ) {
      this.props.finishButtonClick();
    }
  };
  refreshAnimation = index => {
    const total = this.props.steps.length;
    let li_width = 100 / total;
    const total_steps = this.props.steps.length;
    let move_distance = this.refs.wizard.children[0].offsetWidth / total_steps;
    let index_temp = index;
    let vertical_level = 0;
    const mobile_device = window.innerWidth < 600 && total > 3;
    if (mobile_device) {
      move_distance = this.refs.wizard.children[0].offsetWidth / 2;
      index_temp = index % 2;
      li_width = 50;
    }
    this.setState({ width: li_width + '%' });
    const step_width = move_distance;
    move_distance = move_distance * index_temp;
    const current = index + 1;
    if (current === 1 || (mobile_device === true && index % 2 === 0)) {
      move_distance -= 8;
    } else if (
      current === total_steps ||
      (mobile_device === true && index % 2 === 1)
    ) {
      move_distance += 8;
    }
    if (mobile_device) {
      vertical_level = parseInt(index / 2, 10);
      vertical_level = vertical_level * 38;
    }
    const movingTabStyle = {
      width: step_width,
      transform: `translate3d( ${
        this.props.lng === 'ar' ? -move_distance : move_distance
      }px,  ${vertical_level}px, 0)`,
      transition: 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
    };
    this.setState({ movingTabStyle });
  };
  render() {
    const { lng, classes, title, subtitle, color, steps } = this.props;
    return (
      <div className={classes.wizardContainer} ref="wizard">
        <Card className={classes.card}>
          <div className={classes.wizardHeader}>
            <h3 className={classes.title}>{title}</h3>
            <h5 className={classes.subtitle}>{subtitle}</h5>
          </div>
          <div className={classes.wizardNavigation}>
            <ul className={lng === 'ar' ? classes.navRTL : classes.nav}>
              {steps.map((prop, key) => {
                return (
                  <li
                    key={key}
                    className={lng === 'ar' ? classes.stepsRTL : classes.steps}
                    style={{ width: this.state.width }}
                  >
                    <a
                      className={classes.stepsAnchor}
                      onClick={() => this.navigationStepChange(key)}
                    >
                      {I18n.t(prop.stepName, { lng })}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className={
                (lng === 'ar' ? classes.movingTabRTL : classes.movingTab) +
                ' ' +
                classes[color]
              }
              style={this.state.movingTabStyle}
            >
              {I18n.t(steps[this.state.currentStep].stepName, { lng })}
            </div>
          </div>
          <div className={classes.content}>
            {steps.map((prop, key) => {
              const stepContentClasses = cx({
                [classes.stepContentActive]: this.state.currentStep === key,
                [classes.stepContent]: this.state.currentStep !== key
              });
              return (
                <div className={stepContentClasses} key={key}>
                  {/* <prop.stepComponent innerRef={prop.stepId}/> */}
                  <prop.stepComponent
                    lng={this.props.lng}
                    notes={this.props.notes}
                    service={this.props.service}
                    travelBy={this.props.travelBy}
                    firstHalfPrice={this.props.firstHalfPrice}
                    passengerPrice={this.props.passengerPrice}
                    innerRef={node => (this[prop.stepId] = node)}
                    handleStateChange={this.props.handleStateChange}
                    vehicleDescription={this.props.vehicleDescription}
                    additionalHalfPrice={this.props.additionalHalfPrice}
                    backToProvidedServices={this.props.backToProvidedServices}
                    handelEndPointStateChange={
                      this.props.handelEndPointStateChange
                    }
                    handelStartPointStateChange={
                      this.props.handelStartPointStateChange
                    }
                    nextButtonClick={this.nextButtonClick}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            <div className={lng === 'ar' ? classes.right : classes.left}>
              {this.state.previousButton ? (
                <Button
                  customClass={this.props.previousButtonClasses}
                  onClick={this.previousButtonClick}
                >
                  {I18n.t(this.props.previousButtonText, { lng })}
                </Button>
              ) : null}
            </div>
            <div className={lng === 'ar' ? classes.left : classes.right}>
              {this.state.nextButton ? (
                <Button
                  color="rose"
                  customClass={this.props.nextButtonClasses}
                  onClick={this.nextButtonClick}
                >
                  {I18n.t(this.props.nextButtonText, { lng })}
                </Button>
              ) : null}
              {this.state.finishButton ? (
                <Button
                  color="rose"
                  customClass={this.finishButtonClasses}
                  onClick={this.finishButtonClick}
                >
                  {I18n.t(this.props.finishButtonText, { lng })}
                </Button>
              ) : null}
            </div>
            <div className={classes.clearfix} />
          </div>
        </Card>
      </div>
    );
  }
}

Wizard.defaultProps = {
  color: 'rose',
  title: 'Here should go your title',
  subtitle: 'And this would be your subtitle',
  previousButtonText: 'Previous',
  previousButtonClasses: '',
  nextButtonClasses: '',
  nextButtonText: 'Next',
  finishButtonClasses: '',
  finishButtonText: 'Finish'
};

Wizard.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepComponent: PropTypes.func.isRequired,
      stepId: PropTypes.string.isRequired
    })
  ).isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose'
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  previousButtonClasses: PropTypes.string,
  previousButtonText: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  nextButtonText: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  finishButtonText: PropTypes.string,
  finishButtonClick: PropTypes.func,
  validate: PropTypes.bool
};

export default withStyles(wizardStyle)(Wizard);
