export const createReading = (articleId) => {
  const token = localStorage.getItem('token')
  let options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": token
    },
    body: JSON.stringify({articleId: articleId})
  }
  return (dispatch) => {
    fetch('http://localhost:3000/readings', options)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'CREATE_READING',
          payload: json
        })
      })
  }
}

export const getReadings = () => {
  return (dispatch) => {
    dispatch({
      type: 'BEGIN_READINGS_LOAD'
    })
    fetch('http://localhost:3000/readings', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'LOAD_READINGS',
          payload: json ? json : []
        })
      })
  }

}

export const archiveReading = (readingId) => {
  let options = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json',
      "Authorization": localStorage.getItem('token')
    }
  }
  return (dispatch) => {
    fetch('http://localhost:3000/readings/'+readingId, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch({
          type: 'ARCHIVE_READING',
          payload: json
        })
      })
  }
}
