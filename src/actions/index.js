import * as API from '../helpers/api'

export const GET_DATA = 'GET_DATA'
export const ERROR = 'ERROR'

export const getData = (data) => dispatch => (
  // Calls API to fetch articles
  API.getData(data)
    .then(response => {
      // Validates successful response
      if(response.status !== 200){
        // Dispatches error action
        dispatch(receiveError({ status: response.status, error: response.statusText }))
      }
      return response.json()
    }).then(response => {
      // Dispatches receive data action
      dispatch(receiveData(response.data))
    })
)

// Loads articles to store
export const receiveData = data => ({
  type: GET_DATA,
  data
})

// Loads error to store
export const receiveError = data => ({
  type: ERROR,
  data
})
