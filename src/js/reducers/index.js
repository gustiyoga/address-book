import { ADD_ADDRESS_BOOK } from '../constants/action-types'

const initialState = {
  addressBooks: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ADDRESS_BOOK) {
    return Object.assign({}, state, {
      addressBooks: state.addressBooks.concat(action.payload)
    })
  }

  return state
}

export default rootReducer
