import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'

import classes from './PostTile.scss'

export const PostTile = ({ post, onSelect }) => (
  <Paper key={`Post-${post.postKey}`} className={classes['container']}>
    <div className={classes['top']}>
      <span className={classes['picture']}>
        {post.picture}
      </span>
      <span className={classes['name']} onClick={() => onSelect(post)}>
        {post.title}
      </span>
    </div>
    <span>
      {post.description}
    </span>
  </Paper>
)

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PostTile
