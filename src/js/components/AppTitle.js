import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedAddressBookIndex } from '../actions/index'
import IC_BACK from '../../image/icon/ic-back.svg'
import IC_DARKMODE_ENABLED from '../../image/icon/ic-dark-enabled.svg'
import IC_DARKMODE_DISABLED from '../../image/icon/ic-dark-disabled.svg'

const mapStateToProps = state => {
  return {
    selectedAddressBookIndex: state.selectedAddressBookIndex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedAddressBookIndex: addressBookIndex => {
      return dispatch(setSelectedAddressBookIndex(addressBookIndex))
    },
  }
}

class AppTitle extends Component {
  handleBackButton() {
    this.props.setSelectedAddressBookIndex(null)
  }

  handleDarkModeButton() {
    this.props.handleDarkModeToggle()
  }

  backButtonComponent() {
    return(
      <img
        className="button-back"
        src={ IC_BACK }
        title="Back"
        tabIndex="0"
        alt=""
        onKeyPress={ (e) => e.key == 'Enter' && this.handleBackButton() }
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
          src={ this.props.isDarkModeEnabled ? IC_DARKMODE_ENABLED : IC_DARKMODE_DISABLED }
          title={ this.props.isDarkModeEnabled ? 'Turn off dark mode' : 'Turn on dark mode' }
          tabIndex="0"
          alt=""
          onKeyPress={ (e) => e.key == 'Enter' && this.handleDarkModeButton() }
          onClick={ () => this.handleDarkModeButton() } />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(AppTitle)