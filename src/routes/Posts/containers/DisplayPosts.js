import React, { PropTypes } from 'react'
import { firebase, helpers } from 'react-redux-firebase'
const { dataToJS, pathToJS, isLoaded, isEmpty } = helpers

import { map, filter } from 'lodash'
import classes from './PostsContainer.scss'

import { LIST_PATH } from 'constants/paths'

import PostTile from '../components/PostTile/PostTile'

export const PostList = ({ displayPosts }) => (
  !isEmpty(displayPosts) &&
               map(displayPosts, (item, key) => (
                 <PostTile
                   key={`${item.post.postkey}-Collab-${key}`}
                   post={item.post}
                   onCollabClick={this.collabClick}
                   onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                   onDelete={this.deletePost}
                   postPicture={item.imageUri}
                 />
              ))
)

PostList.propTypes = {
  displayPosts: PropTypes.object.isRequired
}

export default PostList
