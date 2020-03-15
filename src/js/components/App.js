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

/**
 * Main component.
 * 
 * @component
 * @example
 * <App />
 * @hideconstructor
 */
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

  /**
   * Fetch data on init by calling handleInitData function
   */
  componentDidMount() {
    this.handleInitData()
  }

  /**
   * Handle dark mode button that called from AppTitle component,
   * update isDarkModeEnabled state with oposite of current state
   */
  handleDarkModeToggle() {
    this.setState(prevState => ({
      isDarkModeEnabled: !prevState.isDarkModeEnabled
    }))
  }

  /**
   * Handle next page when user reach bottom of the list, fetch data
   * on the next page and add it into addressBooks state,
   * clone new addressBooks data into addressBooksFiltered state
   * 
   * @async
   */
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

  /**
   * Handle init data, show loading state while fetching data from API
   * Put the data into addressBooks state and clone it into addressBooksFiltered state
   * 
   * @async
   */
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
