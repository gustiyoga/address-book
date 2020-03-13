import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedAddressBookIndex } from '../actions/index'
import IC_BACK from '../../image/icon/ic-back.svg'
import IC_DARKMODE_ENABLED from '../../image/icon/ic-dark-enabled.svg'
import IC_DARKMODE_DISABLED from '../../image/icon/ic-dark-disabled.svg'

const mapStateToProps = state => {
  return {
    selectedAddressBookIndex: state.selectedAddressBookIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedAddressBookIndex: addressBookIndex => {
      return dispatch(setSelectedAddressBookIndex(addressBookIndex))
    }
  }
}

class AppTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkModeEnabled: false,
    }
  }

  handleBackButton() {
    this.props.setSelectedAddressBookIndex(null)
  }

  handleDarkModeButton() {
    this.setState(prevState => {
      return{
        isDarkModeEnabled: !prevState.isDarkModeEnabled
      }
    })
  }

  backButtonComponent() {
    return(
      <img
        className="button-back"
        src={ IC_BACK }
        title="Back"
        onClick={ () => this.handleBackButton() } />
    )
  }

  render() {
    return(
      <div className="app-title">
        { this.props.selectedAddressBookIndex !== null && this.backButtonComponent() }

        <h1>
          Address Book App
        </h1>

        <img
          className="button-darkmode"
          src={ this.state.isDarkModeEnabled ? IC_DARKMODE_ENABLED : IC_DARKMODE_DISABLED }
          title={ this.state.isDarkModeEnabled ? 'Turn off dark mode' : 'Turn on dark mode' }
          onClick={ () => this.handleDarkModeButton() } />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(AppTitle)