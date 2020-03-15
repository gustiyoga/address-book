import {
  ADD_ADDRESS_BOOK,
  SET_SELECTED_ADDRESS_BOOK_INDEX,
  SET_ADDRESS_BOOK_FILTERED,
  SET_ADVANCE_SEARCH,
  TOGGLE_ADVANCE_SEARCH_MODAL,
} from '../constants/action-types'

const initialState = {
  addressBooks: [],
  addressBooksFiltered: [],
  selectedAddressBookIndex: null,
  isAdvanceSearchModalShow: false,
  advanceSearch: {
    isFilterName: true,
    isFilterLocation: false,
    isFilterEmail: false,
    isFilterPhone: false,
  }
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ADDRESS_BOOK:
      const addressBooks = action.payload.map((addressBook, index) => {
        return {
          ...addressBook,
          index: `${addressBook.email}${index}`
        }
      })

      return {
        ...state,
        addressBooks: state.addressBooks.concat(addressBooks),
      }
    case SET_SELECTED_ADDRESS_BOOK_INDEX:
      return {
        ...state,
        selectedAddressBookIndex: action.payload,
      }
    case SET_ADDRESS_BOOK_FILTERED:
      return {
        ...state,
        addressBooksFiltered: [].concat(action.payload),
      }
    case SET_ADVANCE_SEARCH:
      return {
        ...state,
        advanceSearch: Object.assign({}, action.payload),
      }
    case TOGGLE_ADVANCE_SEARCH_MODAL:
      return {
        ...state,
        isAdvanceSearchModalShow: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
