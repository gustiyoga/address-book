import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedAddressBookIndex } from '../actions/index'

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

/**
 * Component for showing address book item that show user photo, user name, and user location.
 * 
 * @component
 * @example
 * <AddressBookItem item={ addressBook } index="1"/>
 */
class AddressBookItem extends Component {
  /**
   * Set index of selected address books into redux state selectedAddressBookIndex
   */
  handleFocus() {
    this.props.setSelectedAddressBookIndex(this.props.index)
  }

  render() {
    const item = this.props.item
    const isActive = this.props.selectedAddressBookIndex === this.props.index ? ' active' : ''

    return(
      <li
        tabIndex="0"
        className={`address-item${isActive}`}
        onFocus={() => this.handleFocus()} >

        <img src={ item.picture?.thumbnail } width="82" alt={`${item.name?.first} ${item.name?.last}`} />
        <div>
          <p className="name">
            <strong>
              { `${item.name?.first} ${item.name?.last}` }
            </strong>
          </p>
          <p>
            { `${item.location?.city}, ${item.location?.state}, ${item.location?.country}` }
          </p>
        </div>

      </li>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressBookItem)
