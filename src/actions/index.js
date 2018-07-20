import * as API from '../helpers/api'

export const GET_DATA = 'GET_DATA'
export const ERROR = 'ERROR'

export const getData = (data) => dispatch => (
  API.getData(data)
    .then(response => {
      if(response.status !== 200){
        dispatch(receiveError({ status: response.status, error: response.statusText }))
      }
      return response.json()
    }).then(response => {
      dispatch(receiveData(response.data))
    })
)

export const receiveData = data => ({
  type: GET_DATA,
  data
})

export const receiveError = data => ({
  type: ERROR,
  data
})
