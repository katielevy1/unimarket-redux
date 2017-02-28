import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'

import classes from './PostTile.scss'

export const PostTile = ({ post, onSelect }) => (
  <Paper key={`Post-${post.name}`} className={classes['container']}>
    <div className={classes['top']}>
      <span className={classes['name']} onClick={() => onSelect(post)}>
        {post.name}
      </span>
    </div>
    <span className={classes['owner']}>
      {
        isObject(post.owner)
          ? post.owner.displayName
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
