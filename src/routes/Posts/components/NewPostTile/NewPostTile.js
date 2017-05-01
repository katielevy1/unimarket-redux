import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'

import classes from './NewPostTile.scss'

const iconSize = '6rem'
const iconStyle = { width: iconSize, height: iconSize }
const color = '#979797'
const hoverColor = '#616161'

// Button to create a new post
export const NewPostTile = ({ onClick }) => (
  <Paper className={classes['container']} onClick={onClick}>
    <ContentAddCircle
      color={color}
      hoverColor={hoverColor}
      style={iconStyle}
    />
  </Paper>
)

NewPostTile.propTypes = {
  onClick: PropTypes.func
}

export default NewPostTile
