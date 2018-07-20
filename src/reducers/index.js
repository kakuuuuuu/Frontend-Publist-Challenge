
import {
  GET_DATA,
  ERROR
} from '../actions/';

const INITIAL_STATE = {data: []}


export default function data (state = INITIAL_STATE, action) {
  const { data } = action
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        data
      }
    case ERROR:
      return data
    default:
      return state
  }
}
