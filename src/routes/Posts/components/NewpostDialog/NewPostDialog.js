import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Field, reduxForm, submit } from 'redux-form'
import TextField from 'components/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import classes from './NewPostDialog.scss'

const formName = 'newPost'
const validate = values => {
  const errors = {}
  if (!values.name) errors.name = 'Required'
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
    dispatch: PropTypes.func.isRequired
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

    return (
      <Dialog
        title='New Post'
        modal={false}
        actions={actions}
        open={open}
        onRequestClose={this.close}
        contentClassName={classes['container']}>
        <div className={classes['inputs']}>
          <form onSubmit={handleSubmit}>
            <Field
              name='title'
              component={TextField}
              error={error || null}
              label='Post Title'
            />
            <br /> 
            <Field
              name='description'
              component={TextField}
              error={error || null}
              label='Post Description'
            />
            <p>Choose a category</p>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth={false}
              style={{width: 300}}
            >
              <MenuItem value={1} primaryText="All" />
              <MenuItem value={'Books'} primaryText="Books" />
              <MenuItem value={'Clothing'} primaryText="Clothing" />
              <MenuItem value={'Electronics'} primaryText="Electronics" />
              <MenuItem value={'Home/Appliances'} primaryText="Home/Appliances" />
              <MenuItem value={'Sports/Outdoors'} primaryText="Sports/Outdoors" />
              <MenuItem value={'Misc'} primaryText="Misc" />
            </DropDownMenu>
          </form>
        </div>
      </Dialog>
    )
  }
}
