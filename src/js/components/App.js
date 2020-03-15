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
import AdvanceSearchModal from './AdvanceSearchModal'

const mapStateToProps = state => {
  return {
    addressBooks: state.addressBooks,
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
      isHandleNextPage: false,
      isDarkModeEnabled: false,
      params: {
        page: 1,
        results: 50,
        seed: 'yop',
        exc: 'gender,login,dob,registered,phone,nat'
      }
    }

    this.handleNextPage = this.handleNextPage.bind(this)
    this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this)
  }

  componentDidMount() {
    this.handleInitData()
  }

  handleDarkModeToggle() {
    this.setState(prevState => ({
      isDarkModeEnabled: !prevState.isDarkModeEnabled
    }))
  }

  async handleNextPage() {
    if(!this.state.isHandleNextPage && this.props.addressBooks.length < 1000) {
      await this.setState(prevState => ({
        isHandleNextPage: true,
        params: {
          ...prevState.params,
          page: prevState.params.page + 1
        }
      }))
  
      const addressBooks = await fetchData('', {}, this.state.params)
      await this.props.addAddressBook(addressBooks?.results || [])
      this.props.setAddressBookFiltered(this.props.addressBooks)
      this.setState({ isHandleNextPage: false })
    }
  }

  async handleInitData() {
    this.setState({ isLoading: true })
    const addressBooks = await fetchData('', {}, this.state.params)
    this.setState({ isLoading: false })

    await this.props.addAddressBook(addressBooks?.results || [])
    this.props.setAddressBookFiltered(this.props.addressBooks)
  }

  render() {
    const isDarkModeEnabled = this.state.isDarkModeEnabled ? ' dark-mode' : ''

    return (
      <main className={`container${isDarkModeEnabled}`}>
        <AppTitle
          isDarkModeEnabled={ this.state.isDarkModeEnabled }
          handleDarkModeToggle={ this.handleDarkModeToggle } />
        <AddressBookList
          isLoading={ this.state.isLoading }
          handleNextPage={ this.handleNextPage }
        />
        <AddressBookDetail />

        <AdvanceSearchModal />
      </main>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
