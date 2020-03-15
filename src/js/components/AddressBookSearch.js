import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setSelectedAddressBookIndex,
  setAddressBookFiltered,
  toggleAdvanceSearch,
} from '../actions/index'
import IC_CLEAR from '../../image/icon/ic-close.svg'
import IC_FILTER from '../../image/icon/ic-filter.svg'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks,
    isAdvanceSearchModalShow: state.isAdvanceSearchModalShow,
    advanceSearch: state.advanceSearch,
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
    toggleAdvanceSearch: data => {
      return dispatch(toggleAdvanceSearch(data))
    },
  }
}

class AddressBookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearButton = this.handleClearButton.bind(this)
    this.handleFilterButton = this.handleFilterButton.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(this.props.advanceSearch !== prevProps.advanceSearch) {
      this.doSearch()
    }
  }

  buttonClearComponent() {
    return(
      <img
        className="button-clear"
        src={ IC_CLEAR }
        title="Clear search"
        tabIndex="0"
        alt=""
        onKeyPress={ (e) => e.key == 'Enter' && this.handleClearButton() }
        onClick={ this.handleClearButton } />
    )
  }

  badgeComponent() {
    const activeAdvanceSearch = Object.keys(this.props.advanceSearch).filter(val => {
      if(this.props.advanceSearch[val]) {
        return val
      }
    })

    if(activeAdvanceSearch.length < 2 && activeAdvanceSearch[0] == 'isFilterName') {
      return
    }

    return(
      activeAdvanceSearch.map((item, index) => {
        const text = item.replace('isFilter', '')

        return(
          <span key={ index } className="badge">{ text }</span>
        )
      })
    )
  }

  handleClearButton() {
    this.setState({ searchQuery: '' }, () => {
      this.doSearch()
    })
  }

  handleFilterButton() {
    this.props.toggleAdvanceSearch(!this.props.isAdvanceSearchModalShow)
  }

  handleChange(event) {
    const { value } = event.target

    this.setState({ searchQuery: value }, () => {
      this.doSearch()
    })
  }

  doSearch() {
    const {
      isFilterName,
      isFilterLocation,
      isFilterEmail,
      isFilterPhone,
    } = this.props.advanceSearch

    const addressBooksFiltered = this.props.addressBooks.filter(item => {
      const reg = new RegExp(this.state.searchQuery, 'gi')
      let nameResult = false
      let locationResult = false
      let emailResult = false
      let phoneResult = false

      if(isFilterName) {
        nameResult = reg.test(`${item.name?.first} ${item.name?.last}`)
      }
      if(isFilterLocation) {
        locationResult = reg.test(item.location?.street) || reg.test(item.location?.city) || reg.test(item.location?.state) || reg.test(item.location?.postcode)
      }
      if(isFilterEmail) {
        emailResult = reg.test(item.email)
      }
      if(isFilterPhone) {
        phoneResult = reg.test(item.cell)
      }

      if(nameResult || locationResult || emailResult || phoneResult) {
        return item
      }
    })

    this.props.getSearchQuery(this.state.searchQuery)
    this.props.setSelectedAddressBookIndex(null)
    this.props.setAddressBookFiltered(addressBooksFiltered)
  }

  render(){
    return(
      <div className="address-search">
        <div className="search-input">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value= { this.state.searchQuery }
            onChange={ this.handleChange } />
            { this.state.searchQuery !== '' && this.buttonClearComponent() }
        </div>
        <img
          className="button-filter"
          src={ IC_FILTER }
          title="Filter"
          tabIndex="0"
          alt=""
          onKeyPress={ (e) => e.key == 'Enter' && this.handleFilterButton() }
          onClick={ this.handleFilterButton } />
        <div className="search-advance">
          { this.badgeComponent() }
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressBookSearch)
