import React, { Component, PropTypes } from 'react'

import classes from './PostContainer.scss'
import CircularProgress from 'material-ui/CircularProgress'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { isLoaded, dataToJS } = helpers

@firebase(
  // Get paths from firebase
  ({ params }) => ([
    `posts/${params.postname}`
  ])
)
@connect(
  // Map state to props
  ({ firebase }, { params }) => ({
    post: dataToJS(firebase, `posts/${params.postname}`)
  })
)
export default class Post extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static propTypes = {
    post: PropTypes.object,
    params: PropTypes.object.isRequired,
    children: PropTypes.object
  }

  render () {
    const { post } = this.props

    if (!isLoaded(post)) {
      return (
        <div className={classes['progress']}>
          <CircularProgress />
        </div>
      )
    }

    return (
      <div className={classes['container']}>
        <h2>Post Container</h2>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </div>
    )
  }
}
