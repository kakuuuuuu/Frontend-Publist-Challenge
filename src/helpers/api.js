const API = "https://publist.ai/api/v2"

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImlhdCI6MTUzMjAzNjIyMCwiZXhwIjoxNTMzMjQ1ODIwfQ.qkXUcYou8mVLW6oOX9mTJg91omQtwWJnPa_ziz3iRzA"

const headers = {
  'Authorization': token,
  'content-type': 'application/json',
}

export const getData = (data) =>
  fetch(`${API}/jobs.frontend`, { method: 'POST', mode: 'cors', headers, body: JSON.stringify(data) })
