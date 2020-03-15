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

/**
 * Component for showing App Title, back navigation button and dark mode toggle button.
 * 
 * @component
 * @example
 * <AppTitle
 *    isDarkModeEnabled={ this.state.isDarkModeEnabled }
 *    handleDarkModeToggle={ this.handleDarkModeToggle } />
 */
class AppTitle extends Component {
  /**
   * Handle back button if clicked or enter pressed when focus on the
   * back button, it will back to the address book list view
   */
  handleBackButton() {
    this.props.setSelectedAddressBookIndex(null)
  }

  /**
   * Handle dark mode button if clicked or enter pressed when focus on the
   * dark mode button, it will change the theme apps by calling
   * handleDarModeToggle function on the parent component
   */
  handleDarkModeButton() {
    this.props.handleDarkModeToggle()
  }

  /**
   * Back button component that show on small device
   */
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