import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setSelectedAddressBookIndex,
  setAddressBookFiltered,
} from '../actions/index'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedAddressBookIndex: index => {
      return dispatch(setSelectedAddressBookIndex(index))
    },
    setAddressBookFiltered: addressBooksFiltered => {
      return dispatch(setAddressBookFiltered(addressBooksFiltered))
    },
  }
}

class AddressBookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      isFilterName: true,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value } = event.target

    this.props.setSelectedAddressBookIndex(null)
    this.setState({
      searchQuery: value
    })

    // filter logic
    const addressBooksFiltered = this.props.addressBooks.filter(item => {
      const reg = new RegExp(value, 'gi')
      let nameQuery = false

      if(this.state.isFilterName) {
        nameQuery = reg.test(`${item.name?.first} ${item.name?.last}`)
      }

      if(nameQuery) {
        return item
      }
    })

    this.props.setAddressBookFiltered(addressBooksFiltered)
  }

  render(){
    return(
      <div className="address-search">
        <input
          type="text"
          placeholder="Search"
          value= { this.state.searchQuery }
          onChange={ this.handleChange } />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookSearch)
