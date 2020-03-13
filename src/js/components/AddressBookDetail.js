import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    addressBook: state.selectedAddressBookIndex !== null ? state.addressBooks[state.selectedAddressBookIndex] : {}
  }
}

class AddressBookDetail extends Component {
  render() {
    return(
      <div className="address-detail">
        { this.props.addressBook.name?.first }
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookDetail)
