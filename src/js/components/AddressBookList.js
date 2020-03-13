import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddressBookItem from './AddressBookItem'
import AddressBookSearch from './AddressBookSearch'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks.length > 0 && state.addressBooks.map((item, index) => {
      return(
        <AddressBookItem key={ index } item={ item } index={ index } />
      )
    })
  }
}

class AddressBookList extends Component {
  render() {
    return(
      <div className="address-sidebar">
        <AddressBookSearch />
        <ul className="address-list" tabIndex="0">
          { this.props.isLoading ? 'Loading' : this.props.addressBooks }
        </ul>
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(AddressBookList)
