import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';

// @material-ui/icons
import Clear from 'material-ui-icons/Clear';
import Check from 'material-ui-icons/Check';

import I18n from '../I18n/I18n';
import customInputStyle from '../../assets/jss/components/customInputStyle';

function CustomInput2({ ...props }) {
  const {
    lng,
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    helpText,
    rtlActive
  } = props;

  var labelClasses = cx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });

  var formControlClasses = classes.formControl;
  if (formControlProps !== undefined) {
    formControlClasses += ' ' + formControlProps.className;
  }

  var underlineClasses = cx({
    [classes.underline]: true,
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error
  });
  if (inputProps !== undefined) {
    formControlClasses =
      formControlClasses +
      ' ' +
      cx({
        [classes.inputWithAdornment]:
          (inputProps.startAdornment !== undefined ||
            inputProps.endAdornment !== undefined) &&
          labelText === undefined
      });
  }
  if (inputProps !== undefined) {
    labelClasses =
      labelClasses +
      ' ' +
      cx({
        [classes.labelWithAdornment]: inputProps.endAdornment !== undefined
      });
  }
  const successClasses =
    classes.feedback +
    ' ' +
    classes.labelRootSuccess +
    ' ' +
    cx({
      [classes.feedbackRTL]: rtlActive,
      [classes.feedbackNoLabel]: labelText === undefined,
      [classes.feedbackAdorment]:
        inputProps !== undefined &&
        inputProps.endAdornment !== undefined &&
        !rtlActive,
      [classes.feedbackAdormentRTL]:
        inputProps !== undefined &&
        inputProps.endAdornment !== undefined &&
        rtlActive
    });
  const errorClasses =
    classes.feedback +
    ' ' +
    classes.labelRootError +
    ' ' +
    cx({
      [classes.feedbackRTL]: rtlActive,
      [classes.feedbackNoLabel]: labelText === undefined,
      [classes.feedbackAdorment]:
        inputProps !== undefined &&
        inputProps.endAdornment !== undefined &&
        !rtlActive,
      [classes.feedbackAdormentRTL]:
        inputProps !== undefined &&
        inputProps.endAdornment !== undefined &&
        rtlActive
    });
  const input =
    classes.input +
    ' ' +
    cx({
      [classes.inputRTL]: rtlActive,
      [classes.inputNoLabel]: labelText === undefined
    });
  const FormHelperTextRTL =
    classes.helpText + ' ' + cx({ [classes.inputRTL]: rtlActive });
  return (
    <FormControl
      {...formControlProps}
      className={formControlClasses}
      aria-describedby={id + '-text'}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={
            (rtlActive ? classes.labelRootRTL : classes.labelRoot) +
            labelClasses
          }
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: input,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={errorClasses} />
      ) : success ? (
        <Check className={successClasses} />
      ) : null}
      {helpText ? (
        <FormHelperText id={id + '-text'} className={FormHelperTextRTL}>
          {I18n.t(helpText, { lng })}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

CustomInput2.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  helpText: PropTypes.string,
  rtlActive: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput2);
