import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { Field, reduxForm } from 'redux-form'
import TextField from 'components/TextField'

import classes from './SearchForm.scss'

const validate = values => {
  const errors = {}
  if (!values.value) errors.email = 'Required'
  return errors
}

export const SearchForm = ({ handleSubmit, submitting }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <div>
      <Field
        name='value'
        component={TextField}
        label='What are you looking for?'
      />
    </div>
    <div className={classes.submit}>
      <RaisedButton
        label='Search'
        primary
        type='submit'
        disabled={submitting}
      />
    </div>

  </form>
)

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'Search',
  validate
})(SearchForm)
