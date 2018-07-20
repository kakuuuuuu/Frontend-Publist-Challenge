
import {
  GET_DATA,
  ERROR
} from '../actions/';

const INITIAL_STATE = {data: []}


export default function data (state = INITIAL_STATE, action) {
  const { data } = action
  switch(action.type) {
    // Loads data into state object
    case GET_DATA:
      return {
        ...state,
        data
      }
    // Loads error data into state object
    case ERROR:
      return data
    default:
      return state
  }
}
