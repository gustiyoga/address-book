import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import AddressBookItem from './AddressBookItem'
import AddressBookSearch from './AddressBookSearch'
import EmptyState from './EmptyState'
import EMPTY_STATE_IMAGE from '../../image/placeholder/empty-results.svg'
import LOADING_IMAGE from '../../image/placeholder/loading.svg'

const mapStateToProps = state => {
  return {
    addressBooksFiltered: state.addressBooksFiltered,
  }
}

class AddressBookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.getSearchQuery = this.getSearchQuery.bind(this)
  }

  handleScroll(e) {
    const valToBottom = e.target.scrollHeight - e.target.scrollTop
    const thresholdToBottom = 300

    if ((valToBottom <= (e.target.clientHeight + thresholdToBottom)) && this.state.searchQuery == '') {
      this.props.handleNextPage()
    }
  }

  getSearchQuery(searchQuery) {
    this.setState({  searchQuery })
  }

  emptyStateComponent() {
    return(
      <EmptyState image={ EMPTY_STATE_IMAGE } text="No data" />
    )
  }

  loadingComponent() {
    return(
      <EmptyState image={ LOADING_IMAGE } text="Loading" />
    )
  }

  addressBooksComponent() {
    return(
      this.props.addressBooksFiltered.map((item, index) => {
        return(
          <LazyLoad
            key={ item.index } 
            height={ 77.03 }
            offset={ 500 }
            overflow >
            <AddressBookItem item={ item } index={ index } />
          </LazyLoad>
        )
      })
    )
  }

  render() {
    return(
      <div className="address-sidebar">
        <AddressBookSearch
          getSearchQuery={ this.getSearchQuery } />
        <ul
          className="address-list"
          tabIndex="0"
          onScroll={ this.handleScroll }>
          { this.props.isLoading ? this.loadingComponent() : this.addressBooksComponent() }
          { !this.props.isLoading && this.props.addressBooksFiltered.length === 0 && this.emptyStateComponent() }
        </ul>
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
)(AddressBookList)
