import actionCreator from './actionCreator'

export const createReading = (articleId) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    },
    body: JSON.stringify({articleId: articleId})
  }
  return (actionCreator('CREATE_READING', '/readings', options))()
}

export const getReadings = actionCreator('FETCH_READINGS', '/readings', {
  headers: {
    "Authorization": localStorage.getItem('token')
  }
})

export const archiveReading = (articleId) => {
  let options = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    }
  }
  return (actionCreator('ARCHIVE_READING', '/readings/'+articleId, options))()

}
