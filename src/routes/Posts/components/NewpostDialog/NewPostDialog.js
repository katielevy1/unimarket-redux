import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Field, reduxForm, submit } from 'redux-form'
import TextField from 'components/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import PictureUpload from '../PictureUpload'
import Dropzone from 'react-dropzone'

import classes from './NewPostDialog.scss'

const formName = 'newPost'
const validate = values => {
  const errors = {}
  if (!values.title) errors.title = 'Required'
  if (!values.price) errors.price = 'Required'
  if (!values.description) errors.description = 'Required'
  if (!values.category) errors.category = 'Required'
  return errors
}
@reduxForm({
  form: formName,
  validate
})

// Creating a new post
export default class NewPostDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    submitPicture: PropTypes.func.isRequired
  }

  state = {
    open: this.props.open || false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.open) {
      this.setState({
        open: true
      })
      setTimeout(() => {
        if (this.refs && this.refs.postNameField) {
          this.refs.postNameField.focus()
        }
      }, 500)
    }
  }

  // Close the dialog box
  close = () => {
    this.setState({
      open: false
    })
    if (this.props.onRequestClose) {
      this.props.onRequestClose()
    }
  }

  handleSubmitClick = (e) => {
    e.preventDefault()
    this.props.dispatch(submit(formName))
  }
  handleChange = (event, index, value) => this.setState({value});
  submitPicture = (file) => {
    console.log(file)
    this.props.submitPicture(file)
  }

  render () {
    const { open, error } = this.state
    const { handleSubmit } = this.props

    const actions = [
      <FlatButton
        label='Cancel'
        secondary
        onClick={this.close}
      />,
      <FlatButton
        label='Create'
        primary
        onClick={this.handleSubmitClick}
      />
    ]
    const categories = ['Books', 'Clothing', 'Electronics', 'Home/Appliances', 'Sports/Outdoors', 'Misc']

    return (
      <Dialog
        title='New Post'
        modal={false}
        actions={actions}
        open={open}
        autoScrollBodyContent={true}
        onRequestClose={this.close}
        contentClassName={classes['container']}>
        <div className={classes['inputs']}>
          <form onSubmit={handleSubmit}>
            <div className={classes['inputField']} >
              <p>Choose a Title</p>
              <Field
                name='title'
                component={TextField}
                error={error || null}
              />
            </div>
            <div className={classes['inputField']} >
              <p>Choose a Description</p>
              <Field
                name='description'
                component={TextField}
                error={error || null}
              />
            </div>
            <div className={classes['inputField']} >
              <p>Choose a Price</p>
              <Field
                name='price'
                component={TextField}
                error={error || null}
              />
            </div>
            <div className={classes['inputField']} >
              <p>Choose a Category</p>
              <Field name="category" component="select">
                <option value=""> </option>
                {categories.map(categoryOption => (
                  <option value={categoryOption} key={categoryOption}>
                    {categoryOption}
                  </option>
                ))}
              </Field>
            </div>
          </form>
          <div className={classes['inputPicture']} >
            <p>Choose a Picture (optional)</p>
            <PictureUpload submitPicture={this.submitPicture} />
          </div>
        </div>
      </Dialog>
    )
  }
}
