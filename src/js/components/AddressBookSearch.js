import React, { Component } from 'react'
import { debounce } from '../helpers/debounce'
class AddressBookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.doSearch = debounce(this.doSearch, 1000)
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({
      searchQuery: value
    })
    this.doSearch()
  }

  doSearch() {
    // call API
  }

  render(){
    return(
      <div className="address-search">
        <input
          type="text"
          placeholder="Search"
          onChange={ this.handleChange } />
      </div>
    )
  }
}

export default AddressBookSearch

