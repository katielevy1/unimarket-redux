import React, { Component, PropTypes } from 'react'
import { map, filter } from 'lodash'
import { LIST_PATH } from 'constants/paths'

// Components
import PostTile from '../components/PostTile/PostTile'
import NewPostTile from '../components/NewPostTile/NewPostTile'
import NewPostDialog from '../components/NewPostDialog/NewPostDialog'
import CircularProgress from 'material-ui/CircularProgress'

import classes from './PostsContainer.scss'
import TextField from 'material-ui/TextField'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { dataToJS, pathToJS, isLoaded, isEmpty } = helpers

// Decorators
@firebase(
  ({ params, auth }) => ([
    {
      path: 'posts',
      populates: [
        { child: 'owner', root: 'users' }
      ]
    }
    // 'posts#populate=owner:users' // string equivalent
  ])
)
@connect(
  ({ firebase }, { params }) => ({
    posts: dataToJS(firebase, 'posts'),
    auth: pathToJS(firebase, 'auth'),
    account: pathToJS(firebase, 'profile')
  })
)
export default class Posts extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    newPostModal: false,
    addPostModal: false
  }

  static propTypes = {
    account: PropTypes.object,
    posts: PropTypes.object,
    firebase: PropTypes.object,
    auth: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object
  }

  newSubmit = (newPost) => {
    const { auth, account, firebase: { push, set } } = this.props
    if (auth.uid) {
      newPost.posterID = auth.uid
      newPost.schoolId = account.schoolId
    } else {
      newPost.posterID = ''
      newPost.schoolId = ''
    }
    console.log('testing...')
    newPost.category = ''
    newPost.flagged = 0
    newPost.time = parseInt(new Date().getTime())
    newPost.hasImg = false
    newPost.postKey = ''
    // var newPostKey = firebase.database().ref().child('posts').push().key;
    push('posts', newPost)
    .then(() => this.setState({ newPostModal: false }))
      .catch(err => {
        // TODO: Show Snackbar
        console.error('error creating new post', err)
      })

/*
    push('posts', newPost)
    .then((newPostRef) =>
      console.log(newPostRef)
      console.log(newPostRef.key)
      set(newPostRef, {newPost, postKey: newPostRef.key})
    )*/


    //console.log(newPostKey)
    // update('/posts/' + newPostKey, {postKey: newPostKey})

    // firebase.database().ref().child('posts').push().key
    // var updates = {}
    // updates['/posts/' + newPostKey] = newPost
    // updates['/users/' + auth.uid + '/Posts/' + newPostKey] = true
    /*update('/users/' + auth.uid + '/Posts/', {newPostKey: true})
      .then(() => this.setState({ newPostModal: false }))
      .catch(err => {
        // TODO: Show Snackbar
        console.error('error creating new post', err)
      })*/
  }

  deletePost = ({ name }) =>
    this.props.firebase.remove(`posts/${name}`)

  toggleModal = (name, post) => {
    let newState = {}
    newState[`${name}Modal`] = !this.state[`${name}Modal`]
    this.setState(newState)
  }

  /*constructor (props) {
    super(props)
    const { posts } = this.props
    const { account } = this.props
    const postImagesRef = this.props.firebase.storage().ref().child('images/posts/')
    var schoolsPosts = []
    var displayPosts = []
    if (account) {
      schoolsPosts = filter(posts, {'schoolId': account.schoolId})
    }
    displayPosts = !isEmpty(schoolsPosts) &&
               map(schoolsPosts, (post, key) => {
                 if (post.hasImg) {
                   postImagesRef.child(post.postKey + '.jpg').getDownloadURL()
                  .then((url) => {
                    console.log(url)
                    return ({post: post, imageUri: url})
                  })
                  .catch(err => {
                    console.error('error getting downloadURL', err)
                  })
                 } else {
                   return ({post: post, imageUri: null})
                 }
               })
    this.state = {displayPostsState: displayPosts}
    console.log(displayPosts)
  }
  componentWillReceiveProps (nextProps) {
    const { posts } = nextProps
    const { account } = nextProps
    const postImagesRef = nextProps.firebase.storage().ref().child('images/posts/')
    var schoolsPosts = []
    var displayPosts = []
    if (account) {
      schoolsPosts = filter(posts, {'schoolId': account.schoolId})
    }
    displayPosts = !isEmpty(schoolsPosts) &&
               map(schoolsPosts, (post, key) => {
                 if (post.hasImg) {
                   postImagesRef.child(post.postKey + '.jpg').getDownloadURL()
                  .then((url) => {
                    console.log(url)
                    return ({post: post, imageUri: url})
                  })
                  .catch(err => {
                    console.error('error getting downloadURL', err)
                  })
                 } else {
                   return ({post: post, imageUri: null})
                 }
               })
    this.setState = ({displayPostsState: displayPosts})
    console.log(this.state.displayPostsState)
  }*/
  
  render () {
    const { posts } = this.props
    const { account } = this.props
    var displayPosts
    const postImagesRef = this.props.firebase.storage().ref().child('images/posts/')
    // post Route is being loaded
    if (this.props.children) return this.props.children
    if (account) {
      //displayPosts = filter(posts, {'schoolId': account.schoolId})
      displayPosts = posts
    }
    const { newPostModal } = this.state


    var postList = !isEmpty(displayPosts) &&
               map(displayPosts, (post, key) => {
                 var tile
                 if (post.hasImg) {
                   postImagesRef.child(post.postKey + '.jpg').getDownloadURL()
                  .then((url) => {
                    console.log(url)
                    //return (
                      tile = <PostTile
                        key={`${post.postkey}-Collab-${key}`}
                        post={post}
                        onCollabClick={this.collabClick}
                        onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                        onDelete={this.deletePost}
                        postPicture={url}
                      />
                   // )
                  })
                  .catch(err => {
                    console.error('error getting downloadURL', err)
                  })
                 } 
                  // return (
                     tile = 
                       <PostTile
                         key={`${post.postkey}-Collab-${key}`}
                         post={post}
                         onCollabClick={this.collabClick}
                         onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                         onDelete={this.deletePost}
                         postPicture={null}
                        />
                 //  )
                
                console.log(tile)
                return (tile)
               })
    if (isEmpty(postList)) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )
    }
    return (
      <div className={classes.container}>
        <TextField
          hintText="Search"
        />
        <div className={classes.submit}>
            <RaisedButton
              label='Seach'
              primary
              type='submit'
            />
        </ div>
        {
          newPostModal &&
            <NewPostDialog
              open={newPostModal}
              onSubmit={this.newSubmit}
              onRequestClose={() => this.toggleModal('newPost')}
            />
        }
        <div className={classes.tiles}>
          <NewPostTile
            onClick={() => this.toggleModal('newPost')}
          />
          {
            postList
            /*!isEmpty(displayPosts) &&
               map(displayPosts, (post, key) => (
                 <PostTile
                   key={`${post.postkey}-Collab-${key}`}
                   post={post}
                   onCollabClick={this.collabClick}
                   onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                   onDelete={this.deletePost}
                   postPicture={imageUri}
                 />
              ))*/
          }
        </div>
      </div>
    )
  }
}
