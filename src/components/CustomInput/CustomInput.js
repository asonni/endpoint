import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';

// material-ui-icons
import Clear from 'material-ui-icons/Clear';
import Check from 'material-ui-icons/Check';

import I18n from '../I18n/I18n';
import customInputStyle from '../../assets/jss/components/customInputStyle';

const CustomInput = props => {
  const {
    id,
    lng,
    classes,
    labelText,
    rtlActive,
    labelProps,
    inputProps,
    formControlProps,
    meta: { touched, error }
  } = props;

  const success = touched && !error ? true : null;

  let labelClasses = cx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success
  });

  let formControlClasses = classes.formControl;
  if (formControlProps !== undefined) {
    formControlClasses += ' ' + formControlProps.className;
  }

  var underlineClasses = cx({
    [classes.underline]: true,
    [classes.underlineError]: error && touched,
    [classes.underlineSuccess]: success
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
        inputProps !== undefined && inputProps.endAdornment !== undefined
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
        inputProps !== undefined && inputProps.endAdornment !== undefined
    });
  const input =
    classes.input +
    ' ' +
    cx({
      [classes.inputRTL]: rtlActive,
      [classes.inputNoLabel]: labelText === undefined
    });
  const FormHelperTextRTL = cx({ [classes.inputRTL]: rtlActive });
  return (
    <FormControl
      error={error && touched}
      {...formControlProps}
      className={formControlClasses}
      aria-describedby={id + '-text'}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
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
        {...props.input}
      />
      {error && touched ? (
        <Clear className={errorClasses} />
      ) : success ? (
        <Check className={successClasses} />
      ) : null}
      {touched && error ? (
        <FormHelperText id={id + '-text'} className={FormHelperTextRTL}>
          {I18n.t(error, { lng })}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  rtlActive: PropTypes.bool,
  labelText: PropTypes.node,
  helpText: PropTypes.string,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(customInputStyle)(CustomInput);
