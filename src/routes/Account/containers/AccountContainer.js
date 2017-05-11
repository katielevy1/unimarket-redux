import React, { Component, PropTypes } from 'react'
import { map, filter, foreach } from 'lodash'

// Components
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import PostTile from 'routes/Posts/components/PostTile/PostTile'
import NewPostTile from 'routes/Posts/components/NewPostTile/NewPostTile'

// styles
import classes from './AccountContainer.scss'
import StockPhoto from 'static/User.png'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { dataToJS, pathToJS, isLoaded, isEmpty } = helpers

// Props decorators
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
  // Map state to props
  ({firebase}) => ({
    posts: dataToJS(firebase, 'posts'),
    authError: pathToJS(firebase, 'authError'),
    account: pathToJS(firebase, 'profile')
  })
)
// Account page to show picture and username and email
export default class Account extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static propTypes = {
    account: PropTypes.object,
    firebase: PropTypes.shape({
      logout: PropTypes.func.isRequired,
      uploadAvatar: PropTypes.func,
      updateAccount: PropTypes.func
    })
  }

  state = { modalOpen: false }

  handleLogout = () => {
    this.props.firebase
      .logout()
      .then(() => this.context.router.push('/'))
  }

  handleSave = () => {
    // TODO: Handle saving image and account data at the same time
    const account = {
      name: this.refs.name.getValue(),
      email: this.refs.email.getValue()
    }
    this.props.firebase
      .updateAccount(account)
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render () {
    const { account } = this.props
    const name = account ? account.firstName + ' ' + account.lastName : ''
    const email = account ? account.email : ''
    if (!isLoaded(account)) {
      return (
        <div className={classes['container']}>
          <CircularProgress />
        </div>
      )
    }

    const { posts } = this.props
    const myPosts = account ? account.Posts : null
    const postImagesRef = this.props.firebase.storage().ref().child('images/posts/')
    var displayPosts = []
    // Map list of posts to get images for each post
    foreach(myPosts, (val, key) => {
      let post = find(posts, {'postKey': posts.key})
      displayPosts.push(post)
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



    return (
      <div className={classes['container']}>
        <Paper className={classes['pane']}>
          <div className={classes['settings']}>
            <div className={classes['avatar']}>
              <img
                className={classes['avatar-current']}
                src={account && account.avatarUrl || StockPhoto}
                onClick={this.toggleModal}
              />
            </div>
            <div className={classes['meta']}>
              <h4>Profile</h4>
              <div className={classes['name']}>
                {name}
              </div>
              <div className={classes['email']}>
                {email}
              </div>
            </div>
          </div>
          <div className={classes['signout']}>
            <RaisedButton label='Sign Out' primary onTouchTap={this.handleLogout} />
          </ div>
        </Paper>
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
                   // onSelect={() => this.context.router.push(`${LIST_PATH}/${key}`)}
                   onDelete={this.deletePost}
                 />
              ))
          }
        </div>
      </div>
    )
  }
}
