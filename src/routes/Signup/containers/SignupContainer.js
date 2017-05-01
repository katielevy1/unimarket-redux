import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Components
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { LOGIN_PATH } from 'constants/paths'
import SignupForm from '../components/SignupForm/SignupForm'

import classes from './SignupContainer.scss'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS } = helpers

@firebase()
@connect(
  // Map state to props
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
    account: pathToJS(firebase, 'profile')
  })
)
// Logic behind signing up for a new account
export default class Signup extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    account: PropTypes.object,
    firebase: PropTypes.object,
    authError: PropTypes.object
  }

  state = {
    snackCanOpen: false,
    isLoading: false
  }

  // close bottom snackbar 
  handleRequestClose = () =>
    this.setState({
      snackCanOpen: false
    })

  // Create new user in firebase when selecting submit button
  handleSignup = (creds) => {
    this.setState({
      snackCanOpen: true,
      isLoading: true
    })
    const { createUser } = this.props.firebase
    const schoolId = creds.email.split('@')[1]
    createUser(creds, { Posts: {}, email: creds.email, firstName: creds.firstName, lastName: creds.lastName, provider: 'Firebase', schoolId: schoolId })
    .then((user) => {
      this.props.firebase.auth().currentUser.sendEmailVerification()
    })
    .then(() =>
      this.context.router.push(LOGIN_PATH)
    )
  }


  render () {
    const { account, authError } = this.props
    const { snackCanOpen } = this.state

    if (!isLoaded(account) && !authError) {
      return (
        <div className={classes['container']}>
          <div className={classes['progress']}>
            <CircularProgress mode='indeterminate' />
          </div>
        </div>
      )
    }

    return (
      <div className={classes['container']}>
        <Paper className={classes['panel']}>
          <SignupForm onSubmit={this.handleSignup} />
        </Paper>
        <div className={classes['or']}>
          or
        </div>
        <div className={classes['login']}>
          <span className={classes['login-label']}>
            Already have an account?
          </span>
          <Link className={classes['login-link']} to='/login'>
            Login
          </Link>
        </div>
        {
          isLoaded(authError) && !isEmpty(authError) && snackCanOpen &&
            <Snackbar
              open={isLoaded(authError) && !isEmpty(authError) && snackCanOpen}
              message={authError ? authError.message : 'Signup error'}
              action='close'
              autoHideDuration={3000}
            />
        }
      </div>
    )
  }
}
