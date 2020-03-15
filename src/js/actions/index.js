import {
  ADD_ADDRESS_BOOK,
  SET_SELECTED_ADDRESS_BOOK_INDEX,
  SET_ADDRESS_BOOK_FILTERED,
  SET_ADVANCE_SEARCH,
  TOGGLE_ADVANCE_SEARCH_MODAL,
} from '../constants/action-types'

/**
 * Add array of addressBook
 * @module addAddressBook
 * @param  {array} addressBooks array of object address book
 */
export const addAddressBook = (payload) => {
  return {
    type: ADD_ADDRESS_BOOK,
    payload
  }
}

/**
 * Set selected addressBook index
 * @module setSelectedAddressBookIndex
 * @param {number} selectedAddressBookIndex index of address book
 */
export const setSelectedAddressBookIndex = (payload) => {
  return {
    type: SET_SELECTED_ADDRESS_BOOK_INDEX,
    payload
  }
}

/**
 * Set array of filtered addressBooks
 * @module setAddressBookFiltered
 * @param {array} addressBooksFiltered array of object
 */
export const setAddressBookFiltered = (payload) => {
  return {
    type: SET_ADDRESS_BOOK_FILTERED,
    payload
  }
}

/**
 * Set advance search configuration
 * @module setAdvanceSearch
 * @param {object} advanceSearch
 */
export const setAdvanceSearch = (payload) => {
  return {
    type: SET_ADVANCE_SEARCH,
    payload
  }
}

/**
 * Toggle advance search modal
 * @module toggleAdvanceSearch
 * @param {boolean} isAdvanceSearchModalShow
 */
export const toggleAdvanceSearch = (payload) => {
  return {
    type: TOGGLE_ADVANCE_SEARCH_MODAL,
    payload
  }
}
