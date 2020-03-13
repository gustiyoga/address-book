import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddressBookItem from './AddressBookItem'
import AddressBookSearch from './AddressBookSearch'

const mapStateToProps = state => {
  return {
    addressBooksFiltered: state.addressBooksFiltered,
  }
}

class AddressBookList extends Component {
  addressBooksComponent() {
    return(
      this.props.addressBooksFiltered.map((item, index) => {
        return(
          <AddressBookItem key={ item.email } item={ item } index={ index } />
        )
      })
    )
  }

  render() {
    return(
      <div className="address-sidebar">
        <AddressBookSearch />
        <ul className="address-list" tabIndex="0">
          { this.props.isLoading ? 'Loading' : this.addressBooksComponent() }
        </ul>
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
)(AddressBookList)
