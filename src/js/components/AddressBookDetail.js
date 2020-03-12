import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks
  }
}

class AddressBookDetail extends Component {
  render() {
    return(
      <div className="address-detail">
        Address Detail
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookDetail)
