import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'

import classes from './PostTile.scss'

export const PostTile = ({ post, onSelect, postPicture }) => (
  <Paper key={`Post-${post.postKey}`} className={classes['container']}>
    <div className={classes['top']}>
      <span className={classes['picture']}>
        <img src={postPicture} />
      </span>
    </div>
    <div className={classes['bottom']}>
      <br />
      <br />
      <br />
      <br />
      <br />
    <div className={classes['name']} onClick={() => onSelect(post)}>
      {post.title}
    </div>
    <div>
      {post.description}
    </div>
    </div>
  </Paper>
)

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  postPicture: PropTypes.string
}

export default PostTile
