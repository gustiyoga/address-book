import {
  ADD_ADDRESS_BOOK,
  SET_SELECTED_ADDRESS_BOOK_INDEX,
  SET_ADDRESS_BOOK_FILTERED,
  SET_DARK_MODE,
} from '../constants/action-types'

const initialState = {
  addressBooks: [],
  addressBooksFiltered: [],
  selectedAddressBookIndex: null,
  isDarkModeEnabled: false,
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
  } else if (action.type === SET_DARK_MODE) {
    return Object.assign({}, state, {
      isDarkModeEnabled: action.payload
    })
  }

  return state
}

export default rootReducer
