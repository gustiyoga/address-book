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

/**
 * Component for showing address book list.
 * 
 * @component
 * @example
 * <AddressBookList
 *    isLoading=false
 *    handleNextPage={ this.handleNextPage }
 * />
 */
class AddressBookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.getSearchQuery = this.getSearchQuery.bind(this)
  }

  /**
   * Handle scroll of the list, if the list reach (bottom - threshold) and searchQuery is empty, 
   * call handleNextPage function on parent Component to fetch data on the next page
   * @param {event} e
   */
  handleScroll(e) {
    const valToBottom = e.target.scrollHeight - e.target.scrollTop
    const thresholdToBottom = 300

    if ((valToBottom <= (e.target.clientHeight + thresholdToBottom)) && this.state.searchQuery == '') {
      this.props.handleNextPage()
    }
  }

  /**
   * Get searchQuery from AddressBookSearch component and put on state
   * @param {string} searchQuery
   */
  getSearchQuery(searchQuery) {
    this.setState({  searchQuery })
  }

  /**
   * Empty state component that will show if no data in the list
   */
  emptyStateComponent() {
    return(
      <EmptyState image={ EMPTY_STATE_IMAGE } text="No data" />
    )
  }

  /**
   * Loading component that will show on first load while fetching data
   */
  loadingComponent() {
    return(
      <EmptyState image={ LOADING_IMAGE } text="Loading" />
    )
  }

  /**
   * AddressBooks component showing simple data of the each address book into list.
   * Will load on the dom if user scroll reach the threshold
   */
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
