import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    addressBook: state.selectedAddressBookIndex !== null ? state.addressBooks[state.selectedAddressBookIndex] : {}
  }
}

class AddressBookDetail extends Component {
  emptyStateComponent() {
    return(
      <div className="empty-state">
        <img src={ EMPTY_STATE_IMAGE } width="200" alt="empty state address book detail" />
        <p>
          Please select a contact
        </p>
      </div>
    )
  }
  
  addressBookComponent() {
    const name = `${this.props.addressBook.name?.first} ${this.props.addressBook.name?.last}`
    const imgUrl = this.props.addressBook.picture?.large
  
    return(
      <div className="profile">
        <div className="profile-head">
          <img src={ imgUrl } alt={ name } width="128" />
          <h3>
            { name }
          </h3>
        </div>
      </div>
    )
  }

  render() {
    const data = this.props.addressBook ? this.addressBookComponent() : this.emptyStateComponent()

    return(
      <div className="address-detail">
        { data }
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookDetail)
