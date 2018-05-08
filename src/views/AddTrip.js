import React, { Component } from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// core components
import Wizard from '../components/Wizard/Wizard';
import GridContainer from '../components/Grid/GridContainer';
import ItemGrid from '../components/Grid/ItemGrid';
import I18n from '../components/I18n/I18n';

import addTripStyle from '../assets/jss/views/addTripStyle';

import Step1 from './AddTripSteps/Step1';
import Step2 from './AddTripSteps/Step2';
import Step3 from './AddTripSteps/Step3';
import Step4 from './AddTripSteps/Step4';

class AddTrip extends Component {
  state = {
    notes: '',
    service: '',
    travelBy: '',
    firstHalfPrice: '',
    passengerPrice: '',
    vehicleDescription: '',
    additionalHalfPrice: '',
    startPoint: {
      placeId: '',
      meetingPoint: '',
      meetingTime: null,
      phone: '',
      time: null
    },
    endPoint: {
      placeId: '',
      meetingPoint: '',
      meetingTime: null,
      phone: '',
      time: null
    }
  };

  resetState = () => {
    this.setState({
      notes: '',
      firstHalfPrice: '',
      passengerPrice: '',
      vehicleDescription: '',
      additionalHalfPrice: ''
    });
  };

  backToProvidedServices = () => {
    this.setState({ service: '' });
  };

  handleStateChange = (stateName, stateValue) => {
    if (stateName === 'travelBy' && stateValue === 'air') {
      this.setState({ service: 'packageDelivery' });
    }
    this.setState({ [stateName]: stateValue });
  };

  handelStartPointStateChange = (stateName, stateValue) => {
    this.setState(prevState => ({
      ...prevState,
      startPoint: {
        ...prevState.startPoint,
        [stateName]: stateValue
      }
    }));
  };

  handelEndPointStateChange = (stateName, stateValue) => {
    this.setState(prevState => ({
      ...prevState,
      endPoint: {
        ...prevState.endPoint,
        [stateName]: stateValue
      }
    }));
  };

  finishButtonClick = () => {
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    const { lng, classes } = this.props;
    return (
      <div className={`${classes.content} animated fadeIn`}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <ItemGrid xs={12} sm={8}>
              <Wizard
                lng={lng}
                validate
                steps={[
                  {
                    stepName: 'travellingVia.label',
                    stepComponent: Step1,
                    stepId: 'travellingVia'
                  },
                  {
                    stepName: 'tripDetails.label',
                    stepComponent: Step2,
                    stepId: 'tripDetails'
                  },
                  {
                    stepName: 'startPoint.label',
                    stepComponent: Step3,
                    stepId: 'startPoint'
                  },
                  {
                    stepName: 'endPoint.label',
                    stepComponent: Step4,
                    stepId: 'endPoint'
                  }
                ]}
                title={I18n.t('addNewTrip.label', { lng })}
                subtitle={I18n.t(
                  'thisInformationWillLetUsKnowMoreAboutYourNewTrip.label',
                  { lng }
                )}
                notes={this.state.notes}
                nextButtonText="next.label"
                service={this.state.service}
                resetState={this.resetState}
                travelBy={this.state.travelBy}
                finishButtonText="finish.label"
                previousButtonText="previous.label"
                finishButtonClick={this.finishButtonClick}
                firstHalfPrice={this.state.firstHalfPrice}
                passengerPrice={this.state.passengerPrice}
                handleStateChange={this.handleStateChange}
                vehicleDescription={this.state.vehicleDescription}
                additionalHalfPrice={this.state.additionalHalfPrice}
                backToProvidedServices={this.backToProvidedServices}
                handelEndPointStateChange={this.handelEndPointStateChange}
                handelStartPointStateChange={this.handelStartPointStateChange}
              />
            </ItemGrid>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(addTripStyle)(AddTrip);
