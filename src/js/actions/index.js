import {
  ADD_ADDRESS_BOOK,
import { ADD_ADDRESS_BOOK } from '../constants/action-types'
  SET_SELECTED_ADDRESS_BOOK_INDEX,
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

