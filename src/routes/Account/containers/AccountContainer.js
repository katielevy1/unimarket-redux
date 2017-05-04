import React, { Component, PropTypes } from 'react'

// Components
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

// styles
import classes from './AccountContainer.scss'
import StockPhoto from 'static/User.png'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { pathToJS, isLoaded } = helpers

// Props decorators
@firebase()
@connect(
  // Map state to props
  ({firebase}) => ({
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
      </div>
    )
  }
}
