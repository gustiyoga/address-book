import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addAddressBook,
  setAddressBookFiltered,
} from '../actions/index'
import { fetchData } from '../helpers/fetch'
import AppTitle from './AppTitle'
import AddressBookList from './AddressBookList'
import AddressBookDetail from './AddressBookDetail'

const mapStateToProps = state => {
  return {
    isDarkModeEnabled: state.isDarkModeEnabled,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAddressBook: addressBook => {
      return dispatch(addAddressBook(addressBook))
    },
    setAddressBookFiltered: addressBooksFiltered => {
      return dispatch(setAddressBookFiltered(addressBooksFiltered))
    },
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      page: 1,
    }
  }

  componentDidMount() {
    this.handleGetData()
  }

  async handleGetData() {
    const params = {
      page: this.state.page,
      results: 50,
      seed: 'yop',
      exc: 'gender,login,dob,registered,phone,nat'
    }
    this.setState({
      isLoading: true
    })
    const addressBooks = await fetchData('', {}, params)
    this.setState({
      isLoading: false
    })
    this.props.addAddressBook(addressBooks?.results || [])
    this.props.setAddressBookFiltered(addressBooks?.results || [])
  }

  render() {
    const isDarkModeEnabled = this.props.isDarkModeEnabled ? ' dark-mode' : ''

    return (
      <main className={`container${isDarkModeEnabled}`}>
        <AppTitle />
        <AddressBookList
          isLoading={ this.state.isLoading }
        />
        <AddressBookDetail />
      </main>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
