import {
  ADD_ADDRESS_BOOK,
  SET_SELECTED_ADDRESS_BOOK_INDEX,
  SET_ADDRESS_BOOK_FILTERED,
  SET_DARK_MODE,
} from '../constants/action-types'

export const addAddressBook = (payload) => {
  return {
    type: ADD_ADDRESS_BOOK,
    payload
  }
}

export const setSelectedAddressBookIndex = (payload) => {
  return {
    type: SET_SELECTED_ADDRESS_BOOK_INDEX,
    payload
  }
}

export const setAddressBookFiltered = (payload) => {
  return {
    type: SET_ADDRESS_BOOK_FILTERED,
    payload
  }
}

export const setDarkMode = (payload) => {
  return {
    type: SET_DARK_MODE,
    payload
  }
}
