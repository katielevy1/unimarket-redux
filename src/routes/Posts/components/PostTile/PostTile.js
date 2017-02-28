import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'

import classes from './PostTile.scss'

export const PostTile = ({ post, onSelect }) => (
  <Paper key={`Post-${post.postKey}`} className={classes['container']}>
    <div className={classes['top']}>
      <span className={classes['name']} onClick={() => onSelect(post)}>
        {post.title}
      </span>
    </div>
    <span>
      {post.description}
    </span>
    <span className={classes['owner']}>
      By: {
        isObject(post.posterID)
          ? post.posterID
          : post.owner || 'No Owner'
      }
    </span>
  </Paper>
)

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PostTile
