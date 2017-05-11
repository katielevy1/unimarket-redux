import React, { Component, PropTypes } from 'react'

import classes from './PictureUpload.scss'

export default class NewPostDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {file: '', imagePreviewUrl: ''}
  }

  _handleSubmit (e) {
    e.preventDefault()
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file)
  }

  _handleImageChange (e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    } else {
      $imagePreview = (<div className='previewText'>Please select an Image for Preview</div>)
    }

    return (
      <div className={classes['previewComponent']}>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className={classes['fileInput']}
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
          <button className={classes['submitButton']}
            type="submit"
            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className={classes['imgPreview']}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}
