import React, { Component, PropTypes } from 'react'

import classes from './PictureUpload.scss'

export default class PictureUpload extends Component {
  static propTypes = {
    submitPicture: PropTypes.func.isRequired
  }
  state = {
    file: '',
    imagePreviewUrl: ''
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
    this.props.submitPicture(file)
  }

  render () {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    }

    return (
      <div className={classes['previewComponent']}>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className={classes['fileInput']}
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
        </form>
        <div className={classes['imgPreview']}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}
