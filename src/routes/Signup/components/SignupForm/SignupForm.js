import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import classes from './SignupForm.scss'
const buttonStyle = { width: '100%' }

 // redux-form
import { Field, reduxForm } from 'redux-form'
import TextField from '../../../../components/TextField'

// make sure email is .edu and is required
const validate = values => {
  const errors = {}
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/
  if (!values.email) {
    errors.email = 'Required'
  } else if (!re.test(values.email)) {
    errors.email = 'Invalid email'
  }
  if (!values.password) errors.password = 'Required'
  return errors
}

// Sign up for a new account
const SignupForm = ({ handleSubmit, submitting }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
        <Field name='firstName' component={TextField} label='First Name' />
      </div>
      <div>
        <Field name='lastName' component={TextField} label='Last Name' />
      </div>
      <div>
        <Field name='email' component={TextField} label='Email' />
      </div>
      <div>
        <Field
          name='password'
          component={TextField}
          label='Password'
          type='password'
        />
      </div>
      <div className={classes.submit}>
        <RaisedButton
          label='Signup'
          primary
          type='submit'
          disabled={submitting}
          style={buttonStyle}
        />
      </div>
    </form>
  )
}
SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'Signup',
  validate
})(SignupForm)
