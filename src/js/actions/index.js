import { ADD_ADDRESS_BOOK } from '../constants/action-types'

export const addAddressBook = (payload) => {
  return {
    type: ADD_ADDRESS_BOOK,
    payload
  }
}
