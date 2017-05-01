import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'

import classes from './PostTile.scss'

// Tile to display post sent from PostsContainer
export const PostTile = ({ post, onSelect }) => (
  <Paper key={`Post-${post.postKey}`} className={classes['container']}>
    <div className={classes['top']}>
      <span className={classes['p']}>
        <img className={classes['picture']} id={post.postKey} />
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
  onSelect: PropTypes.func.isRequired
}

export default PostTile
