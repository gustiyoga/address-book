import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddressBookItem from './AddressBookItem'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks.map((item, index) => {
      return(
        <AddressBookItem key={ index } item={ item } />
      )
    })
  }
}

class AddressBookList extends Component {
  render() {
    return(
      <div className="address-list">
        { this.props.isLoading ? 'Loading' : this.props.addressBooks }
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookList)
