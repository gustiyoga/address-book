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
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    const valToBottom = e.target.scrollHeight - e.target.scrollTop
    const thresholdToBottom = 300

    if (valToBottom <= (e.target.clientHeight + thresholdToBottom)) {
      this.props.handleNextPage()
    }
  }

  addressBooksComponent() {
    return(
      this.props.addressBooksFiltered.map((item, index) => {
        return(
          <AddressBookItem key={ item.index } item={ item } index={ index } />
        )
      })
    )
  }

  render() {
    return(
      <div className="address-sidebar">
        <AddressBookSearch />
        <ul
          className="address-list"
          tabIndex="0"
          onScroll={ this.handleScroll }>
          { this.props.isLoading ? 'Loading' : this.addressBooksComponent() }
        </ul>
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
)(AddressBookList)
