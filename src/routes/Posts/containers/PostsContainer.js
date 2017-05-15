import React, { Component, PropTypes } from 'react'
import { map, filter, set, update, assign, merge } from 'lodash'
import { LIST_PATH } from 'constants/paths'

// Components
import PostTile from '../components/PostTile/PostTile'
import NewPostTile from '../components/NewPostTile/NewPostTile'
import NewPostDialog from '../components/NewPostDialog/NewPostDialog'
import CircularProgress from 'material-ui/CircularProgress'
import SearchForm from '../components/SearchForm/SearchForm'
 
import classes from './PostsContainer.scss'
import TextField from 'material-ui/TextField'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

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

// List of posts component
export default class Posts extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    newPostModal: false,
    addPostModal: false,
    value: 1,
    searchVal: '',
    pictureFile: null
  }

  static propTypes = {
    account: PropTypes.object,
    posts: PropTypes.object,
    firebase: PropTypes.object,
    auth: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object
  }

  // Method for submitting a new post
  newSubmit = (newPost) => {
    const { auth, account, firebase: { push, uniqueSet } } = this.props
    if (auth.uid) {
      newPost.posterID = auth.uid
      newPost.schoolId = account.schoolId
    } else {
      newPost.posterID = ''
      newPost.schoolId = ''
    }
    newPost.category = 'Books'
    newPost.flagged = 0
    newPost.time = parseInt(new Date().getTime())
    // TODO: change to true if has image
    newPost.hasImg = false
    // Create new post key
    var newPostKey = push('posts').key
    newPost.postKey = newPostKey
    // Add the post to firebase database
    uniqueSet('posts/' + newPostKey, newPost)
    .then(() => this.setState({ newPostModal: false }))
      .catch(err => {
        // TODO: Show Snackbar
        console.error('error creating new post', err)
      })
    // Upload post image to database
    if (this.state.pictureFile) {
      var pic = this.state.pictureFile
      set(pic, 'name', newPostKey + '.jpg')
      this.setState({
        pictureFile: pic
      })
      console.log(this.state.pictureFile)
      // const postImagesRef = this.props.firebase.storage().ref().child('images/posts/')
      // Commented out for right now
      // this.props.firebase.uploadFile('images/posts/', pic)
    }
    // Add post to User's list of Posts
    this.props.firebase.set('users/' + auth.uid + '/Posts/' + newPostKey, true)
  }

  // Delete a post
  deletePost = ({ name }) =>
    this.props.firebase.remove(`posts/${name}`)

  // Modal for creating a new post
  toggleModal = (name, post) => {
    let newState = {}
    newState[`${name}Modal`] = !this.state[`${name}Modal`]
    this.setState(newState)
  }
  handleChange = (event, index, value) => this.setState({value});
  // Change the searchVal state when submiting for search
  handleSearch = searchData => {
    this.setState({
      searchVal: searchData.value
    })
  }
  submitPicture = (file) => {
    console.log(file)
    this.setState({
      pictureFile: file
    })
  }
  render () {
    const { posts } = this.props
    const { account } = this.props
    var displayPosts
    const postImagesRef = this.props.firebase.storage().ref().child('images/posts/')
    // post Route is being loaded
    if (this.props.children) return this.props.children
    // Filter posts by the user's school
    if (account) {
      displayPosts = filter(posts, {'schoolId': account.schoolId})
    }
    // Filer posts by the category filter value
    if (this.state.value !== 1) {
      displayPosts = filter(displayPosts, {'category': this.state.value})
    }
    // Filter posts by the searched value
    if (this.state.searchVal !== '' && this.state.searchVal) {
      const searchFor = this.state.searchVal.toUpperCase()
      displayPosts = filter(displayPosts,
        function (item) {
          // Check if search value is in the post's title, description, or category
          return ((item.title.toUpperCase().indexOf(searchFor) > -1) |
            (item.description.toUpperCase().indexOf(searchFor) > -1) |
            (item.category.toUpperCase().indexOf(searchFor) > -1))
        })
    }
    const { newPostModal } = this.state
  // Map list of posts to get images for each post
    map(displayPosts, (post, key) => {
      // Check if there is an image for the post and the image has not already been loaded
      if (post.hasImg && post.postKey && !(document.getElementById(post.postKey))) {
        postImagesRef.child(post.postKey + '.jpg').getDownloadURL()
        .then((url) => {
          // Add the image for the post to the postTile img HTML tag
          if (url) {
            var img = document.getElementById(post.postKey)
            img.src = url
          }
        })
        .catch(function (e) {
          // no image not accessible for post
        })
      }
    })

    if (isEmpty(posts)) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )
    }
    return (
      <div className={classes.container}>
        <div className={classes.searchCategory}>
          <SearchForm onSubmit={this.handleSearch} />
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={false}
            style={{width: 200}}
          >
            <MenuItem value={1} primaryText="All" />
            <MenuItem value={'Books'} primaryText="Books" />
            <MenuItem value={'Clothing'} primaryText="Clothing" />
            <MenuItem value={'Electronics'} primaryText="Electronics" />
            <MenuItem value={'Home/Appliances'} primaryText="Home/Appliances" />
            <MenuItem value={'Sports/Outdoors'} primaryText="Sports/Outdoors" />
            <MenuItem value={'Misc'} primaryText="Misc" />
          </DropDownMenu>
        </div>
        {
          newPostModal &&
            <NewPostDialog
              open={newPostModal}
              onSubmit={this.newSubmit}
              submitPicture={this.submitPicture}
              onRequestClose={() => this.toggleModal('newPost')}
            />
        }
        <div className={classes.tiles}>
          <NewPostTile
            onClick={() => this.toggleModal('newPost')}
          />
          {
            !isEmpty(displayPosts) &&
               map(displayPosts, (item, key) => (
                 <PostTile
                   key={`${item.postkey}-Collab-${key}`}
                   post={item}
                   onCollabClick={this.collabClick}
                   onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                   onDelete={this.deletePost}
                 />
              ))
          }
        </div>
      </div>
    )
  }
}
