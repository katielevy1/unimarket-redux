import React, { PropTypes } from 'react'
import MaterialSelectField from 'material-ui/SelectField'

// Select field for forms like creating a new post
export const SelectField = ({ input, label, meta: { touched, error }, children }) => (
  <MaterialSelectField floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    />
)

SelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.object
}

export default SelectField
