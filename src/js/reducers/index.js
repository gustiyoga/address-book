import {
  ADD_ADDRESS_BOOK,
  SET_SELECTED_ADDRESS_BOOK_INDEX,
  SET_ADDRESS_BOOK_FILTERED,
} from '../constants/action-types'

const initialState = {
  addressBooks: [],
  selectedAddressBookIndex: null,
}

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ADDRESS_BOOK) {
    return Object.assign({}, state, {
      addressBooks: state.addressBooks.concat(action.payload)
    })
  } else if (action.type === SET_SELECTED_ADDRESS_BOOK_INDEX) {
    return Object.assign({}, state, {
      selectedAddressBookIndex: action.payload
    })
  } else if (action.type === SET_ADDRESS_BOOK_FILTERED) {
    return Object.assign({}, state, {
      addressBooksFiltered: [].concat(action.payload)
    })
  }

  return state
}

export default rootReducer
