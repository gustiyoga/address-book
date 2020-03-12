import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAddressBook } from '../actions/index'
import { fetchData } from '../helpers/fetch'
import AddressBookList from './AddressBookList'
import AddressBookDetail from './AddressBookDetail'

const mapDispatchToProps = dispatch => {
  return {
    addAddressBook: addressBook => {
      return dispatch(addAddressBook(addressBook))
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    this.handleGetData()
  }

  async handleGetData() {
    const params = {
      page: 1,
      results: 10,
      seed: 'abc'
    }
    this.setState({
      isLoading: true
    })
    const addressBooks = await fetchData('', {}, params)
    this.setState({
      isLoading: false
    })
    this.props.addAddressBook(addressBooks?.results || [])

    return true
  }

  render() {
    return (
      <main className="container">
        <AddressBookList
          isLoading={ this.state.isLoading }
        />
        <AddressBookDetail />
      </main>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
